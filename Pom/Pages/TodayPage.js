import { Selector } from "testcafe";

class TodayPage {
    constructor(){
        this.CreateTask = Selector ('.plus_add_button')
        this.TextInput = Selector('.task_editor.focus-marker-enabled-within')
        this.AddTask = Selector ('.reactist_button.reactist_button--primary')
        this.Title = Selector ('.div.view_header__content + h1 + .simple_content')
    }
}

export const todayPage = new TodayPage;

class NewProject {
    constructor(){
        this.NewProject = Selector ('.adder_icon')
        this.InputName = Selector ('.edit_project_modal_field_name')
        this.AddProject = Selector ('.ist_button ist_button_red')
        this.CancelProject = Selector ('.ist_button')
        this.ColorProject = Selector ('.color_dropdown_toggle.form_field_control')
        this.MenuProject = Selector ('.menu')
        this.AddFavorite = Selector ('.menu_label')
    }
}
export default new NewProject;