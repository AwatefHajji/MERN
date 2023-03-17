const Joke = require('../models/jokes.model'); // importing the joke variable that we exported from the jokes.model.js file.
//export different functions that perform the basic CRUD operations using our Joke model
const mongoose = require('mongoose');
// function get all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// function get one jokes

module.exports.findOneJokes = (req, res) => {
    Joke.findOne({_id: req.params.id})
      .then(oneSingleJokes => res.json({ joke: oneSingleJokes }))
      .catch(err => res.json({ message: 'Something went wrong with get by id', error: err }));
}

// get random joke

module.exports.getRandomJoke = (req, res) => {
    Joke.aggregate([{ $sample: { size: 1 } }])
      .then(randomJoke => res.json({ RandomJoke: randomJoke }))
      .catch(err => res.json({ message: 'Something went wrong with random', error: err }));
}


// function create joke

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
       .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
       .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// function update joke

module.exports.updateJoke = (req, res) => {
    Joke.findByIdAndUpdate({_id: req.params.id}, req.body,{ new: true, runValidators: true })
      .then(updatedJoke => res.json({ joke: updatedJoke }))
      .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// function delete joke

module.exports.deleteJoke = (req, res) => {
    Joke.findByIdAndDelete({_id: req.params.id})
     .then(deletedJoke => res.json({ message: 'Joke deleted', joke: deletedJoke }))
     .catch(err => res.json({ message: 'Something went wrong', error: err }));
}



