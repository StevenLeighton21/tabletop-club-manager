import React from 'react';

export default class CreateUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = { input: '' };
    }

    handleSubmit = (e) => {
        // e.preventDefault()
        this.props.onSubmit(this.state);
    }

    render() {
        return (
                <form>
                <input data-test="form-input"
                       onChange={e => this.setState({input: e.target.value})}>
                </input>
                <submit data-test="submit" type="submit" onClick={this.handleSubmit}>Go</submit>
                </form>
        )
    }
}
