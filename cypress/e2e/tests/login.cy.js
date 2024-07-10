import Customer from "../../pageobject/customerpage"
import Dashboard from "../../pageobject/dashboardpage"
import Manager from "../../pageobject/managerpage"

describe('Test Dashboard Page and Validate the Customer and Manager Login pages', function(){
    beforeEach(function(){
        cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/login')
        cy.wait(4000)
    })

    const dashboardPage = new Dashboard
    const cusomterPage = new Customer
    const managerPage = new Manager

    it.only('Validate the Dashboard page', function(){
        dashboardPage.customerLogin().should('have.text', 'Customer Login')
        dashboardPage.customerLogin().click()
        cy.wait(1500)
        cusomterPage.customerDropdown().isVisible()
        
    })

    it('Validate the Manager login and verify the UI elements', function(){
        dashboardPage.managerLogin().click()
        cy.wait(500)
        managerPage.addCustomer().should('contain.text', 'Add Customer')
        managerPage.openAccount().should('contain.text', 'Open Account')
        managerPage.customerButton().should('contain.text', 'Customer')

    })

    it('Validate the customer page and verify the UI components in the Customer Page', function(){

    })
})