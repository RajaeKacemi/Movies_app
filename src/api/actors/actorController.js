const Actor = require('../actors/actorModel');
const mongoose = require('mongoose');
const multer = require('multer');
const upload = require('../../utils/upload');

const getAllActors = async (req, res) => {
const actors = await Actor.find();

    if(actors)
    return (actors) ? (res.status(201).json(actors)) : (res.status(404).json({message: "no actor"}));
}

const createActor = async (req, res) => {

    let {name, description, image, moviesId}  = req.body;
    const actor = new Actor({
        name : ame,
        description : description, 
        image : image, 
        movieId : movieId,
    });
    actor.save()
    .then((users) => {
        res.status(201).json("Actor added successfully 😊 👌");
    })
    .catch((error) => {
        res.status(400).json({message :"error"});
    });
};

const getActorById = async (req, res) => {
    const IdActor = req.params.id;
    const actorFounded = Actor.findById(IdActor)
    .then((actorFounded) => {
        res.status(201).json(actorFounded);
    })
    .catch((error) => {
        res.status(400).json({message :"error"});
    });
}

const deleteActor = async (req, res) => {
    const idActor = req.params.id;
    const actorFounded = Actor.findByIdAndDelete(idActor)
    .then((actorFounded) => {
        res.status(201).json({message: "Actor deleted successfully 😊 👌"});
    })
    .catch((error) => {
        res.status(400).json({message :"error"});
    });
}

const setActor = async (req, res) => {
    const idActor = req.params.id;
    
    try{

        await Actor.findByIdAndUpdate(idActor, req.body, {new : true})
        res.status(200).json({message : "Actor Updated :"});

    } catch(error){
        res.status(400).json({message : error});
    }
};


module.exports = {getAllActors, getActorById, createActor, setActor, deleteActor};