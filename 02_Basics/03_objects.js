// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    "full name": "Lakshay",
    age: 18,
    [mySym]: "mykey1",
    location: "Jaipur",
    email: "lakshay@QurativeX.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Sunday"]
}

console.log(JsUser.email);
console.log(JsUser['email']);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "lakshay@QurativeX.com",
Object.freeze(JeUser),
JsUser.email = "lakshay@QurativeX.com",

console.log(JsUser);