import { Given } from "cypress-cucumber-preprocessor/steps"
const loginUnsuc = require('../../fixtures/example.json')

/// <reference types="cypress" />

//---URL FOR DANA TRAIN WEBSITE---
const url = 'https://dana-train-web-admin-stg.enouvo.com/'

//===========LOGIN UNSUCCESSFULLY WITH INPUT ADMIN'S USERNAME DOES NOT REGISTER BEFORE ON MACBOOK-15 SCREEN============
Given(/^I navigate to Smartos website with macbook-15 screen$/, function () {
    cy.viewport("macbook-15")
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url)
});

When(/^I input data for admin's username does not register before (.+)$/, function (userNameNotRegisterBefore) {
    cy.get('#username').click().type(userNameNotRegisterBefore);
    cy.get('#password').click().type(loginUnsuc.passwordAD);
});

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
    cy.wait(5000)
});

Then(/^I verify notice message display for case admin's username does not register before with macbook-15 screen$/, function () {
    cy.get('.ant-notification-notice-with-icon').should('have.text', 'Lỗi!Tên đăng nhập không tìm thấy.')
});

//============LOGIN UNSSUCCESSFULLY WITH INPUT ADMIN'S PASSWORD INVALID ON MACBOOK-15 SCREEN=============
Given(/^I navigate to Smartos website with macbook-15 screen$/, function () {
    cy.viewport("macbook-15")
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url)
});

When(/^I input data for admin's username valid but admin's password invalid (.+)$/, function (passwordInvalid) {
    cy.get('#username').click().type(loginUnsuc.usernameAD);
    cy.get('#password').click().type(passwordInvalid);
});

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
});

Then(/^I verify notice message display for case admin's password invalid with macbook-15 screen$/, function () {
    cy.get('.ant-notification-notice-description').should('have.text', 'Mật khẩu không đúng.')
});

//============LOGIN UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR ADMIN'S USERNAME ON MACBOOK-15 SCREEN=============
Given(/^I navigate to Smartos website with macbook-15 screen$/, function () {
    cy.viewport("macbook-15")
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url)
});

When(/^I input data for admin's password$/, function () {
    cy.get('#password').click().type(loginUnsuc.passwordAD);
});

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
});

Then(/^I verify notice message display for case do not input data for admin's username with macbook-15 screen$/, function () {
    cy.get('.ant-form-explain').should('have.text', 'Nhập tên đăng nhập hoặc email!')
});

//============LOGIN UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR ADMIN'S PASSWORD ON MACBOOK-15 SCREEN=============
Given(/^I navigate to Smartos website with macbook-15 screen$/, function () {
    cy.viewport("macbook-15")
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url)
});

When(/^I input data for admin's username$/, function () {
    cy.get('#username').click().type(loginUnsuc.usernameAD);
});

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
});

Then(/^I verify notice message display for case do not input data for admin's password with macbook-15 screen$/, function () {
    cy.get('.ant-form-explain').should('have.text', 'Vui lòng nhập mật khẩu!')
});

//============LOGIN UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR ADMIN'S USERNAME AND ADMIN'S PASSWORD ON MACBOOK-15 SCREEN==============
Given(/^I navigate to Smartos website with macbook-15 screen$/, function () {
    cy.viewport("macbook-15")
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url)
});

When(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
});

Then(/^I verify notice message display below username for case do not input data for admin's username with macbook-15 screen$/, function () {
    cy.get(':nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-explain').should('have.text', 'Nhập tên đăng nhập hoặc email!')
});

And(/^I verify notice message display below password for case do not input data for admin's password with macbook-15 screen$/, function () {
    cy.get(':nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-explain').should('have.text', 'Vui lòng nhập mật khẩu!')
});

//===========LOGIN UNSUCCESSFULLY WITH INPUT ADMIN'S PASSWORD LESS THAN 3 CHARACTERS ON MACBOOK-15 SCREEN============
Given(/^I navigate to Smartos website with macbook-15 screen$/, function () {
    cy.viewport("macbook-15")
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url)
});

When(/^I input data for admin's username and admin's password less than 3 characters (.+)$/, function (passwordLessthan3Characters) {
    cy.get('#username').click().type(loginUnsuc.usernameAD);
    cy.get('#password').click().type(passwordLessthan3Characters);
});

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
    cy.wait(3000)
});

