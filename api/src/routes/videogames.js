const { Router } = require('express');
const {
	getVideogamesApi, 
	getVideogamesDB,
	getVideogamesByName, 
	getVideogameByID,
	createVideogame,
	getGenres,} = require('./controllers/VideoController');
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

router.post("/", async (req,res) => {
	const {name,description,released,rating,platform,genres} = req.body;
	try{
		let newVideogame = await createVideogame(name,description,released,rating,platform);
		let genresDB = await getGenres(genres);
		newVideogame.addGenres(genresDB);
		res.status(201).json({detail: "was successfully created"});
	} catch(err){
		res.status(404).json({error: err.message})
	}
});

module.exports = router;