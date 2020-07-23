const urlDanatrain = 'https://dana-train-web-admin-stg.enouvo.com/'
const fromDate = Cypress.moment().format('DD-MM-YYYY')
const XLSX = require('xlsx');
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

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

//--------------Function For Writing Data From Array to Excel File Using XLSX---------------

Cypress.Commands.add('writeDataFromArrayToExcel', (dataTest) => {
    const saveAs = require('file-saver');
    const Blob = require('cross-blob');

    var wb = XLSX.utils.book_new();

    for (var i in dataTest) {
        var val = dataTest[i];
        let arrHeader = [];
        let arrValue = [];

        for (var j in val) {
            var header = j;
            var value = val[j]
            arrHeader.push(header);
            arrValue.push(value)
        }

        var Heading = [arrHeader];
        var Data = [arrValue];

        var ws = XLSX.utils.aoa_to_sheet(Heading);
        XLSX.utils.sheet_add_json(ws, Data, {
            skipHeader: true,
            origin: -1
        });

        XLSX.utils.book_append_sheet(wb, ws, 'Sheet' + makeid(5) + ' {' + fromDate + '}');
    }

    var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'Data For Create Dispatch' + ' [' + fromDate + ']' + '.xlsx');
})

//--------------Function For Writing Data From Array to Json File Using cy.writeFile()---------------

Cypress.Commands.add('writeDataFromArrayToJson', (dataTest) => {
    cy.writeFile("cypress/fixtures/testdata" + " [" + fromDate + "]" + ".json", dataTest);
})

//--------------Function For Convert XLSX to JSON file---------------

// Cypress.Commands.add('xlsxToJsonFile', (fileName) => {
//     var data = [];
//     var workbook = cy.readFile(fileName);
//     var sheet_name_list = workbook.SheetNames;
//     sheet_name_list.forEach(function (y) {
//         var worksheet = workbook.Sheets[y];
//         var headers = {};

//         for (z in worksheet) {
//             if (z[0] === '!') continue;
//             //parse out the column, row, and value
//             var tt = 0;
//             for (var i = 0; i < z.length; i++) {
//                 if (!isNaN(z[i])) {
//                     tt = i;
//                     break;
//                 }
//             };
//             var col = z.substring(0, tt);
//             var row = parseInt(z.substring(tt));
//             var value = worksheet[z].v;

//             //store header names
//             if (row == 1 && value) {
//                 headers[col] = value;
//                 continue;
//             }

//             if (!data[row]) data[row] = {};
//             data[row][headers[col]] = value;
//         }
//         //drop those first two rows which are empty
//         data.shift();
//         data.shift();
//     })
//     return data;
// })

Cypress.Commands.add('readJsonFile', (expectKey) => {
    const jsFile = require('E:/Dana_train/cypress/fixtures/testdata [20-07-2020].json')
    var result;
    for (var i in jsFile) {
        var val = jsFile[i];
        if (jsFile[i][expectKey]) {
            result = val[expectKey];
        }
    }
    console.log('abxc', result)
    return result;
})

//======================FUNCTION FOR WEBSITE AND MACBOOK==========================

Cypress.Commands.add('LogoutDanaFunctionForWebMac', () => {
    //Cause have cy.reload() function, so we need handle click on X icon on the form to logout
    cy.get('.h4 > .anticon').click()
    cy.get('.rightHeader > .ant-avatar').click()
    cy.get('.ant-dropdown-menu > :nth-child(3)').click();
})

Cypress.Commands.add('LogoutDanaFunctionForWebMacVT', () => {
    //VT account just create a new dispatch, so this account do not need cy.reload() function
    cy.get('.rightHeader > .ant-avatar').click({ force: true });
    cy.get('.ant-dropdown-menu > :nth-child(3)').click();
})

//======================FUNCTION FOR MOBILE PHONE==========================

//Cause after create a new dispatch, manager account login recently so do not visit to url
Cypress.Commands.add('LoginDanaFunctionToCheck', (username, password) => {
    cy.get('#username').click().type(username);
    cy.get('#password').click().type(password);
    cy.get('.ant-btn').click();
    cy.wait(3000);
})

//Cause the xpath of VT account icon and other account icon are different 
Cypress.Commands.add('LogoutDanaFunctionForPhone', () => {
    cy.get('[href="/profile"]').click()
    cy.get('.sc-fznOgF > .ant-btn').scrollIntoView().click()
    cy.get('.ant-popover-buttons > .ant-btn-primary').click()
})

Cypress.Commands.add('LogoutDanaFunctionForPhoneVT', () => {
    cy.get('.btn-back').click()
    cy.get('[href="/profile"]').click()
    cy.get('.sc-fznOgF > .ant-btn').scrollIntoView().click()
    cy.get('.ant-popover-buttons > .ant-btn-primary').click()
})


