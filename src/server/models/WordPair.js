// @flow
import uuid from 'uuidv4'

export default class WordPair {
    +id: string;
    +russian: string;
    +english: string;

    constructor(russian: string, english: string) {
        this.id = uuid();
        this.english = english;
        this.russian = russian;
    }
}