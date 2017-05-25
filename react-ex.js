// I have a new friend who is a classical movie buff. This new friend believes that any movie made after 1974 is utter garbage. My new friend is coming over this evening and I do not want my friend to see any of my more recent films as I am tired of having my tastes criticized.

// Use JavaScript's .filter() method to remove any films from the following movie collection that were made after 1974.

let movieCollection = [

	{
		name: "Casablanca",
		year: 1942
	},
	{
		name: "Chinatown",
		year: 1974
	},
	{
		name: "Citizen Kane",
		year: 1941
	},
	{
		name: "The Notebook",
		year: 2004
	},
	{
		name: "La La Land",
		year: 2016
	},
	{
		name: "Dune",
		year: 1984
	},
	{
		name: "Easy Rider",
		year: 1969
	},
	{
		name: "Tron",
		year: 1982
	},
	{
		name: "Jodorowsky's Dune",
		year: 2013
	},
	{
		name: "Zardoz",
		year: 1974
	},
	{
		name: "Avatar",
		year: 2009
	},
	{
		name: "The Rocky Horror Picture Show",
		year: 1975
	},
	{
		name: "The Last Airbender",
		year: 2010
	}


]

var filteredCollection = movieCollection.filter(function(movie){
    return movie.year <= 1974
})

console.log(filteredCollection);
