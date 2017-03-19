const express = require('express');
const app = express();

const doMadlib = (params) => {
  const {adj1, adj2, adj3, adverb, name, place, noun} = params;
  return (`There's a ${adj1} new ${name} in ${place} and everyone's talking. Stunningly ${adj2} and ${adverb} ${adj3}, all the cool kids know it. However, ${name} has a secret - ${name}'s a vile vampire. Will it end with a bite, or with a stake through the ${noun}?`);
}

app.get('/', (req, res) => {
  const result = doMadlib(req.query);
  console.log(req.query);
  if(Object.keys(req.query).length === 7) {
    res.status(200).send(result);
  } else {
    res.status(400).send('bad request');
  }

});


app.listen(3000, () => console.log('Server has started at 3000'));
