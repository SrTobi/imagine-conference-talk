
interface Person {
    name: string,
    age: number
}


type partial<A> = {
    [P in keyof A]?: A[P]
}


let p: partial<Person> = {
    name: "tobias"
}


function ensureProperty<A, K extends keyof A>(obj: A, prop: K, value: A[K]) {
    obj[prop] = obj[prop] || value;
}


ensureProperty(p, "age", null);


