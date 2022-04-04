const express = require('express')
const ArticlesController = require('./controllers/ArticlesController')
const PageController = require('./controllers/PageController')
const SqlClient = require('./lib/SqlClient')

const router = express.Router()

// Database Client
const sqlClient = new SqlClient()

// Controllers
const pageController = new PageController()
const articlesController = new ArticlesController(sqlClient)

// Routes
router.get('/', articlesController.renderHomeWithArticles)
router.get('/about', pageController.renderAbout)

router.get('/articles/create', articlesController.renderArticleCreationForm)
router.post('/articles/create', articlesController.insertAndRenderArticle)

router.get('/articles/:id', articlesController.renderSingleArticle)

router.get('/articles/:id/update', articlesController.renderArticleUpdateForm)
router.post('/articles/:id/update', articlesController.updateAndRenderArticle)

router.post('/articles/:id/delete', articlesController.deleteArticleAndRenderResponse)

router.get('*', pageController.renderNotFound)

module.exports = router
