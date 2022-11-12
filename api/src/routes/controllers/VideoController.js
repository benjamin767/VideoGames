const axios = require('axios');
const { Videogame, Genre } = require('../../db');
const { API_KEY } = process.env;

module.exports = {
	getVideogamesApi: async ()=>{
		try{
			let allVideogames = []
			let videogames = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
			let next = videogames.data.next;
			videogames = videogames.data; 
			videogames = videogames.results.map(videogame => {
				return {
					api: true,
					id: videogame.id,
					name: videogame.name,
					Genre: videogame.genres,
					img: videogame.background_image,
				};
			});
			allVideogames = allVideogames.concat(videogames);
			for(let i = 0; i<4; i++){
				videogames = await axios.get(next);
				next = videogames.data.next;
				videogames = videogames.data; 
				videogames = videogames.results.map(videogame => {
					return {
						api: true,
						id: videogame.id,
						name: videogame.name,
						Genre: videogame.genres,
						img: videogame.background_image,
					};
				});
				allVideogames = allVideogames.concat(videogames);
			}
			return allVideogames;
		} catch(err){
			throw new Error(err.message);
		}
	},

	getVideogamesDB: async ()=>{
		try {
			let videogames = await Videogame.findAll({
				attributes: ['name','id'],
				include:{
					model: Genre,
					attributes: ['name'],
					through: {
						attributes: []
					}
				},
			});
			return videogames;
		} catch(err){
			throw new Error(err.message);
		}
	},

	getVideogamesByName: (name, videogames)=>{
		name = name.toUpperCase();
		let match = videogames.filter(videogame => {
			let videoName = videogame.name.toUpperCase();
			return videoName.includes(name);
		});

		if(!match.length) throw new Error("Videogame not found.");
		return match;
	},

	getVideogameByID: async (id)=>{
		let videogame;
		if(id.length < 10) {
		 	videogame = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
		 	if(videogame.data.detail) throw new Error(videogame.detail);
		 	return videogame.data;
		}
		
		videogame = await Videogame.findByPk(id,{
			include:{
				model: Genre,
				attributes: ['name'],
				through: {
					attributes: []
				}
			},
		});
		if(!videogame) throw new Error("Not found.");
		return videogames;
		
			
		

	},
};