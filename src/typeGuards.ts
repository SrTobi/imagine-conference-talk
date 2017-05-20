

interface Cat {
    meow: () => void
}

interface Dog {
    bark: (msg: string) => void
}


function isCat(animal: any): animal is Cat {
    return animal.meow !== undefined;
}

function say(animal: Cat | Dog) {
    if (isCat(animal)) {
        animal.meow();
    }
}

