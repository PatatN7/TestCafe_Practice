import { Selector, t } from 'testcafe';

class Page
{
    constructor ()
    {
        this.elementsLink = Selector('.card').withText('Elements');
        this.textBoxLink = Selector('li').withText('Text Box');
        this.labeList = ['Full Name', 'Email', 'Current Address', 'Permanent Address'];
        this.nameInput = Selector('#userName');
        this.emailInput = Selector('#userEmail');
        this.currentAddressInput = Selector('#currentAddress');
        this.permanentAddressInput = Selector('#permanentAddress');
        this.submit = Selector('#submit');
        this.name = Selector('#name');
        this.email = Selector('#email');
        this.currentAddress = Selector('p').withAttribute('id', 'currentAddress');
        this.permanentAddress = Selector('p').withAttribute('id', 'permanentAddress');
    }

    async navigate()
    {
        await t
        .click(this.elementsLink)
        .click(this.textBoxLink);
    }
}

export default new Page();