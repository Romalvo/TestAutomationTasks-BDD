import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { setViewport } from "../../viewportHelper";
import MobileHomePage from "../../pageObjects/MobileHomePage";

const mobileHomePage = new MobileHomePage();

Given('I am on Boost Casino home page using {string} view', (device) => {
    setViewport(device);
    cy.visit('/');
});

When('I click on burger menu on home page', () => {
    mobileHomePage.openMenu();
});

Then('menu should be open and visible', () => {
    mobileHomePage.verifyMenuVisibility();
});

When('I tap on Casino menu', () => {
    mobileHomePage.clickCasino();
})

Then('the Casino navigation menu should be open and visible', () => {
    mobileHomePage.verifyCasinoMenuOpen();
});

Then('the menu should contain the following Entries list:', (dataTable) => {
    const expectedEntries = dataTable.raw().flat();
    //mobileHomePage.verifyCasinoMenuItems(expectedEntries);
});

When('I click on each category one by one', (dataTable) =>{
    const categories = dataTable.raw().hashes();
    categories.forEach(({ Category, URL}) => {
        mobileHomePage.clickCategoryAndVerifyUrl(Category, URL);
    })
});