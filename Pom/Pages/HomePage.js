import { Selector } from "testcafe";

class HomePage {
    constructor() {
        this.loginButton = Selector('a[href="/users/showlogin"]');
    }
}

export default new HomePage;