Then(/^I verify notice message display below password for case input data for admin's password less than 3 characters with macbook-15 screen$/, function () {
    cy.get(':nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-explain').should('have.text', 'Mật khẩu phải chứa ít nhất 3 ký tự')
});

//===========LOGIN UNSUCCESSFULLY WITH INPUT ADMIN'S USERNAME DOES NOT REGISTER BEFORE ON SAMSUNG-S10 SCREEN============
Given(/^I navigate to Smartos website with samsung-s10 screen$/, function () {
    cy.viewport("samsung-s10")
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url)
});

When(/^I input data for admin's username does not register before (.+)$/, function (userNameNotRegisterBefore) {
    cy.get('#username').click().type(userNameNotRegisterBefore);
    cy.get('#password').click().type(loginUnsuc.passwordAD);
});

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
    cy.wait(5000)
});

Then(/^I verify notice message display for case admin's username does not register before with samsung-s10 screen$/, function () {
    cy.get('.ant-notification-notice-with-icon').should('have.text', 'Lỗi!Tên đăng nhập không tìm thấy.')
});

//============LOGIN UNSSUCCESSFULLY WITH INPUT ADMIN'S PASSWORD INVALID ON SAMSUNG_S10 SCREEN=============
Given(/^I navigate to Smartos website with samsung-s10 screen$/, function () {
    cy.viewport("samsung-s10")
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url)
});

When(/^I input data for admin's username valid but admin's password invalid (.+)$/, function (passwordInvalid) {
    cy.get('#username').click().type(loginUnsuc.usernameAD);
    cy.get('#password').click().type(passwordInvalid);
});

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
});

Then(/^I verify notice message display for case admin's password invalid with samsung-s10 screen$/, function () {
    cy.get('.ant-notification-notice-description').should('have.text', 'Mật khẩu không đúng.')
});

//============LOGIN UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR ADMIN'S USERNAME ON SAMSUNG-S10 SCREEN=============
Given(/^I navigate to Smartos website with samsung-s10 screen$/, function () {
    cy.viewport("samsung-s10")
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url)
});

When(/^I input data for admin's password$/, function () {
    cy.get('#password').click().type(loginUnsuc.passwordAD);
});

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
});

Then(/^I verify notice message display for case do not input data for admin's username with samsung-s10 screen$/, function () {
    cy.get('.ant-form-explain').should('have.text', 'Nhập tên đăng nhập hoặc email!')
});

//============LOGIN UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR ADMIN'S PASSWORD ON SAMSUNG-S10 SCREEN=============
Given(/^I navigate to Smartos website with samsung-s10 screen$/, function () {
    cy.viewport("samsung-s10")
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url)
});

When(/^I input data for admin's username$/, function () {
    cy.get('#username').click().type(loginUnsuc.usernameAD);
});

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
});

Then(/^I verify notice message display for case do not input data for admin's password with samsung-s10 screen$/, function () {
    cy.get('.ant-form-explain').should('have.text', 'Vui lòng nhập mật khẩu!')
});

//============LOGIN UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR ADMIN'S USERNAME AND ADMIN'S PASSWORD ON SAMSUNG-S10 SCREEN==============
Given(/^I navigate to Smartos website with samsung-s10 screen$/, function () {
    cy.viewport("samsung-s10")
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url)
});

When(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
});

Then(/^I verify notice message display below username for case do not input data for admin's username with samsung-s10 screen$/, function () {
    cy.get(':nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-explain').should('have.text', 'Nhập tên đăng nhập hoặc email!')
});

And(/^I verify notice message display below password for case do not input data for admin's password with samsung-s10 screen$/, function () {
    cy.get(':nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-explain').should('have.text', 'Vui lòng nhập mật khẩu!')
});

//===========LOGIN UNSUCCESSFULLY WITH INPUT ADMIN'S PASSWORD LESS THAN 3 CHARACTERS ON SAMSUNG-S10 SCREEN============
Given(/^I navigate to Smartos website with samsung-s10 screen$/, function () {
    cy.viewport("macbook-15")
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url)
});

When(/^I input data for admin's username and admin's password less than 3 characters (.+)$/, function (passwordLessthan3Characters) {
    cy.get('#username').click().type(loginUnsuc.usernameAD);
    cy.get('#password').click().type(passwordLessthan3Characters);
});

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
    cy.wait(3000)
});

