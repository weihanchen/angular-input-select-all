'use strict';

module.exports = {
    js: {
        options: {
            banner: '<%= banners.unminified %>\n' ,
            separator: '\n\n',
            process: function(src) {
                // Remove all 'use strict'; from the code and
                // replaces all double blank lines with one
                return src.replace(/'use strict';\n+/g, '')
                    .replace(/\n\n\s*\n/g, '\n\n');
            }
        },
        files: {
            '<%= files.js.out %>': ['<%= files.js.src %>']
        }
    }
};
