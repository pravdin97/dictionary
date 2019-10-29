import React from 'react'

export default class CreatePair extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            russian: '',
            english: '',
        };
      }
    
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onAddingPair(this.state.russian, this.state.english)
        this.setState({
            russian: '',
            english: '',
        })
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        })
    }
    
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
}