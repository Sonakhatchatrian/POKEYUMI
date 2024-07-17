describe('Home page initial display', () => {
  beforeEach(() => {
  
    cy.visit('/')
    cy.contains('Liste des pokemons :')
  });

  it('Shows some well known pokemons', () => {
    cy.visit('/')
    cy.contains('Magmar')
    cy.contains('Charmander')
    cy.contains('Carnivine')
    cy.contains('Togekiss')
  });
  it('Should add new pokemon to list',() => {
    cy.get('input[formcontrolname="name"]').type('POKEYUMI');
    cy.get('input[formcontrolname="imageUrl"]').type('https://i.ibb.co/d7MH2PL/YumYum.jpg');
    cy.get('input[formcontrolname="supertype"]').type('Pokemon');

    cy.get('input[type="submit"]').click();

    cy.get('[type="submit"]').should('be.disabled');
  });
});


