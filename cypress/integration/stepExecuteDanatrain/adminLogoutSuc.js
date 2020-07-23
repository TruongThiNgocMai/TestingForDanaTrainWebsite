import { Given } from "cypress-cucumber-preprocessor/steps";
const logoutSuc = require('../../fixtures/example.json')

/// <reference types="cypress" />

//================LOGOUT SUCCESSFULLY WITH MACBOOK-15 SCREEN==================

Given(/^I login successfully to Dana train Page$/, function () {
    cy.LoginDanaFunction(logoutSuc.usernameAD, logoutSuc.passwordAD)
})

When(/^I click on profile button$/, function () {
    cy.get('.rightHeader > .ant-avatar').click();
})

And(/^I click on Logout button$/, function () {
    cy.get('.ant-dropdown-menu > :nth-child(3)').click();
})

Then(/^I verify Logout successfully with macbook-15 screen$/, function () {
    cy.location().should((loc) => {
        expect(loc.href).to.eq('https://dana-train-web-admin-stg.enouvo.com/login');
    })
    cy.get('.logo').should('be.visible')
    cy.get('.maintitle').should('be.visible').should('have.text', 'Đăng nhập')
    cy.get('#username').should('be.visible')
    cy.get('#password').should('be.visible')
    cy.get('.ant-btn').should('be.visible')
    cy.get('a').should('be.visible').should('have.text', 'Quên mật khẩu')
})

//================LOGOUT SUCCESSFULLY WITH SAMSUNG-S10 SCREEN==================

And(/^I click on logout button in the phone size$/, function () {
    cy.get('.active').click()
    cy.get('.sc-fznOgF > .ant-btn').scrollIntoView().click()
    cy.get('.ant-popover-buttons > .ant-btn-primary').click()
})

Then(/^I verify Logout successfully with samsung-s10 screen$/, function () {
    cy.location().should((loc) => {
        expect(loc.href).to.eq('https://dana-train-web-admin-stg.enouvo.com/login');
    })
    cy.get('.logo').should('be.visible')
    cy.get('.maintitle').should('be.visible').should('have.text', 'Đăng nhập')
    cy.get('#username').should('be.visible')
    cy.get('#password').should('be.visible')
    cy.get('.ant-btn').should('be.visible')
    cy.get('a').should('be.visible').should('have.text', 'Quên mật khẩu')
})

//================LOGOUT SUCCESSFULLY WITH IPHONE-6 SCREEN==================

Then(/^I verify Logout successfully with iphone-6 screen$/, function () {
    cy.location().should((loc) => {
        expect(loc.href).to.eq('https://dana-train-web-admin-stg.enouvo.com/login');
    })
    cy.get('.logo').should('be.visible')
    cy.get('.maintitle').should('be.visible').should('have.text', 'Đăng nhập')
    cy.get('#username').should('be.visible')
    cy.get('#password').should('be.visible')
    cy.get('.ant-btn').should('be.visible')
    cy.get('a').should('be.visible').should('have.text', 'Quên mật khẩu')
})

//================LOGOUT SUCCESSFULLY WITH IPHONE 6 PLUS SCREEN==================

Then(/^I verify Logout successfully with iphone-6 plus screen$/, function () {
    cy.location().should((loc) => {
        expect(loc.href).to.eq('https://dana-train-web-admin-stg.enouvo.com/login');
    })
    cy.get('.logo').should('be.visible')
    cy.get('.maintitle').should('be.visible').should('have.text', 'Đăng nhập')
    cy.get('#username').should('be.visible')
    cy.get('#password').should('be.visible')
    cy.get('.ant-btn').should('be.visible')
    cy.get('a').should('be.visible').should('have.text', 'Quên mật khẩu')

})