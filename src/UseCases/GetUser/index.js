import fetch from 'isomorphic-fetch';

class GetUser {
    getUser = async () => {
        let response = await fetch('https://api.ipify.org?format=json');
        return await response.json();
    }
}

export default GetUser;
