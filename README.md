# Gotta Catch A Few - Pokemon TCG Clone - By Brad Simpson
- Pokemon expert knowledge credit to Andy Simpson

## MVP
- Random Decks of Pokemon Cards (4-5 cards) generated for each player
- Cards background color will change according to Pokemon Type
- Users can chat via websockets
- Cards will be drag and drop enabled
- Users can pick an avatar
- DB to track players, W/L records, avatars

## BONUS - FUTURE FEATURES
- 2 players can actually play a game against each other (with bebsoclets)
- Win/Lose on who has Pokemon/Cards left 
- Add in type bonus/resistance damage
- Player Avatars (tracked in DB)
- Ability to play a computer

## DB SETUP
- Single table for user info
- username(unique), password(bcrypt), email(unique), wins, losses, avatar ID

## TECHNOLOGY/RESOURCES USED

### FONTEND
- React/Redux (Redux store used for Pokemon Card info and User info)
- Pokemon.com for Pokemon images (pass URL to front end after creating with Pokemon data on back end)
- UNIQID for unique chat message ID's  (https://www.npmjs.com/package/uniqid)
- React-beautifuk-dnd for drag n' drop cards (https://github.com/atlassian/react-beautiful-dnd/blob/master/README.md#documentation-) 
- Pokemon Home Page Font for logos (https://fontmeme.com/pokemon-font/)

### BACKEND
- PokeAPI for Pokemon data (https://pokeapi.co/)
- Express server
- User DB interface
- User Auth/Verification
- Websockets

## CHALENGES FACED

### DATA FOR POKEMON CARDS

- Data from the PokeAPI had to be filtered, adding first letter caps, padding the pokemonID's to a 3 digit number, and using a seperate resource for the images, and the ones provided by the API were small and resolution suffered if enlarged.  Used random number generators for picking which Pokemon, as well as 2 random moves from each (most have 40+)

```js

    const pokeId = Math.floor((Math.random() * 807) + 1);
    console.log(pokeId);
    const padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
    
    try{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`);
    const pokemonInfo = await response.json();

    const pokeName = pokemonInfo.name.charAt(0).toUpperCase() + pokemonInfo.name.slice(1);
    const singleWordName = pokeName.split("-"); 
    const pokeHp = pokemonInfo.stats[0].base_stat;
    const pokeType = pokemonInfo.types[0].type.name;
    const pokeTypeCap = pokeType.charAt(0).toUpperCase() + pokeType.slice(1);
    const pokeUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padToThree(pokeId)}.png`;

    const random1 = Math.floor(((Math.random() * (pokemonInfo.moves.length - 1)) + 1))
    const random2 = Math.floor(((Math.random() * (pokemonInfo.moves.length - 1)) + 1))

    const randomMove1 = pokemonInfo.moves[random1].move.name;
    const randomMove2 = pokemonInfo.moves[random2].move.name;

    const randomMove1Cap = randomMove1.charAt(0).toUpperCase() + randomMove1.slice(1);
    const randomMove2Cap = randomMove2.charAt(0).toUpperCase() + randomMove2.slice(1);

    const pokemon = {
        name: singleWordName,
        id: pokeId,
        hp: pokeHp,  
        type: pokeTypeCap,
        imageUrl: pokeUrl,
        move1: randomMove1Cap,
        move2: randomMove2Cap,
    };

    res.status(201).json(pokemon);

    } catch (e) {
        console.log(e);
    };
}));

```
