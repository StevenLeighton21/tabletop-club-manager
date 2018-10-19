import React from 'react';
import { shallow } from 'enzyme';
import { Table } from 'Components/Table'

describe('<Table />', () => {
  it('renders a `.table_wrapper`', () => {
     const tb = shallow(<Table />);
     expect(tb.find('.table_wrapper')).to.have.lengthOf(1);
   });
});
