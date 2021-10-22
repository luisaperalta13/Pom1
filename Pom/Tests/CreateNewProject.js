import { Selector, ClientFunction } from "testcafe";
import TodayPage from "../pages/TodayPage";
import NewProject from "../pages/TodayPage"

fixture ('Create New Project test')
    .page('https://todoist.com/app/today');


    test ('As a user I am able to create a new project', async testController => {
        await testController
        .click(TodayPage.NewProject)
        .typeText(TodayPage.TextInput, 'First Project with Automation')
        .click(TodayPage.ColorProject)
        .click(TodayPage.AddProject)
        
    })
