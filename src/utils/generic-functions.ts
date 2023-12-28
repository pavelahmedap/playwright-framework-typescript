import { Page, Locator } from "@playwright/test";

export class GenericFunctions {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * This method is responsible for get the page title.
   *
   * @returns The page title.
   */
  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  /**
   * This method is responsible for get the page URL.
   *
   * @returns The page URL.
   */
  async getPageURL(): Promise<string> {
    return this.page.url();
  }

  /**
   * This method is responsible for get the number of elements in a static list.
   * NOTE: This method should be used ONLY for static lists.
   *
   * @param locator The element locator.
   * @returns The number of elements in the list.
   */
  async getElementsSize(locator: Locator): Promise<number> {
    return await locator.count();
  }

  /**
   * This method is responsible for get the number of elements in a dynamic list.
   * NOTE: This method should be used ONLY for dynamic lists.
   *
   * @param locator The element locator.
   * @returns The number of elements in the list.
   */
  async getElementsSizeDynamically(locator: Locator): Promise<number> {
    // Wait for the last element to be present in the DOM
    await locator.last().waitFor({ state: "visible" });
    return await locator.count();
  }

  /**
   * This method is responsible for select a value from a static dropdown list.
   *
   * @param locator The element locator.
   * @param value The value to select.
   */
  async selectStaticValueFromDropDown(
    locator: Locator,
    value: string
  ): Promise<void> {
    const size = await this.getElementsSize(locator);

    if (size > 0) {
      for (let i = 0; i < size; i++) {
        const text = (await locator.nth(i).innerText()).trim();
        if (text === value) {
          await locator.nth(i).click();
          break;
        }
      }
    } else
      throw new Error(
        `Drop-down value "${value}" does not exist or the list size is 0.`
      );
  }

  /**
   * This method is responsible for select a value from a dynamic dropdown list.
   *
   * @param locator The element locator.
   * @param value The value to select.
   */
  async selectDynamicValueFromDropDown(
    locator: Locator,
    value: string
  ): Promise<void> {
    const size = await this.getElementsSizeDynamically(locator);

    if (size > 0) {
      for (let i = 0; i < size; i++) {
        const text = (await locator.nth(i).innerText()).trim();
        if (text === value) {
          await locator.nth(i).click();
          break; // Exit the loop once the value is found and selected
        }
      }
    } else
      throw new Error(
        `Drop-down value "${value}" does not exist or the list size is 0.`
      );
  }

  /**
   * This method is responsible for get the text values of elements in a static list.
   *
   * @param locator The element locator.
   * @returns The array of element text values.
   */
  async getStaticElementsText(locator: Locator): Promise<string[]> {
    const elementsText: string[] = [];

    const size = await this.getElementsSize(locator);

    for (let i = 0; i < size; i++) {
      const text = (await locator.nth(i).innerText()).trim();
      elementsText.push(text);
    }

    return elementsText;
  }

  /**
   * This method is responsible for get the text values of elements in a dynamic list.
   *
   * @param locator The element locator.
   * @returns The array of element text values.
   */
  async getDynamicElementsText(locator: Locator): Promise<string[]> {
    const elementsText: string[] = [];

    const size = await this.getElementsSizeDynamically(locator);

    for (let i = 0; i < size; i++) {
      const text = (await locator.nth(i).innerText()).trim();
      elementsText.push(text);
    }

    return elementsText;
  }

  /**
   * This method is responsible for get the value of an attribute for an element.
   *
   * @param locator The element locator.
   * @param attributeName The name of the attribute.
   * @returns The value of the attribute if it exists, otherwise null.
   */
  async getAttributeValue(
    locator: Locator,
    attributeName: string
  ): Promise<string | null> {
    return await locator.getAttribute(attributeName);
  }

  /**
   * This method is responsible for get the inner text of an element.
   *
   * @param locator The element locator.
   * @returns The inner text of the element.
   */
  async getInnerText(locator: Locator): Promise<string> {
    return await locator.innerText();
  }

  /**
   * This method is responsible for press the "Enter" key on the keyboard.
   */
  async pressEnter(): Promise<void> {
    await this.page.keyboard.press("Enter");
  }
}
