import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import { createClient } from '@supabase/supabase-js';
import { DATABASE_URL, SUPABASE_KEY } from './config/supabase/supabase';
import { Database } from './types/schema/supabase.ts';

const root = createRoot(document.getElementById('root')!);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

export const supabase = createClient<Database>(DATABASE_URL, SUPABASE_KEY);
