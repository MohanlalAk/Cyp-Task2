

describe('Test', function () {
  it('Home', () => {
    cy.visit('https://www.jogetcloud.com/subscribe-managed-services.html');
    cy.contains('Subscribe to Joget Cloud Managed Services').should('be.visible');
    cy.xpath('/html/body/div[3]/div[3]/div/div[1]/div/div/div/div/div[1]/div/div/table/tbody/tr/td[2]/div').should('contain', "Please use this form to send in a Subscription Order for Joget Cloud Managed Services. Alternatively, you can send an email to info[@]jogetcloud.com if you have any questions");

  });
});

describe('Test Case', function () {
  it('Package', function () {

    // Silver
    cy.visit('https://ondemand.cloud.joget.com/jw/web/embed/userview/jogetCloud/v/_/mssignup');

    cy.xpath('/html/body/div/div/div/div/main/div/div[1]/fieldset/form/div[1]/div[2]/div/select')
      .select('Silver');



    cy.get('.field5 > .form-cell-value > table > tbody > :nth-child(1) > td').should('be.visible'); // Verify the strong element with "SILVER"
    cy.get('.field5 > .form-cell-value > table > tbody > :nth-child(2) > td > span').should('be.visible'); // Verify the span element with "For enterprises"
    cy.get('.field5 > .form-cell-value > table > tbody > :nth-child(2) > td > div').should('be.visible'); // Verify the div elements with text "Dedicated Single Server Instance" and "Starts from"

    cy.get('.field5 > .form-cell-value > table > tbody > :nth-child(3) > [width="20%"]').should('be.visible'); // Verify the div elements with price and per month text
    cy.get('.field5 > .form-cell-value > table > tbody > :nth-child(3) > :nth-child(2)').should('be.visible'); // Verify the ul element with the list items
    //cy.get('table tbody tr td ul li').should('be.visible'); // Verify each list item in the ul element
    cy.get('#section6 > .form-column > :nth-child(4)').should('be.visible', 'One-Time Provisioning and Setup Fee $ ')
    cy.get('#section6 > .form-column > :nth-child(4)').should('exist', "600")
    cy.get('#section6 > .form-column > :nth-child(5)').should('be.visible').within(() => {
      // Select "2 CPU with 8GB RAM x 1 Instance"
      cy.get('option[value="300"]').then((option) => {
        cy.xpath('/html/body/div/div/div/div/main/div/div[1]/fieldset/form/div[2]/div[2]/div[4]/select').select(option.val());
      });



      // Select "4 CPU with 16GB RAM x 1 Instance"
      cy.get('option[value="600"]').then((option) => {
        cy.xpath('/html/body/div/div/div/div/main/div/div[1]/fieldset/form/div[2]/div[2]/div[4]/select').select(option.val());
      });



      // Select "8 CPU with 32GB RAM x 1 Instance"
      cy.get('option[value="1200"]').then((option) => {
        cy.xpath('/html/body/div/div/div/div/main/div/div[1]/fieldset/form/div[2]/div[2]/div[4]/select').select(option.val());
      });
    });

    // Gold

    cy.wait(2000)
    cy.xpath('/html/body/div/div/div/div/main/div/div[1]/fieldset/form/div[1]/div[2]/div/select')
      .select('Gold');

    cy.get('.field5_1 > .form-cell-value > table > tbody > :nth-child(1) > td').should('be.visible'); // Verify the strong element with "Gold"
    cy.get('.field5_1 > .form-cell-value > table > tbody > :nth-child(2) > td > span').should('be.visible'); // Verify the span element with "For enterprises"
    cy.get('.field5_1 > .form-cell-value > table > tbody > :nth-child(2) > td > div').should('be.visible'); // Verify the div elements with text "Dedicated Single Server Instance" and "Starts from"

    cy.get('.field5_1 > .form-cell-value > table > tbody > :nth-child(3) > [width="20%"]').should('be.visible'); // Verify the div elements with price and per month text
    cy.get('.field5_1 > .form-cell-value > table > tbody > :nth-child(3) > :nth-child(2)').should('be.visible'); // Verify the ul element with the list items
    //cy.get('table tbody tr td ul li').should('be.visible'); // Verify each list item in the ul element
    cy.get('#section6_1 > .form-column > :nth-child(4)').should('be.visible', 'One-Time Provisioning and Setup Fee $ ')
    cy.get('#section6_1 > .form-column > :nth-child(4)').should('exist', "600")
    cy.get('#section6_1 > .form-column > :nth-child(5)').should('be.visible').within(() => {
      // Select "2 CPU with 8GB RAM x 1 Instance"
      cy.get('option[value="500"]').then((option) => {
        cy.xpath('/html/body/div/div/div/div/main/div/div[1]/fieldset/form/div[6]/div[2]/div[4]/select').select(option.val());
      });



      // Select "4 CPU with 16GB RAM x 1 Instance"
      cy.get('option[value="1000"]').then((option) => {
        cy.xpath('/html/body/div/div/div/div/main/div/div[1]/fieldset/form/div[6]/div[2]/div[4]/select').select(option.val());
      });



      // Select "8 CPU with 32GB RAM x 1 Instance"
      cy.get('option[value="2000"]').then((option) => {
        cy.xpath('/html/body/div/div/div/div/main/div/div[1]/fieldset/form/div[6]/div[2]/div[4]/select').select(option.val());
      });

      // Platinium
      cy.wait(2000)
      cy.xpath('/html/body/div/div/div/div/main/div/div[1]/fieldset/form/div[1]/div[2]/div/select')
        .select('Platinum');

      cy.xpath('//*[@id="section6_1_1"]/div[2]/div[1]/div[1]/table/tbody/tr[1]/td').should('be.visible'); // Verify the strong element with "Platinium"
      cy.xpath('/html/body/div/div/div/div/main/div/div[1]/fieldset/form/div[10]/div[2]/div[1]').should('be.visible'); // Verify the span element with "For enterprises"
      cy.xpath('/html/body/div/div/div/div/main/div/div[1]/fieldset/form/div[10]/div[2]/div[1]').should('be.visible'); // Verify the div elements with text "Dedicated Single Server Instance" and "Starts from"

      cy.xpath('/html/body/div/div/div/div/main/div/div[1]/fieldset/form/div[10]/div[2]/div[1]').should('be.visible'); // Verify the div elements with price and per month text
      cy.xpath('/html/body/div/div/div/div/main/div/div[1]/fieldset/form/div[10]/div[2]/div[1]').should('be.visible'); // Verify the ul element with the list items
      //cy.get('table tbody tr td ul li').should('be.visible'); // Verify each list item in the ul element
      cy.xpath('/html/body/div/div/div/div/main/div/div[1]/fieldset/form/div[10]/div[2]/div[1]').should('be.visible', 'One-Time Provisioning and Setup Fee $ ')
      cy.xpath('/html/body/div/div/div/div/main/div/div[1]/fieldset/form/div[10]/div[2]/div[1]').should('exist', "1000")
      cy.xpath('/html/body/div/div/div/div/main/div/div[1]/fieldset/form/div[10]/div[2]/div[1]').should('be.visible').within(() => {
        // Select "2 CPU with 8GB RAM x 1 Instance"
        cy.wait(2000); // Add a wait time to ensure elements are loaded

        // Select "2 CPU with 8GB RAM x 3 Instances"
        cy.xpath('/html/body/div/div/div/div/main/div/div[1]/fieldset/form/div[10]/div[2]/div[4]/select').select('900');


        cy.wait(2000); // Add a wait time to ensure elements are loaded

        // Select "2 CPU with 8GB RAM x 3 Instances"
        cy.xpath('/html/body/div/div/div/div/main/div/div[1]/fieldset/form/div[10]/div[2]/div[4]/select').select('1800');


        cy.wait(2000);

        // Select "2 CPU with 8GB RAM x 3 Instances"
        cy.xpath('/html/body/div/div/div/div/main/div/div[1]/fieldset/form/div[10]/div[2]/div[4]/select').select('3600');
        cy.xpath('//*[@id="section9"]//select') // Select the appropriate select element using XPath
          .select('Amazon Web Services');
        //Radio
        cy.xpath("//div[@id='country']//div[@class='form-cell']").should('be.visible', "US East (N. Virginia)")
        cy.xpath("//div[@id='country']//div[@class='form-cell']").should('be.visible', "US East (Ohio)")
        cy.xpath("//div[@id='country']//div[@class='form-cell']").should('be.visible', "US West (N. California)")
        cy.xpath("//div[@id='country']//div[@class='form-cell']").should('be.visible', "US West (Oregon)")
        cy.xpath("//div[@id='country']//div[@class='form-cell']").should('be.visible', "Canada (Central)")
        cy.xpath("//div[@id='country']//div[@class='form-cell']").should('be.visible', "EU (Ireland)")
        cy.xpath("//div[@id='country']//div[@class='form-cell']").should('be.visible', "EU (Frankfurt)")
        cy.xpath("//div[@id='country']//div[@class='form-cell']").should('be.visible', "EU (London)")
        cy.xpath("//div[@id='country']//div[@class='form-cell']").should('be.visible', "Asia Pacific (Tokyo)")
        cy.xpath("//div[@id='country']//div[@class='form-cell']").should('be.visible', "Asia Pacific (Seoul)")
        cy.xpath("//div[@id='country']//div[@class='form-cell']").should('be.visible', "Asia Pacific (Singapore)")
        cy.xpath("//div[@id='country']//div[@class='form-cell']").should('be.visible', "Asia Pacific (Sydney)")
        cy.xpath("//div[@id='country']//div[@class='form-cell']").should('be.visible', "Asia Pacific (Mumbai)")
        cy.xpath("//div[@id='country']//div[@class='form-cell']").should('be.visible', "Asia Pacific (Jakarta)").click()

        //Billing
        cy.xpath("//span[normalize-space()='Billing']").should('be.visible', "Billing")
        cy.xpath("//body/div[@id='page']/div[@id='main']/div[@class='row-fluid']/div[@id='content']/main/div[@id='mssignup']/div[@class='viewForm-body-content']/fieldset[@id='form-canvas']/form[@id='jogetCloudManagedServiceForm']/div[@id='billing']/div[@class='form-column']/div[1]")
          .should('be.visible', "Monthly Amount ")

        cy.xpath("//body/div[@id='page']/div[@id='main']/div[@class='row-fluid']/div[@id='content']/main/div[@id='mssignup']/div[@class='viewForm-body-content']/fieldset[@id='form-canvas']/form[@id='jogetCloudManagedServiceForm']/div[@id='billing']/div[@class='form-column']/div[1]")
          .should('be.visible', "$ 3,600.00")

        cy.xpath("//body/div[@id='page']/div[@id='main']/div[@class='row-fluid']/div[@id='content']/main/div[@id='mssignup']/div[@class='viewForm-body-content']/fieldset[@id='form-canvas']/form[@id='jogetCloudManagedServiceForm']/div[@id='billing']/div[@class='form-column']/div[1]")
          .should('be.visible', "Subscription Billing Cycle ")

        cy.xpath("//label[normalize-space()='Quarterly']").click()//Quartl
        cy.xpath("//label[normalize-space()='Half-yearly']").click()// Half Yearly
        cy.xpath("//label[normalize-space()='Annually']").click()//Anually

        // subtotal
        cy.xpath("//label[normalize-space()='Subtotal']").should('be.visible', "Subtotal ")
        cy.xpath("//input[@id='Subtotal']").should('exist')
        cy.xpath("//div[@id='section16_1']//div[1]//div[1]").should("exist")

        //Grand Total
        cy.xpath("//div[@id='section8']//div[contains(@class,'form-column')]//div[1]").should('be.visible', "Current Billing (including the provisioning fees) ")
        cy.xpath("//input[@id='grandTotal']").should('exist') //Current Billing (including the provisioning fees)

        cy.xpath("//label[normalize-space()='Subsequent Billing Amount for Each Cycle']").should('be.visible', "Subsequent Billing Amount for Each Cycle ")
        cy.xpath("//input[@id='subBilling']").should('exist')

        cy.xpath("//label[@for='additionalRequest']").should('be.visible', "Additional Requirements or Information ")

        //Customer Billing Information
        cy.xpath("//label[@for='firstName']").should('be.visible', "First Name ")
        cy.xpath("//label[@for='lastName']").should('be.visible', "Last Name ")
        cy.xpath("//label[@for='companyName']").should('be.visible', "Company Name ")
        cy.xpath("//label[@for='billingAddress']").should('be.visible', "Billing Address ")
        cy.xpath("//label[@for='email']").should('be.visible', "Email Address ")
        cy.xpath("//label[@for='phoneNo']").should('be.visible', "Phone Number ")
        cy.xpath("//div[@id='section1']//div[1]//label[1]").should('be.visible', "Country ")
        cy.xpath("//div[@id='section1']//div[1]//label[1]").should('be.visible', "Captcha ")

        cy.xpath("//li[contains(text(),'After we have received your subscription order, we')]").should('be.visible', "After we have received your subscription order, we will follow up by sending you an invoice or we may send you an email to request for more information. Please ensure that your email address is valid.")
        cy.xpath("//li[contains(text(),'A copy of this subscription order will be sent to ')]").should('be.visible', "A copy of this subscription order will be sent to your email for your record.")
        cy.xpath("//li[contains(text(),'By submitting this form, you hereby agree to the t')]").should('be.visible', "By submitting this form, you hereby agree to the terms as stated in our ")

        cy.xpath("//input[@id='submit']").should('be.visible', "")
        cy.xpath("//button[@id='cancel']").should('be.visible')
      });





    });


  });
});
