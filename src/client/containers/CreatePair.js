// @flow

import React from 'react';
import { connect } from 'react-redux';

type DispatchProps = {
    onAddingPair(russian: string, english: string): void,
};

type Props = DispatchProps;

type State = {|
    +russian: string,
    +english: string,
|};

class CreatePair extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        
        this.state = {
            russian: '',
            english: '',
        };
    };
    
    handleSubmit = (e: SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault();
        this.props.onAddingPair(this.state.russian, this.state.english);
        
        this.setState({
            russian: '',
            english: '',
        });
    };

    handleChange = (e: SyntheticEvent<HTMLTextAreaElement>) => {
        const name: string = e.currentTarget.name;
        const value: string = e.currentTarget.value;

        this.setState({
            [name]: value
        });
    };
    
    render() {
        return <form className="m-2" onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="englishWordTextArea">
                    Английский
                </label>
                <textarea className="form-control"
                    id="englishWordTextArea"
                    name="english"
                    value={this.state.english} 
                    onChange={this.handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="russianWordTextArea">
                    Русский
                </label>
                <textarea className="form-control"
                    id="russianWordTextArea"
                    name="russian" 
                    value={this.state.russian}
                    onChange={this.handleChange} />
                

                <input type="submit" className="btn btn-primary mt-4" value="Сохранить" />
            </div>
        </form>
    }
};

const mapDispatchToProps = (dispatch): DispatchProps => {
    return {
        onAddingPair: (russian: string, english: string): void => {
            // throw new Error(`Caboom! (${russian}/${english})`)
            dispatch({
                type: 'ADD_PAIR',
                russian: russian,
                english: english,
            });
        }
    }
};

export default connect(
    null,
    mapDispatchToProps
)(CreatePair);