const promise = new Promise((resolve, reject) => {
    setTimeout(()=> resolve(1), 1000)
})

    promise.then((value) => {
console.log(value);
}).catch((err) => {
        console.log(err.message);
})

User.find({}).then().then().then();