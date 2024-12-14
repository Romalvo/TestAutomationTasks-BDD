class MobileHomePage {
    burgerMenuIcon = ('label > span > span');
    menuItems = ('nav.sc-tsFYE:first');
    casinoIcon =('nav.sc-tsFYE:first ul > li:nth-of-type(2)');
    casinoMenuItems = ('nav.sc-tsFYE:first ul > li:nth-of-type(2) ul')
    //liveCasinoIcon = ();
    //promotionsIcon = ();

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

    clickCategoryAndVerifyUrl(categoryName, expectedUrl) {
        cy.get(this.casinoMenuItems)
          .contains(categoryName)
          .click(); 
        cy.url().should('include', expectedUrl); 
      }
}
export default MobileHomePage;