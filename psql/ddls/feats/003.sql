CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

ALTER TABLE feats.feats
ADD created_by int NOT NULL DEFAULT 1;

ALTER TABLE feats.feats
ADD updated_by int;

ALTER TABLE feats.feats
ADD create_at timestamp NOT NULL DEFAULT NOW();

ALTER TABLE feats.feats
ADD updated_at timestamp NOT NULL DEFAULT NOW();

ALTER TABLE feats.feats
ADD CONSTRAINT fk_created_by FOREIGN KEY (created_by) REFERENCES users.users(id) ON DELETE CASCADE;

ALTER TABLE feats.feats
ADD CONSTRAINT fk_updated_by FOREIGN KEY (updated_by) REFERENCES users.users(id) ON DELETE SET NULL;

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON feats.feats
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();