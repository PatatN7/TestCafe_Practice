import { Selector, t } from 'testcafe';

class Page
{
    constructor ()
    {
        this.elementsLink = Selector('.card').withText('Elements');
        this.checkBoxLink = Selector('li').withText('Check Box');
        this.expandNode = Selector('.rct-icon-expand-close');
        this.collapseNode = Selector('.rct-icon-expand-open');
        this.expandAll = Selector('.rct-option-expand-all');
        this.collapseAll = Selector('.rct-option-collapse-all');
    }

    async navigate()
    {
        await t
        .click(this.elementsLink)
        .click(this.checkBoxLink);
    }
}

export default new Page();