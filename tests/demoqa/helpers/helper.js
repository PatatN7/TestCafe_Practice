import { Selector, t } from 'testcafe';

export async function assertLabels(labels)
{
    
    const labelCount = await Selector('label').count;

    console.log('**Asserting Labels**');

    if(labels.length == labelCount)
    {
        for (let i = 0; i < labelCount; i++)
        {
            await t.expect(Selector('label').nth(i).innerText).eql(labels[i], 'Label ' + i + ' assertion fail');
        }
    } else
    {
        await t.expect(labels.length).eql(labelCount, 'The amount of labels provided does not match amount in page');
    }

}

export async function assertPageHeader(header)
{
    console.log('**Asserting Page Header**');

    await t.expect(Selector('.main-header').innerText).eql(header, 'Page header does not match');
}