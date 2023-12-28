import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import * as utlity from "../utils/common-utlity";
import { GenericFunctions } from "../utils/generic-functions";
import { Constants } from "../utils/common-constants";
// import { log } from "console";

let loginPage: LoginPage;
let baseURL: string;
let genericFunctions: GenericFunctions;

test.describe("Login page test", () => {
  test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    baseURL = await utlity.getUrl("loginPage");
    await page.goto(baseURL);
  });

  test("Verify the login page title and username and password field interactability", async ({
    page,
  }) => {
    loginPage = new LoginPage(page);
    genericFunctions = new GenericFunctions(page);

    const actualTitle = await genericFunctions.getPageTitle();
    expect(actualTitle).toEqual(Constants.PAGE_TITLE);

    const isUsernameEnabled = await loginPage.getUsernameLocator().isEnabled();
    expect(isUsernameEnabled).toBeTruthy();

    const isPasswordEnabled = await loginPage.getPasswordLocator().isEnabled();
    expect(isPasswordEnabled).toBeTruthy();
  });

  test("Login to the application with valid credentials", async ({ page }) => {
    loginPage = new LoginPage(page);
    genericFunctions = new GenericFunctions(page);

    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;

    if (!username || !password) {
      throw new Error("Username or password is undefined");
    }

    await loginPage.doLogin(username, password);

    // await page.waitForTimeout(2000);
    await page.waitForLoadState("load");
    const actualURL = await genericFunctions.getPageURL();
    expect(actualURL).toEqual(Constants.DASHBOARD_Page_URL);
  });
});
