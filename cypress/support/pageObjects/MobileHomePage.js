import { should } from "chai";

class MobileHomePage {
    burgerMenuIcon = ('label > span > span');
    menuItems = ('nav.sc-tsFYE:first');
    casinoIcon =('nav.sc-tsFYE:first ul > li:nth-of-type(2)');
    casinoMenuItems = ('nav.sc-tsFYE:first ul > li:nth-of-type(2) ul')
    casinoMenuList = ('nav.sc-tsFYE:first ul > li:nth-of-type(2) ul.sc-WCkqM')
    liveCasinoIcon = ('nav.sc-tsFYE:first ul > li:nth-of-type(3)');
    liveCasinoMenuItems = ('nav.sc-tsFYE:first ul > li:nth-of-type(3) ul')
    liveCasinoMenuList = ('nav.sc-tsFYE:first ul > li:nth-of-type(3) ul.sc-WCkqM')
    promotionsIcon = ('nav.sc-tsFYE:first ul > li:nth-of-type(4)');
    promotionItems = ('nav.sc-tsFYE:first ul > li:nth-of-type(4) ul')
    promotionsList = ('nav.sc-tsFYE:first ul > li:nth-of-type(4) ul.sc-WCkqM')

    closeCookies() {
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
    }

    
    openMenu() {
        cy.get(this.burgerMenuIcon).should('be.visible').click();
    }

    verifyMenuVisibility() {
        cy.get(this.menuItems).should('be.visible');
    }

    verifyMenuItems(expectedItems) {
        cy.get(this.menuItems).then(($items) => {

            const actualItems = $items.map((_, el) => {
                return Cypress.$(el).text().trim()}).get();
            cy.log('Actual items:', actualItems);

            const visibleItems = actualItems.filter(item=> item.length > 0);
            cy.log('Filtered Visible Items:', visibleItems);

            expect(actualItems).to.have.members(expectedItems);
        });
        
    }

    clickCustomerSupport() {
        cy.contains('Customer Support').click();
    }

    verifyUrlContainsCustomerSupport() {
        cy.url().should('include', '/customer-support');
    }

    verifyPageTitle() {
        cy.get('header').contains('Boost Casino Support Center').should('be.visible');
    }

    clickCasino() {
        cy.get(this.casinoIcon).click();
    }

    verifyCasinoMenuOpen() {
        cy.get(this.casinoMenuItems).should('be.visible');
    }


    verifyCasinoMenuItems(expectedItems) {
        cy.get(this.casinoMenuItems).then(($items) => {
            const actualItems = $items.map((_, el) => {
                return Cypress.$(el).text().trim()}).get();
            cy.log('Actual Casino Menu Items:', actualItems);
            expect(actualItems).to.have.members(expectedItems);
    });
    }
    verifyLiveCasinoMenuItems(expectedItemsLive) {
        cy.get(this.liveCasinoMenuItems).then(($items) => {
            const actualItems = $items.map((_, el) => {
                return Cypress.$(el).text().trim()}).get();
            cy.log('Actual Live Casino Menu Items:', actualItems);
            expect(actualItems).to.have.members(expectedItemsLive);
    });
    }

    reopenMenuForCasino() {
        cy.get(this.burgerMenuIcon).should('be.visible').click();
        cy.get(this.menuItems).should('not.be.visible').then(() => {
            cy.get(this.burgerMenuIcon).click();
            
        })
        cy.get(this.casinoIcon).should('be.visible').click();
        cy.get(this.casinoMenuItems).should('be.visible');
        
    }
    reopenMenuForLiveCasino() {
        cy.get(this.burgerMenuIcon).should('be.visible').click();
        cy.get(this.menuItems).should('not.be.visible').then(() => {
            cy.get(this.burgerMenuIcon).click();
            
        })
        cy.get(this.liveCasinoIcon).should('be.visible').click();
        cy.get(this.liveCasinoMenuItems).should('be.visible');
        
    }

    reopenMenuForPromotions() {
        cy.get(this.burgerMenuIcon).should('be.visible').click();
        cy.get(this.menuItems).should('not.be.visible').then(() => {
            cy.get(this.burgerMenuIcon).click();
            
        })
        cy.get(this.promotionsIcon).should('be.visible').click();
        cy.get(this.promotionItems).should('be.visible');
        
    }

    clickCategoryAndVerifyUrls(category, expectedUrl) {
            
        this.reopenMenuForCasino();
    

        cy.get(this.casinoMenuList)
            .should('be.visible')
            .within(() => {
                cy.get('li').each(($el) => {
                    cy.wrap($el).then(($link) => {
                        const actualCategory = $link.text().trim();

                        if(actualCategory.toLowerCase() === category.toLowerCase()) {
                            cy.wrap($link).click();
                            cy.url().should('include', expectedUrl);
                            return false;
                        }
                    });
                });
            });
        }   
    clickLiveCasino() {
        cy.get(this.liveCasinoIcon).click();
    }

    verifyLiveCasinoMenuVisible() {
        cy.get(this.liveCasinoMenuList).should('be.visible');
    }

    clickLiveCasinoCategoryAndVerifyUrls(category, expectedUrl) {
            
        this.reopenMenuForLiveCasino();
    

        cy.get(this.liveCasinoMenuList)
            .should('be.visible')
            .within(() => {
                cy.get('li').each(($el) => {
                        const actualCategory = $el.text().trim();

                        if(actualCategory && actualCategory.toLowerCase() === category.toLowerCase()) {

                            cy.log('Live Casino Category found: ' + actualCategory);
                            cy.wrap($el).click();
                            cy.url().should('include', expectedUrl);
                            return false;
                        }
                    });
                });
            };
    clickPromotions() {
         cy.get(this.promotionsIcon).click();
    }    

    verifyPromotionsVisible() {
        cy.get(this.promotionsList).should('be.visible');
    }

    verifyPromotionsItems(expectedItemsPromotions) {
        cy.get(this.promotionItems).then(($items) => {
            const actualItems = $items.map((_, el) => {
                return Cypress.$(el).text().trim()}).get();
            cy.log('Actual Live Casino Menu Items:', actualItems);
            expect(actualItems).to.have.members(expectedItemsPromotions);
    });
    }

    clickPromotionsCategoryAndVerifyUrls(category, expectedUrl) {
            
        this.reopenMenuForPromotions();
    

        cy.get(this.promotionsList)
            .should('be.visible')
            .within(() => {
                cy.get('li').each(($el) => {
                        const actualCategory = $el.text().trim();

                        if(actualCategory && actualCategory.toLowerCase() === category.toLowerCase()) {

                            cy.log('Promotions Category found: ' + actualCategory);
                            cy.wrap($el).click();
                            cy.url().should('include', expectedUrl);
                            return false;
                        }
                    });
                });
            };

}
export default MobileHomePage;