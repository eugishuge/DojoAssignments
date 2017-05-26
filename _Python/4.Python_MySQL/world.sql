
SELECT country_code, language, percentage
FROM languages
WHERE language = "slovene"
ORDER BY percentage DESC;

SELECT countries.name, COUNT(cities.name) AS city_count
FROM cities
JOIN countries ON countries.id = cities.country_id
GROUP BY countries.id
ORDER BY COUNT(cities.name) DESC;

SELECT * FROM cities
WHERE country_code = "MEX" and population > 500000
ORDER BY population DESC;

SELECT countries.name, languages.language, languages.percentage
FROM languages
JOIN countries ON countries.id = languages.country_id
WHERE percentage > 89
ORDER BY languages.percentage DESC;

SELECT countries.name, countries.surface_area, countries.population
FROM countries
WHERE countries.surface_area <501 and countries.population > 100000;

 SELECT countries.name AS country_name, cities.name AS city_name, cities.district AS disctrict, cities.population AS population
 FROM cities
 LEFT JOIN countries ON countries.id = cities.country_id
 WHERE countries.name = "Argentina" and cities.district = "Buenos Aires" and cities.population > 500000;


SELECT region, count(name)
FROM countries
GROUP BY region
ORDER BY count(name) DESC;