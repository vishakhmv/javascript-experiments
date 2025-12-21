let data = "Some secrete data";

class User {
  name;
  email;

  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log(data);
  }
}

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editDate() {
    data = "Some new value";
  }
}

let arun = new Admin("Arun", "arum@gmail.com");
arun.editDate();
let arjun = new User("Arjun", "arjun@gmail.com");
arjun.viewData();