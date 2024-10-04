const myLoder = () => {
    return new Promise((resolved, reject) => {
        const success = Math.random();
        if (success <= 0.5) {
            resolved(success)
        }
        else {
            reject(success)
        }
    })
}


myLoder()
    .then(data => console.info('resovled Data ====>', data))
    .catch(err => console.error('Rejected =>',err))


    