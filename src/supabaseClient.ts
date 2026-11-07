import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://osdwapwpjovhrrnbtfmk.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zZHdhcHdwam92aHJybmJ0Zm1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQwNzQ1NTcsImV4cCI6MjEwOTY1MDU1N30.PjEsnUll7VyBGt2mGIHab8p96csjpYiyHOBtFWvY99o';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
