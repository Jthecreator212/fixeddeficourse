-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Users can view their own data" ON public.users;
DROP POLICY IF EXISTS "Users can update their own data" ON public.users;
DROP POLICY IF EXISTS "Admins can view all user data" ON public.users;
DROP POLICY IF EXISTS "Admins can update all user data" ON public.users;
DROP POLICY IF EXISTS "Users can view their own admin status" ON public.users;
DROP POLICY IF EXISTS "Admins can view all user data including admin status" ON public.users;
DROP POLICY IF EXISTS "Admins can update admin status" ON public.users;

-- Create basic policies first
CREATE POLICY "Users can view their own data"
  ON public.users
  FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own data"
  ON public.users
  FOR UPDATE
  USING (auth.uid() = id);

-- Create admin policies using a simpler check
CREATE POLICY "Admins can view all user data"
  ON public.users
  FOR SELECT
  USING (
    (SELECT is_admin FROM public.users WHERE id = auth.uid()) = true
  );

CREATE POLICY "Admins can update all user data"
  ON public.users
  FOR UPDATE
  USING (
    (SELECT is_admin FROM public.users WHERE id = auth.uid()) = true
  );

-- Enable RLS if not already enabled
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY; 