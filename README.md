# gatsby-plugin-google-fonts-gdpr

## Description
This is a fork of [gatsby-plugin-google-fonts](https://github.com/didierfranc/gatsby-plugin-google-fonts) that aims
to be compliant with the GDPR if configured correctly.
When using `gatsby-plugin-google-fonts-gdpr` you can define data attributes necessary that are necessary for the CMP (Consent Management Platform)
that is used on your site. You can also define the initial type for the inserted `<link>`-tag if your CMP does not use `type="text/plain"` as the most CMPs
do today.

## How to install

### Install the plugin through npm
The installation of `gatsby-plugin-google-fonts-gdpr` is done the same way as you would install other plugins.
Refer to [Using a plugin in your site](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/using-a-plugin-in-your-site/) for a detailed guide.
Note that you need `npm` to use this plugin. You might also use another prefered package manager that you currently use.

Run the following commandto install `gatsby-plugin-google-fonts-gdpr`:
```bash
npm install gatsby-plugin-google-fonts-gdpr
```

### Load the plugin
Put the plugin into your `gatsby-config.js`. It is **important** that you insert the plugin **after** 
the plugin that loads your CMP. The order of the plugins in your `gatsby-config.js` specifies their load order.

```javascript
module.exports = {
    plugins: [
        ...
        {
            `gatsby-plugin-google-fonts-gdpr`,
            options: {
                ...
            }
        },
        ...
    ]
};
```

## Available options

#### `fonts` (required)
Provide the Google Fonts that should be available in the site.
The format is the following: `font name\:font,weights,and,styles`.

Example value:
```javascript
[
  "limelight",
  "source sans pro\:300,400,400i,700"
],
```

### `display` (optional, default: "")
Provide the `font-display` property to set on the loaded font.

Example value: `"swap"`

## Examples of usage

#### Default URL & embedded configuration example
Usage with the default URL for Klaro and an embedded configuration:
```javascript
module.exports = {
    plugins: [
        ...
        {
            resolve: "gatsby-plugin-google-fonts-gdpr",
            options: {
              fonts: [
                `limelight`,
                `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
              ],
              display: 'swap'
            }
        },
        ...
    ],
};
```

## How to develop locally

#### Prerequisites
To develop locally you need the following tools:
 - NodeJS (recommended version: 14.15.4)
 - NPM

#### Setup
To set the project up, simply let npm install your dependencies as always:
```bash
npm install
```

#### Building the project
To build the project use the build script provided by npm:
```bash
npm run build
```
Note that building will also run eslint and jest tests.

If you want to collect coverage while building, use the following script instead:
```bash
npm run buildCoverage
```

#### Compiling the project
To compile the project run the following npm script:
```bash
npm run compile
```

#### Clean compile output
To clean the compiled output (which lays in the root directory), run:
```bash
npm run clean
```

## How to run tests
The project uses eslint as its linter.
You can run the tool using npm.

#### Run the linter
Use the following npm command to run eslint and jest:
```bash
npm run test
```

## How to contribute
You are welcome to contribute to `gatsby-plugin-google-fonts-gdpr`! Refer to Contributing for information about issues and code contributions.
