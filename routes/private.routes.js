const router = require("express").Router();

const isLoggedIn = require("../middleware/middleware.js")

router.get("/main", isLoggedIn, (req, res, next) => {
    res.render("main.hbs");
}); 


router.get("/private", isLoggedIn, (req, res, next) => {
    res.render("private.hbs");
}); 





module.exports = router;