
describe('Verify all links', () => {
    beforeEach(() => {
        cy.viewport(1366, 768)
        cy.wait(2000)
        cy.visit('https://www.jogetcloud.com/subscribe-managed-services.html');

    })
    it('Test case to verify on Home Screen', () => {
        cy.contains('Subscribe to Joget Cloud Managed Services').should('be.visible')
        cy.contains('Please use this form to send in a Subscription Order for Joget Cloud Managed Services. Alternatively, you can send an email to info[@]jogetcloud.com if you have any questions')
            .should('exist').log('Test case will pass successfully');
    })
    it('On Demand', () => {
        cy.get('.wsite-menu-item').eq(0).click();
        cy.contains('Joget').should('exist');
        cy.contains('DX ').should('be.visible').should('have.css', 'color')
            .and('eq', 'rgb(255, 255, 255)');
        cy.contains('On-Demand').should('be.visible')
        cy.log('the test case will pass sucessfully')
    })
    it('Managed Service', () => {
        cy.get('.wsite-menu-item').eq(1).click();
        cy.contains('Joget').should('exist');
        cy.contains('DX ').should('be.visible').should('have.css', 'color')
        cy.contains('Joget Cloud Managed Services is a BYOL (Bring Your Own License) service targeted at customers who want to outsource their Joget DX')
            .should('exist').log('Test case pass')
    })

    it('Community and Knowledge Base', () => {
        //----------------------------Community and Knowledge Base------------------------------

        // Click on the element with class 'wsite-multicol-col' at index 3
        cy.get('.wsite-multicol-col').eq(3).click();

        // Check if an element with the text 'Community and Knowledge Base' exists on the page
        cy.contains('Community and Knowledge Base').should('exist');

        // Locate the element with text 'Community and Knowledge Base' using XPath,
        // remove the 'target' attribute from it, and click on it
        cy.xpath("//a[normalize-space()='Community and Knowledge Base']").invoke('removeAttr', 'target').click();

        // Switch to a new origin (https://dev.joget.org) and execute the following tests within it
        cy.origin('https://dev.joget.org', () => {

            // Verify if the URL contains 'https://dev.joget.org' within a timeout of 10 seconds
            cy.url().should('include', 'https://dev.joget.org', { timeout: 10000 });

            // Verify if the page contains the text 'Joget DX 8 Knowledge Base'
            cy.contains('Joget DX 8 Knowledge Base').should('be.visible');

            // Verify if an element with class 'confluence-information-macro-body' is visible
            // and contains the specified text
            cy.get(".confluence-information-macro-body").should('be.visible', "Use the search bar above to quickly find the topics you're looking for!");

            // Verify if an element with a specific style contains certain text
            cy.get('[style="width:65%;min-width:65%;max-width:65%;"] > :nth-child(2)')
                .should('contain', "is an open source platform to easily build enterprise web apps for cloud and mobile.");

            // Reset the URL to the original URL ('https://www.jogetcloud.com/subscribe-managed-services.html')
            cy.visit('https://www.jogetcloud.com/subscribe-managed-services.html');
        });
    });
    it('Joget DX Translation', () => {
        cy.get('.wsite-multicol-col').eq(3).click();
        cy.contains('Joget DX Translation').should('exist')
        cy.xpath("//a[normalize-space()='Joget DX Translation']").invoke('removeAttr', 'target').click();
        cy.origin('https://translate.joget.org', () => {
            // Verify if the URL contains 'Translations for the Joget Open Source Project'
            cy.contains('Translations for the Joget Open Source Project', { timeout: 10000 }).should('be.visible', { retries: 3 });
            // Perform other tests and commands specific to 'https://translate.joget.org' here
            cy.get("#body").should('be.visible', "How to Contribute?");
            cy.get("body").should('contain', "1. Register and activate an account");

            // Reset the URL to the original URL ('https://www.jogetcloud.com/subscribe-managed-services.html')
            cy.visit('https://www.jogetcloud.com/subscribe-managed-services.html');
        });
    })
    it('Joget Marketplace', () => {
        
        cy.contains('Joget Marketplace').should('be.visible',"Joget Marketplace")
        cy.xpath("//a[normalize-space()='Joget Marketplace']").invoke('removeAttr', 'target').click();
        cy.origin('https://marketplace.joget.org', () => {
            cy.contains('Joget Marketplace', { timeout: 10000 }).should('be.visible', { retries: 3 });
            cy.get("#header-info").should('be.visible', "Joget Marketplace");
            cy.get("#mp_partnerBanners").should('contain', "Featured");
            cy.visit('https://www.jogetcloud.com/subscribe-managed-services.html');
        })
    })




    it('Download Joget DX On-Premise', () => {
        cy.contains('Download Joget DX On-Premise').should('exist')
        cy.xpath("//a[normalize-space()='Download Joget DX On-Premise']").invoke('removeAttr', 'target').click();
        cy.origin('https://www.joget.org', () => {
            cy.contains('www.joget.com', { timeout: 10000 }).should('be.visible', { retries: 3 });
            cy.get("#page-701").should('be.visible', "Download");
            cy.get("#page-701").should('contain', "Community Edition");
            cy.visit('https://www.jogetcloud.com/subscribe-managed-services.html');
        })
    })
    it('Open Source Repository', () => {
        cy.contains('Open Source Repository').should('exist')
        cy.xpath("//a[normalize-space()='Open Source Repository']").invoke('removeAttr', 'target').click();
        cy.origin('https://github.com', () => {
            cy.contains('Joget', { timeout: 10000 }).should('be.visible', { retries: 3 });
            cy.get(".pagehead.orghead.border-bottom-0.pt-0 ").should('be.visible', "Pinned");
            cy.get(".pagehead.orghead.border-bottom-0.pt-0 ").should('contain', "Open source no-code/low-code application platform for faster, simpler digital transformation.");
            cy.visit('https://www.jogetcloud.com/subscribe-managed-services.html');
        })
    })
    it('Joget Cloud in China', () => {
        cy.wait(2000)
        cy.contains('Joget Cloud in China').should('be.visible',"Joget Cloud")
        cy.xpath("//a[normalize-space()='Joget Cloud in China']").invoke('removeAttr', 'target').click();

        cy.origin('https://cloud.joget.cn', () => {
            cy.contains('Joget Cloud', { timeout: 20000 }).should('be.visible', { retries: 3 });
            cy.get(".s-title-group ").should('be.visible', "提供低代码/无代码企业应用程序开发和工作流自动化运行平台");
            cy.get(".s-title-group ").should('contain', "由捷得(Joget DX)提供支持");
            cy.visit('https://www.jogetcloud.com/subscribe-managed-services.html');
        })
    })

    it('Footer Links', () => {
        cy.wait(2000)
        cy.get('.wsite-multicol-col').eq(4).click()
        //cy.get('.paragraph').click()
        cy.contains('Home').click().should('be.visible', 'Joget Cloud')
        cy.contains('On-Demand').click().should('be.visible', 'Joget DX On-Demand');
        cy.contains('Managed Services').click().should('be.visible', 'Joget Cloud Managed Services')
        cy.contains('Google Workspace').click().should('be.visible', 'Joget Cloud Managed Services')
        cy.contains('Partners').click().should('be.visible', 'Partners')
        cy.contains('FAQ').click().should('be.visible', 'Frequently Asked Questions')
        cy.contains('Support Policy').click().should('be.visible', 'Support Policy')
        cy.contains('On-Demand Services Agreement').click().should('be.visible', 'Joget Cloud On-Demand Services Agreement')
        cy.contains('Managed Services Agreement').click().should('be.visible', 'Joget Cloud Managed Services Agreement')
        cy.contains('VPS Services Agreement').click().should('be.visible', 'Joget Cloud VPS Agreement')
        cy.contains('Security').click().should('be.visible', 'Security')
        cy.contains('Privacy Policy').invoke('removeAttr', 'target').click().should('be.visible', 'Privacy Policy')
        cy.contains('About').click().should('be.visible', 'About Joget Cloud')
    })

})

