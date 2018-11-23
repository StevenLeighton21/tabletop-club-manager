import PutUser from '.';

it('puts a user to an api', () => {
    let spy = jest.fn()
    global.fetch = async ( url, request ) => spy(url, request);

    let putter = new PutUser();

    putter.putUser({name: 'steve'})
    expect(spy).toHaveBeenCalledWith(
        "http://what.the",
        {
            method: 'POST',
            body: JSON.stringify({
                name: 'steve'
            })
        })
});
