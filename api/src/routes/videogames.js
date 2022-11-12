const { Router } = require('express');
const {
	getVideogamesApi, 
	getVideogamesDB,
	getVideogamesByName, 
	getVideogameByID,} = require('./controllers/VideoController');
const router = Router();

router.get("/", async (req,res) => {
	const { name } = req.query;
	try{
		const videogamesApi = await getVideogamesApi();
		const videogamesDB = await getVideogamesDB();
		let videogames = [...videogamesDB, ...videogamesApi];
		if(name){
			
			return res.status(200).json(getVideogamesByName(name,videogames));
		}
		
		return res.status(200).json(videogames);
	}catch(err){
		res.status(404).json({error: err.message});
	}
	
});

router.get("/:id", async (req,res) => {
	const { id } = req.params;
	try {
		res.status(200).json(await getVideogameByID(id));
	} catch (err){
		res.status(404).json({error: err.message});
	}
});

module.exports = router;