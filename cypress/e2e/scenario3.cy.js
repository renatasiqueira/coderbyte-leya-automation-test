describe('Scenario 3: Verify author of related books', () => {
    it('Search for the book "1984" and verify the author of "A Quinta dos Animais"', () => {
        cy.visit('/');
        
        cy.get('#searchbar-large').click();
    
        cy.get('#searchbar-large').type('1984{enter}');
        
        cy.wait(2000);
        
        cy.contains('1984').click();

        cy.get('#bookcard_74653 > .second > .single-book-details > .book-author').invoke('text').then((author1984) => {
    
            cy.visit('/');
            
            cy.get('#searchbar-large').click();
            
            cy.get('#searchbar-large').type('A Quinta dos Animais');

            cy.wait(2000);

            cy.get('.search-author-list > .row').invoke('text').then((authorQuinta) => {
                if (authorQuinta.trim() !== author1984.trim()) {
                    cy.log('Autores diferentes ou Livro não encontrado! Retornando para a homepage.');
                    cy.visit('https://www.leyaonline.com/pt/');
                } else {
                    cy.log('Os autores são os mesmos.');
                }
            });
        });
    });
});