class MobileHomePage {
    burgerMenuIcon = ('label > span > span');
    menuItems = ('nav.sc-tsFYE:first');

    openMenu() {
        cy.get(this.burgerMenuIcon).should('be.visible').click();
    }

    verifyMenuVisibility() {
        cy.get(this.menuItems).should('be.visible');
    }

    verifyMenuItems(expectedItems) {
        cy.get(this.menuItems).then(($items) => {

            cy.log('Menu HTML:', $items.html());

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


}
export default MobileHomePage;