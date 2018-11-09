import React from 'react'
import './style.css'

export default class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="table_wrapper">
                <div className="time_slot">Timeslot: 18:00<br /></div>
                <div className="table_size">4 x 4</div>
            </div>
        );
    }
}


