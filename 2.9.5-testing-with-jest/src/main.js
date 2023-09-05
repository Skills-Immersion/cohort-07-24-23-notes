

//get the average rating of all the artists form the given array
function getAverageRating(artists = []) {
    if(!artists.length) return null;

    let sum = artists.reduce((sum, artistObj) => {
        sum += artistObj.rating;
        return sum;
    }, 0);
    let average = sum / artists.length;
    return Number(average.toFixed(2))
}

// console.log(getAverageRating(artists));

// get all the artists who are rated lower than a given number
function getLowRatedArtists(artists = [], rating) {
    if(!artists.length)return null;
    
    return artists.filter((artist) => {
        return artist.rating < rating;
    });
}

function partitionArtistsByRating(artists=[], rating=0){
    if(artists.length === 0){
        return [[],[]]
    }
    const lowRatedArtists = artists.filter((artist) => {
        return artist.rating < rating;
    });

    const highRatedArtists = artists.filter((artist) => {
        return artist.rating >= rating;
    });

    return [lowRatedArtists,highRatedArtists]
}

// console.log(getLowRatedArtists(artists, 7));


module.exports = { getLowRatedArtists, getAverageRating, partitionArtistsByRating };
