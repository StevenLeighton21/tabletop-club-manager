import React from 'react';
import { shallow } from 'enzyme';
import HardCodedTable from '.';

describe('<HardCodedTable />', () => {
    it('renders a `.table_wrapper`', () => {
        let props = {
            time: '17:30',
            size: '6 x 4'
        }

        const tb = shallow(<HardCodedTable {...props} />);
        expect(tb.find('.table_wrapper').length).toEqual(1);
        expect(tb.find('.time_slot').props().children[1]).toBe(props.time);
        expect(tb.find('.table_size').props().children).toBe(props.size);
    });

    it('renders a `.table_wrapper` example two', () => {
        let props = {
            time: '22:15',
            size: '2 x 1'
        }

        const tb = shallow(<HardCodedTable {...props} />);
        expect(tb.find('.table_wrapper').length).toEqual(1);
        expect(tb.find('.time_slot').props().children[1]).toBe(props.time);
        expect(tb.find('.table_size').props().children).toBe(props.size);
    });

});
