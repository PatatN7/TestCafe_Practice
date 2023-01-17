import { Selector, t } from 'testcafe';

class Page
{
    constructor ()
    {
        this.elementsLink = Selector('.card').withText('Elements');
        this.webTablesLink = Selector('li').withText('Web Tables');
        this.addButton = Selector('#addNewRecordButton');
        this.submitButton = Selector('#submit');
        this.inputFirstName = Selector('#firstName');
        this.inputLastName = Selector('#lastName');
        this.inputEmail = Selector('#userEmail');
        this.inputAge = Selector('#age');
        this.inputSalary = Selector('#salary');
        this.inputDepartment = Selector('#department');
        this.searchField = Selector('#searchBox');
        this.editRecord = Selector('span.mr-2').withAttribute('title', 'Edit');
        this.closeModal = Selector('button.close');
        this.deleteRecord = Selector('span[title=Delete]');
        this.rowDropdown = Selector('.select-wrap');
        this.nextButton = Selector('button').withText('Next');

        this.columnHeaders = ['First Name', 'Last Name', 'Age', 'Email', 'Salary', 'Department', 'Action'];
        this.modalLabels = ['First Name', 'Last Name', 'Email', 'Age', 'Salary', 'Department'];
        this.rowTestData0 = ['John', 'Doe', '26', 'jdoe@newcorp.com', '12000', 'Testers'];
        this.rowTestData1 = ['Jane', 'Ipsum', '28', 'jipsum@newcorp.com', '15000', 'Developers'];
    }

    async navigate()
    {
        await t
        .click(this.elementsLink)
        .click(this.webTablesLink);
    }
}

export default new Page();