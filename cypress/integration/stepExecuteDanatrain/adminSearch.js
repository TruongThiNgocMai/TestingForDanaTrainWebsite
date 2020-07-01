import { Given } from "cypress-cucumber-preprocessor/steps";
const searchFunction = require('../../fixtures/example.json')

/// <reference types="cypress" />

//================SEARCH SUCCESSFULLY VIA NAME WITH MACBOOK-15 SCREEN==================
Given(/^I navigate to Smartos website with macbook-15 screen$/, function () {
    cy.viewport("macbook-15")
});

Given(/^I login successfully to Dana train Page$/, function () {
    cy.LoginDanaFunction(searchFunction.usernameAD, searchFunction.passwordAD)
});

When(/^I click on home icon$/, function () {
    cy.get('[href="/"]').click()
});

And(/^I input data for name have been created before$/, function () {
    cy.get('#name').type(searchFunction.nameCreatedBefore)
})

And(/^I click on filter button to search via name$/, function () {
    cy.get('.filterButton').click()
})

Then(/^I verify admin search information via name successfully with macbook-15 screen$/, function () {
    cy.xpath('//*[@id="root"]/div/div/div[1]/section/section/main/div/div/div/div/div[4]/div[2]/div/div[1]/div/div/div/div/div[1]/div/table/tbody').children()
        .within(function () {
            cy.get('td').eq(0).should('contain.text', searchFunction.nameCreatedBefore)
        });
})

And(/^I click on Clear button to clear result$/, function () {
    cy.get('.clearButton').click()
})

And(/^I input data for name have not created before$/, function () {
    cy.get('#name').type(searchFunction.nameNotCreatedBefore)
})

And(/^I click on filter button to search via name$/, function () {
    cy.get('.filterButton').click()
})

Then(/^I verify admin search information is empty with macbook-15 screen$/, function () {
    cy.get('.ant-table-placeholder').should('be.visible')
    cy.get('.ant-table-placeholder > .ant-empty > .ant-empty-image > svg').should('be.visible')
    cy.get('.ant-table-placeholder > .ant-empty > .ant-empty-description').should('have.text', 'Trống')
})

//================SEARCH SUCCESSFULLY VIA USERNAME WITH MACBOOK-15 SCREEN==================
Given(/^I navigate to Smartos website with macbook-15 screen$/, function () {
    cy.viewport("macbook-15")
});

Given(/^I login successfully to Dana train Page$/, function () {
    cy.LoginDanaFunction(searchFunction.usernameAD, searchFunction.passwordAD)
});

When(/^I click on home icon$/, function () {
    cy.get('[href="/"]').click()
});

And(/^I input data for username have been created before$/, function () {
    cy.get('#userName').type(searchFunction.userNameCreatedBefore)
})

And(/^I click on filter button to search via username$/, function () {
    cy.get('.filterButton').click()
})

Then(/^I verify admin search information via username successfully with macbook-15 screen$/, function () {
    cy.xpath('//*[@id="root"]/div/div/div[1]/section/section/main/div/div/div/div/div[4]/div[2]/div/div[1]/div/div/div/div/div[1]/div/table/tbody').children()
        .within(function () {
            cy.get('td').eq(1).should('contain.text', searchFunction.userNameCreatedBefore)
        });
})

And(/^I click on Clear button to clear result$/, function () {
    cy.get('.clearButton').click()
})

And(/^I input data for username have not created before$/, function () {
    cy.get('#userName').type(searchFunction.userNameNotCreatedBefore)
})

And(/^I click on filter button to search via username$/, function () {
    cy.get('.filterButton').click()
})

Then(/^I verify admin search information is empty with macbook-15 screen$/, function () {
    cy.get('.ant-table-placeholder').should('be.visible')
    cy.get('.ant-table-placeholder > .ant-empty > .ant-empty-image > svg').should('be.visible')
    cy.get('.ant-table-placeholder > .ant-empty > .ant-empty-description').should('have.text', 'Trống')
})

//================SEARCH SUCCESSFULLY VIA NAME WITH SAMSUNG-S10 SCREEN==================
Given(/^I navigate to Smartos website with samsung-s10 screen$/, function () {
    cy.viewport("samsung-s10")
});

Given(/^I login successfully to Dana train Page$/, function () {
    cy.LoginDanaFunction(searchFunction.usernameAD, searchFunction.passwordAD)
});

When(/^I click on home icon$/, function () {
    cy.get('[href="/"]').click()
});

And(/^I input data for name have been created before$/, function () {
    cy.get('#name').type(searchFunction.nameCreatedBefore)
})

And(/^I click on filter button to search via name$/, function () {
    cy.get('.filterButton').click()
})

Then(/^I verify admin search information via name successfully with samsung-s10 screen$/, function () {
    cy.xpath('//*[@id="root"]/div/div/div[1]/section/section/main/div/div/div/div/div[4]/div[2]/div/div[1]/div/div/div/div/div[1]/div/table/tbody').children()
        .within(function () {
            cy.get('td').eq(0).should('contain.text', searchFunction.nameCreatedBefore)
        });
})

