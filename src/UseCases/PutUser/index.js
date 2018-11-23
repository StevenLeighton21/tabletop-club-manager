export default class PutUser {
    putUser = async (data) => {
        let response = await fetch('http://what.the', {
                                   method: 'POST',
            body: JSON.stringify(data)
        });
    }
}
