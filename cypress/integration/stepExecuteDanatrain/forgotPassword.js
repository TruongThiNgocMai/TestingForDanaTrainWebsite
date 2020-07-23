import { Given } from "cypress-cucumber-preprocessor/steps"
const forgotPassword = require('../../fixtures/example.json')

/// <reference types="cypress" />

//---URL FOR DANA TRAIN WEBSITE---
const url = 'https://dana-train-web-admin-stg.enouvo.com/'

//===========FORGOT PASSWORD AND RESET A NEW PASSWORD SUCCESSFULLY WITH ALL SCREENS============

Given(/^I navigate to Dana train login page$/, function () {
  cy.visit(url)
})

When(/^I click on forgot password link$/, function () {
  cy.get('a').click()
})

And(/^I input my email to reset a new password$/, function () {
  cy.get('#email').type(forgotPassword.emailForgotPassword)
})

And(/^I click on forgot password button$/, function () {
  cy.get('.ant-btn-primary').click()
})

Then(/^I verify have an email have sent to mailbox$/, function (email) {
  // cy.get('.anticon').should('be.visible')
  // cy.get('.h3').should('have.text', 'Thành công!')
  // cy.xpath("//div[contains(@class,'txtDescription')]").should('be.visible').should('have.text', 'Bạn hãy kiểm tra email. Mật khẩu mới đã được gửi qua email của bạn.')
  cy.openWindow('https://mail.google.com/mail/u/0/#inbox')
  cy.reload(true)

  // Tài khoản email không tồn tại
  // cy.get('.ant-notification-notice').should('be.visible')
  // cy.get('.ant-notification-notice-description').should('be.visible').should('have.text', 'Người dùng không tìm thấy.')

  // Tài khoản Email không đúng định dạng
  // cy.get('.ant-form-explain').should('be.visible').should('have.text', 'Email không đúng định dạng')

  // Để trống Email
  // cy.get('.ant-form-explain').should('be.visible').should('have.text', 'Vui lòng nhập email!')
})

