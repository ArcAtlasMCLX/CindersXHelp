/**
 * Where the live CindersX app lives. The help site links back here from
 * "Open CindersX" / "Open Help" buttons.
 *
 * 👉 CHANGE THIS to your production app domain before deploying.
 *    e.g. "https://app.cindersx.com" or "https://cindersx.com"
 */
export const APP_URL = "https://cindersx.com";

export const appPath = (path = "") => `${APP_URL}${path}`;
