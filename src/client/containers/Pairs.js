// @flow

import React from 'react';
import Pair from '../components/Pair';
import type { Words, Filter } from '../Types';
import { connect } from 'react-redux';

type StateProps = {
    +pairs: Words,
};

type DispatchProps = {
    +onDelete: (string) => void
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
    }
};

const mapStateToProps = ({ words, filter }): StateProps => {
    return {
        pairs: sortPairs(words, filter)
    }
};

const mapDispatchToProps = (dispatch): DispatchProps => {
    return {
        onDelete: (id: string): void => {
            dispatch({
                type: 'REMOVE_PAIR',
                id: id,
            });
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pairs);