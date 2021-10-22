import { Selector, ClientFunction } from "testcafe";
import homePage from "../pages/HomePage"


fixture('HomePage to Login feature test')
    .page('https://www.todoist.com');

const getPageUrl = ClientFunction(() => window.location.href.toString());

test('As user, I should be able to access to the main page and click on log in button', async testController => {
    await testController
        .click(homePage.loginButton)
        .expect(getPageUrl()).contains('/users/showlogin');
    
})

