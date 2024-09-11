CREATE TABLE characters (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id varchar(255) NOT NULL DEFAULT requesting_user_id(),
  name varchar(255) NOT NULL,
  role varchar(255) NOT NULL,
  gender varchar(255) NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now() 
);

alter table "characters" enable row level security;