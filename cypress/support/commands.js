const urlDanatrain = 'https://dana-train-web-admin-stg.enouvo.com/'

//--------------Function For Login Successfully to Dana Train Website---------------

Cypress.Commands.add('LoginDanaFunction', (username, password) => {
    cy.visit(urlDanatrain);
    cy.get('#username').click().type(username);
    cy.get('#password').click().type(password);
    cy.get('.ant-btn').click();
    cy.wait(3000);
})

//--------------Function For Open A New Tab---------------

Cypress.Commands.add('openWindow', (url) => {
    return new Promise(resolve => {
        if (window.top.aut) {
            console.log('window exists already')
            window.top.aut.close()
        }
        window.top.aut = window.top.open(url, 'aut')
        setTimeout(() => {
            resolve()
        }, 500)
    })
})

//--------------Function For Upload A New Image/File---------------

Cypress.Commands.add('newUploadBlobFile', (fileName, fileType) => {
    cy.get("input[type='file']").then($input => {
        cy.fixture(fileName, 'base64')
            .then(Cypress.Blob.base64StringToBlob)
            .then(blob => {
                const el = $input[0];
                const testFile = new File([blob], fileName, { type: fileType });
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(testFile);
                el.files = dataTransfer.files;
                return cy.wrap($input).trigger('change', { force: true });
            });
    });
    cy.wait(5000)
})


//======================FUNCTION FOR WEBSITE AND MACBOOK==========================

Cypress.Commands.add('LogoutDanaFunctionForWebMac', () => {
    //Cause have cy.reload() function, so we need handle click on X icon on the form to logout
    cy.get('.h4 > .anticon').click()
    cy.get('.ant-avatar').click()
    cy.get('.ant-dropdown-menu > :nth-child(3)').click();
})

Cypress.Commands.add('LogoutDanaFunctionForWebMacVT', () => {
    //VT account just create a new dispatch, so this account do not need cy.reload() function
    cy.get('.ant-avatar').click({ force: true });
    cy.get('.ant-dropdown-menu > :nth-child(3)').click();
})

//======================FUNCTION FOR MOBILE PHONE==========================

//Cause after create a new dispatch, manager account login recently so do not visit to url
Cypress.Commands.add('LoginDanaFunctionToCheckDispatch', (username, password) => {
    cy.get('#username').click().type(username);
    cy.get('#password').click().type(password);
    cy.get('.ant-btn').click();
    cy.wait(3000);
})

//Cause the xpath of VT account icon and other account icon are different 
Cypress.Commands.add('LogoutDanaFunctionForPhone', () => {
    cy.get('.active').click()
    cy.get('.sc-fznOgF > .ant-btn').scrollIntoView().click()
    cy.get('.ant-popover-buttons > .ant-btn-primary').click()
})

Cypress.Commands.add('LogoutDanaFunctionForPhoneVT', () => {
    cy.get('[href="/profile"]').click()
    cy.get('.sc-fznOgF > .ant-btn').scrollIntoView().click()
    cy.get('.ant-popover-buttons > .ant-btn-primary').click()
})


