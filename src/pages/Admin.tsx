import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Package, Printer, Loader2, RefreshCw } from 'lucide-react';
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
  payment_id: string | null;
  payment_status: string;
  order_status: string;
  created_at: string;
}

const Admin = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      checkAdminStatus();
    }
  }, [user]);

  const checkAdminStatus = async () => {
    try {
      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user?.id)
        .eq('role', 'admin')
        .maybeSingle();

      if (error) throw error;

      if (data) {
        setIsAdmin(true);
        fetchOrders();
        subscribeToOrders();
      } else {
        setIsAdmin(false);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error checking admin status:', error);
      setLoading(false);
    }
  };

  const fetchOrders = async () => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const subscribeToOrders = () => {
    const channel = supabase
      .channel('admin-orders')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'orders'
        },
        () => {
          fetchOrders();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  };

  const handlePrintReceipt = (order: Order) => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const receiptHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Receipt - ${order.order_number}</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Segoe UI', Arial, sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; }
          .header { text-align: center; margin-bottom: 40px; padding-bottom: 20px; border-bottom: 2px solid #000; }
          .header h1 { font-size: 28px; margin-bottom: 5px; }
          .header p { color: #666; }
          .receipt-info { display: flex; justify-content: space-between; margin-bottom: 30px; }
          .receipt-info div { flex: 1; }
          .receipt-info h3 { font-size: 14px; color: #666; margin-bottom: 8px; text-transform: uppercase; }
          .receipt-info p { font-size: 14px; line-height: 1.6; }
          .order-details { margin-bottom: 30px; }
          .order-details table { width: 100%; border-collapse: collapse; }
          .order-details th, .order-details td { padding: 12px; text-align: left; border-bottom: 1px solid #eee; }
          .order-details th { background: #f5f5f5; font-weight: 600; }
          .total-section { text-align: right; margin-top: 20px; padding-top: 20px; border-top: 2px solid #000; }
          .total-section .total { font-size: 24px; font-weight: bold; }
          .footer { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px; }
          .status { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
          .status.paid { background: #d4edda; color: #155724; }
          .status.pending { background: #fff3cd; color: #856404; }
          @media print { body { padding: 20px; } }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Macro Pad</h1>
          <p>Order Receipt</p>
        </div>
        
        <div class="receipt-info">
          <div>
            <h3>Order Details</h3>
            <p><strong>Order #:</strong> ${order.order_number}</p>
            <p><strong>Date:</strong> ${new Date(order.created_at).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p><strong>Status:</strong> <span class="status ${order.payment_status === 'paid' ? 'paid' : 'pending'}">${order.payment_status.toUpperCase()}</span></p>
            ${order.payment_id ? `<p><strong>Payment ID:</strong> ${order.payment_id}</p>` : ''}
          </div>
          <div>
            <h3>Ship To</h3>
            <p><strong>${order.full_name}</strong></p>
            <p>${order.address}</p>
            <p>${order.city}, ${order.state} - ${order.pincode}</p>
            <p>Phone: ${order.phone}</p>
            <p>Email: ${order.email}</p>
          </div>
        </div>
        
        <div class="order-details">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${order.product_name}</td>
                <td>${order.quantity}</td>
                <td>₹${order.product_price}</td>
                <td>₹${order.product_price * order.quantity}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="total-section">
          <p>Subtotal: ₹${order.product_price * order.quantity}</p>
          <p>Shipping: Free</p>
          <p class="total">Total: ₹${order.product_price * order.quantity}</p>
        </div>
        
        <div class="footer">
          <p>Thank you for your order!</p>
          <p>For any queries, contact us at support@macropad.com</p>
        </div>
        
        <script>window.onload = function() { window.print(); }</script>
      </body>
      </html>
    `;

    printWindow.document.write(receiptHTML);
    printWindow.document.close();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'text-yellow-500 bg-yellow-500/10';
      case 'confirmed':
      case 'shipped':
      case 'delivered':
      case 'paid':
        return 'text-green-500 bg-green-500/10';
      case 'cancelled':
      case 'failed':
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

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-2xl font-bold mb-4">Access Denied</h1>
            <p className="text-muted-foreground mb-6">You don't have permission to view this page.</p>
            <Link to="/">
              <Button>Return to Home</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <Link to="/">
                  <Button variant="ghost" size="sm" className="gap-2 mb-4 text-muted-foreground hover:text-foreground">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                  </Button>
                </Link>
                <h1 className="font-display text-3xl md:text-4xl font-bold">Admin Dashboard</h1>
                <p className="text-muted-foreground mt-2">Manage all orders in real-time</p>
              </div>
              <Button variant="outline" onClick={fetchOrders} className="gap-2">
                <RefreshCw className="w-4 h-4" />
                Refresh
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="glass-card p-6">
                <p className="text-sm text-muted-foreground mb-1">Total Orders</p>
                <p className="font-display text-3xl font-bold">{orders.length}</p>
              </div>
              <div className="glass-card p-6">
                <p className="text-sm text-muted-foreground mb-1">Pending</p>
                <p className="font-display text-3xl font-bold text-yellow-500">
                  {orders.filter(o => o.order_status === 'pending').length}
                </p>
              </div>
              <div className="glass-card p-6">
                <p className="text-sm text-muted-foreground mb-1">Confirmed</p>
                <p className="font-display text-3xl font-bold text-green-500">
                  {orders.filter(o => o.order_status === 'confirmed').length}
                </p>
              </div>
              <div className="glass-card p-6">
                <p className="text-sm text-muted-foreground mb-1">Revenue</p>
                <p className="font-display text-3xl font-bold">
                  ₹{orders.filter(o => o.payment_status === 'paid').reduce((sum, o) => sum + o.product_price * o.quantity, 0).toLocaleString()}
                </p>
              </div>
            </div>

            {/* Orders Table */}
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="text-left p-4 font-semibold text-sm">Order #</th>
                      <th className="text-left p-4 font-semibold text-sm">Customer</th>
                      <th className="text-left p-4 font-semibold text-sm">Product</th>
                      <th className="text-left p-4 font-semibold text-sm">Amount</th>
                      <th className="text-left p-4 font-semibold text-sm">Payment</th>
                      <th className="text-left p-4 font-semibold text-sm">Status</th>
                      <th className="text-left p-4 font-semibold text-sm">Date</th>
                      <th className="text-left p-4 font-semibold text-sm">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="p-8 text-center text-muted-foreground">
                          <Package className="w-12 h-12 mx-auto mb-4 opacity-50" />
                          <p>No orders yet</p>
                        </td>
                      </tr>
                    ) : (
                      orders.map((order) => (
                        <tr key={order.id} className="border-t border-border/50 hover:bg-secondary/30 transition-colors">
                          <td className="p-4 font-mono text-sm">{order.order_number}</td>
                          <td className="p-4">
                            <p className="font-medium">{order.full_name}</p>
                            <p className="text-sm text-muted-foreground">{order.email}</p>
                            <p className="text-sm text-muted-foreground">{order.phone}</p>
                          </td>
                          <td className="p-4">
                            <p>{order.product_name}</p>
                            <p className="text-sm text-muted-foreground">Qty: {order.quantity}</p>
                          </td>
                          <td className="p-4 font-semibold">₹{order.product_price}</td>
                          <td className="p-4">
                            <span className={`text-xs font-medium px-2 py-1 rounded-full capitalize ${getStatusColor(order.payment_status)}`}>
                              {order.payment_status}
                            </span>
                          </td>
                          <td className="p-4">
                            <span className={`text-xs font-medium px-2 py-1 rounded-full capitalize ${getStatusColor(order.order_status)}`}>
                              {order.order_status}
                            </span>
                          </td>
                          <td className="p-4 text-sm text-muted-foreground">
                            {new Date(order.created_at).toLocaleDateString('en-IN')}
                          </td>
                          <td className="p-4">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handlePrintReceipt(order)}
                              className="gap-2"
                            >
                              <Printer className="w-4 h-4" />
                              Print
                            </Button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Admin;