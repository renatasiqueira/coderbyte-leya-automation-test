describe('Test Scenario 1', () => {

 it('Passes', () => {

  cy.visit('/')
  
 });

  it('Verify that name George appears when the book "O Triunfo dos Porcos" is displayed on the list', () => {

    cy.get('#searchbar-large').click();

    cy.get('#searchbar-large').type('George{enter}');

    cy.get('button.searchbar-large').first().click();

    cy.get('#bookcard_83457').should('contain', 'O Triunfo dos Porcos'); 
    
    cy.get('#bookcard_83457').click();

  }); 

});
