// @flow

export type Word = {
    +id: string,
    +russian: string,
    +english: string,
};

export type Words = $ReadOnlyArray<Word>;

export type Filter = 'russian_up' | 'russian_down' | 'english_up' | 'english_down';