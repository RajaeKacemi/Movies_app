const express = require('express');
const router = express.Router();
const {getAllActors, getActorById, createActor, setActor, deleteActor} = require('../actors/actorController');

router.get('/Movies', getAllActors);
router.get('/Movie/:id', getActorById);
router.post('/addMovie', createActor);
router.put('/update/:id', setActor);
router.delete('/delete/:id', deleteActor);

module.exports = router;