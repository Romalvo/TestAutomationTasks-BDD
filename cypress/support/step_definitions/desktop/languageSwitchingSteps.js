import HomePage from "../../pageObjects/HomePage";
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import { setViewport } from "../../viewportHelper";

const homePage = new HomePage();

Given('I am on the Boost Casino home page using on {string} view', (device) => {
    setViewport(device);
    cy.visit('/');
});

Then('I should see the language dropdown in the header', () => {
    homePage.verifyLanguageDropdownVisible();
});

When('I click on the language dropdown', () => {
    homePage.clickLanguageDropdown();
});

Then('the language menu should be visible', () => {
    homePage.verifyLanguageMenuVisible();
});

When('I select "FI" from the dropdown', () => {
    homePage.selectLanguage("FI");
});

Then('the page should switch to Finnish', () => {
    homePage.verifyCorrectLinkLoaded('FI');
});

When('I click on the language dropdown to choose Estonian language', () => {
    homePage.clickLanguageDropdown();
});

When('I select "EE" from the dropdown', () => {
    homePage.selectLanguage("EE");
});

Then('the page should switch to Estonian', () => {
    homePage.verifyCorrectLinkLoaded('EE');
});

When('I click on the language dropdown to choose Russian language', () => {
    homePage.clickLanguageDropdown();
});

When('I select "RU" from the dropdown', () => {
    homePage.selectLanguage("RU");
});

Then('the page should switch to Russian', () =>{
    homePage.verifyCorrectLinkLoaded('RU');
});