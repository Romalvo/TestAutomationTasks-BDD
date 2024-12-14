import MobileHomePage from "../../pageObjects/MobileHomePage";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { setViewport } from "../../viewportHelper";

const mobileHomePage = new MobileHomePage();

Given('I am on the Boost Casino mobile home page using {string} view', (device) => {
    setViewport(device);
    cy.visit(baseUrl);
});

When('I tap on the burger menu', () => {
    mobileHomePage.openMenu();
});

Then('the navigation menu should be open and visible', () => {
    mobileHomePage.verifyMenuVisibility();
});

Then('the menu should contain the following Entries:', (dataTable) => {
    const expectedItems = dataTable.raw().flat();
    mobileHomePage.verifyMenuItems(expectedItems);
});

When('I tap on "Customer Support"', () => {
    mobileHomePage.clickCustomerSupport();
});

Then('I should be redirected to the Customer Support page', () => {
    mobileHomePage.verifyUrlContainsCustomerSupport();
});

Then('the page title should be "Boost Casino Support Center"', () => {
    mobileHomePage.verifyPageTitle();
});

