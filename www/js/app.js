// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })

    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
      }
    }
  })

  .state('app.crono', {
    url: '/crono',
    views: {
      'menuContent': {
        templateUrl: 'templates/crono.html',
      }
    }
  })

  .state('app.palestrantes', {
    url: '/palestrantes',
    views: {
      'menuContent': {
        templateUrl: 'templates/palestrantes.html',
      }
    }
  })

  .state('app.social', {
    url: '/social',
    views: {
      'menuContent': {
        templateUrl: 'templates/social.html',
      }
    }
  })

  .state('app.manual', {
    url: '/manual',
    views: {
      'menuContent': {
        templateUrl: 'templates/manual.html',
      }
    }
  })

  .state('app.atividades', {
    url: '/atividades',
    views: {
      'menuContent': {
        templateUrl: 'templates/atividades.html',
      }
    }
  })

  .state('app.mapa', {
      url: '/mapa',
      views: {
        'menuContent': {
          templateUrl: 'templates/mapa.html',
        }
      }
    })

  .state('app.feedback', {
    url: '/feedback',
    views: {
      'menuContent': {
        templateUrl: 'templates/feedback.html',
      }
    }
  })

  .state('app.andrei_golfeto', {
    url: '/palestrantes/andrei_golfeto',
    views: {
      'menuContent': {
        templateUrl: 'templates/palestrantes/andrei_golfeto.html',
      }
    }
  })

  .state('app.aser_cortines', {
      url: '/palestrantes/aser_cortines',
      views: {
        'menuContent': {
          templateUrl: 'templates/palestrantes/aser_cortines.html',
        }
      }
  })

  .state('app.daniela_siaulys', {
      url: '/palestrantes/daniela_siaulys',
      views: {
        'menuContent': {
          templateUrl: 'templates/palestrantes/daniela_siaulys.html',
        }
      }
  })

  .state('app.dario_neto', {
      url: '/palestrantes/dario_neto',
      views: {
        'menuContent': {
          templateUrl: 'templates/palestrantes/dario_neto.html',
        }
      }
  })

  .state('app.elson_pires', {
      url: '/palestrantes/elson_pires',
      views: {
        'menuContent': {
          templateUrl: 'templates/palestrantes/elson_pires.html',
        }
      }
  })

  .state('app.gabriel_ferreira', {
      url: '/palestrantes/gabriel_ferreira',
      views: {
        'menuContent': {
          templateUrl: 'templates/palestrantes/gabriel_ferreira.html',
        }
      }
  })

  .state('app.kalil_el_kadri', {
      url: '/palestrantes/kalil_el_kadri',
      views: {
        'menuContent': {
          templateUrl: 'templates/palestrantes/kalil_el_kadri.html',
        }
      }
  })

  .state('app.klynsmann_bagatini', {
      url: '/palestrantes/klynsmann_bagatini',
      views: {
        'menuContent': {
          templateUrl: 'templates/palestrantes/klynsmann_bagatini.html',
        }
      }
  })

  .state('app.marcus_barao', {
      url: '/palestrantes/marcus_barao',
      views: {
        'menuContent': {
          templateUrl: 'templates/palestrantes/marcus_barao.html',
        }
      }
  })

  .state('app.paulo_americo', {
      url: '/palestrantes/paulo_americo',
      views: {
        'menuContent': {
          templateUrl: 'templates/palestrantes/paulo_americo.html',
        }
      }
  })

  .state('app.raquel_tetti', {
      url: '/palestrantes/raquel_tetti',
      views: {
        'menuContent': {
          templateUrl: 'templates/palestrantes/raquel_tetti.html',
        }
      }
  })

  .state('app.thiago_novazzi', {
      url: '/palestrantes/thiago_novazzi',
      views: {
        'menuContent': {
          templateUrl: 'templates/palestrantes/thiago_novazzi.html',
        }
      }
  })

  .state('app.wellington_santos_silva', {
      url: '/palestrantes/wellington_santos_silva',
      views: {
        'menuContent': {
          templateUrl: 'templates/palestrantes/wellington_santos_silva.html',
        }
      }
  })

  .state('app.yuri_pomarole', {
        url: '/palestrantes/yuri_pomarole',
        views: {
          'menuContent': {
            templateUrl: 'templates/palestrantes/yuri_pomarole.html',
          }
        }
  })

  .state('app.faq', {
    url: '/faq',
    views: {
      'menuContent': {
        templateUrl: 'templates/faq.html',
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
