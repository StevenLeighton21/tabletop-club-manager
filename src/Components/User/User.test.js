import User from '.';
import React from 'react';
import { mount } from 'enzyme';

const waitForRequestToResolve = async () => {
    await new Promise(resolve => setTimeout(resolve, 100));
};

describe('<User />', () => {
    it('renders a user from the api', async () => {
        const getUserSpy = { getUser: jest.fn(() => ({ 'ip': 'hello' }))}
        const tb = mount(<User getUser={getUserSpy} />);
        await waitForRequestToResolve();

        expect(tb.find({ "data-test": "uname" }).text()).toEqual('hello');
    });
});
