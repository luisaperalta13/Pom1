import { Selector, ClientFunction } from "testcafe";
import TodayPage from "../pages/TodayPage"

 fixture ('Create Task test')
    .page('https://todoist.com/app/today');


    test ('As a user I should be able to create a new task', async testController =>{
        await testController
        .click(TodayPage.CreateTask)
        .typeText(TodayPage.TextInput,'This is a test to create a new task')
        .click(TodayPage.AddTask)

    })
