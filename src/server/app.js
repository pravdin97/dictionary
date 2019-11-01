// @flow

import express from 'express';
import { join } from 'path';

import graphqlHTTP from 'express-graphql';
import { schema, root } from './gql/schema';

import WordPair from './models/WordPair';
import {
    words,
    addNewPair,
    findById,
    checkIfExist,
    removePair}
    from './actions/actions';

const app = express();
const port: number = 3000;

const publicDirectory: string = join(__dirname, '../public');

app.use('/static', express.static(publicDirectory));
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: false,
}));

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
    res.send({words});
});

app.get('/deletePair', (req, res) => {
    const id: ?string = req.query.id;

    const ERRORID = -1;

    if (id) {
        const removingWord = findById(id);

        if (removingWord) {
            const result = removePair(removingWord);
            result ? res.send({
                message: 'word pair has deleted',
                id: id
            }) :
                res.send({
                    error: 'error while deleting',
                    id: ERRORID
                });
        }
        else res.send({
            error: 'there are no this word pair',
            id: ERRORID
        });
    }
    else res.send({
        error: 'invalid params',
        id: ERRORID
    });
});

app.listen(port, () => console.log('Server started on port ' + port));
