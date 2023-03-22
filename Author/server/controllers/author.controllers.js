const Author = require("../models/author.model")

module.exports = {
 //++++++++++++++READ ALL Authors++++++++++++++++++++++//
 findAll : (req,res)=>
 {
     Author.find()
     .sort({ Name: 'asc' })
     .then(allAuthors => {
         res.json(allAuthors)
     })
     .catch(err=>res.status(400).json({ message: 'Something went wrong in read all', error: err }))
 },
 //++++++++++++++++CREATE  Author+++++++++++++++++++++++//
 create:(req,res)=>
 {
     Author.create(req.body)
     .then(newAuthor => res.json({newAuthor})) 
     .catch(err=>res.status(400).json(err.errors))
 },
 //++++++++++++++++READ ONE Author+++++++++++++++++++++++//
 findOne:(req,res)=>
 {
  // soit hedhi Author.findOne({_id:req.params.id}) ou l'autre 
     Author.findById(req.params.id)
     .then(oneAuthor=>res.json(oneAuthor))
     .catch(err=>res.status(400).json({ message: 'Something went wrong on reading one product', error: err }))
 },
 //++++++++++++++++Update ONE Author+++++++++++++++++++++++//
 update:(req,res)=>
 {
     Author.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
     .then(updatedAuthor=>res.json(updatedAuthor))
     .catch(err=>res.status(400).json(err.errors));
 },
  //++++++++++++++++Delete ONE Author+++++++++++++++++++++++//
  delete:(req,res)=>
  {
     Author.findByIdAndDelete(req.params.id)
     .then(result=> res.json(result))
     .catch(err=>res.json(err));
  }


























}
