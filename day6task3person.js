class Person {
    constructor(firstName, lastName, age, country="India", city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    getPersonInfo() {
      let fullName = this.getFullName();  
      let info = `${fullName} is ${this.age} years old lives ${this.city}, ${this.country}.`
      return info;
    }  
    
  }
  const p1= new Person("abc","def",25,"India","Hyderabad");
  console.log(p1.getPersonInfo());

  // output
  // abc def is 25 years old lives Hyderabad, India.
