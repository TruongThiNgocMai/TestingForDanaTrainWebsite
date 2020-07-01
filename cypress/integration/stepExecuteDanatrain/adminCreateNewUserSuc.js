import { Given } from "cypress-cucumber-preprocessor/steps";
const createUser = require('./../../fixtures/example.json')

/// <reference types="cypress" />

//================CREATE A NEW USER SUCCESSFULLY ON MACBOOK-15 SCREEN==================
Given(/^I navigate to Smartos website with macbook-15 screen$/, function () {
    cy.viewport('macbook-15')
});

Given(/^I login successfully to Dana train Page$/, function () {
    cy.LoginDanaFunction(createUser.usernameAD, createUser.passwordAD)
});

When(/^I click on user page$/, function () {
    cy.get('.ant-menu-item').click()
});

Then(/^I verify create a new user successfully with macbook-15 screen$/, function () {
    cy.reload()
    cy.xpath("//div[@class='ant-table-scroll']//tbody[@class='ant-table-tbody']//tr[1]")
        .within(function () {
            cy.get('td').eq(0).should('contain.text', createUser.fullnameRC)
            cy.get('td').eq(1).should('contain.text', createUser.usernameRC)
            cy.get('td').eq(2).should('contain.text', createUser.emailRC)
            cy.get('td').eq(5).should('have.text', 'Hoạt động')
        })
});

Then(/^I login with user's account create recently successfully $/, function () {
    cy.LoginDanaFunction(createUser.usernameRC, createUser.passwordRC)
});

And(/^I click on create button to create a new user$/, function () {
    cy.get('.vActions > .ant-btn').click()
});

And(/^I choose image for user$/, function () {
    cy.newUploadBlobFile('images/avatar.jpg', 'image/jpeg')
    cy.get('.ant-modal-footer > .ant-btn').click()
})

And(/^I input username$/, function () {
    cy.get(':nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #userName').type(createUser.usernameRC)
});

And(/^I input fullname$/, function () {
    cy.get(':nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #name').type(createUser.fullnameRC)
});

And(/^I input email$/, function () {
    cy.get('.form-section > :nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #email').type(createUser.emailRC)
});

And(/^I input department$/, function () {
    cy.get('.form-section > :nth-child(4) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fznzOf > .ant-select-selection').click()
    cy.xpath("//li[contains(text(),'Phòng Kinh doanh')]").click()
});

And(/^I input position$/, function () {
    cy.get('.form-section > :nth-child(5) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fznzOf > .ant-select-selection').click()
    cy.xpath("//li[contains(text(),'n Th')]").click()
});

And(/^I input password$/, function () {
    cy.get('#password').type(createUser.passwordRC)
});

And(/^I choose access create notification$/, function () {
    cy.get('#isCanAddAnnouncement').click()
});

And(/^I logout user successfully in the mac size$/, function () {
    cy.LogoutDanaFunctionForWebMac()
});

And(/^I click on create button to save a new user$/, function () {
    cy.get('.sc-fzolEj > .ant-btn-primary').click()
});

//================CREATE A NEW USER SUCCESSFULLY ON SAMSUNG-S10 SCREEN==================
Given(/^I navigate to Smartos website with samsung-s10 screen$/, function () {
    cy.viewport('samsung-s10')
});

Given(/^I login successfully to Dana train Page$/, function () {
    cy.LoginDanaFunction(createUser.usernameAD, createUser.passwordAD)
});

When(/^I click on home icon$/, function () {
    cy.get('[href="/"]').click()
});

Then(/^I verify create a new user successfully with samsung-s10 screen$/, function () {
    cy.xpath('//div[4]/div[1]/div[1]/div/div/div/div[1]/div/div/div/div/div[1]').should('contain.text', createUser.fullnameRC)
    cy.xpath('//div[4]/div[1]/div[1]/div/div/div/div[1]/div/div/div/div/div[2]').should('contain.text', createUser.usernameRC)
    cy.xpath('//div[4]/div[1]/div[1]/div/div/div/div[1]/div/div/div/div/div[3]').should('contain.text', createUser.emailRC)
    cy.xpath('//div/div/div/div[1]/div/div/div/div/div[6]/span').should('have.text', 'Hoạt động')
})

