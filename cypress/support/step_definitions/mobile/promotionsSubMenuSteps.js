import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import MobileHomePage from "../../pageObjects/MobileHomePage";

const mobileHomePage = new MobileHomePage();
When('I tap on the Promotions menu', () => {
    mobileHomePage.clickPromotions();
});

Then('the Promotions sub-menu should be open and visible', () => {
    mobileHomePage.verifyPromotionsVisible();
});

Then('the menu should contain the following categories:', (dataTable) => {
    const expectedEntries = dataTable.raw().flat();
});

When('I tap on category one by one', (dataTable) => {
    const categories = dataTable.raw();
    categories.forEach(([category, expectedUrl]) => {
        mobileHomePage.clickPromotionsCategoryAndVerifyUrls(category, expectedUrl);
    });
});
