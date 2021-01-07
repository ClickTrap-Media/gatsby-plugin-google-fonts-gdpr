import React from "react";

/**
 * The default type for the inserted link when no specific type is given
 */
const PLACEHOLDER_LINK_TYPE = "text/plain";

/**
 * The type that is set to load the font link
 */
const ACTIVE_LINK_TYPE = "text/css";

/**
 * Prepare the string that contains the family parameter value
 * of the request send to the Google Font API
 *
 * @param {string[]} fonts Array that contains the fonts to load
 */
function getFonts(fonts) {
  return fonts.map(format).join("|").replace(/ /g, "+");
}

/**
 * Format the font parameter to match the expected format
 * of the Google Fonts API
 *
 * @param {string} fontParameter A font string to format
 */
function format(fontParameter) {
  return fontParameter
    .split(" ")
    .map(function (s) {
      return s.replace(/^\w/, function (s) {
        return s.toUpperCase();
      });
    })
    .join(" ");
}

/**
 * Check if display is not undefined and return its value.
 * Will return an empty string if display is not set.
 *
 * @param {string} display The option set for display
 */
function getDisplay(display) {
  return display !== undefined ? "&display=" + display : "";
}

exports.onRenderBody = function ({ setHeadComponents }, options) {
  const link =
    "https://fonts.googleapis.com/css?family=" +
    getFonts(options.fonts) +
    getDisplay(options.display);

  // Just add a normal link when Klaro compatibility is disabled
  if (options.disableKlaroCompatibility) {
    return setHeadComponents([
      <link
        key="google-fonts"
        href={link}
        rel="stylesheet"
        type={ACTIVE_LINK_TYPE}
      />,
    ]);
  }

  // Add the Klaro compatible link
  const klaroName = options.klaroName ? options.klaroName : "googlefonts";
  return setHeadComponents([
    <link
      key="google-fonts"
      rel="stylesheet"
      type={PLACEHOLDER_LINK_TYPE}
      data-type={ACTIVE_LINK_TYPE}
      data-href={link}
      data-name={klaroName}
    />,
  ]);
};
