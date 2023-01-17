import { Selector } from 'testcafe';
import * as helpers from '../helpers/helper';
import page from '../pagemodels/web-tables-page-model';

fixture`Web Tables`
    .page`https://demoqa.com/`;

test('Assert Web Tables Page', async t => 
{
    //Navigate to Page
    await page.navigate();

    //Assert Page
    await helpers.assertPageHeader('Web Tables');
    await helpers.assertColumnHeaders(page.columnHeaders);

    //Assert Add Modal
    await t.click(page.addButton);
    await helpers.assertModalTitle('Registration Form');
    await helpers.assertModalLabels(page.modalLabels);

    //Assert Add Modal Validation
    await t
        .click(page.submitButton)
        .expect(Selector('#userForm.was-validated').exists).eql(true, 'Modal Add Form was not validated')
        .click(page.closeModal);

    //Assert Edit Modal
    await t.click(page.editRecord)
    await helpers.assertModalTitle('Registration Form');
    await helpers.assertModalLabels(page.modalLabels);

    //Assert Edit Modal Validation
    for(let i = 0; i < 6; i++)
    {
        await t
            .selectText(Selector('.modal-body input').nth(i))
            .pressKey('delete');
    }
    await t
        .click(page.submitButton)
        .expect(Selector('#userForm.was-validated').exists).eql(true, 'Modal Edit Form was not validated')
        .click(page.closeModal);

}).skipJsErrors(true);

test('Add, Edit, Delete test', async t => 
{
    //Navigate to Page
    await page.navigate();

    //Add a new record
    await t
        .click(page.addButton)
        .typeText(page.inputFirstName, 'John')
        .typeText(page.inputLastName, 'Doe')
        .typeText(page.inputEmail, 'jdoe@newcorp.com')
        .typeText(page.inputAge, '26')
        .typeText(page.inputSalary, '12000')
        .typeText(page.inputDepartment, 'Testers')
        .click(page.submitButton);

    //Assert record has been added
    await t.typeText(page.searchField, 'John');
    for(let i = 0; i < 6; i++)
    {
        await t.expect(Selector('.rt-td').nth(i).innerText).eql(page.rowTestData0[i], 'Record not added');
    }

    //Modify record
    await t
        .click(page.editRecord)
        .typeText(page.inputFirstName, 'Jane', { replace : true })
        .typeText(page.inputLastName, 'Ipsum', { replace : true })
        .typeText(page.inputEmail, 'jipsum@newcorp.com', { replace : true })
        .typeText(page.inputAge, '28', { replace : true })
        .typeText(page.inputSalary, '15000', { replace : true })
        .typeText(page.inputDepartment, 'Developers', { replace : true })
        .click(page.submitButton);

    //Assert new record
    await t.typeText(page.searchField, 'Jane', { replace : true });
    for(let i = 0; i < 6; i++)
    {
        await t.expect(Selector('.rt-td').nth(i).innerText).eql(page.rowTestData1[i], 'Record not added');
    }

    //Delete record and Verify
    await t
        .click(page.deleteRecord)
        .expect(Selector('div[class=rt-noData]').exists).eql(true, 'New Record not deleted');

}).skipJsErrors(true);

test('Test Paging', async t => 
{
    //Navigate to Page
    await page.navigate();

    //Change rows to 5
    await t
        .click(page.rowDropdown)
        .pressKey('up enter');

    //Add data until there is 2 pages
    for(let i = 0; i < 3 ; i++)
    {
        await t
        .click(page.addButton)
        .typeText(page.inputFirstName, 'John' + i)
        .typeText(page.inputLastName, 'Doe' + i)
        .typeText(page.inputEmail, 'jdoe@newcorp.com')
        .typeText(page.inputAge, '26')
        .typeText(page.inputSalary, '12000')
        .typeText(page.inputDepartment, 'Testers')
        .click(page.submitButton);
    }

    //Verify Total Page Numbers
    await t.expect(Selector('.-totalPages').textContent).eql('2', 'Total Pages did not update correctly');

    //Verify Next button enabled
    await t.expect(page.nextButton.hasAttribute('disabled')).eql(false, 'Next button is not enabled');

    //Click Next and Verify Page 2 of 2
    await t
        .click(page.nextButton)
        .expect(Selector('input[type=number]').value).eql('2', 'Current Page is not Page 2');

}).skipJsErrors(true);