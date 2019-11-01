// @flow

const { buildSchema } = require('graphql');
import {
	words,
	addNewPair,
	findById,
	checkIfExist,
	removePair}
	from '../actions/actions';

import WordPair from '../models/WordPair';

type AddingArguments = {
	input: {
		russian: string,
		english: string,
	}
}

type DeletingArguments = {
	id: string
}

export const schema = buildSchema(`
	type WordPair {
		id: String!
		russian: String!
		english: String!
	}

	input WordPairInput {
		russian: String!
		english: String!
	}

	type Query {
		hello: String,
		getPairs: [WordPair]
	}

	type Mutation {
		addPair(input: WordPairInput): WordPair
		deletePair(id: String!): String
	}
`);

export const root = {
	hello: () => {
		return 'Hello world!';
	},
	getPairs: () => {
		return words;
	},
	addPair: ({input}: AddingArguments) => {
		const { russian, english } = input;
		if (russian && english) {
			const existingPair = checkIfExist(russian, english);
			if (existingPair) {
					return existingPair;
			} else {
					const wordPair: WordPair = new WordPair(russian, english);
					addNewPair(wordPair);
					return wordPair;
			}
		}
		return null;
	},
	deletePair: ({id}: DeletingArguments) => {
		const ERRORID = -1;

    if (id) {
        const removingWord = findById(id);

        if (removingWord) {
            const result = removePair(removingWord);
						if (result)
							return id;
        }
		}
		return null;
	},
};
