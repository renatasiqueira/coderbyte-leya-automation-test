describe('Test Scenario 6', () => {

    it('Passes', () => {

     cy.visit('/')
     
    });
   
    it('Register with e-mail', () => {

        cy.get('.icon-login').click()

        cy.get('.want-registration').click()

        cy.get('#login-nome-s').type('Renata')

        cy.get('#login-email-s').type('renatabssiqueira@gmail.com')

        cy.get('#login-email-s-confirm').type('renatabssiqueira@gmail.com')

        cy.get('#login-pass-s').type('123456789')

        cy.get('#login-pass-s-confirm').type('123456789')

        cy.get(':nth-child(6) > .form-check').click()

        cy.get('.login-btn').click()

    }); 
   
   });