const axios = require('axios');
const { Genre } = require('../../db');
const { API_KEY } = process.env;

module.exports = {
	getGenres: async () => {
		let genres = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
		genres = genres.data.results.map(genre => {
			return {name: genre.name}
		});
		let genresDB = [];
		for(let genre = genres){
			[genre] = await Genre.findOrCreate({
				where: {name: genre.name}
			});
			genresDB.push(genre);
		}
		return genresDB;
	},
};