Then(/^I verify notice message display below password for case input data for admin's password less than 3 characters with samsung-s10 screen$/, function () {
    cy.get(':nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-explain').should('have.text', 'Mật khẩu phải chứa ít nhất 3 ký tự')
});

//===========LOGIN UNSUCCESSFULLY WITH INPUT ADMIN'S USERNAME DOES NOT REGISTER BEFORE ON IPHONE-6 SCREEN============
Given(/^I navigate to Smartos website with iphone-6 screen$/, function () {
    cy.viewport("iphone-6")
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url)
});

When(/^I input data for admin's username does not register before (.+)$/, function (userNameNotRegisterBefore) {
    cy.get('#username').click().type(userNameNotRegisterBefore);
    cy.get('#password').click().type(loginUnsuc.passwordAD);
});

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
    cy.wait(5000)
});

Then(/^I verify notice message display for case admin's username does not register before with iphone-6 screen$/, function () {
    cy.get('.ant-notification-notice-with-icon').should('have.text', 'Lỗi!Tên đăng nhập không tìm thấy.')
});

//============LOGIN UNSSUCCESSFULLY WITH INPUT ADMIN'S PASSWORD INVALID ON IPHONE-6 SCREEN=============
Given(/^I navigate to Smartos website with iphone-6 screen$/, function () {
    cy.viewport("iphone-6")
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url)
});

When(/^I input data for admin's username valid but admin's password invalid (.+)$/, function (passwordInvalid) {
    cy.get('#username').click().type(loginUnsuc.usernameAD);
    cy.get('#password').click().type(passwordInvalid);
});

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
});

Then(/^I verify notice message display for case admin's password invalid with iphone-6 screen$/, function () {
    cy.get('.ant-notification-notice-description').should('have.text', 'Mật khẩu không đúng.')
});

//============LOGIN UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR ADMIN'S USERNAME ON IPHONE-6 SCREEN=============
Given(/^I navigate to Smartos website with iphone-6 screen$/, function () {
    cy.viewport("iphone-6")
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url)
});

When(/^I input data for admin's password$/, function () {
    cy.get('#password').click().type(loginUnsuc.passwordAD);
});

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
});

Then(/^I verify notice message display for case do not input data for admin's username with iphone-6 screen$/, function () {
    cy.get('.ant-form-explain').should('have.text', 'Nhập tên đăng nhập hoặc email!')
});

//============LOGIN UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR ADMIN'S PASSWORD ON IPHONE-6 SCREEN=============
Given(/^I navigate to Smartos website with iphone-6 screen$/, function () {
    cy.viewport("iphone-6")
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url)
});

When(/^I input data for admin's username$/, function () {
    cy.get('#username').click().type(loginUnsuc.usernameAD);
});

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
});

Then(/^I verify notice message display for case do not input data for admin's password with iphone-6 screen$/, function () {
    cy.get('.ant-form-explain').should('have.text', 'Vui lòng nhập mật khẩu!')
});

//============LOGIN UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR ADMIN'S USERNAME AND ADMIN'S PASSWORD ON IPHONE-6 SCREEN==============
Given(/^I navigate to Smartos website with iphone-6 screen$/, function () {
    cy.viewport("iphone-6")
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url)
});

When(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
});

Then(/^I verify notice message display below username for case do not input data for admin's username with iphone-6 screen$/, function () {
    cy.get(':nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-explain').should('have.text', 'Nhập tên đăng nhập hoặc email!')
});

And(/^I verify notice message display below password for case do not input data for admin's password with iphone-6 screen$/, function () {
    cy.get(':nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-explain').should('have.text', 'Vui lòng nhập mật khẩu!')
});

//===========LOGIN UNSUCCESSFULLY WITH INPUT ADMIN'S PASSWORD LESS THAN 3 CHARACTERS ON IPHONE-6 SCREEN============
Given(/^I navigate to Smartos website with iphone-6 screen$/, function () {
    cy.viewport("iphone-6")
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url)
});

When(/^I input data for admin's username and admin's password less than 3 characters (.+)$/, function (passwordLessthan3Characters) {
    cy.get('#username').click().type(loginUnsuc.usernameAD);
    cy.get('#password').click().type(passwordLessthan3Characters);
});

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
    cy.wait(3000)
});

Then(/^I verify notice message display below password for case input data for admin's password less than 3 characters with iphone-6 screen$/, function () {
    cy.get(':nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-explain').should('have.text', 'Mật khẩu phải chứa ít nhất 3 ký tự')
});

