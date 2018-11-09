import React from 'react'
import './style.css'

export default class PropTypeComponent extends React.Component {
    constructor(props) {
        super(props);
        switch(typeof props.thing) {
        case('boolean'):
            this.state = {
                ptype: 'A boolean!'
            }
            break
        case('string'):
            this.state = {
                ptype: 'A string!'
            }
            break
        default:
            this.state = {
                ptype: 'An unknown!'
            }
         }

    }

    render() {
        return (
            <div className="table_wrapper">
                <div className="prop_type">{this.state.ptype}</div>
                <ul className="children_list">{this.props.children}</ul>
            </div>
        );
    }
}


