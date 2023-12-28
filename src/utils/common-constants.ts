export abstract class Constants {
  // Prevent instantiation of Constants class
  private constructor() {
    throw new Error("Constants class cannot be instantiated.");
  }

  static readonly PAGE_TITLE = "OrangeHRM";
  static readonly DASHBOARD_Page_URL =
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index";

  // // Example of additional constant properties
  // static readonly MAX_LOGIN_ATTEMPTS = 5;
  // static readonly API_BASE_URL = 'https://api.example.com';

  // // Example of additional constant methods
  // static getWelcomeMessage(name: string): string {
  //   return `Welcome, ${name}!`;
  // }
}
