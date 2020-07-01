Feature: Navigate and Login Dana train Website Unsuccessfully

    Scenario Outline: Login unsuccessfully with input admin's username account does not register before on macbook-15 screen
        Given I navigate to Smartos website with macbook-15 screen
        Given I navigate to Dana train login page
        When I input data for admin's username does not register before <userNameNotRegisterBefore>
        And I click on Login button at Dana train
        Then I verify notice message display for case admin's username does not register before with macbook-15 screen

        Examples:
            | userNameNotRegisterBefore |
            | mai.truong@team.com       |

    Scenario Outline: Login unsuccessfully with input admin's password invalid on macbook-15 screen
        Given I navigate to Smartos website with macbook-15 screen
        Given I navigate to Dana train login page
        When I input data for admin's username valid but admin's password invalid <passwordInvalid>
        And I click on Login button at Dana train
        Then I verify notice message display for case admin's password invalid with macbook-15 screen

        Examples:
            | passwordInvalid |
            | maimai123       |

    Scenario: Login unsuccessfully with do not input data for admin's username on macbook-15 screen
        Given I navigate to Smartos website with macbook-15 screen
        Given I navigate to Dana train login page
        When I input data for admin's password
        And I click on Login button at Dana train
        Then I verify notice message display for case do not input data for admin's username with macbook-15 screen

    Scenario: Login unsuccessfully with do not input data for admin's password on macbook-15 screen
        Given I navigate to Smartos website with macbook-15 screen
        Given I navigate to Dana train login page
        When I input data for admin's username
        And I click on Login button at Dana train
        Then I verify notice message display for case do not input data for admin's password with macbook-15 screen

    Scenario: Login unsuccessfully with do not input data for admin's username and admin's password on macbook-15 screen
        Given I navigate to Smartos website with macbook-15 screen
        Given I navigate to Dana train login page
        When I click on Login button at Dana train
        Then I verify notice message display below username for case do not input data for admin's username with macbook-15 screen
        And I verify notice message display below password for case do not input data for admin's password with macbook-15 screen

    Scenario Outline: Login unsuccessfully with input data for admin's password less than 3 characters on macbook-15 screen
        Given I navigate to Smartos website with macbook-15 screen
        Given I navigate to Dana train login page
        When I input data for admin's username and admin's password less than 3 characters <passwordLessthan3Characters>
        When I click on Login button at Dana train
        Then I verify notice message display below password for case input data for admin's password less than 3 characters with macbook-15 screen

        Examples:
            | passwordLessthan3Characters |
            | 23                          |

    Scenario Outline: Login unsuccessfully with input admin's username account does not register before on samsung-s10 screen
        Given I navigate to Smartos website with samsung-s10 screen
        Given I navigate to Dana train login page
        When I input data for admin's username does not register before <userNameNotRegisterBefore>
        And I click on Login button at Dana train
        Then I verify notice message display for case admin's username does not register before with samsung-s10 screen

        Examples:
            | userNameNotRegisterBefore |
            | mai.truong@team.com       |

    Scenario Outline: Login unsuccessfully with input admin's password invalid on samsung-s10 screen
        Given I navigate to Smartos website with samsung-s10 screen
        Given I navigate to Dana train login page
        When I input data for admin's username valid but admin's password invalid <passwordInvalid>
        And I click on Login button at Dana train
        Then I verify notice message display for case admin's password invalid with samsung-s10 screen

        Examples:
            | passwordInvalid |
            | maimai123       |

    Scenario: Login unsuccessfully with do not input data for admin's username on samsung-s10 screen
        Given I navigate to Smartos website with samsung-s10 screen
        Given I navigate to Dana train login page
        When I input data for admin's password
        And I click on Login button at Dana train
        Then I verify notice message display for case do not input data for admin's username with samsung-s10 screen

    Scenario: Login unsuccessfully with do not input data for admin's password on samsung-s10 screen
        Given I navigate to Smartos website with samsung-s10 screen
        Given I navigate to Dana train login page
        When I input data for admin's username
        And I click on Login button at Dana train
        Then I verify notice message display for case do not input data for admin's password with samsung-s10 screen

    Scenario: Login unsuccessfully with do not input data for admin's username and admin's password on samsung-s10 screen
        Given I navigate to Smartos website with samsung-s10 screen
        Given I navigate to Dana train login page
        When I click on Login button at Dana train
        Then I verify notice message display below username for case do not input data for admin's username with samsung-s10 screen
        And I verify notice message display below password for case do not input data for admin's password with samsung-s10 screen

    Scenario Outline: Login unsuccessfully with input data for admin's password less than 3 characters on samsung-s10 screen
        Given I navigate to Smartos website with samsung-s10 screen
        Given I navigate to Dana train login page
        When I input data for admin's username and admin's password less than 3 characters <passwordLessthan3Characters>
        When I click on Login button at Dana train
        Then I verify notice message display below password for case input data for admin's password less than 3 characters with samsung-s10 screen

        Examples:
            | passwordLessthan3Characters |
            | 23                          |

    Scenario Outline: Login unsuccessfully with input admin's username account does not register before on iphone-6 screen
        Given I navigate to Smartos website with iphone-6 screen
        Given I navigate to Dana train login page
        When I input data for admin's username does not register before <userNameNotRegisterBefore>
        And I click on Login button at Dana train
        Then I verify notice message display for case admin's username does not register before with iphone-6 screen

        Examples:
            | userNameNotRegisterBefore |
            | mai.truong@team.com       |

    Scenario Outline: Login unsuccessfully with input admin's password invalid on iphone-6 screen
        Given I navigate to Smartos website with iphone-6 screen
        Given I navigate to Dana train login page
        When I input data for admin's username valid but admin's password invalid <passwordInvalid>
        And I click on Login button at Dana train
        Then I verify notice message display for case admin's password invalid with iphone-6 screen

        Examples:
            | passwordInvalid |
            | maimai123       |

    Scenario: Login unsuccessfully with do not input data for admin's username on iphone-6 screen
        Given I navigate to Smartos website with iphone-6 screen
        Given I navigate to Dana train login page
        When I input data for admin's password
        And I click on Login button at Dana train
        Then I verify notice message display for case do not input data for admin's username with iphone-6 screen

    Scenario: Login unsuccessfully with do not input data for admin's password on iphone-6 screen
        Given I navigate to Smartos website with iphone-6 screen
        Given I navigate to Dana train login page
        When I input data for admin's username
        And I click on Login button at Dana train
        Then I verify notice message display for case do not input data for admin's password with iphone-6 screen

    Scenario: Login unsuccessfully with do not input data for admin's username and admin's password on iphone-6 screen
        Given I navigate to Smartos website with iphone-6 screen
        Given I navigate to Dana train login page
        When I click on Login button at Dana train
        Then I verify notice message display below username for case do not input data for admin's username with iphone-6 screen
        And I verify notice message display below password for case do not input data for admin's password with iphone-6 screen

    Scenario Outline: Login unsuccessfully with input data for admin's password less than 3 characters on iphone-6 screen
        Given I navigate to Smartos website with iphone-6 screen
        Given I navigate to Dana train login page
        When I input data for admin's username and admin's password less than 3 characters <passwordLessthan3Characters>
        When I click on Login button at Dana train
        Then I verify notice message display below password for case input data for admin's password less than 3 characters with iphone-6 screen

        Examples:
            | passwordLessthan3Characters |
            | 23                          |

    Scenario Outline: Login unsuccessfully with input admin's username account does not register before on iphone-6 plus screen
        Given I navigate to Smartos website with iphone-6 plus screen
        Given I navigate to Dana train login page
        When I input data for admin's username does not register before <userNameNotRegisterBefore>
        And I click on Login button at Dana train
        Then I verify notice message display for case admin's username does not register before with iphone-6 plus screen

        Examples:
            | userNameNotRegisterBefore |
            | mai.truong@team.com       |

    Scenario Outline: Login unsuccessfully with input admin's password invalid on iphone-6 plus screen
        Given I navigate to Smartos website with iphone-6 plus screen
        Given I navigate to Dana train login page
        When I input data for admin's username valid but admin's password invalid <passwordInvalid>
        And I click on Login button at Dana train
        Then I verify notice message display for case admin's password invalid with iphone-6 plus screen

        Examples:
            | passwordInvalid |
            | maimai123       |

    Scenario: Login unsuccessfully with do not input data for admin's username on iphone-6 plus screen
        Given I navigate to Smartos website with iphone-6 plus screen
        Given I navigate to Dana train login page
        When I input data for admin's password
        And I click on Login button at Dana train
        Then I verify notice message display for case do not input data for admin's username with iphone-6 plus screen

    Scenario: Login unsuccessfully with do not input data for admin's password on iphone-6 plus screen
        Given I navigate to Smartos website with iphone-6 plus screen
        Given I navigate to Dana train login page
        When I input data for admin's username
        And I click on Login button at Dana train
        Then I verify notice message display for case do not input data for admin's password with iphone-6 plus screen

    Scenario: Login unsuccessfully with do not input data for admin's username and admin's password on iphone-6 plus screen
        Given I navigate to Smartos website with iphone-6 plus screen
        Given I navigate to Dana train login page
        When I click on Login button at Dana train
        Then I verify notice message display below username for case do not input data for admin's username with iphone-6 plus screen
        And I verify notice message display below password for case do not input data for admin's password with iphone-6 plus screen

    Scenario Outline: Login unsuccessfully with input data for admin's password less than 3 characters on iphone-6 plus screen
        Given I navigate to Smartos website with iphone-6 plus screen
        Given I navigate to Dana train login page
        When I input data for admin's username and admin's password less than 3 characters <passwordLessthan3Characters>
        When I click on Login button at Dana train
        Then I verify notice message display below password for case input data for admin's password less than 3 characters with iphone-6 plus screen

        Examples:
            | passwordLessthan3Characters |
            | 23                          |

