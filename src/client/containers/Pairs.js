// @flow

import React from 'react';
import Pair from '../components/Pair';
import type { Words, Filter } from '../Types';
import { connect } from 'react-redux';
import { getWordPairs, deleteWordPair } from '../store/action';

type StateProps = {
    +pairs: Words,
};

type DispatchProps = {
    +onDelete: (string) => void,
    +onStart: () => Words
}

type Props = StateProps & DispatchProps;

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
};

class Pairs extends React.Component<Props> {

  componentDidMount() {
    this.props.onStart();
  };

  render() {
      const { pairs, onDelete } = this.props;
      return(
          <div className="container mx-auto">
              {!pairs.length ?
                  <div>Слов пока нет :(</div> :
                  pairs.map(p => 
                      <Pair key={p.id} pair={p} onDelete={onDelete}/>
                  )
              }
          </div>
      )
  };
};

const mapStateToProps = ({ words, filter }): StateProps => {
    return {
        pairs: sortPairs(words, filter)
    }
};

const mapDispatchToProps = (dispatch): DispatchProps => {
    return {
        onDelete: (id: string): void => {
            dispatch(deleteWordPair(id));
        },
        onStart: (): Words => {
          dispatch(getWordPairs());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pairs);