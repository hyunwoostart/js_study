const object = {
    name: '별코딩',
    main: function () {
        console.log(this);
    }.bind({name: "멋진 객체"}),
};

object.main();