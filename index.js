const a = Object.freeze({
    x: 1,
    y: 2,
}
)

a.x = 3;

console.log(a);