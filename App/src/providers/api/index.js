const uri = "http://localhost:3333/";

export default class Api {

    static get(endPoint) {
        return fetch(uri + endPoint)
            .then(response => response.json());
    }

    static getExternal(url) {
        return fetch(url)
            .then(response => response.json());
    }

    static post(endPoint, data) {
        let header = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        };

        return fetch(uri + endPoint, header)
            .then(response => response.json());
    }

    static update(endPoint, data) {
        let header = {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        };

        return fetch(uri + endPoint, header)
            .then(response => response.json());
    }

    static delete(endPoint) {
        let header = {
            method: 'DELETE'
        };

        fetch(uri + endPoint, header)
            .then(response => response.json());
    }

}