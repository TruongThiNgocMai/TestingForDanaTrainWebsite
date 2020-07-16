Feature: Logout Dana train Website Successfully
    Scenario: Logout Dana train Website Successfully with macbook-15 screen
        Given I navigate to Smartos website with macbook-15 screen
        Given I login successfully to Dana train Page
        When I click on profile button
        And I click on Logout button
        Then I verify Logout successfully with macbook-15 screen


    Scenario: Logout Dana train Website Successfully with samsung-s10 screen
        Given I navigate to Smartos website with samsung-s10 screen
        Given I login successfully to Dana train Page
        And I click on logout button in the phone size
        Then I verify Logout successfully with samsung-s10 screen


    Scenario: Logout Dana train Website Successfully with iphone-6 screen
        Given I navigate to Smartos website with iphone-6 screen
        Given I login successfully to Dana train Page
        And I click on logout button in the phone size
        Then I verify Logout successfully with iphone-6 screen


    Scenario: Logout Dana train Website Successfully with iphone-6 plus screen
        Given I navigate to Smartos website with iphone-6 plus screen
        Given I login successfully to Dana train Page
        And I click on logout button in the phone size
        Then I verify Logout successfully with iphone-6 plus screen