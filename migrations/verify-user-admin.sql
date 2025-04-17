-- First, ensure the user exists in the users table
DO $$ 
BEGIN
  -- Check if the user exists
  IF NOT EXISTS (
    SELECT 1 FROM public.users
    WHERE id = '02ddadb4-2f93-484d-97e7-68de082b2e74'
  ) THEN
    -- Insert the user if they don't exist
    INSERT INTO public.users (id, email, is_admin)
    VALUES (
      '02ddadb4-2f93-484d-97e7-68de082b2e74',
      'jordelwaite18@gmail.com',
      true
    );
  ELSE
    -- Update the user's admin status if they exist
    UPDATE public.users
    SET is_admin = true
    WHERE id = '02ddadb4-2f93-484d-97e7-68de082b2e74';
  END IF;
END $$;

-- Verify the user's admin status
SELECT id, email, is_admin 
FROM public.users 
WHERE id = '02ddadb4-2f93-484d-97e7-68de082b2e74'; 