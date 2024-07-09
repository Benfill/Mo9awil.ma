export const fetchData = {
    post(url, data, callback) {
        fetch(url, {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json' 
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((responseData) => {
            callback(responseData);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    },
    get(url, callback) {
        fetch(url)
        .then((response) => response.json())
        .then((responseData) => {
            callback(responseData);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
};
