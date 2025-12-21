class User {
  name;
  email;

  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log(this.name);
    console.log(this.email);
  }
}

let arjun = new User("Arjun", "arjun@gmail.com");
arjun.viewData();
let varun = new User("Varun", "varun@gmail.com");
varun.viewData();
