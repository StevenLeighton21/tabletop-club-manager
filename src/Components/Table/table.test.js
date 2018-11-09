import React from 'react';
import { shallow } from 'enzyme';
import Table from '.';

describe('<Table />', () => {
    it('renders a `.table_wrapper`', () => {
        const tb = shallow(<Table />);
        expect(tb.find('.table_wrapper').length).toEqual(1);
    });
});
