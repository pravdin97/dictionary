import React from 'react'

export default function SetSorting ({setSorting}) {
    return <div className="container">
        <div className="row">
            <div className="col-4 p-2"> По-английски 
                <button className="btn btn-secondary m-1" onClick={() => setSorting('english_up')}>&#8595;</button>
                <button className="btn btn-secondary m-1" onClick={() => setSorting('english_down')}>&#8593;</button>
            </div>

            <div className="col-4 p-2"> По-русски 
                <button className="btn btn-secondary m-1" onClick={() => setSorting('russian_up')}>&#8595;</button>
                <button className="btn btn-secondary m-1" onClick={() => setSorting('russian_down')}>&#8593;</button>
            </div>
        </div>
    </div>
}