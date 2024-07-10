class Manager{
    addCustomer(){
        return cy.get(".btn.btn-lg.tab[ng-class='btnClass1']")
    }

    openAccount(){
        return cy.get(".btn.btn-lg.tab[ng-class='btnClass2']")
    }

    customerButton(){
        return cy.get(".btn.btn-lg.tab[ng-class='btnClass3']")
    }

}

export default Manager