let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home' });
  }

module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', { title: 'About' });
  }

module.exports.displayProjectPage = (req, res, next) => {
    res.render('project', { title: 'Project' });
  }
module.exports.documentsPage = (req, res, next) => {
    res.render('documents', { title: 'Documents' });
}
module.exports.displayServicesPage = (req, res, next) => {
    res.render('services', { title: 'Services' });
  }

module.exports.displayContactPage = (req, res, next) => {
    res.render('contact', { title: 'Contact' });
  }