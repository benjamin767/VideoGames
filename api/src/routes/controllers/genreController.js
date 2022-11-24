const axios = require('axios');
const { Genre } = require('../../db');
const { API_KEY } = process.env;

module.exports = {
	getGenres: async () => {
		try{
			let genres = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
			genres = genres.data.results.map(genre => {
				return {name: genre.name}
			});
			genres.push({name:"Other"});
			let genresDB = [];
			for(let genre of genres){
				[genre] = await Genre.findOrCreate({
					where: {name: genre.name}
				});
				genresDB.push(genre);
			}
			return genresDB;
		} catch(err){
			throw new Error(err.message);
		}
	},
};