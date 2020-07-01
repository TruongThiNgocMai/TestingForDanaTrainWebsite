Feature: Admin search

    Scenario: Search information successfully via name with macbook-15 screen
        Given I navigate to Smartos website with macbook-15 screen
        Given I login successfully to Dana train Page
        When I click on user page
        And I input data for name have been created before
        And I click on filter button to search via name
        Then I verify admin search information via name successfully with macbook-15 screen
        And I click on Clear button to clear result
        And I input data for name have not created before
        And I click on filter button to search via name
        Then I verify admin search information is empty with macbook-15 screen

    Scenario: Search information successfully via username with macbook-15 screen
        Given I navigate to Smartos website with macbook-15 screen
        Given I login successfully to Dana train Page
        When I click on user page
        And I input data for username have been created before
        And I click on filter button to search via username
        Then I verify admin search information via username successfully with macbook-15 screen
        And I click on Clear button to clear result
        And I input data for username have not created before
        And I click on filter button to search via username
        Then I verify admin search information is empty with macbook-15 screen

    Scenario: Search information successfully via name with samsung-s10 screen
        Given I navigate to Smartos website with samsung-s10 screen
        Given I login successfully to Dana train Page
        When I click on home icon
        And I input data for name have been created before
        And I click on filter button to search via name
        Then I verify admin search information via name successfully with samsung-s10 screen
        And I click on Clear button to clear result
        And I input data for name have not created before
        And I click on filter button to search via name
        Then I verify admin search information is empty with samsung-s10 screen

    Scenario: Search information successfully via username with samsung-s10 screen
        Given I navigate to Smartos website with samsung-s10 screen
        Given I login successfully to Dana train Page
        When I click on home icon
        And I input data for username have been created before
        And I click on filter button to search via username
        Then I verify admin search information via username successfully with samsung-s10 screen
        And I click on Clear button to clear result
        And I input data for username have not created before
        And I click on filter button to search via username
        Then I verify admin search information is empty with samsung-s10 screen

    Scenario: Search information successfully via name with iphone-6 screen
        Given I navigate to Smartos website with iphone-6 screen
        Given I login successfully to Dana train Page
        When I click on home icon
        And I input data for name have been created before
        And I click on filter button to search via name
        Then I verify admin search information via name successfully with iphone-6 screen
        And I click on Clear button to clear result
        And I input data for name have not created before
        And I click on filter button to search via name
        Then I verify admin search information is empty with iphone-6 screen

    Scenario: Search information successfully via username with iphone-6 screen
        Given I navigate to Smartos website with iphone-6 screen
        Given I login successfully to Dana train Page
        When I click on home icon
        And I input data for username have been created before
        And I click on filter button to search via username
        Then I verify admin search information via username successfully with iphone-6 screen
        And I click on Clear button to clear result
        And I input data for username have not created before
        And I click on filter button to search via username
        Then I verify admin search information is empty with iphone-6 screen

    Scenario: Search information successfully via name with iphone-6 plus screen
        Given I navigate to Smartos website with iphone-6 plus screen
        Given I login successfully to Dana train Page
        When I click on home icon
        And I input data for name have been created before
        And I click on filter button to search via name
        Then I verify admin search information via name successfully with iphone-6 plus screen
        And I click on Clear button to clear result
        And I input data for name have not created before
        And I click on filter button to search via name
        Then I verify admin search information is empty with iphone-6 plus screen

    Scenario: Search information successfully via username with iphone-6 plus screen
        Given I navigate to Smartos website with iphone-6 plus screen
        Given I login successfully to Dana train Page
        When I click on home icon
        And I input data for username have been created before
        And I click on filter button to search via username
        Then I verify admin search information via username successfully with iphone-6 plus screen
        And I click on Clear button to clear result
        And I input data for username have not created before
        And I click on filter button to search via username
        Then I verify admin search information is empty with iphone-6 plus screen

