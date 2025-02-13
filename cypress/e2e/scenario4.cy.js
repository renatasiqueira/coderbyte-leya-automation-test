describe('Test Scenario 4', () => {

    beforeEach(() => {
      
      cy.visit('https://www.leyaonline.com/pt/') // Go to the Homepage
    
    });
  
    it('Search for "1984" and validate book details', () => {
       
        cy.get('#searchbar-large').click();
    
        cy.get('#searchbar-large').type('1984{enter}');
        
        cy.wait(2000);
        
        cy.get('#bookcard_74653 > .compare-btn > .more').click();

        cy.get('.add-to-cart').click();

        cy.get('.b-count').should('contain', '1');
        
    });
  
  });
  