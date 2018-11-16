import React from 'react';
import { shallow } from 'enzyme';
import PropTypeComponent from '.';

describe('<PropTypeComponent />', () => {
    it('renders a boolean prop', () => {
        let props = {
            thing: true
        }

        const tb = shallow(<PropTypeComponent {...props}/>);
        expect(tb.find('.table_wrapper').length).toEqual(1);
        expect(tb.find('.prop_type').props().children).toBe('A boolean!');
    });

    it('renders a string prop', () => {
        let props = {
            thing: 'hello'
        }

        const tb = shallow(<PropTypeComponent {...props}/>);
        expect(tb.find('.table_wrapper').length).toEqual(1);
        expect(tb.find('.prop_type').props().children).toBe('A string!');
    });

    it('renders child props', () => {
        let props = {
            thing: 1
        }

        const tb = shallow(<PropTypeComponent {...props}><li>doggo</li><li>catte</li></PropTypeComponent>);
        expect(tb.find('.table_wrapper').length).toEqual(1);
        expect(tb.find('.prop_type').props().children).toBe('An unknown!');
        expect(tb.find('.children_list').props().children.length).toEqual(2);
    });
});
