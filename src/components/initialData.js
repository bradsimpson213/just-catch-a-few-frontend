const initialData = {
    cards: {
        'card-1': { id: 'card-1', content: 'card-1'},
        'card-2': { id: 'card-2', content: 'card-2'},
        'card-3': { id: 'card-3', content: 'card-3'},
        'card-4': { id: 'card-4', content: 'card-4'}
    },
    cardHolders: {
        'holder-1': {
            id: 'holder-1',
            title: 'player-hand',
            cardIds: ['card-1', 'card-2', 'card-3', 'card-4'],
        },
        // 'holder-2': {
        //     id: 'holder-2',
        //     title: 'active-card',
        //     cardIds: [],
        // }
    },
    handOrder: ['holder-1'],
};

export default initialData;