And(/^I click on Clear button to clear result$/, function () {
    cy.get('.clearButton').click()
})

And(/^I input data for name have not created before$/, function () {
    cy.get('#name').type(searchFunction.nameNotCreatedBefore)
})

And(/^I click on filter button to search via name$/, function () {
    cy.get('.filterButton').click()
})

Then(/^I verify admin search information is empty with samsung-s10 screen$/, function () {
    cy.get('.ant-list-empty-text').should('be.visible')
    cy.get('.ant-list-empty-text > .ant-empty > .ant-empty-image > svg').should('be.visible')
    cy.get('.ant-list-empty-text > .ant-empty > .ant-empty-description').should('have.text', 'Trống')
})

//================SEARCH SUCCESSFULLY VIA USERNAME WITH SAMSUNG-S10 SCREEN==================
Given(/^I navigate to Smartos website with samsung-s10 screen$/, function () {
    cy.viewport("samsung-s10")
});

Given(/^I login successfully to Dana train Page$/, function () {
    cy.LoginDanaFunction(searchFunction.usernameAD, searchFunction.passwordAD)
});

When(/^I click on home icon$/, function () {
    cy.get('[href="/"]').click()
});

And(/^I input data for username have been created before$/, function () {
    cy.get('#userName').type(searchFunction.userNameCreatedBefore)
})

And(/^I click on filter button to search via username$/, function () {
    cy.get('.filterButton').click()
})

Then(/^I verify admin search information via username successfully with samsung-s10 screen$/, function () {
    cy.xpath('//*[@id="root"]/div/div/div[1]/section/section/main/div/div/div/div/div[4]/div[2]/div/div[1]/div/div/div/div/div[1]/div/table/tbody').children()
        .within(function () {
            cy.get('td').eq(1).should('contain.text', searchFunction.userNameCreatedBefore)
        });
})

And(/^I click on Clear button to clear result$/, function () {
    cy.get('.clearButton').click()
})

And(/^I input data for username have not created before$/, function () {
    cy.get('#userName').type(searchFunction.userNameNotCreatedBefore)
})

And(/^I click on filter button to search via username$/, function () {
    cy.get('.filterButton').click()
})

Then(/^I verify admin search information is empty with samsung-s10 screen$/, function () {
    cy.get('.ant-list-empty-text').should('be.visible')
    cy.get('.ant-list-empty-text > .ant-empty > .ant-empty-image > svg').should('be.visible')
    cy.get('.ant-list-empty-text > .ant-empty > .ant-empty-description').should('have.text', 'Trống')
})

//================SEARCH SUCCESSFULLY VIA NAME WITH IPHONE-6 SCREEN==================
Given(/^I navigate to Smartos website with iphone-6 screen$/, function () {
    cy.viewport("iphone-6")
});

Given(/^I login successfully to Dana train Page$/, function () {
    cy.LoginDanaFunction(searchFunction.usernameAD, searchFunction.passwordAD)
});

When(/^I click on home icon$/, function () {
    cy.get('[href="/"]').click()
});

And(/^I input data for name have been created before$/, function () {
    cy.get('#name').type(searchFunction.nameCreatedBefore)
})

And(/^I click on filter button to search via name$/, function () {
    cy.get('.filterButton').click()
})

Then(/^I verify admin search information via name successfully with iphone-6 screen$/, function () {
    cy.xpath('//*[@id="root"]/div/div/div[1]/section/section/main/div/div/div/div/div[4]/div[2]/div/div[1]/div/div/div/div/div[1]/div/table/tbody').children()
        .within(function () {
            cy.get('td').eq(0).should('contain.text', searchFunction.nameCreatedBefore)
        });
})

And(/^I click on Clear button to clear result$/, function () {
    cy.get('.clearButton').click()
})

And(/^I input data for name have not created before$/, function () {
    cy.get('#name').type(searchFunction.nameNotCreatedBefore)
})

And(/^I click on filter button to search via name$/, function () {
    cy.get('.filterButton').click()
})

Then(/^I verify admin search information is empty with iphone-6 screen$/, function () {
    cy.get('.ant-list-empty-text').should('be.visible')
    cy.get('.ant-list-empty-text > .ant-empty > .ant-empty-image > svg').should('be.visible')
    cy.get('.ant-list-empty-text > .ant-empty > .ant-empty-description').should('have.text', 'Trống')
})

//================SEARCH SUCCESSFULLY VIA USERNAME WITH IPHONE-6 SCREEN==================
Given(/^I navigate to Smartos website with iphone-6 screen$/, function () {
    cy.viewport("iphone-6")
});

Given(/^I login successfully to Dana train Page$/, function () {
    cy.LoginDanaFunction(searchFunction.usernameAD, searchFunction.passwordAD)
});

When(/^I click on home icon$/, function () {
    cy.get('[href="/"]').click()
});

