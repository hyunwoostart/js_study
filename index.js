function main() {
    console.log(this);
}

const mainBind = main.bind({ name: "hi" });
const mainBindBind = mainBind.bind({})
mainBindBind();