var users = [
        {
            name: "Michael",
            age: 37
        },
        {
            name: "John",
            age: 30
        },
        {
            name: "David",
            age: 27
        }
    ];

// 1) John's age
    console.log("The age of John is " + users[1].age); //target the object name, the location of the index, and then the class you want retrieved (object name = 'users', first index would be [0], and the class we want is either .name or .age, or .whatever is defined in the object).
    
// 2) First object
    console.log(users[0].name);

// 3)
for (var i = 0; i<users.length;i++){
console.log(users[i].name + " - " + users[i].age);
}