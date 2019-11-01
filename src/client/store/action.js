// @flow

import type { Word, Words } from '../Types.js';

const port: number = 3000;
const serverURL: string = 'http://localhost:' + port;
const gqlURL: string = serverURL + '/graphql';

type Query = {
    query: string,
    variables: any
}

const performFetch = (query: Query) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(query)
    };

    return fetch(gqlURL, options);
}

const sendWordPairToServer = (russian: string, english: string): Promise<Word> => {
    const fields = ['id', 'russian', 'english'];

    const query = {
        query: `
            mutation($input: WordPairInput) {
                addPair(input: $input) {
                    ${fields.join(' ')}
                }
            }
        `,
        variables: {
            input: {
                russian: russian,
                english: english
            }
        }
    };

    return performFetch(query);
};

const getWordPairsFromServer = (): Promise<Words> => {
    const fields = ['id', 'russian', 'english'];
    const query = {
        query: `{ getPairs { ${fields.join(' ')} } }`
    };

    return performFetch(query);
};

const deleteWordPairFromServer = (id: string): Promise<Word> => {

    const query = {
        query: `
            mutation($id: String!) {
                deletePair(id: $id)
            }
        `,
        variables: {
            id: id
        }
    }

    return performFetch(query);
}

const addWordPair = (russian: string, english: string) => async (dispatch: any) => {
    try {
        const response = await sendWordPairToServer(russian, english);
        const createdPairJson = await response.json();
        const createdPair = createdPairJson.data.addPair;

        dispatch({
            type: 'ADD_PAIR',
            id: createdPair.id,
            russian: createdPair.russian,
            english: createdPair.english,
        });
    } catch(e) {
        console.log(e);
    }
};

const getWordPairs = () => async (dispatch: any) => {
    try {
        const response = await getWordPairsFromServer();
        const allPairsJson = await response.json();
        const allPairs: Words = allPairsJson.data.getPairs;

        dispatch({
            type: 'FILL_PAIRS',
            words: allPairs
        });
    } catch(e) {
        console.log(e);
    }
};

const deleteWordPair = (id: string) => async (dispatch: any) => {
    const response = await deleteWordPairFromServer(id);
    const resultJson = await response.json();
    const result = resultJson.id;

    if (id !== (-1).toString()) {
        dispatch({
            type: 'REMOVE_PAIR',
            id: id
        });
    }
}

export {
    addWordPair,
    getWordPairs,
    deleteWordPair
}
