import { createClient } from '@supabase/supabase-js';
import { DATABASE_URL, SUPABASE_KEY } from '@/config/supabase/supabase';
import { Database } from '@/types/supabase/schema';

export const supabase = createClient<Database>(DATABASE_URL, SUPABASE_KEY);
