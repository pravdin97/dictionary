// @flow

import React from 'react';
import { connect } from 'react-redux';

type DispatchProps = {
    +setSorting: (filter: string) => void
};

type Props = DispatchProps;

function SetSorting ({setSorting}: Props) {
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

const mapDispatchToProps = (dispatch) => {
    return {
        setSorting: (filter: string): void => {
            dispatch({
                type: 'SET_SORTING',
                filter: filter,
            })
        }
    }
}

export default connect(
    null,
    mapDispatchToProps,
)(SetSorting);