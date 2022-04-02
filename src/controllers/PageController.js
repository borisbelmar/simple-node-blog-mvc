class PageController {
  renderAbout (req, res) {
    res.render('about')
  }

  renderNotFound (req, res) {
    res.render('404')
  }
}

module.exports = PageController
