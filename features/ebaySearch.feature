Feature: eBay Search

  Scenario: Searching for "Pilas" on eBay
    Given I am on the eBay homepage
    When I search for <prod>
    Then I should see the search results
Examples: 
    |prod |
    |Pilas|