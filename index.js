// index.js
import figlet from 'figlet';
import chalk from 'chalk';
import cowsay from 'cowsay';

const text = process.argv[2] || 'Hello, Mia!';
const animal = process.argv[3] || 'random';

// List of fun animals to choose from
const funAnimals = [
  'cat', 'dragon', 'elephant', 'fox', 'goat', 'koala', 'octopus',
  'owl', 'sheep', 'squirrel', 'turtle', 'whale', 'doge', 'kitty',
  'dolphin', 'hedgehog', 'lobster', 'moose', 'pterodactyl', 'seahorse',
  'stegosaurus', 'turkey', 'tux', 'vader-koala'
];

// Get a random animal if requested
const getAnimal = () => {
  if (animal === 'random') {
    return funAnimals[Math.floor(Math.random() * funAnimals.length)];
  }
  return animal;
};

// Draw the text with figlet
figlet(text, (err, data) => {
  if (err) {
    console.log('Something went wrong.');
    console.dir(err);
    return;
  }
  console.log(chalk.cyan(data));
});

// Draw the ASCII animal
try {
  const selectedAnimal = getAnimal();
  const colors = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  const animalArt = cowsay.say({
    text: `I'm a ${selectedAnimal}!`,
    f: selectedAnimal
  });
  
  console.log(chalk[randomColor](animalArt));
  console.log(chalk.gray(`Animal: ${selectedAnimal}`));
} catch (error) {
  console.log(chalk.yellow('Animal not found, using default cow instead!'));
  const cow = cowsay.say({
    text: 'Moo!'
  });
  console.log(chalk.cyan(cow));
  console.log(chalk.gray('Available animals: ' + funAnimals.join(', ')));
}