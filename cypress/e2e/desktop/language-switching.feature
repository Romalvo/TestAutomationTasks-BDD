Feature: Language switching

    Scenario: A logged-out user switches the website language via the menu dropdown using desktop view
        Given I am on the Boost Casino home page on "desktop" view
        Then I should see the language dropdown in the header
        When I click on the language dropdown
        Then the language menu should be visible
        When I select "FI" from the dropdown
        Then the page should switch to Finnish
        When I click on the language dropdown to choose Estonian language
        When I select "EE" from the dropdown
        Then the page should switch to Estonian
        When I click on the language dropdown to choose Russian language
        When I select "RU" from the dropdown
        Then the page should switch to Russian