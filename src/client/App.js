import React from 'react';
import Pairs from './containers/Pairs'
import CreatePair from './containers/CreatePair';
import SetSorting from './components/SetSorting';

function sortPairs(words, filter) {
  switch(filter) {
    case 'russian_up': 
      return words.sort((a, b) => {
        if (a.russian.toUpperCase() < b.russian.toUpperCase())
          return -1;
        if (a.russian.toUpperCase() > b.russian.toUpperCase())
          return 1;
        return 0;
      })
    
    case 'russian_down': 
      return words.sort((a, b) => {
        if (a.russian.toUpperCase() > b.russian.toUpperCase())
          return -1;
        if (a.russian.toUpperCase() < b.russian.toUpperCase())
          return 1;
        return 0;
      })
    
    case 'english_up':
      return words.sort((a, b) => {
        if (a.english.toUpperCase() < b.english.toUpperCase())
          return -1;
        if (a.english.toUpperCase() > b.english.toUpperCase())
          return 1;
        return 0;
      }) 
    
    case 'english_down':
      return words.sort((a, b) => {
        if (a.english.toUpperCase() > b.english.toUpperCase())
          return -1;
        if (a.english.toUpperCase() < b.english.toUpperCase())
          return 1;
        return 0;
      }) 
    default: return words; 
  }
}

function App({words, filter, actions}) {
  const pairs = sortPairs(words, filter)

  return (
    <div className="App">
      <CreatePair onAddingPair={actions.addPair} />
      <SetSorting setSorting={actions.setFilter}/>
      <Pairs pairs={pairs} onDelete={actions.removePair}/>
    </div>
  );
}

export default App;
