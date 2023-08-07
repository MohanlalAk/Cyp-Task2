

describe('Validate Required field', () => {
  beforeEach(() => {
    cy.visit('https://ondemand.cloud.joget.com/jw/web/embed/userview/jogetCloud/v/_/mssignup');
  });

  it('Test Case For Select Package', () => {
    cy.xpath('/html/body/div/div/div/div/main/div/div[1]/fieldset/form/div[1]/div[2]/div/select').select('Gold');
    cy.get('.label').eq(28).should('be.visible', '600.00');

    // Compute Instance
    cy.get('option[value="1000"]').then((option) => {
      cy.xpath('/html/body/div/div/div/div/main/div/div[1]/fieldset/form/div[6]/div[2]/div[4]/select').select(option.val());
      cy.contains('Amazon Web Services Regions').should('be.visible', 'Amazon Web Services Regions');
      cy.xpath("//div[@id='country']//label[1]//input[1]").should('be.visible', 'US East (N. Virginia)').click();
    });

    // Billing
    cy.get('#billing > .form-section-title > span').should('contain', 'Billing');
    cy.get('#billing > .form-column > :nth-child(1) > .label').should('be.visible', 'Monthly Amount ');
    cy.get('#billing > .form-column > :nth-child(2)').should('contain', 'Subscription Billing Cycle');
    cy.xpath('/html/body/div/div/div/div/main/div/div[1]/fieldset/form/div[19]/div[2]/div[2]/div[1]').should('contain.text', ' Quarterly');
    cy.xpath('/html/body/div/div/div/div/main/div/div[1]/fieldset/form/div[19]/div[2]/div[2]/div[1]').should('contain.text', 'Half-yearly');
    cy.xpath('/html/body/div/div/div/div/main/div/div[1]/fieldset/form/div[19]/div[2]/div[2]/div[1]').should('contain.text', 'Annually');
    cy.xpath('/html/body/div/div/div/div/main/div/div[1]/fieldset/form/div[20]/div[2]/div/div[1]').should('contain', 'Billing cycle is');
    cy.xpath('/html/body/div/div/div/div/main/div/div[1]/fieldset/form/div[20]/div[2]/div/div[1]').should('contain', 'Quarterly');
    cy.xpath('/html/body/div/div/div/div/main/div/div[1]/fieldset/form/div[20]/div[2]/div/div[1]').should('contain', '. A renewal invoice will be sent 30 days before the expiry date.');

    cy.get('#billing > .form-column > :nth-child(3)').should('contain', 'Subtotal');

    // Grand Total
    cy.get('#section8 > .form-section-title > span').should('contain', 'Grand Total');
    cy.get('#section8 > .form-column > :nth-child(1)').should('contain', 'Current Billing (including the provisioning fees)');
    cy.get('#section8 > .form-column > :nth-child(2)').should('contain', 'Subsequent Billing Amount for Each Cycle ');
    cy.get('#section8 > .form-column > :nth-child(3)').should('contain', 'Additional Requirements or Information').invoke('text', 'Mohan');

    // CustomerBilling
    cy.get('#section1 > .form-section-title > span').should('be.visible', 'Customer Billing Information');



    cy.get('#section1 > .form-column > :nth-child(1)').type('Mohan');
    cy.get('#section1 > .form-column > :nth-child(2)').type('Lal');
    cy.get('#section1 > .form-column > :nth-child(3)').type('Joget Inc');
    cy.get('#section1 > .form-column > :nth-child(4)').type('Billing Address');
    cy.get('#section1 > .form-column > :nth-child(5)').type('mohan1234567@gmail.com');
    cy.get('#section1 > .form-column > :nth-child(6)').type('12345_67890');


    // Click the submit button
    cy.get('#submit').should('be.visible').click();

    cy.get('#section1 > .form-column > :nth-child(1) > .label').then(($label) => {
      const labelText = $label.text().trim();
      if (labelText.includes('Missing required value')) {
        cy.log("First Name * Missing required value");
      } else {
        cy.get('#section1 > .form-column > :nth-child(1) > .label')
          .should('be.visible');
      }
    });

    cy.get('#section1 > .form-column > :nth-child(2) > .label').then(($label) => {
      const labelText = $label.text().trim();
      if (labelText.includes('Missing required value')) {
        cy.log("Last Name * Missing required value");
      } else {
        cy.get('#section1 > .form-column > :nth-child(2) > .label')
          .should('be.visible');
      }
    });
    cy.get('#section1 > .form-column > :nth-child(3) > .label').then(($label) => {
      const labelText = $label.text().trim();
      if (labelText.includes('Missing required value')) {
        cy.log("Company Name * Missing required value");
      } else {
        cy.get('#section1 > .form-column > :nth-child(3) > .label')
          .should('be.visible');
      }
    });
    cy.get('#section1 > .form-column > :nth-child(5) > .label').then(($label) => {
      const labelText = $label.text().trim();
      if (labelText.includes('Missing required value')) {
        cy.log("Email Address * Missing required value");
      } else {
        cy.get('#section1 > .form-column > :nth-child(5) > .label')
          .should('be.visible');
      }
    });
    cy.get('#section1 > .form-column > :nth-child(6) > .label').then(($label) => {
      const labelText = $label.text().trim();
      if (labelText.includes('Missing required value')) {
        cy.log("Phone Number * Missing required value");
      } else {
        cy.get('#section1 > .form-column > :nth-child(6) > .label')
          .should('be.visible');
      }
    });

    cy.get('#section1 > .form-column > :nth-child(7) > .label').then(($label) => {
      const labelText = $label.text().trim();
      if (labelText.includes('Missing required value')) {
        cy.log("Country  * Missing required value");
      } else {
        cy.get('#section1 > .form-column > :nth-child(7) > .label')
          .should('be.visible');
      }
    });


    /*// Verify error message for missing first name field
    
    cy.get('#section1 > .form-column > :nth-child(1) > .label')
    
          .should('contain','Missing required value').log("First Name * Missing required value")
    
          cy.get('#section1 > .form-column > :nth-child(2)')
          .should('contain','Missing required value').log("Last Name * Missing required value")
    
          cy.get('#section1 > .form-column > :nth-child(3)')
          .should('contain','Missing required value').log("Company Name * Missing required value")
    
          cy.get('#section1 > .form-column > :nth-child(6)')
          .should('contain','Missing required value').log("Phone Number * Missing required value")
          */
  });
});
