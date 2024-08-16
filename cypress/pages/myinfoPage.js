class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            genericCombobox: ".oxd-select-text--arrow",
            firstItemCombobox: ".oxd-select-dropdown > :nth-child(4)",
            secondItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
            dateBirthday: "[placeholder='yyyy-dd-mm']",
            genderField: ".oxd-radio-wrapper",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
        }

        return selectors
    }

    fillPersonalDetail(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
            }
   
    fillEmployeerDetails(employeeId, otherId, driversLicenseNumber, expiryDate) {     
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(expiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
    
    fillStatus(dateBirthday) {
        cy.get(this.selectorsList().genericCombobox).eq(0).click({ force: true })
        cy.get(this.selectorsList().firstItemCombobox).click()
        cy.get(this.selectorsList().genericCombobox).eq(1).click()
        cy.get(this.selectorsList().secondItemCombobox).click({ force: true })
        cy.get(this.selectorsList().dateBirthday).eq(1).clear().type(dateBirthday)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genderField).eq(0).click()
    }

}

export default MyInfoPage