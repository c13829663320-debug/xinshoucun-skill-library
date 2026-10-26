CREATE TABLE IF NOT EXISTS counters(platform TEXT PRIMARY KEY,next_id INTEGER NOT NULL DEFAULT 0);
INSERT OR IGNORE INTO counters(platform,next_id) VALUES('xhs',0),('moments',0);