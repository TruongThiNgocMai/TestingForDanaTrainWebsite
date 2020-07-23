/// <reference types="cypress" />
import { Given } from "cypress-cucumber-preprocessor/steps";
import promisify from 'cypress-promise'

// const jsFile = require('./../../fixtures/testdata [20-07-2020].json')
//============URL OF DANA TRAIN WEBSITE==============
const url = 'https://dana-train-web-admin-stg.enouvo.com/'
const jsFile = require('E:/Dana_train/cypress/fixtures/testdata [23-07-2020].json')

function readJsonFile(expectKey) {
    var result;
    for (var i in jsFile) {
        var val = jsFile[i];
        if (jsFile[i][expectKey]) {
            result = val[expectKey];
        }
    }
    return result;
}

//===========LOGIN UNSUCCESSFULLY WITH INPUT EMAIL AND PASSWORD ARE VALID ON MACBOOK-15 SCREEN============

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url);
})

When(/^I input valid data to VTusername as \"([^\"]*)\"$/, async function (expectKey) {
    var VTusername = readJsonFile(expectKey)
    cy.get('#username').type(VTusername)
})

And(/^I input valid data to VTpassword as \"([^\"]*)\"$/, async function (expectKey) {
    var VTpassword = readJsonFile(expectKey)
    cy.get('#password').type(VTpassword)
})

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
})

Then(/^I verify login successfully into Dana train website with macbook-15 screen$/, function () {
    cy.get('.logo').should('be.visible')
    cy.get('[title="Công văn đến/đi"]').should('be.visible').should('have.text', 'Công văn đến/đi')
    cy.get('[title="Tin nhắn nội bộ"]').should('be.visible').should('have.text', 'Tin nhắn nội bộ')
    cy.get('[title="Thông báo"]').should('be.visible').should('have.text', 'Thông báo')
    cy.get('[title="Tủ tài liệu"]').should('be.visible').should('have.text', 'Tủ tài liệu')
    cy.get('.fullLogo').should('be.visible')
    cy.get('.notification-section > .ant-btn').should('be.visible')
    cy.get('.cancel-button').should('be.visible')
    cy.get('.save-button').should('be.visible')
})

//===========LOGIN UNSUCCESSFULLY WITH INPUT EMAIL AND PASSWORD ARE VALID ON SAMSUNG-S10 SCREEN============

When(/^I input valid data to GDusername as \"([^\"]*)\"$/, async function (expectKey) {
    var GDusername = readJsonFile(expectKey)
    cy.get('#username').type(GDusername)
})

And(/^I input valid data to GDpassword as \"([^\"]*)\"$/, async function (expectKey) {
    var GDpassword = readJsonFile(expectKey)
    cy.get('#password').type(GDpassword)
})

Then(/^I verify login successfully into Dana train website with samsung-s10 screen$/, function () {
    cy.get('.title').should('be.visible').should('have.text', 'Darsitec')
    cy.get('a > .sc-AxhCb > .normalTitle').should('be.visible').should('have.text', 'Trang cá nhân')
    cy.get('[href="/"]').should('be.visible')
    cy.get('[href="/notifications"]').should('be.visible')
    cy.get('[href="/profile"]').should('be.visible')
})

//===========LOGIN UNSUCCESSFULLY WITH INPUT EMAIL AND PASSWORD ARE VALID ON IPHONE-6 SCREEN============

When(/^I input valid data to TPusername as \"([^\"]*)\"$/, async function (expectKey) {
    var TPusername = readJsonFile(expectKey)
    cy.get('#username').type(TPusername)
})

And(/^I input valid data to TPpassword as \"([^\"]*)\"$/, async function (expectKey) {
    var TPpassword = readJsonFile(expectKey)
    cy.get('#password').type(TPpassword)
})

Then(/^I verify login successfully into Dana train website with iphone-6 screen$/, function () {
    cy.get('.title').should('be.visible').should('have.text', 'Darsitec')
    cy.get('a > .sc-AxhCb > .normalTitle').should('be.visible').should('have.text', 'Trang cá nhân')
    cy.get('[href="/"]').should('be.visible')
    cy.get('[href="/notifications"]').should('be.visible')
    cy.get('[href="/profile"]').should('be.visible')
})

//===========LOGIN UNSUCCESSFULLY WITH INPUT EMAIL AND PASSWORD ARE VALID ON IPHONE-6 PLUS SCREEN============

When(/^I input valid data to NVusername as \"([^\"]*)\"$/, async function (expectKey) {
    var NVusername = readJsonFile(expectKey)
    cy.get('#username').type(NVusername)
})

And(/^I input valid data to NVpassword as \"([^\"]*)\"$/, async function (expectKey) {
    var NVpassword = readJsonFile(expectKey)
    cy.get('#password').type(NVpassword)
})

Then(/^I verify login successfully into Dana train website with iphone-6 plus screen$/, function () {
    cy.get('.title').should('be.visible').should('have.text', 'Darsitec')
    cy.get('a > .sc-AxhCb > .normalTitle').should('be.visible').should('have.text', 'Trang cá nhân')
    cy.get('[href="/notifications"]').should('be.visible')
    cy.get('[href="/profile"]').should('be.visible')
})

