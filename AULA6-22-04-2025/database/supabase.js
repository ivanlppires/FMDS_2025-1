import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    'https://lghjodvzezndbduqgfhh.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnaGpvZHZ6ZXpuZGJkdXFnZmhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzNzE3NjQsImV4cCI6MjA2MDk0Nzc2NH0.k1yUV5qFExyQVzIG0E-eXMvHV8dp7Vk2PTgXRqpwnHc'
);

export default supabase;
