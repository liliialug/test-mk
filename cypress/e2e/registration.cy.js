describe('User registration', () => {
    it('User should be able to register on platform with name, surname and password', () => {
    // 1. As not-registreted user go to platform - Assign
    cy.visit('https://stars-inc.github.io/test/');
    // 2. Put name, surname, password not used before - Act
    cy.get(':nth-child(1) > :nth-child(1) > label').type('olivia');
    cy.get(':nth-child(2) > label').type('ololo');
    cy.get(':nth-child(2) > .input-field > label').type('1234');
    // 3. Submit data - Assert
    cy.get('.btn').click();
    cy.contains('Person area').should('be.visible');
    })

    it('User should not be able to register on platform without name', () => {
        // 1. As not-registreted user go to platform - Assign
        cy.visit('https://stars-inc.github.io/test/');
        // 2. Put name, surname, password not used before - Act
       
        cy.get(':nth-child(2) > label').type('ololo');
        cy.get(':nth-child(2) > .input-field > label').type('1234');
        // 3. Submit data - Assert
        cy.get('.btn').click();
        })
  })
  