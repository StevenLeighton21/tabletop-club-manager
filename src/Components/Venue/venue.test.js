import React from 'react';
import { shallow } from 'enzyme';
import Venue from '.';
import HardCodedTable from '../../Components/HardCodedTable';

describe('<Venue />', () => {
    it('renders a list of tables for the venue`', () => {
        let props1 = {
            time: '17:30',
            size: '6 x 4'
        }

        let props2 = {
            time: '18:30',
            size: '4 x 4'
        }

        let props = {
            tables: [<HardCodedTable {...props2} />, <HardCodedTable {...props1} />]
        }

        const venue = shallow(<Venue {...props} />)
        expect(venue.find('.venue_wrapper').length).toEqual(1);
        // expect(venue.find('.venue_wrapper').props().children).toContain(props.tables[0].toString());
        // expect(venue.find('.venue_wrapper').props().children).toContain(<TableItem value={<HardCodedTable size='4 x 4' time='18:30' />});
        // expect(tb.find('.table_size').props().children).toBe(props.size);
    });
});
