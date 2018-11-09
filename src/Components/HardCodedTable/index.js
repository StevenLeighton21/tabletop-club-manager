import React from 'react'
import './style.css'

export default class HardCodedTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            time,
            size,
            //onUnlocked,
        } = this.props;

        return (
                <div className="table_wrapper">
                <div className="time_slot">Timeslot: {time} <br /></div>
                <div className="table_size">{size}</div>
                </div>
        );
    }
}

