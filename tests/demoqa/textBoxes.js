import { Selector } from 'testcafe';
import { assertLabels } from './helper.js';
import page from './pagemodels/text-box-page-model';

fixture`Text Boxes`
    .page`https://demoqa.com/`;

test('Assert Text Box Page and Labels', async t => 
{
    await page.navigate();

    const header = Selector('.main-header').innerText;

    await t.expect(header).eql('Text Box', 'Page header does not match');
        
    await assertLabels(page.labeList);

}).skipJsErrors(true);

test('Submit data on Text Box Page', async t => 
{
    const nameData = 'Test User';
    const emailData = 'test@test.com';
    const currentAddressData = 'Street 1, House 1, Cape Town';
    const permanentAddressData = 'Same as Current Address';

    await page.navigate();

    await t
        .typeText(page.nameInput, nameData)
        .typeText(page.emailInput, emailData)
        .typeText(page.currentAddressInput, currentAddressData)
        .typeText(page.permanentAddressInput, permanentAddressData)
        .click(page.submit);

    await t
        .expect(page.name.innerText).eql('Name:' + nameData)
        .expect(page.email.innerText).eql('Email:' + emailData)
        .expect(page.currentAddress.innerText).eql('Current Address :' + currentAddressData)
        .expect(page.permanentAddress.innerText).eql('Permananet Address :' + permanentAddressData);

}).skipJsErrors(true);

test('Field Validation Text Box Page', async t => 
{
    await page.navigate();

    await t
    .typeText(page.nameInput, 'Test')
    .typeText(page.emailInput, 'invalid email')
    .typeText(page.currentAddressInput, 'Current address')
    .typeText(page.permanentAddressInput, 'Permanent Address')
    .click(page.submit);

    const emailInput = Selector('#userEmail.field-error').exists;

    await t.expect(emailInput).ok('Email field not displaying validation styling');

}).skipJsErrors(true);