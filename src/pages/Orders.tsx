import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Package, Clock, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Order {
  id: string;
  order_number: string;
  product_name: string;
  product_price: number;
  quantity: number;
  full_name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  payment_status: string;
  order_status: string;
  created_at: string;
}

const Orders = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  const fetchOrders = async () => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelOrder = async (orderId: string) => {
    try {
      const { error } = await supabase
        .from('orders')
        .update({ order_status: 'cancelled' })
        .eq('id', orderId)
        .eq('user_id', user?.id);

      if (error) throw error;

      toast({
        title: 'Order Cancelled',
        description: 'Your order has been cancelled successfully.',
      });

      fetchOrders();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to cancel order. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'confirmed':
      case 'shipped':
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'cancelled':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Package className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'text-yellow-500 bg-yellow-500/10';
      case 'confirmed':
      case 'shipped':
      case 'delivered':
        return 'text-green-500 bg-green-500/10';
      case 'cancelled':
        return 'text-red-500 bg-red-500/10';
      default:
        return 'text-muted-foreground bg-secondary';
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2 mb-8 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>

            <h1 className="font-display text-3xl md:text-4xl font-bold mb-8">My Orders</h1>

            {orders.length === 0 ? (
              <div className="text-center py-16">
                <Package className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h2 className="font-display text-xl font-semibold mb-2">No orders yet</h2>
                <p className="text-muted-foreground mb-6">You haven't placed any orders yet.</p>
                <Link to="/">
                  <Button>Start Shopping</Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {orders.map((order) => (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card p-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Order #{order.order_number}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(order.created_at).toLocaleDateString('en-IN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(order.order_status)}
                        <span className={`text-sm font-medium px-3 py-1 rounded-full capitalize ${getStatusColor(order.order_status)}`}>
                          {order.order_status}
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-border/50 pt-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-semibold">{order.product_name}</h3>
                          <p className="text-sm text-muted-foreground">Qty: {order.quantity}</p>
                        </div>
                        <p className="font-display font-bold text-lg">₹{order.product_price}</p>
                      </div>

                      <div className="text-sm text-muted-foreground mb-4">
                        <p>{order.full_name}</p>
                        <p>{order.address}</p>
                        <p>{order.city}, {order.state} - {order.pincode}</p>
                      </div>

                      {(order.order_status === 'pending' || order.order_status === 'confirmed') && (
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleCancelOrder(order.id)}
                        >
                          Cancel Order
                        </Button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Orders;