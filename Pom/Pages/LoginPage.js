import { Selector, t } from "testcafe";
import { STANDARD_USER } from "../Data/Roles";



class LoginPage {
    constructor() {
        this.userNameInput = Selector ('#email')
        this.passwordInput = Selector ('#password')
        this.loginButton = Selector ('.submit_btn.ist_button.ist_button_red.sel_login')
    }
    async submitLoginForm(credentials, password){    
        await t
            .typeText(this.userNameInput, credentials)
            .typeText(this.passwordInput, password)
            .click(this.loginButton)
    }
}


export default new LoginPage;

