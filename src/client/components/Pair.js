// @flow

import React from 'react';
import type {Word} from '../Types.js';
import { connect } from 'react-redux';

type Props = {
    +pair: Word,
    +onDelete: any,
};

function Pair({ pair, onDelete }: Props) {
    return (
        <div className="row">
            <div className="col-4 border">
                {pair.english}
            </div>
            <div className="col-4 border">
                {pair.russian}
            </div>
            <div className="col-4">
                <button className="btn btn-danger" onClick={() => onDelete(pair.id)}>&#10005;</button>
            </div>
        </div>

    )
};

export default Pair;