import { Selector } from 'testcafe';
import * as helpers from '../helpers/helper';
import page from '../pagemodels/form-page-model';

fixture`Forms`
    .page`https://demoqa.com/`;

test('Assert Form Page', async t => 
{
    await t.maximizeWindow();

    //Navigate to page
    await page.navigate();

    //Assert Page Title
    await helpers.assertPageHeader('Practice Form');

    //Assert Page Labels
    await helpers.assertFormLabels(page.formLabels);

    //Assert Required Fields
    await t.click(page.buttonSubmit);
    await helpers.assertRequiredFields(page.requiredFields);

}).skipJsErrors(true);