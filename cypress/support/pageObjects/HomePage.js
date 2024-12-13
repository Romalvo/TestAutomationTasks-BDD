class HomePage {
    verifySearchInputVisible() {
        cy.get('#\\:r0\\:').should('be.visible');
    }

    searchForGame(gameName) {
        cy.get('#\\:r0\\:').type('Book of Dead');
        cy.get('[data-testid="SearchIcon"]').click();
    }

    verifyGameSearchResults(gameName) {
        cy.contains('Book of Dead').should('be.visible');
    }

    clickPlayButton(buttonText) {
        cy.get('button')
        .filter(':contains("Play")')
        .should('be.visible')
        .eq(1)
        .click();
    }

    verifyGamePlayPage() {
        cy.url().should('include', '/slots/book-of-dead')
        cy.get('#ax-casino-game').should('be.visible');
    }

    verifyGameLoading() {
        cy.get('#ax-casino-game').should('be.visible');
        cy.get('#pngPreloaderBG').should('be.visible');
    }


}
export default HomePage;