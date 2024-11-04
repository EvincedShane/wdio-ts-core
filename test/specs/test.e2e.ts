import { expect, browser, $ } from "@wdio/globals";

describe("My Login application - evAnalyze", () => {
  it("should login with valid credentials", async () => {
    await browser.url(`https://the-internet.herokuapp.com/login`);

    const issues = await browser.evAnalyze();
    console.log("evAnalyze issues ===", issues.length);
    // expect(issues).toHaveLength(0);

    await $("#username").setValue("tomsmith");
    await $("#password").setValue("SuperSecretPassword!");
    await $('button[type="submit"]').click();

    await expect($("#flash")).toBeExisting();
    await expect($("#flash")).toHaveText(
      expect.stringContaining("You logged into a secure area!")
    );
  });
});
