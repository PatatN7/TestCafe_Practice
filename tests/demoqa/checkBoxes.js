import { Selector } from 'testcafe';
import { assertPageHeader } from './helpers/helper';
import page from './pagemodels/check-box-page-model';

fixture`Check Boxes`
    .page`https://demoqa.com/`;

test('Assert Check Box Page', async t => 
{
    await page.navigate();

    await assertPageHeader('Check Box');

    await t.expect(Selector('.rct-text').count).eql(1, 'Home Node is not collapsed');

}).skipJsErrors(true);

test('Expand and Collapse all Tree Nodes', async t =>
{
    await page.navigate();

    while(await page.expandNode.exists)
    {
        await t.click(page.expandNode);
    }

    await t.expect(page.expandNode.exists).notOk('Not all Nodes expanded');

    while(await page.collapseNode.exists)
    {
        await t.click(page.collapseNode);
    }

    await t.expect(page.collapseNode.exists).notOk('Not all Nodes collapsed');

    await t.click(page.expandAll)
        .expect(page.expandNode.exists).notOk('Not all Nodes expanded');
    
    await t.click(page.collapseAll)
            .expect(page.collapseNode.exists).notOk('Not all Nodes collapsed');

}).skipJsErrors(true);