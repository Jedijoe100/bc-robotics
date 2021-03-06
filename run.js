const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
	.get('/sponsors', (req, res) => res.render('pages/sponsors'))
	.get('/junior-secondary', (req, res) => res.render('pages/jSecondary'))
	.get('/primary', (req, res) => res.render('pages/primary'))
	.get('/senior-secondary', (req, res) => res.render('pages/sSecondary'))
    .get('/club', (req, res) => res.render('pages/club'))
	.get('/events', (req, res) => res.render('pages/events'))
    .get('/articles', (req, res) => res.contentType('text/xml').render('pages/articles'))
    .get('/images', (req, res) => res.contentType('text/xml').render('pages/images'))
    //.get('/articles', (req, res) => res.render('pages/articles'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
