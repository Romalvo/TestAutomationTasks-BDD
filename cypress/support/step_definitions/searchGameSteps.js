import HomePage from "../pageObjects/HomePage.js";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { setViewport } from "../viewportHelper.js";

const homePage = new HomePage;

Given('I am on the Boost Casino home page on {string} view', (device) => {
    setViewport(device);
    cy.visit('https://www.boostcasino.com/');
});

Then('I should see the search input field', () => {
    homePage.verifySearchInputVisible();
});

When('I search for "Book of Dead"', (gameName) => {
    homePage.searchForGame(gameName);
});

Then('I should see the "Book of Dead" game listed in the results', (gameName) => {
    homePage.verifyGameSearchResults(gameName);
});

When('I click on the "Play" button', (buttonText) => {
    homePage.clickPlayButton(buttonText);
});

Then('I should be redirected to the games play page', (gameName) => {
    homePage.verifyGamePlayPage(gameName);
});

Then('the game should load successfully', (gameName) => {
    homePage.verifyGameLoading;
});

