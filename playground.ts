interface Serializable {
    serialize(): string;
}

class Customer implements Serializable {

    readonly firstName: string;
    lastName: string;

    serialize() {
        return this.firstName;
    }

}

console.log(new Customer());