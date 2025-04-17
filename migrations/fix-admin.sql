-- First ensure the is_admin column exists
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_name = 'users' 
    AND column_name = 'is_admin'
  ) THEN
    ALTER TABLE public.users
    ADD COLUMN is_admin BOOLEAN DEFAULT false NOT NULL;
  END IF;
END $$;

-- Update the admin status for your email
UPDATE public.users
SET is_admin = true
WHERE email = 'jordelwaite18@gmail.com';

-- Verify the update
SELECT email, is_admin 
FROM public.users 
WHERE email = 'jordelwaite18@gmail.com'; 