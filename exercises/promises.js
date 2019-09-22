function randomTrueOrFalse() {
    return Math.random() < 0.5;
}

function fetchSomeData() {
    return new Promise((resolve, reject) => {
        if(randomTrueOrFalse()) {
            resolve(['a', 'b', 'c']);
        } else {
            reject(new Error('Error description'));
        }
    });
}

fetchSomeData()
    .then(
        data => {console.log('success', data)},
        error => { console.log('error', error) }
    );