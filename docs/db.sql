CREATE TABLE favorite_movies (
	id serial PRIMARY KEY,
	title VARCHAR ( 100 ) NOT NULL,
    genre VARCHAR ( 255 ) NOT NULL ,
    director VARCHAR ( 255 ) NOT NULL ,
    writer VARCHAR ( 255 ) NOT NULL ,
    plot VARCHAR ( 255 ) NOT NULL ,
    language VARCHAR ( 255 ) NOT NULL ,
    external_id VARCHAR ( 50 ) NOT NULL ,
    type VARCHAR ( 255 ) NOT NULL ,
    created_at TIMESTAMP NOT NULL
);
