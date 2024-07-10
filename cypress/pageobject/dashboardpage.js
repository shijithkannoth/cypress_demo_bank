class Dashboard{

    customerLogin(){
        return cy.get("button[ng-click='customer()']")
    
    }

    managerLogin(){
        return cy.get("button[ng-click='manager()']")

    }

    homeButton(){
        return cy.get("//button[@class='btn home']")
    }

}

export default Dashboard;