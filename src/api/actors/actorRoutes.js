const express = require('express');
const router = express.Router();
const {getAllActors, getActorById, createActor, setActor, deleteActor} = require('../actors/actorController');

router.get('/Actors', getAllActors);
router.get('/Actor/:id', getActorById);
router.post('/addActor', createActor);
router.put('/updateActor/:id', setActor);
router.delete('/deleteActor/:id', deleteActor);

module.exports = router;