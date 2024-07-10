class AddCustomer{

    firstname(){
        return cy.get("input[placeholder='First Name']")
    }

    lastname(){
        return cy.get("input[placeholder='Last Name']")
    }
    
    postcode(){
        return cy.get("input[placeholder='Post Code']")
    }

    addButton(){
        return cy.get("button[type='submit']")
    }

}

export default AddCustomer;