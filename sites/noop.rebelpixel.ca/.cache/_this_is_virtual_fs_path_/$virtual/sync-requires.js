
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---packages-base-theme-src-pages-contact-tsx": preferDefault(require("/Users/tedsczelecki/Documents/projects/gatsby-multi-site/packages/base-theme/src/pages/contact.tsx")),
  "component---packages-base-theme-src-pages-index-tsx": preferDefault(require("/Users/tedsczelecki/Documents/projects/gatsby-multi-site/packages/base-theme/src/pages/index.tsx")),
  "component---packages-base-theme-src-pages-vehicles-tsx": preferDefault(require("/Users/tedsczelecki/Documents/projects/gatsby-multi-site/packages/base-theme/src/pages/vehicles.tsx"))
}