//===========LOGIN UNSUCCESSFULLY WITH INPUT ADMIN'S USERNAME DOES NOT REGISTER BEFORE ON IPHONE-6 PLUS SCREEN============
Given(/^I navigate to Smartos website with iphone-6 plus screen$/, function () {
    cy.viewport("iphone-6+")
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url)
});

When(/^I input data for admin's username does not register before (.+)$/, function (userNameNotRegisterBefore) {
    cy.get('#username').click().type(userNameNotRegisterBefore);
    cy.get('#password').click().type(loginUnsuc.passwordAD);
});

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
    cy.wait(5000)
});

Then(/^I verify notice message display for case admin's username does not register before with iphone-6 plus screen$/, function () {
    cy.get('.ant-notification-notice-with-icon').should('have.text', 'Lỗi!Tên đăng nhập không tìm thấy.')
});

//============LOGIN UNSSUCCESSFULLY WITH INPUT ADMIN'S PASSWORD INVALID ON IPHONE-6 PLUS SCREEN=============
Given(/^I navigate to Smartos website with iphone-6 plus screen$/, function () {
    cy.viewport("iphone-6+")
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url)
});

When(/^I input data for admin's username valid but admin's password invalid (.+)$/, function (passwordInvalid) {
    cy.get('#username').click().type(loginUnsuc.usernameAD);
    cy.get('#password').click().type(passwordInvalid);
});

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
});

Then(/^I verify notice message display for case admin's password invalid with iphone-6 plus screen$/, function () {
    cy.get('.ant-notification-notice-description').should('have.text', 'Mật khẩu không đúng.')
});

//============LOGIN UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR ADMIN'S USERNAME ON IPHONE-6 PLUS SCREEN=============
Given(/^I navigate to Smartos website with iphone-6 plus screen$/, function () {
    cy.viewport("iphone-6+")
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url)
});

When(/^I input data for admin's password$/, function () {
    cy.get('#password').click().type(loginUnsuc.passwordAD);
});

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
});

Then(/^I verify notice message display for case do not input data for admin's username with iphone-6 plus screen$/, function () {
    cy.get('.ant-form-explain').should('have.text', 'Nhập tên đăng nhập hoặc email!')
});

//============LOGIN UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR ADMIN'S PASSWORD ON IPHONE-6 PLUS SCREEN=============
Given(/^I navigate to Smartos website with iphone-6 plus screen$/, function () {
    cy.viewport("iphone-6+")
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url)
});

When(/^I input data for admin's username$/, function () {
    cy.get('#username').click().type(loginUnsuc.usernameAD);
});

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
});

Then(/^I verify notice message display for case do not input data for admin's password with iphone-6 plus screen$/, function () {
    cy.get('.ant-form-explain').should('have.text', 'Vui lòng nhập mật khẩu!')
});

//============LOGIN UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR ADMIN'S USERNAME AND ADMIN'S PASSWORD ON IPHONE-6 PLUS SCREEN==============
Given(/^I navigate to Smartos website with iphone-6 plus screen$/, function () {
    cy.viewport("iphone-6+")
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url)
});

When(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
});

Then(/^I verify notice message display below username for case do not input data for admin's username with iphone-6 plus screen$/, function () {
    cy.get(':nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-explain').should('have.text', 'Nhập tên đăng nhập hoặc email!')
});

And(/^I verify notice message display below password for case do not input data for admin's password with iphone-6 plus screen$/, function () {
    cy.get(':nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-explain').should('have.text', 'Vui lòng nhập mật khẩu!')
});

//===========LOGIN UNSUCCESSFULLY WITH INPUT ADMIN'S PASSWORD LESS THAN 3 CHARACTERS ON IPHONE-6 PLUS SCREEN============
Given(/^I navigate to Smartos website with iphone-6 plus screen$/, function () {
    cy.viewport("iphone-6+")
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url)
});

When(/^I input data for admin's username and admin's password less than 3 characters (.+)$/, function (passwordLessthan3Characters) {
    cy.get('#username').click().type(loginUnsuc.usernameAD);
    cy.get('#password').click().type(passwordLessthan3Characters);
});

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
    cy.wait(3000)
});

Then(/^I verify notice message display below password for case input data for admin's password less than 3 characters with iphone-6 plus screen$/, function () {
    cy.get(':nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-explain').should('have.text', 'Mật khẩu phải chứa ít nhất 3 ký tự')
});