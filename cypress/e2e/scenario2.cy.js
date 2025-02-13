describe('Test Scenario 2', () => {

    beforeEach(() => {
      
      cy.visit('/') 
    
    });
  
    it('Search for "1984" and validate book details', () => {
       
        cy.get('#searchbar-large').click();
    
        cy.get('#searchbar-large').type('1984{enter}');
        
        cy.wait(2000);
        
        cy.contains('1984').click();
        
        cy.get('#bookcard_74653').should('contain', 'GEORGE ORWELL');

    
        cy.get('#bookcard_74653').click();
        
        cy.get('.sinopse > .container > .row').should('contain', 'ISBN')
        
        cy.get('._sinpose-address > ul > :nth-child(1)').should('contain', '9789722071550');
        
        cy.get('._sinpose-address > ul > :nth-child(6)').should('contain', '344');
        
        cy.get('._sinpose-address > ul > :nth-child(5)').should('be.visible').and('contain', '235 x 157 x 23 mm');
    });
  
  });
  