import React from 'react'

export default function Pair({pair, onDelete}) {
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
}