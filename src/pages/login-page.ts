import { Page, Locator } from "@playwright/test";
import loginPageLocator from "../resources/locators/login-page-locator.json";

export class LoginPage {
	private page: Page;
	private username: Locator;
	private password: Locator;
	private loginBtn: Locator;

	constructor(page: Page) {
		this.page = page;
		this.username = this.page.locator(loginPageLocator.userName);
		this.password = this.page.locator(loginPageLocator.password);
		this.loginBtn = this.page.locator(loginPageLocator.loginBtn);
	}

	/**
	 * This method is responsible for returns the username locator.
	 *
	 * @returns The username locator.
	 */
	getUsernameLocator(): Locator {
		return this.username;
	}

	/**
	 * This method is responsible for returns the password locator.
	 *
	 * @returns The password locator.
	 */
	getPasswordLocator(): Locator {
		return this.password;
	}

	/**
	 * This method is responsible for logs in to the application.
	 *
	 * @param username The username.
	 * @param password The password.
	 */
	async doLogin(username: string, password: string): Promise<void> {
		await this.username.fill(username);
		await this.password.fill(password);
		await this.loginBtn.click();
	}
}
