function main() {
    console.log(this);
}

const object = {
    name: "별코딩",
    smallObject: {
        name: "작은 별코딩",
        main, 
    },
};

object.smallObject.main();


