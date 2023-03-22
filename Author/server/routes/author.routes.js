const authorController= require("../controllers/author.controllers")
module.exports = (app)=>
{
    app.get("/api/authors",authorController.findAll)
    app.post("/api/authors",authorController.create)
    app.get("/api/authors/:id",authorController.findOne)
    app.put("/api/authors/:id",authorController.update)
    app.delete("/api/authors/:id",authorController.delete)
}