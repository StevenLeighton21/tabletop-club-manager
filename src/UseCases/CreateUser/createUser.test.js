import React from 'react';
import { shallow } from 'enzyme';
import CreateUser from '.';

it('submits the entry from the form', () => {
    const submitSpy = jest.fn();
    const form = shallow(<CreateUser onSubmit={submitSpy} />);

    form.find('[data-test="form-input"]').simulate(
        'change', {target: {value: 'dan is helpful'}}
    );
    form.find('[data-test="submit"]').simulate('click');

    expect(submitSpy).toHaveBeenCalledWith({input: 'dan is helpful'})
})