Then(/^I login with user's account create recently successfully$/, function () {
    cy.LoginDanaFunction(createUser.usernameRC, createUser.passwordRC)
});

And(/^I click on create button to create a new user$/, function () {
    cy.get('.vActions > .ant-btn').click()
    cy.wait(5000)
});

And(/^I choose image for user$/, function () {
    cy.newUploadBlobFile('images/avatar.jpg', 'image/jpeg')
    cy.get('.ant-modal-footer > .ant-btn').click()
})

And(/^I input username$/, function () {
    cy.get(':nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #userName').type(createUser.usernameRC)
});

And(/^I input fullname$/, function () {
    cy.get(':nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #name').type(createUser.fullnameRC)
});

And(/^I input email$/, function () {
    cy.get('.form-section > :nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #email').type(createUser.emailRC)
});

And(/^I input department$/, function () {
    cy.get('.form-section > :nth-child(4) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fznzOf > .ant-select-selection').click()
    cy.xpath("//li[contains(text(),'Phòng Kinh doanh')]").click()
});

And(/^I input position$/, function () {
    cy.get('.form-section > :nth-child(5) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fznzOf > .ant-select-selection').click()
    cy.xpath("//li[contains(text(),'n Th')]").click()
});

And(/^I input password$/, function () {
    cy.get('#password').type(createUser.passwordRC)
});

And(/^I choose access create notification$/, function () {
    cy.get('#isCanAddAnnouncement').click()
});

And(/^I logout user successfully in the phone size$/, function () {
    cy.LogoutDanaFunctionForPhone()
});

And(/^I click on create button to save a new user in phone size$/, function () {
    //When use want to click on back button to avoid duplicate data, you can use this 
    cy.get('.btn-back').click()
    // cy.get('.sc-fzolEj > .ant-btn-primary').click()
});

//================CREATE A NEW USER SUCCESSFULLY ON IPHONE-6 SCREEN==================
Given(/^I navigate to Smartos website with iphone-6 screen$/, function () {
    cy.viewport('iphone-6')
});

Given(/^I login successfully to Dana train Page$/, function () {
    cy.LoginDanaFunction(createUser.usernameAD, createUser.passwordAD)
});

When(/^I click on home icon$/, function () {
    cy.get('[href="/"]').click()
});

Then(/^I verify create a new user successfully with iphone-6 screen$/, function () {
    cy.xpath("//div[@class='ant-table-scroll']//tbody[@class='ant-table-tbody']//tr[1]")
        .within(function () {
            cy.get('td').eq(0).should('contain.text', createUser.fullnameRC)
            cy.get('td').eq(1).should('contain.text', createUser.usernameRC)
            cy.get('td').eq(2).should('contain.text', createUser.emailRC)
            cy.get('td').eq(5).should('have.text', 'Hoạt động')
        })

});

Then(/^I login with user's account create recently successfully$/, function () {
    cy.LoginDanaFunction(createUser.usernameRC, createUser.passwordRC)
});

And(/^I click on create button to create a new user$/, function () {
    cy.get('.vActions > .ant-btn').click()
});

And(/^I choose image for user$/, function () {
    cy.newUploadBlobFile('images/avatar.jpg', 'image/jpeg')
    cy.get('.ant-modal-footer > .ant-btn').click()
})

And(/^I input username$/, function () {
    cy.get(':nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #userName').type(createUser.usernameRC)
});

And(/^I input fullname$/, function () {
    cy.get(':nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #name').type(createUser.fullnameRC)
});

And(/^I input email$/, function () {
    cy.get('.form-section > :nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #email').type(createUser.emailRC)
});

And(/^I input department$/, function () {
    cy.get('.form-section > :nth-child(4) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fznzOf > .ant-select-selection').click()
    cy.xpath("//li[contains(text(),'Phòng Kinh doanh')]").click()
});

