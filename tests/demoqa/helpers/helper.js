import { Selector, t } from 'testcafe';

//Assert Page Labels
export async function assertLabels(labels)
{
    const labelCount = await Selector('label').count;

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

//Assert Page Title/Header
export async function assertPageHeader(header)
{
    await t.expect(Selector('.main-header').innerText).eql(header, 'Page header does not match');
}

//Assert Table Headers
export async function assertColumnHeaders(headers)
{
    const headerCount = headers.length;
    const tableHeaderCount = await Selector('.rt-th').count;

    if(headerCount == tableHeaderCount)
    {
        for(let i = 0; i < tableHeaderCount; i++)
        {
            await t.expect(Selector('.rt-th').nth(i).innerText).eql(headers[i], 'Provided Table Headers not matching actual Table Headers');
        }
    } else
    {
        await t.expect(tableHeaderCount).eql(headerCount, 'Amount of Table Headers provided not mathing Amount on Page')
    }
}

//Assert Modal Title
export async function assertModalTitle(title)
{
    await t.expect(Selector('.modal-title').innerText).eql(title, 'Modal header does not match');
}

//Assert Modal Labels
export async function assertModalLabels(labels)
{
    const labelCount = await Selector('.modal-body label').count;

    if(labels.length == labelCount)
    {
        for (let i = 0; i < labelCount; i++)
        {
            await t.expect(Selector('.modal-body label').nth(i).innerText).eql(labels[i], 'Label ' + i + ' assertion fail');
        }
    } else
    {
        await t.expect(labels.length).eql(labelCount, 'The amount of labels provided does not match amount in page');
    }
}

//Assert Form Labels
export async function assertFormLabels(labels)
{
    const labelCount = await Selector('.col-md-3.col-sm-12').count;

    if(labels.length == labelCount)
    {
        for (let i = 0; i < labelCount; i++)
        {
            await t.expect(Selector('.col-md-3.col-sm-12').nth(i).innerText).eql(labels[i], 'Label ' + i + ' assertion fail');
        }
    } else
    {
        await t.expect(await labels.length).eql(labelCount, 'The amount of labels provided does not match amount in page');
    }
}

//Assert Required Fields
export async function assertRequiredFields(fields)
{
    const requiredCount = await Selector('[required]').count;
    const fieldsCount = await fields.length;
   
    if(fieldsCount == requiredCount)
    {
        fields.forEach(async (element, index) => {
            await t.expect(Selector('[required]').nth(index).id).eql(element, 'Provided Required field is not required');
        });
    } else
    {
        await t.expect(fieldsCount).eql(requiredCount, 'Required fields provided doesa not match number of required fields on page');
    }
}