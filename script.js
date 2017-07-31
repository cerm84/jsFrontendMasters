var favorite = "Tesla Model S";

var person = {
    favorite: "Nissan Leaf",
    getFave: function() {
        return this.favorite;
    }
};

document.write(person.getFave());
document.write("<br>");
var func = person.getFave;
document.write(func());