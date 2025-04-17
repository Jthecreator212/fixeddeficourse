-- Create admin_activities table
CREATE TABLE IF NOT EXISTS public.admin_activities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  action_type TEXT NOT NULL,
  description TEXT NOT NULL,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create admin_stats table
CREATE TABLE IF NOT EXISTS public.admin_stats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  total_users INTEGER DEFAULT 0,
  total_courses INTEGER DEFAULT 0,
  active_users_last_30_days INTEGER DEFAULT 0,
  course_completions INTEGER DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Insert initial admin stats record
INSERT INTO public.admin_stats (id)
VALUES (gen_random_uuid())
ON CONFLICT DO NOTHING;

-- Create RLS policies for admin_activities
ALTER TABLE public.admin_activities ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view all activities"
  ON public.admin_activities
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.users
      WHERE id = auth.uid()
      AND is_admin = true
    )
  );

CREATE POLICY "Admins can insert activities"
  ON public.admin_activities
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.users
      WHERE id = auth.uid()
      AND is_admin = true
    )
  );

-- Create RLS policies for admin_stats
ALTER TABLE public.admin_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view stats"
  ON public.admin_stats
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.users
      WHERE id = auth.uid()
      AND is_admin = true
    )
  );

CREATE POLICY "Admins can update stats"
  ON public.admin_stats
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.users
      WHERE id = auth.uid()
      AND is_admin = true
    )
  );

-- Create function to update admin stats
CREATE OR REPLACE FUNCTION public.update_admin_stats()
RETURNS void AS $$
BEGIN
  UPDATE public.admin_stats
  SET
    total_users = (SELECT COUNT(*) FROM public.users),
    total_courses = (SELECT COUNT(*) FROM public.courses),
    active_users_last_30_days = (
      SELECT COUNT(DISTINCT user_id)
      FROM public.user_activities
      WHERE created_at > NOW() - INTERVAL '30 days'
    ),
    course_completions = (
      SELECT COUNT(*)
      FROM public.user_course_progress
      WHERE completed_at IS NOT NULL
    ),
    updated_at = NOW();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER; 