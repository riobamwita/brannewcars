import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://llyhjdceiowghdrduhrl.supabase.co";
const supabaseKey = "sb_publishable_YBWKJlsTJQmFMNCrgljvGg_yd8odHrL";

export const supabase = createClient(supabaseUrl, supabaseKey);