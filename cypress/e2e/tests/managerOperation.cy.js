import AddCustomer from "../../pageobject/addCustomerPage"
import Dashboard from "../../pageobject/dashboardpage"
import Manager from "../../pageobject/managerpage"

describe('This is Manager Operations validation suite', function(){

    const addCustomer = new AddCustomer
    const managerPage = new Manager
    const dashboardPage = new Dashboard

    beforeEach(function(){
        cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/login')
        cy.wait(1000)
    })

    it.only('Add A new Customer', function(){
        dashboardPage.managerLogin().click()
        managerPage.addCustomer().click()
        addCustomer.addButton().click()
        addCustomer.firstname().type('Sample')
        addCustomer.lastname().type('Johny')
        addCustomer.postcode().type('MKP5GH')
        addCustomer.addButton().click()
        cy.wait(2000)

    })

    it('Open A new Account', function(){

    })

    it.only('Delete the Customer from the existing list', function(){
        dashboardPage.managerLogin().click()
        managerPage.addCustomer().click()
        managerPage.customerButton().click()


    })
})