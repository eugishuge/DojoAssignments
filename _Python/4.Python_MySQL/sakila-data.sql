
SELECT city_id, customer.first_name, customer.last_name, customer.email, customer.address_id
FROM customer
LEFT JOIN address ON customer_id = address.address_id
WHERE city_id = 312;

SELECT film.title, film.description, film.release_year, film.rating, film.special_features, category.name
FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON category.category_id = film_category.category_id
WHERE category.name = "Comedy";

SELECT film.title, film.description, film.release_year, film.rating, film.special_features, category.name
from film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE category.name = "comedy";

SELECT customer.first_name, customer.last_name, customer.email, address.address
FROM customer
JOIN address ON customer.address_id = address.address_id
JOIN city on city.city_id = address.city_id
WHERE customer.store_id = 1 and city.city_id IN (1,42, 312, 459);

SELECT film.title, film.description, film.release_year, film.special_features, film.rating, actor.actor_id
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE actor.actor_id = 15 and film.rating = "G" and film.special_features like "%behind%";

SELECT film.film_id, film.title, actor.actor_id, concat(actor.first_name," ", actor.last_name)
from film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE film.film_id = 369;

SELECT film.title, film.description, film.release_year, film.rating, film.special_features, category.name
from film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE film.rental_rate = 2.99 and category.name = "drama";

SELECT film.title, film.description, film.release_year, film.rating, film.special_features, category.name, concat(actor.first_name," ", actor.last_name) as Name
from film
JOIN film_actor On film.film_id = film_actor.film_id
JOIN actor on actor.actor_id = film_actor.actor_id
JOIN film_category on film.film_id = film_category.film_id
JOIN category on film_category.category_id = category.category_id
Where concat(actor.first_name," ", actor.last_name) = "Sandra Kilmer" and category.name = "action";