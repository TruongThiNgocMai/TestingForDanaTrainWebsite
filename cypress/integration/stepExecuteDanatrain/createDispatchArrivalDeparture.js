import { Given } from "cypress-cucumber-preprocessor/steps";

const createDispatch = require('../../fixtures/example.json')

/// <reference types="cypress" />

//================CREATE DISPATCH ARRIVAL DEPARTURE WITH MACBOOK-15 SCREEN==================
Given(/^I navigate to Smartos website with macbook-15 screen$/, function () {
    cy.viewport("macbook-15")
});

Given(/^I login successfully to Dana train Page with dispatch account$/, function () {
    cy.LoginDanaFunction(createDispatch.usernameVT, createDispatch.passwordVT)
});

When(/^I click on dispatch arrival and departure$/, function () {
    cy.get('[title="Công văn đến/đi"]').click()
});

And(/^I click on Create dispatch button$/, function () {
    cy.get('.vActions > .ant-btn').click()
});

And(/^I choose propertie for dispatch$/, function () {
    cy.get('.sc-fzoant > [form="[object Object]"] > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #priority > .ant-select-selection').click()
    cy.xpath("//li[@class='ant-select-dropdown-menu-item']").click()
});

And(/^I input from number for dispatch$/, function () {
    cy.get('#fromNumber').type(createDispatch.fromNumber)
});

And(/^I input source number for dispatch$/, function () {
    cy.get('#sourceNumber').type(createDispatch.sourceNumber)
});

And(/^I input publisher for dispatch$/, function () {
    cy.get('#publisher').type(createDispatch.publisher)
});

And(/^I input title for dispatch$/, function () {
    cy.get('#title').type(createDispatch.title)
});

And(/^I input content for dispatch$/, function () {
    cy.get('#content').type(createDispatch.contentdemo)
});

And(/^I choose people handling for dispatch$/, function () {
    cy.get(':nth-child(7) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fznzOf > .ant-select-selection').click()
    cy.xpath("//a[contains(text(),'Super Giám')]").click()
});

