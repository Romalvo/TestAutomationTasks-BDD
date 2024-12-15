Feature: Testing Live Casino sub menu
    Scenario: User navigates to different categories in the Live Casino sub menu
    Given I am on the Boost casino home page using "mobile" view
    When I click on the burger menu on the home page
    Then the menu should be open and visible
    When I tap on the Live Casino menu
    Then the Live Casino navigation menu should be open and visible
    And the menu should contain with such Entries list:
      | Popular        |
      | Game Shows     |
      | Roulette       |
      | Blackjack     |
      | Baccarat       |
      | Poker          |
    
    When I click on category one by one
      | category       | expectedUrl         |
      | Popular        | /live-casino      |
      | Game Shows     | /live-casino/game-shows         |
      | Roulette       | /live-casino/roulette           |
      | Blackjack      | /live-casino/blackjack          |
      | Baccarat       | /live-casino/baccarat           |
      | Poker          | /live-casino/poker              |