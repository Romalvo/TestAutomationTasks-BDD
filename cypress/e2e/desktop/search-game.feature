Feature: Game search functionality

    Scenario: User should be able to find and open a Game using desktop view
        Given I am on the Boost Casino home page using "desktop" view
        Then I should see the search input field
        When I search for "Book of Dead"
        Then I should see the "Book of Dead" game listed in the results
        When I click on the "Play" button
        Then I should be redirected to the games play page
        Then the game should load successfully