And(/^I input data for username have been created before$/, function () {
    cy.get('#userName').type(searchFunction.userNameCreatedBefore)
})

And(/^I click on filter button to search via username$/, function () {
    cy.get('.filterButton').click()
})

Then(/^I verify admin search information via username successfully with iphone-6 screen$/, function () {
    cy.xpath('//*[@id="root"]/div/div/div[1]/section/section/main/div/div/div/div/div[4]/div[2]/div/div[1]/div/div/div/div/div[1]/div/table/tbody').children()
        .within(function () {
            cy.get('td').eq(1).should('contain.text', searchFunction.userNameCreatedBefore)
        });
})

And(/^I click on Clear button to clear result$/, function () {
    cy.get('.clearButton').click()
})

And(/^I input data for username have not created before$/, function () {
    cy.get('#userName').type(searchFunction.userNameNotCreatedBefore)
})

And(/^I click on filter button to search via username$/, function () {
    cy.get('.filterButton').click()
})

Then(/^I verify admin search information is empty with iphone-6 screen$/, function () {
    cy.get('.ant-list-empty-text').should('be.visible')
    cy.get('.ant-list-empty-text > .ant-empty > .ant-empty-image > svg').should('be.visible')
    cy.get('.ant-list-empty-text > .ant-empty > .ant-empty-description').should('have.text', 'Trống')
})

//================SEARCH SUCCESSFULLY VIA NAME WITH IPHONE-6 PLUS SCREEN==================
Given(/^I navigate to Smartos website with iphone-6 plus screen$/, function () {
    cy.viewport("iphone-6+")
});

Given(/^I login successfully to Dana train Page$/, function () {
    cy.LoginDanaFunction(searchFunction.usernameAD, searchFunction.passwordAD)
});

When(/^I click on user page$/, function () {
    cy.get('.ant-menu-item').click()
});

And(/^I input data for name have been created before$/, function () {
    cy.get('#name').type(searchFunction.nameCreatedBefore)
})

And(/^I click on filter button to search via name$/, function () {
    cy.get('.filterButton').click()
})

Then(/^I verify admin search information via name successfully with iphone-6 plus screen$/, function () {
    cy.xpath('//*[@id="root"]/div/div/div[1]/section/section/main/div/div/div/div/div[4]/div[2]/div/div[1]/div/div/div/div/div[1]/div/table/tbody').children()
        .within(function () {
            cy.get('td').eq(0).should('contain.text', searchFunction.nameCreatedBefore)
        });
})

And(/^I click on Clear button to clear result$/, function () {
    cy.get('.clearButton').click()
})

And(/^I input data for name have not created before$/, function () {
    cy.get('#name').type(searchFunction.nameNotCreatedBefore)
})

And(/^I click on filter button to search via name$/, function () {
    cy.get('.filterButton').click()
})

Then(/^I verify admin search information is empty with iphone-6 plus screen$/, function () {
    cy.get('.ant-list-empty-text').should('be.visible')
    cy.get('.ant-list-empty-text > .ant-empty > .ant-empty-image > svg').should('be.visible')
    cy.get('.ant-list-empty-text > .ant-empty > .ant-empty-description').should('have.text', 'Trống')
})

//================SEARCH SUCCESSFULLY VIA USERNAME WITH IPHONE-6 PLUS SCREEN==================
Given(/^I navigate to Smartos website with iphone-6 screen$/, function () {
    cy.viewport("iphone-6+")
});

Given(/^I login successfully to Dana train Page$/, function () {
    cy.LoginDanaFunction(searchFunction.usernameAD, searchFunction.passwordAD)
});

When(/^I click on user page$/, function () {
    cy.get('.ant-menu-item').click()
});

And(/^I input data for username have been created before$/, function () {
    cy.get('#userName').type(searchFunction.userNameCreatedBefore)
})

And(/^I click on filter button to search via username$/, function () {
    cy.get('.filterButton').click()
})

Then(/^I verify admin search information via username successfully with iphone-6 plus screen$/, function () {
    cy.xpath('//*[@id="root"]/div/div/div[1]/section/section/main/div/div/div/div/div[4]/div[2]/div/div[1]/div/div/div/div/div[1]/div/table/tbody').children()
        .within(function () {
            cy.get('td').eq(1).should('contain.text', searchFunction.userNameCreatedBefore)
        });
})

And(/^I click on Clear button to clear result$/, function () {
    cy.get('.clearButton').click()
})

And(/^I input data for username have not created before$/, function () {
    cy.get('#userName').type(searchFunction.userNameNotCreatedBefore)
})

And(/^I click on filter button to search via username$/, function () {
    cy.get('.filterButton').click()
})

Then(/^I verify admin search information is empty with iphone-6 plus screen$/, function () {
    cy.get('.ant-list-empty-text').should('be.visible')
    cy.get('.ant-list-empty-text > .ant-empty > .ant-empty-image > svg').should('be.visible')
    cy.get('.ant-list-empty-text > .ant-empty > .ant-empty-description').should('have.text', 'Trống')
})



