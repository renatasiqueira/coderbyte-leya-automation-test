describe('Test Scenario 6', () => {

    beforeEach(() => {
        // Visita o site antes de executar os testes
        cy.visit('https://www.leyaonline.com/pt/');
    });
   
    it('Login', () => {

        cy.get('.icon-login').click()

        cy.get('#login-email').click()

        cy.get('#login-email').type('renatabssiqueira@gmail.com')

        cy.get('#login-pass').click()

        cy.get('#login-pass').type('123456789')

        cy.get('.login-btn').click()

    }); 
   
   });