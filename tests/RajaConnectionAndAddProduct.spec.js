const { test, expect, chromium } = require("@playwright/test");

test("should log and add product ",async({page})=>{
    
    await page.goto('https://stg-fr.rajapack.xyz/');

    await page.locator('#commande-btn').click();
    await expect(page).toHaveURL(
        "https://stg-fr.rajapack.xyz/quick-order.html"
      );
      await page.getByPlaceholder('Ajoutez une référence').fill('CTP70');
      await page.waitForTimeout(10000);
      await page.locator('#CTP70').click();
     // await page.getByRole("button",{name:'Ajouter au panier'}).click();
      await page.locator("#open-cart-confirmation").click();
      await page.waitForTimeout(10000);
      await page.goto("https://stg-fr.rajapack.xyz/INTERSHOP/web/WFS/RAJA-FR-Site/fr_FR/-/EUR/ViewCart-View");

      await expect(page.locator('#basket-dropper').getByText('1')).toContainText('1');
})