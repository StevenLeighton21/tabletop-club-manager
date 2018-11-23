import GetUser from '.'

describe('GetUser', () => {
    it('returns a user object', async () => {
        const gu = new GetUser();
        const res = await gu.getUser();
        expect(typeof res.ip).toBe('string');
        expect(res.ip).toEqual('141.0.149.130');   
    });
});
