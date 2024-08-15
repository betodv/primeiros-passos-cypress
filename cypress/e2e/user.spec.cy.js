import { last } from 'lodash'
import userData from '../fixtures/userData.json'
import { date } from 'assert-plus'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

const selectorsList = {
  
  firtsNameField: "[name='firstName']",
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

  it.only('User info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    //menuPage.recruitmentButton()
    
    
    //cy.get(selectorsList.firtsNameField).clear().type('FirstNameTest')
    //cy.get(selectorsList.lastNameField).clear().type('LasttNameTest')
    //cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
    //cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    //cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicenseTest')
    //cy.get(selectorsList.dateField).eq(0).clear().type('2025-10-03')
    //cy.get(selectorsList.dateCloseButton).click()
    //cy.get(selectorsList.genericCombobox).eq(0).click({ force: true })
    //cy.get(selectorsList.firstItemCombobox).click()
    //cy.get(selectorsList.genericCombobox).eq(1).click()
    //cy.get(selectorsList.secondItemCombobox).click({ force: true })
    //cy.get(selectorsList.dateBirthday).eq(1).clear().type('2000-15-06')
    //cy.get(selectorsList.dateCloseButton).click()
    //cy.get(selectorsList.genderField).eq(0).click()
    //cy.get(selectorsList.submitButton).eq(0).click({ force: true })
    //cy.get('body').should('contain', 'Successfully Updated')
    //cy.get('.oxd-toast-close')
 
  })

  it('Login - Fail', () => {
    
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})