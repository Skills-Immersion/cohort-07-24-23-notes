const express = require('express');
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));
const cors = require('cors');
app.use(cors());
app.use(express.json());

const games = [
  {
    "id": 1,
    "name": "Sorry!",
    "imageUrl": "https://images.heb.com/is/image/HEBGrocery/001669716-1",
    "summary": "knock out others to win!"
  },
  {
    "id": 2,
    "name": "Citadels",
    "imageUrl": "https://cf.geekdo-images.com/sHd0jkZZLDgixHjAXtn7kA__imagepage/img/BAc4tOD4A_Bu2QJ2lR_B_zmelto=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3119514.jpg",
    "summary": "You are competing to build the biggest and best citadel. Each round, you draft a new secret role and attempt to sabotage your opponents."
  },
  {
    "id": 3,
    "name": "Scrabble",
    "imageUrl": "https://images.food52.com/KPaH-agchBk1WQhu73hFcWNDjb4=/1500x0/b195ede2-97dd-4c1a-89b5-547ea0ad27ad--2021-0813_ws-game-company_luxury-wooden-game-boards_scrabble_1x1_1x1_rocky-luten_009.jpg",
    "summary": "A word game in which two to four players score points by placing tiles, each bearing a single letter, onto a game board divided into a 15×15 grid of squares."
  },
  {
    "id": 4,
    "name": "Risk",
    "imageUrl": "https://www.hasbro.com/common/productimages/en_US/9678C9300E7B4385B564846FA3465E47/0814e0d5d8144769d4a59f449756bb71e5ac0745.jpg",
    "summary": "Battle for Middle Earth!"
  }

];

app.get('/games', (req, res, next) => res.json(games));
let nextId = 5;
app.post('/games', (req, res, next) => {
  let newGame = {
    id: nextId++,
    name: req.body.data.name,
    imageUrl: req.body.data.imageUrl,
    summary: req.body.data.summary
  }
  games.push(newGame);
  res.status(201).send(newGame);
})

app.get('/games/:id', (req, res, next) => {
  let game = games.find(x => x.id === Number(req.params.id));
  if (game) {
    res.json(game);
  } else {
    res.status(404).send(`game not found with id ${req.params.id}`)
  }
})

app.put('/games/:id', (req, res, next) => {
  let idx = games.findIndex(x => x.id === Number(req.params.id));
  if (idx >= 0) {
    let newGame = {
      id: Number(req.params.id),
      name: req.body.data.name,
      imageUrl: req.body.data.imageUrl,
      summary: req.body.data.summary
    }
    games[idx] = newGame;
    res.send(newGame);
  } else {
    res.status(404).send(`game not found with id ${req.params.id}`)
  }
})

app.delete('/games/:id', (req, res, next) => {
  let idx = games.findIndex(x => x.id === Number(req.params.id));
  if (idx >= 0) {
    games.splice(idx, 1);
    res.status(204).send();
  } else {
    res.status(404).send(`game not found with id ${req.params.id}`)
  }
})

const { PORT = 8080 } = process.env;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));