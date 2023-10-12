const Show = require('../shows/showModel');
const mongoose = require('mongoose');
const multer = require('multer');
const upload = require('../../utils/upload');

const getAllShows = async (req, res) => {
    const shows = await Show.find();

    if(shows)
    return (shows) ? (res.status(201).json(shows)) : (res.status(404).json({message: "there's no movies"}));
}

const createMovie = async (req, res) => {

    let {title, description, image, category, actors}  = req.body;
    const show = new Show({
        title : title,
        description : description, 
        image : image, 
        category : category, 
        actors : actors
    });
    show.save()
    .then((users) => {
        res.status(201).json("Movie added successfully 😊 👌");
    })
    .catch((error) => {
        res.status(400).json({message :"error"});
    });
};

const getMovieById = async (req, res) => {
    const IdShow = req.params.id;
    const MovieFounded = Show.findById(IdShow)
    .then((MovieFounded) => {
        res.status(201).json(MovieFounded);
    })
    .catch((error) => {
        res.status(400).json({message :"error"});
    });
}

const _delete = async (req, res) => {
    const idShow = req.params.id;
    const MovieFounded = Show.findByIdAndDelete(idShow)
    .then((MovieFounded) => {
        res.status(201).json({message: "Movie deleted successfully 😊 👌"});
    })
    .catch((error) => {
        res.status(400).json({message :"error"});
    });
}

const setMovie = async (req, res) => {
    const idShow = req.params.id;
    
    try{

        await Show.findByIdAndUpdate(idShow, req.body, {new : true})
        res.status(200).json({message : "User Updated :"});

    } catch(error){
        res.status(400).json({message : error});
    }
};

const getImage = (upload.single('file'), (req, res) => {
        
});



module.exports = {getAllShows, createMovie, getMovieById, _delete, setMovie, getImage};