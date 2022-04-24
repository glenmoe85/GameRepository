CREATE TABLE IF NOT EXISTS games (
    id INTEGER PRIMARY KEY, 
    title TEXT NOT NULL,
    release NUMERIC NOT NULL,
    platform TEXT NOT NULL,
    rating NUMERIC,
    notes TEXT,
    img TEXT
);

CREATE TABLE IF NOT EXISTS users (
    id integer primary key, 
    email TEXT NOT NULL,
    pass TEXT NOT NULL
);