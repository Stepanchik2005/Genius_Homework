class Abonent {
  constructor(options) {
    this.name = options.name;
    this.number = options.number;
  }

  set setInfo(infoUser) {
    this.name = infoUser.name;
    this.number = infoUser.number;
  }

  get getInfo() {
    console.log("My name is " + this.name);
    console.log("My NUMBER is " + this.number);
  }
}

const user = new Abonent({
  name: "Vanya",
  number: 500,
});
const user3 = new Abonent({
  name: "Ivan",
  number: 600,
});
const user2 = Object.create(user);

user2.setInfo = user3;

user2.getInfo;
