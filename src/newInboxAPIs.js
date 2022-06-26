const axios = require("axios")

module.exports =  class {
    initialize(headers) {
        this.headers = headers;
    }

    async getLastFollowRequests() {
        try {
            let { data } = await axios.get(
                "https://i.instagram.com/api/v1/friendships/pending/",
                { headers: this.headers }
            );
            return data.users;
        } catch ({ response: { data } }) {
            throw new Error(data);
        }
    }
    async acceeptFollowRequest(userid) {
        try {
            let { data } = await axios.post(
                `https://i.instagram.com/api/v1/friendships/approve/${userid}/`,
                "",
                { headers: this.headers }
            );
            return data;
        } catch ({ response: { data } }) {
            throw new Error(data);
        }
    }
}
