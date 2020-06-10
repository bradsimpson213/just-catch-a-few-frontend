# Gotta Catch A Few - Pokemon TCG Clone

## MVP
- 2 players can play a game against each other (2 browsers)
- Players can chat while playing
- Random Decks of Pokemon Cards (4-5 cards) generated for each player
- Cards background color will change according to Pokemon Type
- Players will battle each other with their Decks
- Win/Lose on who has Pokemon/Cards left 
- DB to track players and W/L records

## BONUS - FUTURE FEATURES
- Fancy transitions of cards for improved gameplay
- Add in type bonus/resistance damage
- Player Avatars (tracked in DB)
- Friends List
- Ability to play a computer

## DB
- Single table for user info
- username(unique), password(bcrypt), email(unique), wins, losses, avatar

## BACKEND
- Express server
- User DB interface
- User Auth/Verification
- Websockets
- PokeAPI for Pokemon data/images

## FRONTEND
- React/Redux
- Pokemon.com for Pokemon images (pass URL to front end after creating with Pokemon data on back end)


## TECHNOLOGY USED
### FONT END
- UNIQID for unique chat message ID's  (https://www.npmjs.com/package/uniqid)
### BACK END
- PokeAPI for Pokemon data (https://pokeapi.co/)


## CREDITS 
- Pokemon Home Page Font (https://fontmeme.com/pokemon-font/)