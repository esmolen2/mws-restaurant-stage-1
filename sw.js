const accessToken = 'pk.eyJ1IjoiZXNtb2xlbjIiLCJhIjoiY2pqOThtYzh3MTV5djNwbzU3ZG14bWtqZyJ9.fgP8OvaylbclM2vyleBU1A';

const initialCacheUrls = [
	// Local skeleton, images, and restaurant data
	'/',
	'css/styles.css',
	'data/restaurants.json',
	'img/1.jpg',
	'img/2.jpg',
	'img/3.jpg',
	'img/4.jpg',
	'img/5.jpg',
	'img/6.jpg',
	'img/7.jpg',
	'img/8.jpg',
	'img/9.jpg',
	'img/10.jpg',
	'js/dbhelper.js',
	'js/main.js',

	// Map markers
	'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
	'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
	'https://unpkg.com/leaflet@1.3.1/dist/images/marker-shadow.png',
	'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon.png',

	// Initial map tiles - will fill up to approx. 1400px wide display, default zoom
	`https://api.tiles.mapbox.com/v4/mapbox.streets/12/1203/1539.jpg70?access_token=${accessToken}`,
	`https://api.tiles.mapbox.com/v4/mapbox.streets/12/1203/1540.jpg70?access_token=${accessToken}`,
	`https://api.tiles.mapbox.com/v4/mapbox.streets/12/1204/1539.jpg70?access_token=${accessToken}`,
	`https://api.tiles.mapbox.com/v4/mapbox.streets/12/1204/1540.jpg70?access_token=${accessToken}`,
	`https://api.tiles.mapbox.com/v4/mapbox.streets/12/1205/1539.jpg70?access_token=${accessToken}`,
	`https://api.tiles.mapbox.com/v4/mapbox.streets/12/1205/1540.jpg70?access_token=${accessToken}`,
	`https://api.tiles.mapbox.com/v4/mapbox.streets/12/1206/1539.jpg70?access_token=${accessToken}`,
	`https://api.tiles.mapbox.com/v4/mapbox.streets/12/1206/1540.jpg70?access_token=${accessToken}`,
	`https://api.tiles.mapbox.com/v4/mapbox.streets/12/1207/1539.jpg70?access_token=${accessToken}`,
	`https://api.tiles.mapbox.com/v4/mapbox.streets/12/1207/1540.jpg70?access_token=${accessToken}`,
	`https://api.tiles.mapbox.com/v4/mapbox.streets/12/1208/1539.jpg70?access_token=${accessToken}`,
	`https://api.tiles.mapbox.com/v4/mapbox.streets/12/1208/1540.jpg70?access_token=${accessToken}`
];

self.addEventListener('install', event =>
	event.waitUntil(
		caches.open('restaurant-reviews')
		.then(cache => cache.addAll(initialCacheUrls))
	)
);
