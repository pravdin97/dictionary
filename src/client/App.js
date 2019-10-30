// @flow

import React from 'react';
import Pairs from './containers/Pairs'
import CreatePair from './containers/CreatePair';
import SetSorting from './components/SetSorting';
import type {Word, Words} from './Types.js'

type Filter = 'russian_up' | 'russian_down' | 'english_up' | 'english_down';

type Props = {
  +words: Words,
  +filter: Filter,
  +actions: {
    addPair(russian: string, english: string): void,
    removePair(id: string): void,
    setFilter(filter: string): void
  }
};

function sortPairs(words: Words, filter: Filter): Words {
  switch(filter) {
    case 'russian_up': 
      return [...words].sort((a, b) => {
        if (a.russian.toUpperCase() < b.russian.toUpperCase())
          return -1;
        if (a.russian.toUpperCase() > b.russian.toUpperCase())
          return 1;
        return 0;
      })
    
    case 'russian_down': 
      return [...words].sort((a, b) => {
        if (a.russian.toUpperCase() > b.russian.toUpperCase())
          return -1;
        if (a.russian.toUpperCase() < b.russian.toUpperCase())
          return 1;
        return 0;
      })
    
    case 'english_up':
      return [...words].sort((a, b) => {
        if (a.english.toUpperCase() < b.english.toUpperCase())
          return -1;
        if (a.english.toUpperCase() > b.english.toUpperCase())
          return 1;
        return 0;
      }) 
    
    case 'english_down':
      return [...words].sort((a, b) => {
        if (a.english.toUpperCase() > b.english.toUpperCase())
          return -1;
        if (a.english.toUpperCase() < b.english.toUpperCase())
          return 1;
        return 0;
      }) 
    default: return words; 
  }
}

function App({words, filter, actions}: Props) {
  const pairs: Words = sortPairs(words, filter)

  return (
    <div className="App">
      <CreatePair onAddingPair={actions.addPair} />
      <SetSorting setSorting={actions.setFilter}/>
      <Pairs pairs={pairs} onDelete={actions.removePair}/>
    </div>
  );
}

export default App;
