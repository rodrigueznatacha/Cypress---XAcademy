// ********************************************************
// Todo lo relacionado con Login, Logout, Registro, Roles
// ********************************************************

Cypress.Commands.add('login',(user, pass)=>{
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type(user)
    cy.get('[data-test="password"]').type(pass)
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory.html')
})
