import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

export const useHasOrdered = () => {
  const { user } = useAuth();
  const [hasOrdered, setHasOrdered] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkOrders = async () => {
      if (!user) {
        setHasOrdered(false);
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('orders')
          .select('id')
          .eq('user_id', user.id)
          .eq('payment_status', 'paid')
          .limit(1);

        if (error) throw error;
        setHasOrdered((data?.length || 0) > 0);
      } catch (error) {
        console.error('Error checking orders:', error);
      } finally {
        setLoading(false);
      }
    };

    checkOrders();
  }, [user]);

  return { hasOrdered, loading };
};