-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Users can view their own data" ON public.users;
DROP POLICY IF EXISTS "Users can update their own data" ON public.users;
DROP POLICY IF EXISTS "Admins can view all user data" ON public.users;
DROP POLICY IF EXISTS "Admins can update all user data" ON public.users;
DROP POLICY IF EXISTS "Users can view their own admin status" ON public.users;
DROP POLICY IF EXISTS "Admins can view all user data including admin status" ON public.users;
DROP POLICY IF EXISTS "Admins can update admin status" ON public.users;

-- Create a function to check admin status without recursion
CREATE OR REPLACE FUNCTION public.is_admin(user_id uuid)
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.users 
    WHERE id = user_id AND is_admin = true
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create basic policies first
CREATE POLICY "Users can view their own data"
  ON public.users
  FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own data"
  ON public.users
  FOR UPDATE
  USING (auth.uid() = id);

-- Create admin policies using the function
CREATE POLICY "Admins can view all user data"
  ON public.users
  FOR SELECT
  USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can update all user data"
  ON public.users
  FOR UPDATE
  USING (public.is_admin(auth.uid()));

-- Enable RLS if not already enabled
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY; 