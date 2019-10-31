// @flow

import type { Word, Words } from '../Types.js';

const port: number = 3000;
const serverURL: string = 'http://localhost:' + port;

const sendWordPairToServer = (russian: string, english: string): Promise<Word> => {
    const url = new URL(serverURL + '/addPair');
    
    const params = {russian: russian, english: english};

    url.search = new URLSearchParams(params).toString();
    return fetch(url);
};

const getWordPairsFromServer = (): Promise<Words> => {
    const url = new URL(serverURL + '/getPairs');

    return fetch(url);
};

const deleteWordPairFromServer = (id: string): Promise<Word> => {
    const url = new URL(serverURL + '/deletePair');

    const params = {id: id};

    url.search = new URLSearchParams(params).toString();
    return fetch(url);
}

const addWordPair = (russian: string, english: string) => async (dispatch: any) => {
    const response = await sendWordPairToServer(russian, english);
    const createdPairJson = await response.json();
    const createdPair = createdPairJson.wordPair;

    dispatch({
        type: 'ADD_PAIR',
        id: createdPair.id,
        russian: createdPair.russian,
        english: createdPair.english,
    });
};

const getWordPairs = () => async (dispatch: any) => {
    const response = await getWordPairsFromServer();
    const allPairsJson = await response.json();
    const allPairs = allPairsJson.words;

    dispatch({
        type: 'FILL_PAIRS',
        words: allPairs
    });
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