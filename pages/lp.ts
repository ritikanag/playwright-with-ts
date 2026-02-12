import {Page, Locator} from '@playwright/test'

export class product{
    private productAdd: Locator;

    constructor(private page:Page){
        this.productAdd = page.locator("#andmkn")
    }

}

