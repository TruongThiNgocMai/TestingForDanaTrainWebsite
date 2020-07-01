import { Given } from "cypress-cucumber-preprocessor/steps"
const forgotPassword = require('../../fixtures/example.json')

/// <reference types="cypress" />

//---URL FOR DANA TRAIN WEBSITE---
const url = 'https://dana-train-web-admin-stg.enouvo.com/'

//===========FORGOT PASSWORD AND RESET A NEW PASSWORD SUCCESSFULLY WITH MACBOOK-15 SCREEN============
Given(/^I navigate to Smartos website with macbook-15 screen$/, function () {
  cy.viewport("macbook-15")
});

Given(/^I navigate to Dana train login page$/, function () {
  cy.visit(url)
});

When(/^I click on forgot password link$/, function () {
  cy.get('a').click()
});

And(/^I input my email to reset a new password$/, function () {
  cy.get('#email').type(forgotPassword.emailForgotPassword)
});

And(/^I click on forgot password button$/, function () {
  cy.get('.ant-btn-primary').click()
});

Then(/^I verify have an email have sent to mailbox with macbook-15 screen$/, function (email) {
  cy.get('.anticon').should('be.visible')
  cy.get('.h3').should('have.text', 'Thành công!')
  // cy.xpath("//div[contains(@class,'txtDescription')]").should('be.visible').should('have.text', 'Bạn hãy kiểm tra email. Mật khẩu mới đã được gửi qua email của bạn.')
  cy.openWindow('https://mail.google.com/mail/u/0/#inbox')
  cy.reload(true)
})

//===========FORGOT PASSWORD AND RESET A NEW PASSWORD SUCCESSFULLY WITH SAMSUNNG-S10 SCREEN============
Given(/^I navigate to Smartos website with samsung-s10 screen$/, function () {
  cy.viewport("samsung-s10")
});

Given(/^I navigate to Dana train login page$/, function () {
  cy.visit(url)
});

When(/^I click on forgot password link$/, function () {
  cy.get('a').click()
});

And(/^I input my email to reset a new password$/, function () {
  cy.get('#email').type(forgotPassword.emailForgotPassword)
});

And(/^I click on forgot password button$/, function () {
  cy.get('.ant-btn-primary').click()
});

Then(/^I verify have an email have sent to mailbox with samsung-s10 screen$/, function (email) {
  cy.get('.anticon').should('be.visible')
  cy.get('.h3').should('have.text', 'Thành công!')
  // cy.xpath("//div[contains(@class,'txtDescription')]").should('be.visible').should('have.text', 'Bạn hãy kiểm tra email. Mật khẩu mới đã được gửi qua email của bạn.')
  cy.openWindow('https://mail.google.com/mail/u/0/#inbox')
  cy.reload(true)
})

//===========FORGOT PASSWORD AND RESET A NEW PASSWORD SUCCESSFULLY WITH IPHONE-6 SCREEN============
Given(/^I navigate to Smartos website with iphone-6 screen$/, function () {
  cy.viewport("iphone-6")
});

Given(/^I navigate to Dana train login page$/, function () {
  cy.visit(url)
});

When(/^I click on forgot password link$/, function () {
  cy.get('a').click()
});

And(/^I input my email to reset a new password$/, function () {
  cy.get('#email').type(forgotPassword.emailForgotPassword)
});

And(/^I click on forgot password button$/, function () {
  cy.get('.ant-btn-primary').click()
});

Then(/^I verify have an email have sent to mailbox with iphone-6 screen$/, function (email) {
  cy.get('.anticon').should('be.visible')
  cy.get('.h3').should('have.text', 'Thành công!')
  // cy.xpath("//div[contains(@class,'txtDescription')]").should('be.visible').should('have.text', 'Bạn hãy kiểm tra email. Mật khẩu mới đã được gửi qua email của bạn.')
  cy.openWindow('https://mail.google.com/mail/u/0/#inbox')
  cy.reload(true)
})

//===========FORGOT PASSWORD AND RESET A NEW PASSWORD SUCCESSFULLY WITH IPHONE-6 PLUS SCREEN============
Given(/^I navigate to Smartos website with iphone-6 plus screen$/, function () {
  cy.viewport("iphone-6+")
});

Given(/^I navigate to Dana train login page$/, function () {
  cy.visit(url)
});

When(/^I click on forgot password link$/, function () {
  cy.get('a').click()
});

And(/^I input my email to reset a new password$/, function () {
  cy.get('#email').type(forgotPassword.emailForgotPassword)
});

And(/^I click on forgot password button$/, function () {
  cy.get('.ant-btn-primary').click()
});

Then(/^I verify have an email have sent to mailbox with iphone-6 plus screen$/, function (email) {
  cy.get('.anticon').should('be.visible')
  cy.get('.h3').should('have.text', 'Thành công!')
  // cy.xpath("//div[contains(@class,'txtDescription')]").should('be.visible').should('have.text', 'Bạn hãy kiểm tra email. Mật khẩu mới đã được gửi qua email của bạn.')
  cy.openWindow('https://mail.google.com/mail/u/0/#inbox')
  cy.reload(true)
})