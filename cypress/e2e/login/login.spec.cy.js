
import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
 let sel
   before(()=>{
   cy.fixture("selectors").then((data)=>{
	sel = data;
   })
})
Given(/^User is on remotepass page$/, () => {
    cy.visit('/')
	
});

When(/^I enter valid email$/, () => {
	cy.TypeAnyField(sel.email,sel.emailInput)

});

When(/^I enter valid password$/, () => {
    cy.TypeAnyField(sel.password,sel.passwordInput)
	
});

Then(/^I click the submit button$/, () => {
	cy.ClickAnyElement(sel.Submit)

});

