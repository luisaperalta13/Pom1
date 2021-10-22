import { Role } from "testcafe";
import {URLS, CREDENTIALS} from '../Data/Constants';
import LoginPage from "../Pages/LoginPage";
import HomePage from "../pages/HomePage";

export const STANDARD_USER =  Role ( URLS.LOGIN_URL, async t => {
    await t.click(HomePage.LogInButton)
    await LoginPage.submitLoginForm (CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)

{preserveUrl:true}})

