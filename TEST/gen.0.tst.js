function* gen() {
    let count = 0;
    while(true) {
        let msg = yield ++count;
        console.log(msg);
    }
}

let iter = gen();
console.log(iter.next().value);
// 1
console.log(iter.next('magic').value);
