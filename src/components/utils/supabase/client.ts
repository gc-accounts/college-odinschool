// components/utils/supabase/client.ts
'use client'

import { createBrowserClient } from '@supabase/ssr'

export function createClient(key:string) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = key ? key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // console.log('*** Supabase Client Init Check ***');
  // console.log('URL received:', supabaseUrl);
  // console.log('Anon Key received (first 10 chars):', supabaseAnonKey ? supabaseAnonKey.substring(0, 10) + '...' : 'Key Not Found');
  // console.log('Anon Key length:', supabaseAnonKey ? supabaseAnonKey.length : 'N/A');
  // console.log('Expected Key length for your key:', 180); // Count the characters of your exact key if possible. The key you provided is 180 chars.

  if (!supabaseUrl || !supabaseAnonKey || supabaseAnonKey.length < 100) { // Check length to catch truncated keys
    console.error("Supabase environment variables are missing or incomplete!");
    // You might want to throw an error here to prevent further execution
    throw new Error("Supabase environment variables are not correctly loaded.");
  }

  return createBrowserClient(
    supabaseUrl,
    supabaseAnonKey
  )
}