import { Selector, ClientFunction } from "testcafe";
import LoginPage from "../pages/LoginPage";
import { CREDENTIALS, URLS } from '../data/constants';
import HomePage from "../pages/HomePage";
import TodayPage from "../pages/TodayPage";

fixture('Login feature test')
    .page `${URLS.LOGIN_URL}`

const getPageUrl = ClientFunction ( () => window.location.href.toString() ); 

    test ('As a user I should be able to log in succesfulyy by providing a valid credentials', async testController =>{
        await testController.click(HomePage.loginButton)
        await LoginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
        await testController.wait(9000)
                .expect(getPageUrl()).contains ('/app/today');
    })


