// This is to house all of our routes that we want to define with /users 
const router = require('express').Router();

// all base routes for users 
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtsController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);

// REACTIONS
// /api/thoughts/:thoughtId/reactions/
router.route('/:thoughtId/reactions').post(createReaction);
router.route('/:thoughtId/reactions/:reactionsId').delete(deleteReaction);

module.exports = router;