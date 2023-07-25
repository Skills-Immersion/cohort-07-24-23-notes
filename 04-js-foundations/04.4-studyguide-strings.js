function showTopSongs(songs) {
  //if there are 0 songs, return a string that says "There are no songs in your playlist"
  
  //if there is only one song in the playlist, return a string that says "There is only 1 song: SONG_NAME_HERE"
  
  //if there are only two songs exactly, then return "There are only 2 songs: SONG_1_NAME and SONG_2_NAME.`
 
  //if there are more than two songs, then return "There are NUMBER_OF_SONGS_HERE songs in this playlist: song1_here, song2_here, song3_here."
}

let robsPlaylist = [
  {
      title: "Blessings",
      artist: "Chance The Rapper",
      albums: ["A", "B", "C"],
  },
  {
      title: "Hussle and Motivate",
      artist: "Nipsey Hussle",
      albums: ["D", "E", "F"],
  },
  {
      title: "Hotel California",
      artist: "Eagles",
      albums: ["G", "H", "I"],
  },
  {
      title: "Let It Be",
      artist: "Beatles",
      albums: ["J", "K", "L"],
  },
];
console.log(showTopSongs(robsPlaylist));