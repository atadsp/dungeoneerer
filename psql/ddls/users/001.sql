CREATE OR REPLACE FUNCTION random_string(length integer) returns text as
$$
declare
  chars text[] := '{0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z}';
  result text := '';
  i integer := 0;
begin
  if length < 0 then
    raise exception 'Given length cannot be less than 0';
  end if;
  for i in 1..length loop
    result := result || chars[1+random()*(array_length(chars, 1)-1)];
  end loop;
  return result;
end;
$$ language plpgsql;

CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TABLE users.users
(
    id SERIAL PRIMARY KEY,
    username varchar(80) NOT NULL,
    password varchar(60) NOT NULL DEFAULT random_string(60),
    email varchar(255) NOT NULL,
    email_verified boolean NOT NULL DEFAULT false,
    last_ip varchar(45),
    last_login timestamp,
    logins_count integer,
    last_password_reset timestamp,
    profile_image varchar(255),
    create_at timestamp NOT NULL DEFAULT NOW(),
    updated_at timestamp NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON users.users
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TABLE users.user_permissions
(
    id SERIAL PRIMARY KEY,
    name varchar(255) NOT NULL
);

CREATE TABLE users.multifactor
(
    id SERIAL PRIMARY KEY,
    name varchar(255) NOT NULL
);