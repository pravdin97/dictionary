// @flow

import React from 'react'
import Pair from '../components/Pair';
import type {Words} from '../Types'

type Props = {
    +pairs: Words,
    +onDelete: (string) => void,
};

export default class Pairs extends React.Component<Props> {
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