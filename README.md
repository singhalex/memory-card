# Memory Card
![image](https://github.com/singhalex/memory-card/assets/115970252/2effe0f6-3d3f-4cb8-bb13-c3e18b010990)


The memory card project is an assignment for The Odin Project - https://www.theodinproject.com/lessons/node-path-react-new-memory-card
Users try and click on pokemon without repeating. Every time the user clicks on a card, the cards are shuffled. High scores are tracked over the session.

## Technologies Used
- HTML
- CSS
- React
- Vite

## Live Site
https://rainbow-moxie-5be9bb.netlify.app

## Getting Started
```
https://github.com/singhalex/cv-application.git
cd memory-card
npm install
npm start
```

## How it Works
The images and card info are fetched from the PokéApi. The info is collected in an array and shuffled on page load through useEffect. The cards are then built off of the array. When the user clicks on a card, they are shuffled and the id of the card is kept track of in an array. This array is checked every click to and if a guess is duplicated, the game ends and a high score is set if achieved.
