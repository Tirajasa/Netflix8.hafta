
const movieData = [
    {
      category: 'Action',
      movies: [
        { id: 1, name: 'Mad Max: Fury Road', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [2, 3] },
        { id: 2, name: 'John Wick', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [1, 4] },
        { id: 3, name: 'Die Hard', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [1, 2] },
        { id: 4, name: 'Gladiator', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [2, 5] },
        { id: 5, name: 'The Dark Knight', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [4, 6] },
        { id: 6, name: 'Avengers: Endgame', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [5, 1] }
      ]
    },
    {
      category: 'Drama',
      movies: [
        { id: 7, name: 'The Godfather', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [8, 9] },
        { id: 8, name: 'Shawshank Redemption', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [7, 10] },
        { id: 9, name: 'Forrest Gump', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [7, 8] },
        { id: 10, name: 'Fight Club', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [8, 11] },
        { id: 11, name: 'The Green Mile', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [10, 12] },
        { id: 12, name: 'Schindler\'s List', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [11, 7] }
      ]
    },
    {
      category: 'Comedy',
      movies: [
        { id: 13, name: 'Superbad', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [14, 15] },
        { id: 14, name: 'Step Brothers', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [13, 16] },
        { id: 15, name: 'Anchorman', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [13, 14] },
        { id: 16, name: 'The Hangover', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [14, 17] },
        { id: 17, name: 'Borat', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [16, 18] },
        { id: 18, name: 'Dumb and Dumber', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [17, 13] }
      ]
    },
    {
      category: 'Romance',
      movies: [
        { id: 19, name: 'Titanic', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [20, 21] },
        { id: 20, name: 'The Notebook', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [19, 22] },
        { id: 21, name: 'Pride and Prejudice', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [19, 20] },
        { id: 22, name: 'La La Land', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [20, 23] },
        { id: 23, name: 'A Star is Born', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [22, 24] },
        { id: 24, name: 'Crazy Rich Asians', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [23, 19] }
      ]
    },
    {
      category: 'Romantic Comedy',
      movies: [
        { id: 25, name: 'Crazy, Stupid, Love', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [26, 27] },
        { id: 26, name: '10 Things I Hate About You', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [25, 28] },
        { id: 27, name: 'When Harry Met Sally', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [25, 26] },
        { id: 28, name: 'Notting Hill', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [26, 29] },
        { id: 29, name: 'Bridget Jones\'s Diary', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [28, 30] },
        { id: 30, name: 'Pretty Woman', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [29, 25] }
      ]
    },
    {
      category: 'Action Romance',
      movies: [
        { id: 31, name: 'Mr. & Mrs. Smith', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [32, 33] },
        { id: 32, name: 'True Lies', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [31, 34] },
        { id: 33, name: 'The Tourist', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [31, 32] },
        { id: 34, name: 'This Means War', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [32, 35] },
        { id: 35, name: 'Knight and Day', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [34, 36] },
        { id: 36, name: 'Romancing the Stone', url: 'https://www.w3schools.com/html/mov_bbb.mp4', recommendations: [35, 31] }
      ]
    }
  ];
  
  export default movieData;
  