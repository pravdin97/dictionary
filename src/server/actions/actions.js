// @flow

import WordPair from '../models/WordPair';

export let words: $ReadOnlyArray<WordPair> = [];

export function addNewPair(word: WordPair): void {
    words = [...words, word];
};

export function findById(id: string): ?WordPair {
    return words.find(item => item.id === id);
};

export function checkIfExist(russian: string, english: string) {
    return words.find(item => item.russian === russian && item.english === english);
};

export function removePair(word: WordPair): boolean {
    const index = words.indexOf(word);
    if (index < 0)
        return false;

    words = [...words.slice(0, index), ...words.slice(index+1)];

    return true;
};
