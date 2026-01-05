import { createClient } from '@supabase/supabase-js';

// ⚠️ REPLACE THESE WITH YOUR SUPABASE CREDENTIALS
// Get them from: https://supabase.com/dashboard/project/YOUR_PROJECT/settings/api
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

if (SUPABASE_URL === 'YOUR_SUPABASE_URL' || SUPABASE_ANON_KEY === 'YOUR_SUPABASE_ANON_KEY') {
  console.warn('⚠️ Supabase credentials not configured. Please update src/integrations/supabase/client.ts');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
