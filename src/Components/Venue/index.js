import React from 'react'
// import './style.css'
import HardCodedTable from '../HardCodedTable'

export default class Venue  extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
               return (
                <div className="venue_wrapper">
                    {TableList(this.props)}
                </div>
        );
    }
}

function TableList(props) {
    const tables = props.tables;
    const listItems = tables.map((table) =>
        <TableItem key='{table.size} @ {table.time}'
        value={table} />
        );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

function TableItem(props) {
    return <li>{props.value}</li>
}




