module.exports = function(grunt) {

    grunt.initConfig({
        shell: {
            exportIcons: {
                command: 'sketchtool export slices assets/icons.sketch --output=assets/icons/'
            }
        },
        webfont: {
            icons: {
                src: 'assets/icons/*.svg',
                dest: 'src/fonts/',
                destCss: 'src/css/',
                options: {
                    font: 'icons',
                    fontHeight: 96,
                    normalize: false,
                    ascent: 84,
                    descent: 12,
                    destHtml: 'assets/',
                    templateOptions: {
                        classPrefix: 'icon-'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-webfont');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', [ 'shell:exportIcons', 'webfont:icons' ]);

};