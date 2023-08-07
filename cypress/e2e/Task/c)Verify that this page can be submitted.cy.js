
describe('Test suit for submition form', () => {
  it('Test case_Form submit successfully', () => {
    cy.visit('https://ondemand.cloud.joget.com/jw/web/embed/userview/jogetCloud/v/_/mssignup');

    cy.get('#section5 > .form-section-title > span').should('have.text', "Managed Services Packages")
    //cy.get('#section5 > .form-column > .form-cell').should('contain',"Select Package")
    cy.get('#section5 > .form-column > .form-cell')
      .should('contain', 'Select Package')
      .find('select') // Assuming the <select> element is a child of the targeted element
      .select('Silver');

    cy.get('#section6 > .form-column > :nth-child(5)')
      .should('contain', "Compute Instance")
      .find('select')
      .select('4 CPU with 16GB RAM x 1 Instance')

    cy.get('#section9 > .form-column > .form-cell')
      .should('contain', "Cloud Provider ")
      .find('select')
      .select('Amazon Web Services')

    cy.xpath('/html/body/div/div/div/div/main/div/div[1]/fieldset/form/div[15]/div[2]/div')
      .should('be.visible', 'Amazon Web Services Regions')
      .find(':radio')
      .should('be.visible')
      .check('us-east-1');

    cy.get('#billing > .form-section-title > span').should('be.visible', "Billing")
    cy.get('#billing > .form-column > :nth-child(1)').should('exist')
    cy.get('#billing > .form-column > :nth-child(2)').should('contain.text', "Subscription Billing Cycle ")
      .find(':radio')
      .should('be.visible')
      .check('12')

    cy.get('#billing > .form-column > :nth-child(3)').should('be.visible', "Subtotal")
    cy.get('#Subtotal').should('exist')
    cy.get('#section16_1 > .form-column > .form-cell > .form-cell-value').should('exist')

    cy.get('#section8 > .form-section-title > span').should('be.visible', 'Grand Total');
    cy.get('#section8 > .form-column > :nth-child(1)').should('contain.text', 'Current Billing (including the provisioning fees)');
    cy.get('#grandTotal').should('exist');
    cy.get('#section8 > .form-column > :nth-child(2)').should('be.visible', 'Subsequent Billing Amount for Each Cycle');
    cy.get('#subBilling').should('exist');
    cy.get('#section8 > .form-column > :nth-child(3)').should('be.visible', 'Additional Requirements or Information');
    cy.get('#additionalRequest').type("Please use this form to send in a Subscription Order for Joget Cloud Managed Services. Alternatively, you can send an email to info[@]jogetcloud.com if you have any questions");

    cy.get('#section1 > .form-section-title > span').should('be.visible', 'Customer Billing Information');
    cy.get('#section1 > .form-column > :nth-child(1)').type('Mohan');
    cy.get('#section1 > .form-column > :nth-child(2)').type('Lal');
    cy.get('#section1 > .form-column > :nth-child(3)').type('Joget Inc');
    cy.get('#section1 > .form-column > :nth-child(4)').type('Billing Address');
    cy.get('#section1 > .form-column > :nth-child(5)').type('mohan1234567@gmail.com');
    cy.get('#section1 > .form-column > :nth-child(6)').type('12345_67890');

    cy.get('.form-column > :nth-child(7)').should('be.visible', 'Country');
    cy.get('.chosen-single').click(); // Open the custom dropdown
    cy.get('.chosen-results li').contains('OTHERS').click(); // Select the "OTHERS" option
    cy.get('#section14 > .form-column > .form-cell > .form-cell-value').should('exist').log('pass')
    cy.get('#submit').click()

    cy.visit('https://www.jogetcloud.com/thank-you.html');

    cy.origin('https://www.jogetcloud.com', () => {
      cy.contains('Thank you for your purchase request. Our team will contact you as soon as possible.')
        .should('be.visible').log('The test case pass successfully');
    });









  })
})