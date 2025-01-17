const express = require("express");
const router = express.Router();

// Route for the home page
router.get("/", (req, res) => {
    res.render("index", { title: "Hetashvi Ban" });
});

// Route for the projects page
router.get("/projects", (req, res) => {
    res.render("project", { title: "Hetashvi Ban - Projects" });
});

// Route for the contact page
router.get("/skill", (req, res) => {
    res.render("skill", { title: "Hetashvi Ban - Skills" });
});

// Route for the about page
router.get("/about", (req, res) => {
    res.render("about", { title: "Hetashvi Ban - About" });
});

module.exports = router;