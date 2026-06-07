//************************************************
// Formulario, pasos de pago y confirmaciones
//************************************************

Cypress.Commands.add('CheckoutOrder',(firstname, lastName, postalCode)=>{
    cy.get('[data-test="checkout"]').click()
    cy.url().should('include', '/checkout-step-one.html')  
    cy.get('[data-test="firstName"]').type(firstname)
    cy.get('[data-test="lastName"]').type(lastName)
    cy.get('[data-test="postalCode"]').type(postalCode)
    cy.get('[data-test="continue"]').click()
    cy.url().should('include', '/checkout-step-two.html')
})

Cypress.Commands.add('confirmOrder',()=>{
    cy.get('[data-test="finish"]').click()
    cy.url().should('include', '/checkout-complete.html')
    cy.get('.complete-header').should('have.text', 'Thank you for your order!')
})  


