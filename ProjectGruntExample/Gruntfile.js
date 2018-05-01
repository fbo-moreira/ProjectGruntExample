module.exports = function (grunt) {
    // carregar os plugin do NPM (referenciados em packages.json)
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({

        //combina e minifica os arquivos contidos na pasta
        uglify: {
            my_target: {
                //carregará todos os arquivos contidos em Scripts para a pasta script da pasta wwwroot
                files: { 'wwwroot/scripts/app-min.js': ['Scripts/app.js', 'Scripts/**/*.js'] }
            }
        },

        watch: {
            scripts: {
                files: ['Scripts/**/*.js'],
                tasks: ['uglify']
            }
        }
    });

    // criar a task
    grunt.registerTask('default', ['uglify', 'watch']);
};