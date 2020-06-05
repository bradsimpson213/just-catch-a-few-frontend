# Gotta Catch A Few - Pokemon TCG Clone

## MVP
- 2 players can play a game against each other
- Players can chat while playing
- Random Decks of Pokemon Cards generated for each player
- Players will battle each other with their Decks
- Win/Lose on who has Pokemon/Cards left 
- DB to track players and W/L records

## BONUS - FUTURE FEATURES
- Fancy transitions of cards for improved gameplay
- Player Avatars
- Ability to play a computer

## DB
- Single table for user info
- username(unique), password(bcrypt), email, wins, losses, avatar

## BACKEND
- Express server
- User DB interface
- User Auth/Verification
- Websockets

## FRONTEND
- React/Redux
- PokeAPI for Pokemon data/images
