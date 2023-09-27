const MAIN_URL = "http://localhost:3001/"

describe('Main Page', () => {
    it('should navigate to the main pahe', () => {
      cy.visit(MAIN_URL)
      cy.get('h1').contains('Restaurant NEXT')
    })

    it('card info should be cero inital value', () => {
      cy.visit(MAIN_URL)
      cy.get('.order-submit').click()
      cy.get('.test-cart-info').contains("0")
    })
    
    it('should add carfInfo', () => {
      cy.visit(MAIN_URL)
      cy.get('.order-now-button').first().click()
      cy.get('.test-cart-info').contains("14")
    })

    it('should submit the carfInfo', () => {
      cy.visit(MAIN_URL)
      cy.get('.order-now-button').first().click()
      cy.get('.test-cart-info').contains("14")
      cy.get('.order-submit').click()
      cy.get('.test-cart-info').contains("0")
    })

    it('should add the first product two timesto the carfInfo', () => {
      cy.visit(MAIN_URL)
      cy.get('.order-now-button').first().click()
      cy.get('.order-now-button').first().click()
      cy.get('.test-cart-info').contains("28")
    })

  })
