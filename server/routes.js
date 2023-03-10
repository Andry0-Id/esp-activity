// Call Express
const { Router } = require('express');
var express = require('express');

// Call function Router
var router = express.Router();

/**
 * define the home page
 */
router.use(function timeLog(req, res, next) {
    console.log('Time', Date.now());    
    next();
});

/**
 * define the home page route
 */
router.get('/',function(req, res) {
    res.send('Home page');    
})

/**
 * define the about route
 */

module.exports = router;