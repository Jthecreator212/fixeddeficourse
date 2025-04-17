import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

export const createClientServer = () => {
  const cookieStore = cookies();
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        persistSession: true,
        storageKey: 'supabase.auth.token',
        storage: {
          getItem: async (key: string) => {
            const cookie = await cookieStore;
            return cookie.get(key)?.value ?? null;
          },
          setItem: () => {},
          removeItem: () => {},
        },
      },
    }
  );
};

export const isAdmin = async (userId: string): Promise<boolean> => {
  const supabase = createClientServer();
  
  try {
    const { data, error } = await supabase
      .from('users')
      .select('is_admin')
      .eq('id', userId)
      .single();

    if (error) {
      console.error('Error checking admin status:', error);
      return false;
    }

    return data?.is_admin ?? false;
  } catch (error) {
    console.error('Exception checking admin status:', error);
    return false;
  }
}; 