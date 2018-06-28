export class User {
  firstName?: string;
  lastName?: string;

  constructor(lastName: string = null, firstName: string = null) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

}
