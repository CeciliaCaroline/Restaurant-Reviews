
module.exports = function(grunt) {

    grunt.initConfig({
      responsive_images: {
        dev: {
          options: {
            engine: 'im',
            sizes: [{
           
             name: 'small',
             width: 320,
             quality: 20
           },{
             name: 'medium',
             width: 640,
             suffix: "_x1",
             quality: 40,

           },{
             name: "large",
             width: 1024,
             suffix: "_x2",
             quality: 60
            }]
          },
  
          /*
          You don't need to change this part if you don't change
          the directory structure.
          */
          files: [{
            expand: true,
            src: ['*.{gif,jpg,png}'],
            cwd: 'img/',
            dest: 'images/'
          }]
        }
      },
  
      /* Clear out the images directory if it exists */
      clean: {
        dev: {
          src: ['images'],
        },
      },
  
      /* Generate the images directory if it is missing */
      mkdir: {
        dev: {
          options: {
            create: ['images']
          },
        },
      },
  
      /* Copy the "fixed" images that don't go through processing into the images/directory */
      copy: {
        dev: {
          files: [{
            expand: true,
            src: 'img/fixed/*.{gif,jpg,png}',
            dest: 'images/'
          }]
        },
      },
    });
    
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);
  
  };
  