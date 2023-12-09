const object = {
    name: '별코딩',
    main: function () {
        console.log(this);
        setTimeout(() => {
            console.log(this);
        }, 1000);
    },
};

object.main();

