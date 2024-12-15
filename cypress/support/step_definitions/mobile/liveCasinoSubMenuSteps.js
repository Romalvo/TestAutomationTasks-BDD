import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { setViewport } from "../../viewportHelper";
import MobileHomePage from "../../pageObjects/MobileHomePage";

const mobileHomePage = new MobileHomePage();

Given('I am on the Boost casino home page using {string} view', (device) => {
    setViewport(device);
    cy.visit('/');
    mobileHomePage.closeCookies();
});

When('I click on the burger menu on the home page', () =>{
    mobileHomePage.openMenu();
});

Then('the menu should be open and visible', () => {
    mobileHomePage.verifyMenuVisibility();
});

When('I tap on the Live Casino menu', () => {
    mobileHomePage.clickLiveCasino();
});

Then('the Live Casino navigation menu should be open and visible', () => {
    mobileHomePage.verifyLiveCasinoMenuVisible();
});

Then('the menu should contain with such Entries list:', (dataTable) => {
    const expectedEntries = dataTable.raw().flat();
});

When('I click on category one by one', (dataTable) => {
    const categories = dataTable.raw();
    categories.forEach(([category, expectedUrl]) => {
        mobileHomePage.clickLiveCasinoCategoryAndVerifyUrls(category, expectedUrl);
    });
}); 

