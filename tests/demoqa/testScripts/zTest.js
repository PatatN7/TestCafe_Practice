import { ClientFunction, Selector } from 'testcafe';
import * as helpers from '../helpers/helper';
import page from '../pagemodels/form-page-model';

fixture`Experiments`
    .page`https://demoqa.com/`;

test('Experiment file', async t => 
{
    await t.maximizeWindow();

    await page.navigate();

    await t.click(page.buttonSubmit);

    await helpers.assertRequiredFields(page.requiredFields);

    await helpers.assertFormLabels(page.formLabels);

}).skipJsErrors(true);