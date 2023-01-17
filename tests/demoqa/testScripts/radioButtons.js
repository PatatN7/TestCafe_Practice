import { Selector } from 'testcafe';
import { assertPageHeader } from '../helpers/helper';
import page from '../pagemodels/radio-button-page-model.js';

fixture`Radio Button`
    .page`https://demoqa.com/`;

test('Assert Radio Button Page and Radio Buttons', async t => 
{
    await page.navigate();
    
    await assertPageHeader('Radio Button');

    //Assert Yes Radio Button
    let expect = 'You have selected ' + await page.yes.textContent;
    await t
        .click(page.yes)
        .expect(page.resultText.textContent)
        .eql(expect, 'Radio Button selected does not match Result Text');
    
    //Assert Impressive Radio Button
    expect = 'You have selected ' + await page.impressive.textContent;
    await t
        .click(page.impressive)
        .expect(page.resultText.textContent)
        .eql(expect, 'Radio Button selected does not match Result Text');

    //Assert No Radio Button is Disabled
    const disableCheck = await Selector(page.no.parent('.disabled')).exists;
    await t.expect(disableCheck).eql(true, 'No Radio button is not Disabled');

}).skipJsErrors(true);