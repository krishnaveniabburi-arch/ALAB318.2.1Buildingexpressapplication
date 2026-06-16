import express from "express";

// create an express router
const router = express.Router();

// bring in our user data
import users from '../data.js'

// make a route to render our view
router.get("/", (req, res) => {
    res.render("index", {users});
});

// make another routr for second view
router.get("/:id", (req, res) => {
    res.render("info");
})

export default router;