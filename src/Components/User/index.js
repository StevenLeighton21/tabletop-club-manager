import React from 'react'
import './style.css'

export default class Table extends React.Component {
    constructor() {
        super();
        this.state = {
            current_user: undefined
        }
    }

    async componentDidMount() {
        const name = await this.props.getUser.getUser();
        console.log(name.ip)
        this.setState({
            current_user: name.ip
        });
    }

    render() {
        console.log(this.state.current_user)
        return (
                <div className="user_wrapper">
                <div className="user_name" data-test="uname" >{this.state.current_user}</div>
                </div>
        );
    }
}

