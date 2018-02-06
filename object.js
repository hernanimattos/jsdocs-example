
/**
 * Represents a people.
 * @constructor
 * @param {string} name - The title of the book.
 * @param {string} email - The author of the book.
 * @param {string} tel - The author of the book.
 * @param {string} age - The author of the book.
 *
 */

class People{
	constructor(name, email, tel, age){
		this.name = name;
		this.email = email;
		this.tel = tel;
		this.age = age;

	}

	get name () {
		return this.name
	}

	get email (){
		return this.email;
	}
	get tel () {
		return this.tel;
	}

	get age () {
		return this.age;
	}


}
