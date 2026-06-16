import express from "express";

// bring in our user routes 
import userRoutes from './routes/user.js'

const app = express();
const PORT = 3000;

// set up user routes
app.use("/users",userRouters);

// Set up view engine
app.set("view engine", "ejs");

// make a route Render first view
app.get("/home", (req, res) => {
    res.render("index");
});

// make another routr for second view
app.get("/users/:id", (req, res) => {
    res.render("info");
})

app.get("/", (req, res) => {
    res.send('Hello World');
})



app.listen(PORT, () => {
    console.log('Listening on port:' +PORT);
});