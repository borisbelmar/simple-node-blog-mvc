class ArticlesController {
  renderHomeWithArticles (req, res) {
    const mockArticles = [
      { id: 1, title: 'Artículo de prueba 1', content: 'Contenido de mi artículo' },
      { id: 2, title: 'Artículo de prueba 2', content: 'Contenido de mi artículo' }
    ]
    res.render('home', {
      articles: mockArticles
    })
  }

  renderSingleArticle (req, res) {
    const id = req.params.id

    // TODO: Esta información debería venir de la base de datos

    res.render('article', {
      id,
      title: 'Este es el título',
      content: 'Este es el contenido'
    })
  }

  renderArticleCreationForm (req, res) {
    res.render('article-form')
  }

  renderArticleUpdateForm (req, res) {
    const id = req.params.id

    // TODO: Esta información debería venir de la base de datos
    res.render('article-form', {
      id,
      title: 'Titulo del artículo a editar',
      content: 'Contenido del artículo a editar'
    })
  }

  insertAndRenderArticle (req, res) {
    const title = req.body.title
    const content = req.body.content

    console.log('Aquí se debería insertar el contenido en base de datos', { title, content })

    // TODO: Este ID debería venir como respuesta de la inserción en la base de datos
    const id = 1

    res.redirect(`/articles/${id}`)
  }

  updateAndRenderArticle (req, res) {
    const id = req.params.id
    const title = req.body.title
    const content = req.body.content

    console.log('Aquí se debería actualizar el contenido en base de datos', { id, title, content })

    res.redirect(`/articles/${id}`)
  }

  deleteArticleAndRenderResponse (req, res) {
    const id = req.params.id

    console.log('Esto debería eliminar', { id })

    // TODO: El título debe venir de la base de datos
    res.render('article-deleted', {
      id,
      title: 'Título '
    })
  }
}

module.exports = ArticlesController
