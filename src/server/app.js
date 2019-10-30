// @flow

import express from 'express'
import { join } from 'path'
import WordPair from './models/WordPair'

const app = express()
const port: number = 3000

const publicDirectory: string = join(__dirname, '../public')

let words: $ReadOnlyArray<WordPair> = [];

function addNewPair(word: WordPair): void {
    words = [...words, word];
}

function findById(id: string): ?WordPair {
    return words.find(item => item.id === id);
}

function checkIfExist(russian: string, english: string) {
    return words.find(item => item.russian === russian && item.english === english)
}

function removePair(word: WordPair): boolean {
    const index = words.indexOf(word);
    if (index < 0)
        return false;
    
    words = [...words.slice(0, index), ...words.slice(index+1)]

    return true;
}

app.use('/static', express.static(publicDirectory))

app.get('/', (req, res) => {
    res.sendFile(join(publicDirectory, 'index.html'))
});

app.get('/addPair', (req, res) => {
    const russian: ?string = req.query.russian;
    const english: ?string = req.query.english;

    if (russian && english) {
        const existingPair = checkIfExist(russian, english);
        if (existingPair) {
            res.send({wordPair: existingPair});
        } else {
            const wordPair: WordPair = new WordPair(russian, english);
            addNewPair(wordPair);
            res.send({wordPair});
        }
    }
    else res.send({error: 'invalid params'});
});

app.get('/getPairs', (req, res) => {
    res.send({words})
});

app.get('/deletePair', (req, res) => {
    const id: ?string = req.query.id;

    if (id) {
        const removingWord = findById(id);
        
        if (removingWord) {
            const result = removePair(removingWord);
            result ? res.send({message: 'word pair has deleted'}) : 
                res.send({error: 'error while deleting'});
        }
        else res.send({error: 'there are no this word'})
    }
    else res.send({error: 'invalid params'})
});

app.listen(port, () => console.log('Server started on port ' + port))