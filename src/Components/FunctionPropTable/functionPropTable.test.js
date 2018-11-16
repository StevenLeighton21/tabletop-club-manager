import React from 'react';
import { shallow } from 'enzyme';
import FunctionPropTable from '.';

describe('<FunctionPropTable />', () => {
    it('renders a `.table_wrapper`', () => {
        const mockClick = jest.fn()

        const tb = shallow(<FunctionPropTable onClick={mockClick} />);
        tb.find('.table_wrapper').simulate('click');

        expect(tb.find('.table_wrapper').length).toEqual(1);
        expect(tb.find('.time_slot').props().children[1]).toBe('22:22');
    });
 });
