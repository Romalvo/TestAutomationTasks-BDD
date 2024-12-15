Feature: Promotions sub-menu navigation

  Scenario: User navigates to different categories in the Promotions sub-menu
    Given I am on Boost Casino home page using "mobile" view
    When I click on the burger menu on the home page
    Then the menu should be open and visible
    When I tap on the Promotions menu
    Then the Promotions sub-menu should be open and visible
    And the menu should contain the following categories:
      | Welcome Bonus            |
      | Boost XP                 |
      | Casino Promotions        |
      | Live Casino Promotions   |
      | All Promotions           |
    When I tap on category one by one
      | category               | expectedUrl               |
      | Welcome Bonus          | /bonus                    |
      | Boost XP               | /boostxp                  |
      | Casino Promotions      | /promotions/casino        |
      | Live Casino Promotions | /promotions/live-casino   |
      | All Promotions         | /promotions               |
