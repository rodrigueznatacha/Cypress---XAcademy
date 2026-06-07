describe('SauceDemo - Complete Purchase Flows', () => {

  beforeEach(()=>{
    cy.login('standard_user','secret_sauce')
  })

  it('successful purchase with one product', () => {

    // Agregar producto al carrito
    cy.addToCart('sauce-labs-bike-light')
    cy.get('.shopping_cart_badge').should('have.text', '1')

    // Ir al carrito
    cy.goToCart()
    cy.get('.cart_item').should('have.length', 1)
    // cy.wait(5000) 

    // Iniciar checkout
    cy.CheckoutOrder('Juan','Dudoso','5000')
    
    // Confirmar pedido
    cy.confirmOrder()
  })

  
  it('successful purchase with two products', () => {

    // Agregar dos productos
    cy.addToCart('sauce-labs-backpack')
    cy.get('.shopping_cart_badge').should('have.text', '1')
    cy.addToCart('sauce-labs-bike-light')
    cy.get('.shopping_cart_badge').should('have.text', '2')
    
    // Ir al carrito
    cy.goToCart()
    cy.get('.cart_item').should('have.length', 2)

    // Iniciar checkout
    cy.CheckoutOrder('Juan', 'Pérez', '5000')

    // Confirmar pedido
    cy.confirmOrder()
  })

 
  it('successful logout after a purchase', () => {

    // Login 
    cy.login('standard_user','secret_sauce')

    // Agregar producto y completar compra
    cy.addToCart('sauce-labs-backpack')
    cy.get('.shopping_cart_badge').should('have.text', '1')
    
    //ir al carrito y checkout 
    cy.goToCart()
    cy.CheckoutOrder('Juan', 'Pérez', '5000')
    cy.confirmOrder()

    // Logout 
    cy.logout()
  })

})