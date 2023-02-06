import { Selector, t } from 'testcafe';

class Page
{
    constructor ()
    {
        this.formsLink = Selector('.card').withText('Forms');
        this.practiceFormLink = Selector('.btn').withText('Practice Form');
        this.formLabels = ['Name', 'Email', 'Gender', 'Mobile(10 Digits)', 'Date of Birth', 'Subjects', 'Hobbies', 'Picture', 'Current Address', 'State and City'];
        this.requiredFields = ['firstName', 'lastName', 'gender-radio-1', 'gender-radio-2', 'gender-radio-3', 'userNumber']
        this.buttonSubmit = Selector('#submit');
    }

    async navigate()
    {
        await t
        .click(this.formsLink)
        .click(this.practiceFormLink);
    }
}

export default new Page();