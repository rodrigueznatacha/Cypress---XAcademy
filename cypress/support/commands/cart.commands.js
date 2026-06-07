//*********************************************************
// Acciones del Carrito (agregar, quitar, validar contador)
// ********************************************************

Cypress.Commands.add('addToCart',(product)=>{
    cy.get(`[data-test="add-to-cart-${product}"]`).click()
})

Cypress.Commands.add('goToCart',()=>{
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart.html')
})