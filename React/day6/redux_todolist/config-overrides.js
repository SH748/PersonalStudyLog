const { override, fixBabelImports } = require('customize-cra')

module.exports = override(
    fixBabelImports('import', {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk",
    }),
)