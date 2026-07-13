# Pokémon Memory Card Game

A fast-paced memory card game built with React, CSS Grid, and the PokéAPI. The goal is to click on all 12 Pokémon cards exactly once. Every click shuffles the board— if you click the same Pokémon twice, your score resets!

## Features

- Live PokéAPI Integration: Dynamically fetches up-to-date sprites and names directly from the official Pokémon API.

- Score & High Score Tracking: Keeps track of your current win streak and saves your best overall score.

- Flawless Win Detection: Automatically intercepts the 12th unique click to trigger a victory loop before resetting the board.

- Perfect Equal-Sized Grid: Custom CSS grid layout that forces all 12 cards to remain completely uniform, regardless of text length.

## Architecture & Performance Optimizations

This project implements several production-grade React patterns to optimize performance and accessibility:

1. Parallel Pre-Loading (`Promise.all`): Instead of fetching data inside individual card components (which causes asset flashing and repetitive loading during shuffles), all 12 assets are fetched concurrently at the App level using Promise.all on mount.

2. Event Delegation: To save memory and prevent attaching 12 separate event listeners, clicks are managed globally via a single event listener on the parent <ul> container using event.target.closest("button").

3. Semantic & Accessible HTML: Follows clean web standards using a <ul> ➔ <li> ➔ <button> structure, complete with descriptive alt tags to make the interactive elements entirely accessible to assistive technologies.

4. Stable Re-renders: Shuffles operate on immutable array copies (`[...originalArray]`), ensuring React recognizes memory reference changes and triggers UI updates smoothly.

## Tech Stack

- Frontend: React (Hooks: useState, useEffect)
- Styling: Vanilla CSS (CSS Grid, Flexbox)
- Data Source: [PokéAPI](https://pokeapi.co/)
- Build Tool: Vite
