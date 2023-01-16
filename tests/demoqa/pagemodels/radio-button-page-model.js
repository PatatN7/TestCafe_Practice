import { Selector, t } from 'testcafe';

class Page
{
    constructor ()
    {
        this.elementsLink = Selector('.card').withText('Elements');
        this.radioButtonLink = Selector('li').withText('Radio Button');
        this.yes = Selector('label').withText('Yes');
        this.impressive = Selector('label').withText('Impressive');
        this.no = Selector('label').withText('No');
        this.resultText = Selector('.mt-3');
    }

    async navigate()
    {
        await t
        .click(this.elementsLink)
        .click(this.radioButtonLink);
    }
}

export default new Page();