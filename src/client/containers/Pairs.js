import React from 'react'
import Pair from '../components/Pair';

export default class Pairs extends React.Component {
    render() {
        const { pairs, onDelete } = this.props
        return(
            <div className="container mx-auto">
                {pairs === undefined || pairs === [] ?
                    <div>Слов пока нет :(</div> :
                    pairs.map(p => 
                        <Pair key={p.id} pair={p} onDelete={onDelete}/>
                    )
                }
            </div>
        )
    }
}