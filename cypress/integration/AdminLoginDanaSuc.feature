Feature: Navigate and Login Dana Train Website Successfully
        Scenario: Login successfully with input Email and Password valid on macbook-15 screen
                Given I navigate to Smartos website with macbook-15 screen
                Given I navigate to Dana train login page
                When I input valid data to VTusername as "VT_username"
                And I input valid data to VTpassword as "VT_password"
                And I click on Login button at Dana train
                Then I verify login successfully into Dana train website with macbook-15 screen


        Scenario: Login successfully with input Email and Password valid on samsung-s10 screen
                Given I navigate to Smartos website with samsung-s10 screen
                Given I navigate to Dana train login page
                When I input valid data to GDusername as "GD_username"
                And I input valid data to GDpassword as "GD_password"
                And I click on Login button at Dana train
                Then I verify login successfully into Dana train website with samsung-s10 screen


        Scenario: Login successfully with input Email and Password valid on iphone-6 screen
                Given I navigate to Smartos website with iphone-6 screen
                Given I navigate to Dana train login page
                When I input valid data to TPusername as "TP_username"
                And I input valid data to TPpassword as "TP_password"
                And I click on Login button at Dana train
                Then I verify login successfully into Dana train website with iphone-6 screen


        Scenario: Login successfully with input Email and Password valid on iphone-6 plus screen
                Given I navigate to Smartos website with iphone-6 plus screen
                Given I navigate to Dana train login page
                When I input valid data to NVusername as "NV_username"
                And I input valid data to NVpassword as "NV_password"
                And I click on Login button at Dana train
                Then I verify login successfully into Dana train website with iphone-6 plus screen




