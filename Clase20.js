/* 1 Show title and special_features of films that are PG-13*/
db.films.find({Rating:'PG-13'}, { 'Title': 1, 'Special Features': 1,})

/* 2 Get a list of all the different films duration.*/
db.films.distinct("Length")

/* 3 Show title, rental_rate and replacement_cost of films that have replacement_cost from 20.00 up to 24.00*/
db.films.find({'Replacement Cost':{$gte:20.00,$lte:24.00}}, {Title:1, 'Rental Duration':1, 'Replacement Cost':1})

/* 4 Show title, category and rating of films that have 'Behind the Scenes'   as special_features */
db.films.find({'Special Features': 'Behind the Scenes'}, { 'Title': 1, 'Category': 1, 'Rating': 1 })

/* 5 Show first name and last name of actors that acted in 'ZOOLANDER FICTION' */
db.films.find({Title:'ZOOLANDER FICTION'},{"Actors.First name":1, "Actors.Last name":1})






