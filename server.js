const fastify = require('fastify');

const app = fastify({ logger: true });

const images = ['Image 1', 'Image 2', 'Image 3'];

app.get('/', async function() {
	return 'Hello World!';
})

app.get('/images', async function() {
	return images;
})

// app.get('/images/1', async function() {
// 	return 'Image 1';
// })

// app.get('/images/2', async function() {
// 	return 'Image 2';
// })


async function getImage(imageId) {
	const image = images[imageId];

	if(!image) {
		throw new Error('Image Not Found')
	}

	return image;
}

app.get('/images/:imageId', async function(request) {
	const imageId = request.params.imageId;
	return getImage(imageId)
})

app.get('/search/images', async function(request) {
	const imageId = request.query.imageId;
	return getImage(imageId)
})

async function start() {
	await app.listen(3000)
	console.log('Server started on http://localhost:3000')
}

start();