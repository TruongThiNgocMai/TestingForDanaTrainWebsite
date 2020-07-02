import { Given } from "cypress-cucumber-preprocessor/steps";
const loginAdmin = require('../../fixtures/example.json')
// const xlsx = require("xlsx")

/// <reference types="cypress" />

//============URL OF DANA TRAIN WEBSITE==============
const url = 'https://dana-train-web-admin-stg.enouvo.com/'

//===========LOGIN UNSUCCESSFULLY WITH INPUT EMAIL AND PASSWORD ARE VALID ON MACBOOK-15 SCREEN============
Given(/^I navigate to Smartos website with macbook-15 screen$/, function () {
    cy.viewport("macbook-15");
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url);
});

When(/^I input valid data to username and password$/, function () {
    cy.get('#username').click().type(loginAdmin.usernameAD);
    cy.get('#password').click().type(loginAdmin.passwordAD);
});

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
});

Then(/^I verify login successfully into Dana train website with macbook-15 screen$/, function () {
    cy.get('.logo').should('be.visible')
    cy.get('.ant-menu-item').should('be.visible').should('have.text', 'Người dùng')
    cy.get('.rightHeader > .ant-avatar > img').should('be.visible')
    cy.get('.name').should('be.visible').should('have.text', 'Admin')
    cy.get('.role > span').should('be.visible').should('have.text', 'Khác')
    cy.get('.notification-section > .ant-btn').should('be.visible')
    cy.get('.cancel-button').should('be.visible')
    cy.get('.save-button').should('be.visible')

    cy.saveDataIntoExcelFile(loginAdmin.usernameAD, loginAdmin.passwordAD, "DataForLogin", "DanaTrainExecute")
});

//===========LOGIN UNSUCCESSFULLY WITH INPUT EMAIL AND PASSWORD ARE VALID ON SAMSUNG-S10 SCREEN============
Given(/^I navigate to Smartos website with samsung-s10 screen$/, function () {
    cy.viewport("samsung-s10");
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url);
});

When(/^I input valid data to username and password$/, function () {
    cy.get('#username').click().type(loginAdmin.usernameAD);
    cy.get('#password').click().type(loginAdmin.passwordAD);
});

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
});

Then(/^I verify login successfully into Dana train website with samsung-s10 screen$/, function () {
    cy.get('.title').should('be.visible').should('have.text', 'Darsitec')
    cy.get('a > .sc-AxhCb > .normalTitle').should('be.visible').should('have.text', 'Trang cá nhân')
    cy.get('[href="/"]').should('be.visible')
    cy.get('[href="/notifications"]').should('be.visible')
    cy.get('[href="/profile"]').should('be.visible')
});

//===========LOGIN UNSUCCESSFULLY WITH INPUT EMAIL AND PASSWORD ARE VALID ON IPHONE-6 SCREEN============
Given(/^I navigate to Smartos website with iphone-6 screen$/, function () {
    cy.viewport("iphone-6");
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url);
});

When(/^I input valid data to username and password$/, function () {
    cy.get('#username').click().type(loginAdmin.usernameAD);
    cy.get('#password').click().type(loginAdmin.passwordAD);
});

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
});

Then(/^I verify login successfully into Dana train website with iphone-6 screen$/, function () {
    cy.get('.title').should('be.visible').should('have.text', 'Darsitec')
    cy.get('a > .sc-AxhCb > .normalTitle').should('be.visible').should('have.text', 'Trang cá nhân')
    cy.get('[href="/"]').should('be.visible')
    cy.get('[href="/notifications"]').should('be.visible')
    cy.get('[href="/profile"]').should('be.visible')
});

//===========LOGIN UNSUCCESSFULLY WITH INPUT EMAIL AND PASSWORD ARE VALID ON IPHONE-6 PLUS SCREEN============
Given(/^I navigate to Smartos website with iphone-6 plus screen$/, function () {
    cy.viewport("iphone-6+");
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url);
});

When(/^I input valid data to username and password$/, function () {
    cy.get('#username').click().type(loginAdmin.usernameAD);
    cy.get('#password').click().type(loginAdmin.passwordAD);
});

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
});

Then(/^I verify login successfully into Dana train website with iphone-6 plus screen$/, function () {
    cy.get('.title').should('be.visible').should('have.text', 'Darsitec')
    cy.get('a > .sc-AxhCb > .normalTitle').should('be.visible').should('have.text', 'Trang cá nhân')
    cy.get('[href="/"]').should('be.visible')
    cy.get('[href="/notifications"]').should('be.visible')
    cy.get('[href="/profile"]').should('be.visible')
});