const SUPABASE_URL = "https://kmhhndqeqvqhroftqrsc.supabase.co";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttaGhuZHFlcXZxaHJvZnRxcnNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIyMDk5MTEsImV4cCI6MjA4Nzc4NTkxMX0.Yif-C0SBqpde4Oguonb2Zq_yQTMYb33jyWqTJFuUxAo";

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
