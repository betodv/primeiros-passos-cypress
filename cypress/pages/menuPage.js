class MenuPage {

    selectorsList() {
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            recruitmentButton: '[href="/web/index.php/recruitment/viewRecruitmentModule"]'
        }

        return selectors
    }

    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }

    //accessRecruitment() {
    //    cy.get(this.selectorsList().recruitmentButton).click()
    //}
}

export default MenuPage