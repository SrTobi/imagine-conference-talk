/*
interface Options {
    probability?: number,
    readonly error_cb: (err: string) => void
};

function randomErrorCall(opts: Options) {
    let probability = (opts.probability || 0.5);
    if(probability < Math.random()) {
        opts.error_cb("blub");
    }
}

randomErrorCall({
    error_cb: (err) => { console.log(err); }
})
*/


function merge<A, B>(a: A, b: B): A & B {
    let res: any = {};
    for(let prop in a) {
        res[prop] = a[prop];
    }

    for(let prop in b) {
        res[prop] = b[prop];
    }

    return res;
}


let a = {
    x: 3
};

let b = {
    x: "test",
    y: 4
}

let c = merge(a, b);

c.

