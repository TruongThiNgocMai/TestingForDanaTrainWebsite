Feature: Forgot Password Successfully

    Scenario: Forgot Password and reset a new password successfully with macbook-15 screen
        Given I navigate to Smartos website with macbook-15 screen
        Given I navigate to Dana train login page
        When I click on forgot password link
        And I input my email to reset a new password
        And I click on forgot password button
        Then I verify have an email have sent to mailbox with macbook-15 screen

    Scenario: Forgot Password and reset a new password successfully with samsung-s10 screen
        Given I navigate to Smartos website with samsung-s10 screen
        Given I navigate to Dana train login page
        When I click on forgot password link
        And I input my email to reset a new password
        And I click on forgot password button
        Then I verify have an email have sent to mailbox with samsung-s10 screen

    Scenario: Forgot Password and reset a new password successfully with iphone-6 screen
        Given I navigate to Smartos website with iphone-6 screen
        Given I navigate to Dana train login page
        When I click on forgot password link
        And I input my email to reset a new password
        And I click on forgot password button
        Then I verify have an email have sent to mailbox with iphone-6 screen

    Scenario: Forgot Password and reset a new password successfully with iphone-6 plus screen
        Given I navigate to Smartos website with iphone-6 plus screen
        Given I navigate to Dana train login page
        When I click on forgot password link
        And I input my email to reset a new password
        And I click on forgot password button
        Then I verify have an email have sent to mailbox with iphone-6 plus screen
