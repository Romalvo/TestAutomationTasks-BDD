Feature: Casino sub-menu navigation
    Scenario: User navigates to different categories in the Casino sub menu
      Given I am on Boost Casino home page using "mobile" view
      When I click on burger menu on home page
      Then menu should be open and visible
      When I tap on Casino menu
      Then the Casino navigation menu should be open and visible
      And the menu should contain the following Entries list:
       |Popular|
       |New|
       |Slots|
       |Jackpots|
       |Buy Feature|
       |Hot Slots|
       |Table Games|
       |Drops & Wins|
       |Cash Drop|
       |Arcade|
       |Cluster Games|
       |Latest Provider|
       |Exclusives|
       When I click on each category one by one
       Then each category redirects to the correct page
        | Popular          | /popular            |
        | New              | /new                |
        | Slots            | /slots              |
        | Jackpots         | /jackpots           |
        | Buy Feature      | /buy-feature        |
        | Hot Slots        | /hot-slots          |
        | Table Games      | /table-games        |
        | Drops & Wins     | /drops-and-wins     |
        | Cash Drop        | /cash-drop          |
        | Arcade           | /arcade             |
        | Cluster Games    | /cluster-games      |
        | Latest Provider  | /latest-provider    |
        | Exclusives       | /exclusives         |
