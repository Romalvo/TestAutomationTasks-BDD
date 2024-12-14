Feature: Mobile navigation menu
 Scenario: Check that hamburger menu is open and contain all Entries
  Given I am on the Boost Casino home page on "mobile" view
  When I tap on the burger menu
  Then the navigation menu should be open and visible
  And the menu should contain the following Entries:
   | HomeCasinoLive CasinoPromotionsCustomer Support|
  When I tap on "Customer Support"
  Then I should be redirected to the Customer Support page
  And the page title should be "Boost Casino Support Center"