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

test('Check checked VS results', async t =>
{
    await page.navigate();

    await t.click(page.expandAll);

    const checkBoxCount = await page.checkBox.count;

    for(let i = 0; i < checkBoxCount; i++)
    {
        await t.click(page.unchecked.nth(i));

        let names = [];

       for(let x = 0; x < checkBoxCount; x++)
        {
            if(await page.checkBox.nth(x).child('.rct-icon-check').exists)
            {
                let name = await page.name.nth(x).innerText;

                if(name.includes(' ') || name.includes('.'))
                {
                    name = name.replace(/\s+/g, '');
                    name = name.charAt(0).toLowerCase() + name.slice(1, name.indexOf('.'));
                    names.push(name);
                } else
                {
                    name = name.charAt(0).toLowerCase() + name.slice(1);
                    names.push(name);
                }
            }
        }

        let result = 'You have selected :';

        names.forEach(name => {
            result = result + '\n' + name;
        });

        await t.expect((await page.result.innerText).toLowerCase).eql(result.toLowerCase, 'Selected checks not maching results');

        await t.click(page.checked);
    }

}).skipJsErrors(true);