describe('Test Scenario 5', () => {

    it('Passes', () => {

     cy.visit('/')
     
    });
   
    it('Change the background to dark mode', () => {

        cy.get('#darkmode').click();

    }); 

    it('Verifies that dark mode is applied', () => {

       cy.get('#darkmode').should('be.visible');
  
        cy.get('#main').should('have.css', 'background-color').and('not.eq', 'var(--bs-body-bg)'); 

    });
   
   });
   