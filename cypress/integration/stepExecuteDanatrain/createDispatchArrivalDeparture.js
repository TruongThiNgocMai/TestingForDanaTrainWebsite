import { Given } from "cypress-cucumber-preprocessor/steps";
const createDispatch = require('./../../fixtures/example.json')
const jsFile = require('./../../fixtures/testdata [20-07-2020].json')
/// <reference types="cypress" />

const fromNumber = createDispatch.fromNumber;
const sourceNumber = createDispatch.sourceNumber;
const publisher = createDispatch.publisher;
const title = createDispatch.title;
const contentdemo = createDispatch.contentdemo;

var DataTest = [
    {
        "FromNumber": fromNumber,
        "SourceNumber": sourceNumber,
        "Publisher": publisher,
        "Title": title,
        "Contentdemo": contentdemo
    }
]

//================CREATE DISPATCH ARRIVAL DEPARTURE WITH MACBOOK-15 SCREEN==================

Given(/^I login successfully to Dana train Page with dispatch account$/, function () {
    cy.LoginDanaFunction(jsFile[0].VT_username, jsFile[0].VT_password)
})

When(/^I click on dispatch arrival and departure$/, function () {
    cy.get('[title="Công văn đến/đi"]').click()
})

And(/^I click on Create dispatch button$/, function () {
    cy.get('.vActions > .ant-btn').click()
})

And(/^I choose propertie for dispatch$/, function () {
    cy.get('.sc-fzoant > [form="[object Object]"] > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #priority > .ant-select-selection').click()
    cy.xpath("//li[@class='ant-select-dropdown-menu-item']").click()
})

And(/^I input from number for dispatch$/, function () {
    cy.get('#fromNumber').type(fromNumber)
})

And(/^I input source number for dispatch$/, function () {
    cy.get('#sourceNumber').type(sourceNumber)
})

And(/^I input publisher for dispatch$/, function () {
    cy.get('#publisher').type(publisher)
})

And(/^I input title for dispatch$/, function () {
    cy.get('#title').type(title)
})

And(/^I input content for dispatch$/, function () {
    cy.get('#content').type(contentdemo)
})

And(/^I choose people handling for dispatch$/, function () {
    cy.get(':nth-child(7) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fznzOf > .ant-select-selection').click()
    cy.xpath("//a[contains(text(),'TUI0TTran Hanh Trang')]").click()
})

And(/^I choose the file attach with xlsx format for dispatch$/, function () {
    cy.newUploadBlobFile('files/Smartos-Flow-User.xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
})

And(/^I click on Create dispatch button to save dispatch$/, function () {
    cy.get('.sc-fzolEj > .ant-btn-primary').click()
})

Then(/^I verify create a new dispatch successfully$/, function () {
    cy.reload()
    const fromDate = Cypress.moment().format("DD-MM-YYYY HH:mm")
    cy.xpath("//div[@class='ant-table-scroll']//tbody[@class='ant-table-tbody']//tr[1]")
        .within(function () {
            cy.get('td').eq(2).should('contain.text', title)
            cy.get('td').eq(5).should('contain.text', fromNumber)
            // cy.get('td').eq(7).should('contain.text', fromDate)
        })
})

And(/^I verify user logout successfully with dispatch account$/, function () {
    cy.LogoutDanaFunctionForWebMac()
})

And(/^I login successfully to Dana train Page with manager account to check the dispatch have sent$/, function () {
    cy.LoginDanaFunctionToCheck(jsFile[1].GD_username, jsFile[1].GD_password)
    cy.get('.notification-section > .ant-btn').click()
    cy.xpath("//div[@class='sc-fznZeY jlXzwO list-noti']//div[1]//div[1]//div[1]//div[2]//strong[1]").should('have.text', title)
})

//================CREATE DISPATCH ARRIVAL DEPARTURE WITH SAMSUNG-S10 SCREEN==================

When(/^I click on homePage icon$/, function () {
    cy.get('[href="/"]').click()
})

And(/^I choose the file attach with txt format for dispatch$/, function () {
    cy.newUploadBlobFile('files/Document.txt', 'text/plain')
})

And(/^I verify user logout successfully with dispatch account for VT account$/, function () {
    cy.LogoutDanaFunctionForPhoneVT()
})

And(/^I login successfully to Dana train Page with manager account to check the dispatch have sent in the phone size$/, function () {
    cy.LoginDanaFunctionToCheck(jsFile[1].GD_username, jsFile[1].GD_password)
    cy.get('[href="/notifications"]').click()
    cy.get(':nth-child(1) > .noti-item > .content-noti-item > .bottom-noti-item > .title-noti').should('have.text', title)
})

//================CREATE DISPATCH ARRIVAL DEPARTURE WITH IPHONE-6 SCREEN==================

And(/^I choose the file attach with docx for dispatch$/, function () {
    cy.newUploadBlobFile('files/MauBaoCao.docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
})

//================CREATE DISPATCH ARRIVAL DEPARTURE WITH IPHONE-6 PLUS SCREEN==================

And(/^I choose the file attach with pfd format for dispatch$/, function () {
    cy.newUploadBlobFile('files/Report.pdf', 'application/pdf')
})

And(/^I verify save excel file with data to create dispatch$/, function () {
    cy.writeDataFromArrayToExcel(DataTest)
})