And(/^I input position$/, function () {
    cy.get('.form-section > :nth-child(5) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fznzOf > .ant-select-selection').click()
    cy.xpath("//li[contains(text(),'n Th')]").click()
});

And(/^I input password$/, function () {
    cy.get('#password').type(createUser.passwordRC)
});

And(/^I choose access create notification$/, function () {
    cy.get('#isCanAddAnnouncement').click()
});


And(/^I logout user successfully in the phone size$/, function () {
    cy.LogoutDanaFunctionForPhone()
});

And(/^I logout user successfully$/, function () {
    cy.get('.h4 > .anticon').click()
    cy.LogoutDanaVTFunction()
});

And(/^I click on create button to save a new user in phone size$/, function () {
    //When use want to click on back button to avoid duplicate data, you can use this 
    cy.get('.btn-back').click()
    // cy.get('.sc-fzolEj > .ant-btn-primary').click()
});

//================CREATE A NEW USER SUCCESSFULLY ON IPHONE-6 PLUS SCREEN==================
Given(/^I navigate to Smartos website with iphone-6 plus screen$/, function () {
    cy.viewport('iphone-6+')
});

Given(/^I login successfully to Dana train Page$/, function () {
    cy.LoginDanaFunction(createUser.usernameAD, createUser.passwordAD)
});

When(/^I click on home icon$/, function () {
    cy.get('[href="/"]').click()
});

Then(/^I verify create a new user successfully with iphone-6 plus screen$/, function () {
    cy.xpath("//div[@class='ant-table-scroll']//tbody[@class='ant-table-tbody']//tr[1]")
        .within(function () {
            cy.get('td').eq(0).should('contain.text', createUser.fullnameRC)
            cy.get('td').eq(1).should('contain.text', createUser.usernameRC)
            cy.get('td').eq(2).should('contain.text', createUser.emailRC)
            cy.get('td').eq(5).should('have.text', 'Hoạt động')
        })

});

Then(/^I login with user's account create recently successfully$/, function () {
    cy.LoginDanaFunction(createUser.usernameRC, createUser.passwordRC)
});

And(/^I click on create button to create a new user$/, function () {
    cy.get('.vActions > .ant-btn').click()
});

And(/^I choose image for user$/, function () {
    cy.newUploadBlobFile('images/avatar.jpg', 'image/jpeg')
    cy.get('.ant-modal-footer > .ant-btn').click()
})

And(/^I input username$/, function () {
    cy.get(':nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #userName').type(createUser.usernameRC)
});

And(/^I input fullname$/, function () {
    cy.get(':nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #name').type(createUser.fullnameRC)
});

And(/^I input email$/, function () {
    cy.get('.form-section > :nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #email').type(createUser.emailRC)
});

And(/^I input department$/, function () {
    cy.get('.form-section > :nth-child(4) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fznzOf > .ant-select-selection').click()
    cy.xpath("//li[contains(text(),'Phòng Kinh doanh')]").click()
});

And(/^I input position$/, function () {
    cy.get('.form-section > :nth-child(5) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fznzOf > .ant-select-selection').click()
    cy.xpath("//li[contains(text(),'n Th')]").click()
});

And(/^I input password$/, function () {
    cy.get('#password').type(createUser.passwordRC)
});

And(/^I choose access create notification$/, function () {
    cy.get('#isCanAddAnnouncement').click()
});

And(/^I logout user successfully in the phone size$/, function () {
    cy.LogoutDanaFunctionForPhone()
});

And(/^I logout user successfully$/, function () {
    cy.get('.h4 > .anticon').click()
    cy.LogoutDanaVTFunction()
});

And(/^I click on create button to save a new user in phone size$/, function () {
    //When use want to click on back button to avoid duplicate data, you can use this 
    cy.get('.btn-back').click()
    // cy.get('.sc-fzolEj > .ant-btn-primary').click()
});