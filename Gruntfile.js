// Generated on 2014-01-23 using generator-jekyllrb 1.2.1
'use strict';

// Directory reference:
//   css: style
//   javascript: js
//   images: img
//   fonts: fonts

module.exports = function (grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Configurable paths
    yeoman: {
      app: 'app',
      dist: 'dist'
    },
    watch: {
      jekyll: {
        files: [
          '<%= yeoman.app %>/**/*.{html,yml,md,mkd,markdown}',
          '!<%= yeoman.app %>/_bower_components/**/*'
        ],
        tasks: ['jekyll:server']
      },
      js: {
        files: ['<%= yeoman.app %>/js/{,*/}*.js'],
        tasks: ['jshint'],
        options: {
            livereload: true
        }
      },
      less: {
        files: ['<%= yeoman.app %>/style/**/*.less'],
        tasks: ['less:server', 'autoprefixer']
      },
      styles: {
        files: ['<%= yeoman.app %>/style/{,*/}*.css'],
        tasks: ['newer:copy:style', 'autoprefixer']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
            '.jekyll/**/*.html',
            '{.tmp,<%= yeoman.app %>}/<%= style %>/**/*.less',
            '{.tmp,<%= yeoman.app %>}/<%= js %>/**/*.js',
            '<%= yeoman.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
            ]
        }
    },
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '.jekyll',
            '<%= yeoman.app %>'
          ]
        }
      },
      test: {
        options: {
          base: [
            '.tmp',
            '.jekyll',
            'test',
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>',
          livereload: false
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            // Running Jekyll also cleans the target directory.  Exclude any
            // non-standard `keep_files` here (e.g., the generated files
            // directory from Jekyll Picture Tag).
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: [
        '.tmp',
        '.jekyll'
      ]
    },
    // Compiles LESS to CSS and generates necessary files if requested
    less: {
      options: {
        paths: ['<%= yeoman.app %>/_bower_components'],
      },
      dist: {
        options: {
          yuicompress: true,
          report: 'gzip'
        },
        files: {
          '.tmp/style/main.css': '<%= yeoman.app %>/style/main.less'
        }
      },
      server: {
        options: {
          sourceMap: true,
          sourceMapBasepath: '<%= yeoman.app %>/',
          sourceMapRootpath: '../'
        },
        files: {
          '.tmp/style/main.min.css': '<%= yeoman.app %>/style/main.less'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/style',
          src: '{,*/}*.css',
          dest: '.tmp/style'
        }]
      }
    },

    jekyll: {
      options: {
        bundleExec: true,
        config: '_config.yml,_config.build.yml',
        src: '<%= yeoman.app %>'
      },
      dist: {
        options: {
          dest: '<%= yeoman.dist %>',
        }
      },
      server: {
        options: {
          config: '_config.yml',
          dest: '.jekyll'
        }
      },
      check: {
        options: {
          doctor: true
        }
      }
    },

    // Automatically inject Bower components into the HTML file
    'bower-install': {
        app: {
            html: '<%= yeoman.app %>/index.html',
            ignorePath: '<%= yeoman.app %>/'
        }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
        options: {
            dest: '<%= yeoman.dist %>'
        },
        // html: '<%= yeoman.app %>/index.html'
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
        options: {
            assetsDirs: ['<%= yeoman.dist %>']
        },
        css: ['<%= yeoman.dist %>/style/**/*.css'],
        js: ['<%= yeoman.dist %>/js/**/*.js']
    },

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= yeoman.app %>/img/',
                src: ['**/*.{gif,jpeg,jpg,png}'],
                dest: '<%= yeoman.dist %>/img'
            }]
        }
    },
    svgmin: {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= yeoman.app %>/svg',
                src: ['**/*.svg'],
                dest: '<%= yeoman.dist %>/svg'
            }]
        }
    },
    htmlmin: {
        dist: {
            options: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                removeCommentsFromCDATA: true,
                removeEmptyAttributes: true,
                removeOptionalTags: true,
                removeRedundantAttributes: true,
                useShortDoctype: true
            },
            files: [{
                expand: true,
                cwd: '<%= yeoman.dist %>',
                src: '{,*/}*.html',
                dest: '<%= yeoman.dist %>'
            }]
        }
    },
    // Usemin adds files to concat
    concat: {},
    // Usemin adds files to uglify
    uglify: {},
    // Usemin adds files to cssmin
    cssmin: {
        minify: {
            expand: true,
            cwd: '.tmp/style/',
            src: ['*.css', '!*.min.css'],
            dest: '<%= yeoman.dist %>/style',
            ext: '.min.css'
        }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/js/**/*.js',
        'test/spec/**/*.js'
      ]
    },

    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          '<%= yeoman.app %>/style/**/*.css'
        ]
      }
    },

    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            // Jekyll processes and moves HTML and text files.
            // Usemin moves CSS and javascript inside of Usemin blocks.
            // Copy moves asset files and directories.
            'img/**/*',
            'fonts/**/*',
            // Like Jekyll, exclude files & folders prefixed with an underscore.
            '!**/_*{,/**}',
            // Explicitly add any files your site needs for distribution here.
            '_bower_components/jquery/jquery.js',
            '_bower_components/bootstrap/dist/js/**/*',
            '_bower_components/JVFloat/jvfloat.min.js',
            'js/**/*',
            'favicon.ico',
            'apple-touch*.png',
            '*.{ico,png,txt}',
            '.htaccess',
            // '{,*/}*.html',
          ]
        }]
      },
      styles: {
        expand: true,
        dot: true,
        cwd: '<%= yeoman.app %>/style/',
        src: '**/*.css',
        dest: '.tmp/style/'
      }
    },

    // Generates a custom Modernizr build that includes only the tests you
    // reference in your app
    modernizr: {
        devFile: '<%= yeoman.app %>/_bower_components/modernizr/modernizr.js',
        outputFile: '<%= yeoman.dist %>/_bower_components/modernizr/modernizr.js',
        files: [
            '<%= yeoman.dist %>/js/{,*/}*.js',
            '<%= yeoman.dist %>/style/{,*/}*.css',
            '!<%= yeoman.dist %>/js/vendor/*'
        ],
        uglify: true
    },

    concurrent: {
      server: [
        'less:server',
        'jekyll:server',
        'copy:styles'
      ],
      test: [
        'less:server'
      ],
      dist: [
        'less:dist'
        // 'imagemin',
        // 'svgmin'
      ]
    }
  });

  // Define Tasks
  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  // No real tests yet. Add your own.
  grunt.registerTask('test', [
  //   'clean:server',
  //   'concurrent:test',
  //   'connect:test'
  ]);

  grunt.registerTask('check', [
    'clean:server',
    'jekyll:check',
    'jshint:all',
    'csslint:check'
  ]);

  grunt.registerTask('build', [
    'clean',
    // Jekyll cleans files from the target directory, so must run first
    'jekyll:dist',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'cssmin',
    'copy:dist',
    'modernizr',
    'htmlmin'
    ]);

  grunt.registerTask('deploy', [
    'check',
    'test',
    'build',
    // 'buildcontrol'
    ]);

  grunt.registerTask('default', [
    'check',
    'test',
    'build'
  ]);
};
