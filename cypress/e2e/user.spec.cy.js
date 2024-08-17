import { last } from 'lodash'
import userData from '../fixtures/userData.json'
import { date } from 'assert-plus'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myinfoPage'

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myinfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myinfoPage.fillPersonalDetail(chance.first({gender: "female"}), chance.last())
    myinfoPage.fillEmployeerDetails(chance.string({length: 10, casing: 'upper', alpha: true, numeric: true}), chance.fbid(), chance.string({length: 8, casing: 'upper', alpha: true, numeric: true}), '2025-29-07')
    myinfoPage.fillStatus('2000-15-06')
    myinfoPage.saveForm()

    //menuPage.recruitmentButton()
    
  })

})