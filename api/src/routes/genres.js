const { Router } = require('express');
const { getGenres } = require('./controllers/genreController');
const router = Router();

router.get("/", async (req,res) => {
	try{
		res.status(200).json(await getGenres());
	}catch(err){
		res.status(404).json({error: err.message});
	}
});

module.exports = router;