And(/^I choose the file attach for dispatch/, function () {
    cy.newUploadBlobFile('files/Smartos-Flow-User.xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
});

And(/^I click on Create dispatch button to save dispatch$/, function () {
    cy.get('.sc-fzolEj > .ant-btn-primary').click()
});

Then(/^I verify create a new dispatch successfully with macbook-15 screen$/, function () {
    cy.reload()
    const fromDate = Cypress.moment().format("DD-MM-YYYY HH:mm")
    cy.xpath("//div[@class='ant-table-scroll']//tbody[@class='ant-table-tbody']//tr[1]")
        .within(function () {
            cy.get('td').eq(2).should('contain.text', createDispatch.title)
            cy.get('td').eq(5).should('contain.text', createDispatch.fromNumber)
            // cy.get('td').eq(7).should('contain.text', fromDate)
        });
});

And(/^I verify user logout successfully with dispatch account$/, function () {
    cy.LogoutDanaFunctionForWebMac()
});

And(/^I login successfully to Dana train Page with manager account to check the dispatch have sent$/, function () {
    cy.LoginDanaFunctionToCheckDispatch(createDispatch.usernameGD, createDispatch.passwordGD)
    cy.get('.notification-section > .ant-btn').click()
    cy.xpath("//div[@class='sc-fznZeY jlXzwO list-noti']//div[1]//div[1]//div[1]//div[2]//strong[1]").should('have.text', createDispatch.title)
});

//================CREATE DISPATCH ARRIVAL DEPARTURE WITH SAMSUNG-S10 SCREEN==================
Given(/^I navigate to Smartos website with samsung-s10 screen$/, function () {
    cy.viewport("samsung-s10")
});

Given(/^I login successfully to Dana train Page with dispatch account$/, function () {
    cy.LoginDanaFunction(createDispatch.usernameVT, createDispatch.passwordVT)
});

When(/^I click on Create dispatch button$/, function () {
    cy.get('.vActions > .ant-btn').click()
});

And(/^I choose propertie for dispatch$/, function () {
    cy.get('.sc-fzoant > [form="[object Object]"] > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #priority > .ant-select-selection').click()
    cy.xpath("//li[@class='ant-select-dropdown-menu-item']").click()
});

And(/^I input from number for dispatch$/, function () {
    cy.get('#fromNumber').type(createDispatch.fromNumber)
});

And(/^I input source number for dispatch$/, function () {
    cy.get('#sourceNumber').type(createDispatch.sourceNumber)
});

And(/^I input publisher for dispatch$/, function () {
    cy.get('#publisher').type(createDispatch.publisher)
});

And(/^I input title for dispatch$/, function () {
    cy.get('#title').type(createDispatch.title)
});

And(/^I input content for dispatch$/, function () {
    cy.get('#content').type(createDispatch.contentdemo)
});

And(/^I choose people handling for dispatch$/, function () {
    cy.get(':nth-child(7) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fznzOf > .ant-select-selection').scrollIntoView().click()
    cy.xpath("//a[contains(text(),'Super Giám')]").click()
});

And(/^I choose the file attach for dispatch/, function () {
    cy.newUploadBlobFile('files/Document.txt', 'text/plain')
});

And(/^I click on Create dispatch button to save dispatch$/, function () {
    cy.get('.sc-fzolEj > .ant-btn-primary').click()
});

Then(/^I verify create a new dispatch successfully with samsung-s10 screen$/, function () {
    cy.reload()
    cy.get('.h4 > .anticon').click()
    const fromDate = Cypress.moment().format("DD-MM-YYYY HH:mm")
    cy.xpath("//div[@class='ant-table-scroll']//tbody[@class='ant-table-tbody']//tr[1]")
        .within(function () {
            cy.get('td').eq(2).should('contain.text', createDispatch.title)
            cy.get('td').eq(5).should('contain.text', createDispatch.fromNumber)
            // cy.get('td').eq(7).should('contain.text', fromDate)
        });
});

And(/^I verify user logout successfully with dispatch account for VT account$/, function () {
    cy.LogoutDanaFunctionForPhoneVT()
});

And(/^I login successfully to Dana train Page with manager account to check the dispatch have sent in the phone size$/, function () {
    cy.LoginDanaFunctionToCheckDispatch(createDispatch.usernameGD, createDispatch.passwordGD)
    cy.xpath('//div[4]/div[1]/div[1]/div/div/div/div[1]/div/div/div/div/div[3]/span/div/a').should('have.text', createDispatch.title)
    cy.xpath('//div[4]/div[1]/div[1]/div/div/div/div[1]/div/div/div/div/div[6]/span').should('have.text', createDispatch.fromNumber)
    cy.get('[href="/notifications"]').click()
    cy.get(':nth-child(1) > .noti-item > .content-noti-item > .bottom-noti-item > .title-noti').should('have.text', createDispatch.title)
});

//================CREATE DISPATCH ARRIVAL DEPARTURE WITH IPHONE-6 SCREEN==================
Given(/^I navigate to Smartos website with iphone-6 screen$/, function () {
    cy.viewport("samsung-s10")
});

Given(/^I login successfully to Dana train Page with dispatch account$/, function () {
    cy.LoginDanaFunction(createDispatch.usernameVT, createDispatch.passwordVT)
});

When(/^I click on Create dispatch button$/, function () {
    cy.get('.vActions > .ant-btn').click()
});

And(/^I choose propertie for dispatch$/, function () {
    cy.get('.sc-fzoant > [form="[object Object]"] > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #priority > .ant-select-selection').click()
    cy.xpath("//li[@class='ant-select-dropdown-menu-item']").click()
});

And(/^I input from number for dispatch$/, function () {
    cy.get('#fromNumber').type(createDispatch.fromNumber)
});

And(/^I input source number for dispatch$/, function () {
    cy.get('#sourceNumber').type(createDispatch.sourceNumber)
});

And(/^I input publisher for dispatch$/, function () {
    cy.get('#publisher').type(createDispatch.publisher)
});

And(/^I input title for dispatch$/, function () {
    cy.get('#title').type(createDispatch.title)
});

And(/^I input content for dispatch$/, function () {
    cy.get('#content').type(createDispatch.contentdemo)
});

And(/^I choose people handling for dispatch$/, function () {
    cy.get(':nth-child(7) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fznzOf > .ant-select-selection').scrollIntoView().click()
    cy.xpath("//a[contains(text(),'Super Giám')]").click()
});

And(/^I choose the file attach for dispatch/, function () {
    cy.newUploadBlobFile('MauBaoCao.docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
});

And(/^I click on Create dispatch button to save dispatch$/, function () {
    cy.get('.sc-fzolEj > .ant-btn-primary').click()
});

Then(/^I verify create a new dispatch successfully with iphone-6 screen$/, function () {
    cy.reload()
    cy.get('.h4 > .anticon').click()
    const fromDate = Cypress.moment().format("DD-MM-YYYY HH:mm")
    cy.xpath("//div[@class='ant-table-scroll']//tbody[@class='ant-table-tbody']//tr[1]")
        .within(function () {
            cy.get('td').eq(2).should('contain.text', createDispatch.title)
            cy.get('td').eq(5).should('contain.text', createDispatch.fromNumber)
            // cy.get('td').eq(7).should('contain.text', fromDate)
        });
});

And(/^I verify user logout successfully with dispatch account for VT account$/, function () {
    cy.LogoutDanaFunctionForPhoneVT()
});

And(/^I login successfully to Dana train Page with manager account to check the dispatch have sent in the phone size$/, function () {
    cy.LoginDanaFunctionToCheckDispatch(createDispatch.usernameGD, createDispatch.passwordGD)
    cy.xpath('//div[4]/div[1]/div[1]/div/div/div/div[1]/div/div/div/div/div[3]/span/div/a').should('have.text', createDispatch.title)
    cy.xpath('//div[4]/div[1]/div[1]/div/div/div/div[1]/div/div/div/div/div[6]/span').should('have.text', createDispatch.fromNumber)
    cy.get('[href="/notifications"]').click()
    cy.get(':nth-child(1) > .noti-item > .content-noti-item > .bottom-noti-item > .title-noti').should('have.text', createDispatch.title)
});


//================CREATE DISPATCH ARRIVAL DEPARTURE WITH IPHONE-6 PLUS SCREEN==================
Given(/^I navigate to Smartos website with iphone-6 plus screen$/, function () {
    cy.viewport("samsung-s10")
});

Given(/^I login successfully to Dana train Page with dispatch account$/, function () {
    cy.LoginDanaFunction(createDispatch.usernameVT, createDispatch.passwordVT)
});

When(/^I click on Create dispatch button$/, function () {
    cy.get('.vActions > .ant-btn').click()
});

And(/^I choose propertie for dispatch$/, function () {
    cy.get('.sc-fzoant > [form="[object Object]"] > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #priority > .ant-select-selection').click()
    cy.xpath("//li[@class='ant-select-dropdown-menu-item']").click()
});

And(/^I input from number for dispatch$/, function () {
    cy.get('#fromNumber').type(createDispatch.fromNumber)
});

And(/^I input source number for dispatch$/, function () {
    cy.get('#sourceNumber').type(createDispatch.sourceNumber)
});

And(/^I input publisher for dispatch$/, function () {
    cy.get('#publisher').type(createDispatch.publisher)
});

And(/^I input title for dispatch$/, function () {
    cy.get('#title').type(createDispatch.title)
});

And(/^I input content for dispatch$/, function () {
    cy.get('#content').type(createDispatch.contentdemo)
});

And(/^I choose people handling for dispatch$/, function () {
    cy.get(':nth-child(7) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fznzOf > .ant-select-selection').scrollIntoView().click()
    cy.xpath("//a[contains(text(),'Super Giám')]").click()
});

And(/^I choose the file attach for dispatch/, function () {
    cy.newUploadBlobFile('files/Report.pdf', 'application/pdf')
});

And(/^I click on Create dispatch button to save dispatch$/, function () {
    cy.get('.sc-fzolEj > .ant-btn-primary').click()
});

Then(/^I verify create a new dispatch successfully with iphone-6 plus screen$/, function () {
    cy.reload()
    cy.get('.h4 > .anticon').click()
    const fromDate = Cypress.moment().format("DD-MM-YYYY HH:mm")
    cy.xpath("//div[@class='ant-table-scroll']//tbody[@class='ant-table-tbody']//tr[1]")
        .within(function () {
            cy.get('td').eq(2).should('contain.text', createDispatch.title)
            cy.get('td').eq(5).should('contain.text', createDispatch.fromNumber)
            // cy.get('td').eq(7).should('contain.text', fromDate)
        });
});

And(/^I verify user logout successfully with dispatch account for VT account$/, function () {
    cy.LogoutDanaFunctionForPhoneVT()
});

And(/^I login successfully to Dana train Page with manager account to check the dispatch have sent in the phone size$/, function () {
    cy.LoginDanaFunctionToCheckDispatch(createDispatch.usernameGD, createDispatch.passwordGD)
    cy.xpath('//div[4]/div[1]/div[1]/div/div/div/div[1]/div/div/div/div/div[3]/span/div/a').should('have.text', createDispatch.title)
    cy.xpath('//div[4]/div[1]/div[1]/div/div/div/div[1]/div/div/div/div/div[6]/span').should('have.text', createDispatch.fromNumber)
    cy.get('[href="/notifications"]').click()
    cy.get(':nth-child(1) > .noti-item > .content-noti-item > .bottom-noti-item > .title-noti').should('have.text', createDispatch.title)
});
