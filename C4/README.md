Express js excercise - Create a pokedex

C reate (POST)
R ead   (GET)
U pdate (PUT)
D elete (DEL)


res.status(501).end(); // status numbers 501 not implemented

//.end() .send() .json() - responses
without responses the client will be waiting unti it stops for overtime

put should check if specified pokemon is already in our data, if not, return status 404.