Feature: Navigate and Login Smartos Website Successfully
    Scenario: Create a new user successfully with input all fields on macbook-15 screen
        Given I navigate to Smartos website with macbook-15 screen
        Given I login successfully to Dana train Page
        When I click on user page
        And I click on create button to create a new user
        And I choose image for user
        And I input username
        And I input fullname 
        And I input email
        And I input department
        And I input position
        And I input password
        And I choose access create notification
        And I click on create button to save a new user
        Then I verify create a new user successfully with macbook-15 screen
        And I logout user successfully in the mac size
        Then I login with user's account create recently successfully 

    Scenario: Create a new user successfully with input all fields on samsung-s10 screen
        Given I navigate to Smartos website with samsung-s10 screen
        Given I login successfully to Dana train Page
        When I click on home icon
        And I click on create button to create a new user
        And I choose image for user
        And I input username
        And I input fullname
        And I input email
        And I input department
        And I input position
        And I input password
        And I choose access create notification
        And I click on create button to save a new user in phone size
        Then I verify create a new user successfully with samsung-s10 screen
        And I logout user successfully in the phone size
        Then I login with user's account create recently successfully

    Scenario: Create a new user successfully with input all fields on iphone-6 screen
        Given I navigate to Smartos website with iphone-6 screen
        Given I login successfully to Dana train Page
        When I click on home icon
        And I click on create button to create a new user
        And I choose image for user
        And I input username
        And I input fullname
        And I input email
        And I input department
        And I input position
        And I input password
        And I choose access create notification
        And I click on create button to save a new user in phone size
        Then I verify create a new user successfully with iphone-6 screen
        And I logout user successfully in the phone size
        Then I login with user's account create recently successfully 

    Scenario: Create a new user successfully with input all fields on iphone-6 plus screen
        Given I navigate to Smartos website with iphone-6 plus screen
        Given I login successfully to Dana train Page
        When I click on home icon
        And I click on create button to create a new user
        And I choose image for user
        And I input username
        And I input fullname
        And I input email
        And I input department
        And I input position
        And I input password
        And I choose access create notification
        And I click on create button to save a new user in phone size
        Then I verify create a new user successfully with iphone-6 plus screen
        And I logout user successfully in the phone size
        Then I login with user's account create recently successfully 
