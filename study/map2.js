const userList = [
    {userId:"1", firstName:"one", lastName: "two", yyyymmdd:"20200327", phone:"010-1234-1234", address: "Seoul"},
    {userId:"2", firstName:"three", lastName: "four", yyyymmdd:"20201204", phone:"010-1234-1111", address: "London"},
    {userId:"3", firstName:"five", lastName: "six", yyyymmdd:"20200727", phone:"010-1234-2222", address: "Paris"},
];

const mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// console.log(parseInt("05"));
// console.log(mon[parseInt("05")-1]);



const newUserList = userList.map(u => (
    {
        userId:u.userId, 
        firstName:u.firstName, 
        lastName:u.lastName, 
        fullName:u.firstName + '' +u.lastName, 
        yyyymmdd:u.yyyymmdd, 
        year: u.yyyymmdd.substring(0, 4),
        month: u.yyyymmdd.substring(4,6),
        day:u.yyyymmdd.substring(6,8),
        usDateFormat: mon[parseInt(u.yyyymmdd.substring(4,6))-1] + " " + parseInt(u.yyyymmdd.substring(6,8)) + ", " + u.yyyymmdd.substring(0,4),
        phone:u.phone, 
        address:u.address
    }));


console.log(newUserList);