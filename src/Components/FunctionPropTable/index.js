import React from 'react'
import './style.css'

export default class FunctionPropTable extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this)
        this.state = {
            time: '00:00'
        }
    }

    onClick() {
        console.log('clickity click!')
        this.setState(
            {
                time: '22:22'
            }
        )
    }

    render() {
        return (
                <div className="table_wrapper" onClick={this.onClick}>
                <div className="time_slot">Timeslot: {this.state.time}<br /></div>
                <div className="table_size">4 x 4</div>
                </div>
        );
    }
}

