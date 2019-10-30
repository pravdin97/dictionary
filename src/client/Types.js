// @flow

export type Word = {
    +id: string,
    +russian: string,
    +english: string,
};

export type Words = $ReadOnlyArray<Word>;