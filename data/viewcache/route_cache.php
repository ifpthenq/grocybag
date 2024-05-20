<?php return array (
  0 => 
  array (
    'GET' => 
    array (
      '/' => 'route0',
      '/about' => 'route1',
      '/manifest' => 'route2',
      '/barcodescannertesting' => 'route3',
      '/ideasboard' => 'route4',
      '/login' => 'route8',
      '/logout' => 'route10',
      '/userfields' => 'route11',
      '/userentities' => 'route13',
      '/users' => 'route17',
      '/usersettings' => 'route20',
      '/products' => 'route22',
      '/quantityunits' => 'route24',
      '/productgroups' => 'route27',
      '/stockoverview' => 'route30',
      '/stockentries' => 'route31',
      '/purchase' => 'route32',
      '/consume' => 'route33',
      '/transfer' => 'route34',
      '/inventory' => 'route35',
      '/stocksettings' => 'route37',
      '/locations' => 'route38',
      '/stockjournal' => 'route40',
      '/locationcontentsheet' => 'route41',
      '/quantityunitpluraltesting' => 'route42',
      '/stockjournal/summary' => 'route43',
      '/quantityunitconversionsresolved' => 'route47',
      '/stockreports/spendings' => 'route48',
      '/shoppinglocations' => 'route49',
      '/shoppinglist' => 'route51',
      '/shoppinglistsettings' => 'route54',
      '/recipes' => 'route55',
      '/recipessettings' => 'route58',
      '/mealplan' => 'route60',
      '/mealplansections' => 'route61',
      '/choresoverview' => 'route63',
      '/choretracking' => 'route64',
      '/choresjournal' => 'route65',
      '/chores' => 'route66',
      '/choressettings' => 'route68',
      '/batteriesoverview' => 'route70',
      '/batterytracking' => 'route71',
      '/batteriesjournal' => 'route72',
      '/batteries' => 'route73',
      '/batteriessettings' => 'route75',
      '/tasks' => 'route77',
      '/taskcategories' => 'route79',
      '/taskssettings' => 'route81',
      '/equipment' => 'route82',
      '/calendar' => 'route84',
      '/api' => 'route85',
      '/manageapikeys' => 'route86',
      '/manageapikeys/new' => 'route87',
      '/api/openapi/specification' => 'route88',
      '/api/system/info' => 'route89',
      '/api/system/time' => 'route90',
      '/api/system/db-changed-time' => 'route91',
      '/api/system/config' => 'route92',
      '/api/system/localization-strings' => 'route94',
      '/api/users' => 'route105',
      '/api/user' => 'route112',
      '/api/user/settings' => 'route113',
      '/api/stock' => 'route117',
      '/api/stock/volatile' => 'route120',
      '/api/recipes/fulfillment' => 'route154',
      '/api/chores' => 'route157',
      '/api/print/shoppinglist/thermal' => 'route164',
      '/api/batteries' => 'route165',
      '/api/tasks' => 'route170',
      '/api/calendar/ical' => 'route173',
      '/api/calendar/ical/sharing-link' => 'route174',
    ),
    'POST' => 
    array (
      '/login' => 'route9',
      '/api/system/log-missing-localization' => 'route93',
      '/api/users' => 'route106',
      '/api/stock/shoppinglist/add-missing-products' => 'route145',
      '/api/stock/shoppinglist/add-overdue-products' => 'route146',
      '/api/stock/shoppinglist/add-expired-products' => 'route147',
      '/api/stock/shoppinglist/clear' => 'route148',
      '/api/stock/shoppinglist/add-product' => 'route149',
      '/api/stock/shoppinglist/remove-product' => 'route150',
      '/api/chores/executions/calculate-next-assignments' => 'route161',
    ),
  ),
  1 => 
  array (
    'GET' => 
    array (
      0 => 
      array (
        'regex' => '~^(?|/ideasboard/([^/]+)|/ideasboard/delete/([^/]+)()|/userfield/([^/]+)()()|/userentity/([^/]+)()()()|/userobjects/([^/]+)()()()()|/userobject/([^/]+)/([^/]+)()()()()|/user/([^/]+)()()()()()()|/user/([^/]+)/permissions()()()()()()()|/files/([^/]+)/([^/]+)()()()()()()()|/product/([^/]+)()()()()()()()()())$~',
        'routeMap' => 
        array (
          2 => 
          array (
            0 => 'route5',
            1 => 
            array (
              'boardId' => 'boardId',
            ),
          ),
          3 => 
          array (
            0 => 'route7',
            1 => 
            array (
              'boardId' => 'boardId',
            ),
          ),
          4 => 
          array (
            0 => 'route12',
            1 => 
            array (
              'userfieldId' => 'userfieldId',
            ),
          ),
          5 => 
          array (
            0 => 'route14',
            1 => 
            array (
              'userentityId' => 'userentityId',
            ),
          ),
          6 => 
          array (
            0 => 'route15',
            1 => 
            array (
              'userentityName' => 'userentityName',
            ),
          ),
          7 => 
          array (
            0 => 'route16',
            1 => 
            array (
              'userentityName' => 'userentityName',
              'userobjectId' => 'userobjectId',
            ),
          ),
          8 => 
          array (
            0 => 'route18',
            1 => 
            array (
              'userId' => 'userId',
            ),
          ),
          9 => 
          array (
            0 => 'route19',
            1 => 
            array (
              'userId' => 'userId',
            ),
          ),
          10 => 
          array (
            0 => 'route21',
            1 => 
            array (
              'group' => 'group',
              'fileName' => 'fileName',
            ),
          ),
          11 => 
          array (
            0 => 'route23',
            1 => 
            array (
              'productId' => 'productId',
            ),
          ),
        ),
      ),
      1 => 
      array (
        'regex' => '~^(?|/quantityunit/([^/]+)|/quantityunitconversion/([^/]+)()|/productgroup/([^/]+)()()|/product/([^/]+)/grocycode()()()|/stockentry/([^/]+)()()()()|/location/([^/]+)()()()()()|/productbarcodes/([^/]+)()()()()()()|/stockentry/([^/]+)/grocycode()()()()()()()|/stockentry/([^/]+)/label()()()()()()()()|/shoppinglocation/([^/]+)()()()()()()()()())$~',
        'routeMap' => 
        array (
          2 => 
          array (
            0 => 'route25',
            1 => 
            array (
              'quantityunitId' => 'quantityunitId',
            ),
          ),
          3 => 
          array (
            0 => 'route26',
            1 => 
            array (
              'quConversionId' => 'quConversionId',
            ),
          ),
          4 => 
          array (
            0 => 'route28',
            1 => 
            array (
              'productGroupId' => 'productGroupId',
            ),
          ),
          5 => 
          array (
            0 => 'route29',
            1 => 
            array (
              'productId' => 'productId',
            ),
          ),
          6 => 
          array (
            0 => 'route36',
            1 => 
            array (
              'entryId' => 'entryId',
            ),
          ),
          7 => 
          array (
            0 => 'route39',
            1 => 
            array (
              'locationId' => 'locationId',
            ),
          ),
          8 => 
          array (
            0 => 'route44',
            1 => 
            array (
              'productBarcodeId' => 'productBarcodeId',
            ),
          ),
          9 => 
          array (
            0 => 'route45',
            1 => 
            array (
              'entryId' => 'entryId',
            ),
          ),
          10 => 
          array (
            0 => 'route46',
            1 => 
            array (
              'entryId' => 'entryId',
            ),
          ),
          11 => 
          array (
            0 => 'route50',
            1 => 
            array (
              'shoppingLocationId' => 'shoppingLocationId',
            ),
          ),
        ),
      ),
      2 => 
      array (
        'regex' => '~^(?|/shoppinglistitem/([^/]+)|/shoppinglist/([^/]+)()|/recipe/([^/]+)()()|/recipe/([^/]+)/pos/([^/]+)()()|/recipe/([^/]+)/grocycode()()()()|/mealplansection/([^/]+)()()()()()|/chore/([^/]+)()()()()()()|/chore/([^/]+)/grocycode()()()()()()()|/battery/([^/]+)()()()()()()()()|/battery/([^/]+)/grocycode()()()()()()()()())$~',
        'routeMap' => 
        array (
          2 => 
          array (
            0 => 'route52',
            1 => 
            array (
              'itemId' => 'itemId',
            ),
          ),
          3 => 
          array (
            0 => 'route53',
            1 => 
            array (
              'listId' => 'listId',
            ),
          ),
          4 => 
          array (
            0 => 'route56',
            1 => 
            array (
              'recipeId' => 'recipeId',
            ),
          ),
          5 => 
          array (
            0 => 'route57',
            1 => 
            array (
              'recipeId' => 'recipeId',
              'recipePosId' => 'recipePosId',
            ),
          ),
          6 => 
          array (
            0 => 'route59',
            1 => 
            array (
              'recipeId' => 'recipeId',
            ),
          ),
          7 => 
          array (
            0 => 'route62',
            1 => 
            array (
              'sectionId' => 'sectionId',
            ),
          ),
          8 => 
          array (
            0 => 'route67',
            1 => 
            array (
              'choreId' => 'choreId',
            ),
          ),
          9 => 
          array (
            0 => 'route69',
            1 => 
            array (
              'choreId' => 'choreId',
            ),
          ),
          10 => 
          array (
            0 => 'route74',
            1 => 
            array (
              'batteryId' => 'batteryId',
            ),
          ),
          11 => 
          array (
            0 => 'route76',
            1 => 
            array (
              'batteryId' => 'batteryId',
            ),
          ),
        ),
      ),
      3 => 
      array (
        'regex' => '~^(?|/task/([^/]+)|/taskcategory/([^/]+)()|/equipment/([^/]+)()()|/api/objects/([^/]+)()()()|/api/objects/([^/]+)/([^/]+)()()()|/api/userfields/([^/]+)/([^/]+)()()()()|/api/files/([^/]+)/([^/]+)()()()()()|/api/users/([^/]+)/permissions()()()()()()()|/api/user/settings/([^/]+)()()()()()()()()|/api/stock/entry/([^/]+)()()()()()()()()())$~',
        'routeMap' => 
        array (
          2 => 
          array (
            0 => 'route78',
            1 => 
            array (
              'taskId' => 'taskId',
            ),
          ),
          3 => 
          array (
            0 => 'route80',
            1 => 
            array (
              'categoryId' => 'categoryId',
            ),
          ),
          4 => 
          array (
            0 => 'route83',
            1 => 
            array (
              'equipmentId' => 'equipmentId',
            ),
          ),
          5 => 
          array (
            0 => 'route95',
            1 => 
            array (
              'entity' => 'entity',
            ),
          ),
          6 => 
          array (
            0 => 'route96',
            1 => 
            array (
              'entity' => 'entity',
              'objectId' => 'objectId',
            ),
          ),
          7 => 
          array (
            0 => 'route100',
            1 => 
            array (
              'entity' => 'entity',
              'objectId' => 'objectId',
            ),
          ),
          8 => 
          array (
            0 => 'route103',
            1 => 
            array (
              'group' => 'group',
              'fileName' => 'fileName',
            ),
          ),
          9 => 
          array (
            0 => 'route109',
            1 => 
            array (
              'userId' => 'userId',
            ),
          ),
          10 => 
          array (
            0 => 'route114',
            1 => 
            array (
              'settingKey' => 'settingKey',
            ),
          ),
          11 => 
          array (
            0 => 'route118',
            1 => 
            array (
              'entryId' => 'entryId',
            ),
          ),
        ),
      ),
      4 => 
      array (
        'regex' => '~^(?|/api/stock/products/([^/]+)|/api/stock/products/([^/]+)/entries()|/api/stock/products/([^/]+)/locations()()|/api/stock/products/([^/]+)/price\\-history()()()|/api/stock/products/by\\-barcode/([^/]+)()()()()|/api/stock/locations/([^/]+)/entries()()()()()|/api/stock/bookings/([^/]+)()()()()()()|/api/stock/transactions/([^/]+)()()()()()()()|/api/stock/barcodes/external\\-lookup/([^/]+)()()()()()()()()|/api/stock/products/([^/]+)/printlabel()()()()()()()()())$~',
        'routeMap' => 
        array (
          2 => 
          array (
            0 => 'route121',
            1 => 
            array (
              'productId' => 'productId',
            ),
          ),
          3 => 
          array (
            0 => 'route122',
            1 => 
            array (
              'productId' => 'productId',
            ),
          ),
          4 => 
          array (
            0 => 'route123',
            1 => 
            array (
              'productId' => 'productId',
            ),
          ),
          5 => 
          array (
            0 => 'route124',
            1 => 
            array (
              'productId' => 'productId',
            ),
          ),
          6 => 
          array (
            0 => 'route131',
            1 => 
            array (
              'barcode' => 'barcode',
            ),
          ),
          7 => 
          array (
            0 => 'route137',
            1 => 
            array (
              'locationId' => 'locationId',
            ),
          ),
          8 => 
          array (
            0 => 'route138',
            1 => 
            array (
              'bookingId' => 'bookingId',
            ),
          ),
          9 => 
          array (
            0 => 'route140',
            1 => 
            array (
              'transactionId' => 'transactionId',
            ),
          ),
          10 => 
          array (
            0 => 'route142',
            1 => 
            array (
              'barcode' => 'barcode',
            ),
          ),
          11 => 
          array (
            0 => 'route143',
            1 => 
            array (
              'productId' => 'productId',
            ),
          ),
        ),
      ),
      5 => 
      array (
        'regex' => '~^(?|/api/stock/entry/([^/]+)/printlabel|/api/recipes/([^/]+)/fulfillment()|/api/recipes/([^/]+)/printlabel()()|/api/chores/([^/]+)()()()|/api/chores/([^/]+)/printlabel()()()()|/api/batteries/([^/]+)()()()()()|/api/batteries/([^/]+)/printlabel()()()()()())$~',
        'routeMap' => 
        array (
          2 => 
          array (
            0 => 'route144',
            1 => 
            array (
              'entryId' => 'entryId',
            ),
          ),
          3 => 
          array (
            0 => 'route152',
            1 => 
            array (
              'recipeId' => 'recipeId',
            ),
          ),
          4 => 
          array (
            0 => 'route156',
            1 => 
            array (
              'recipeId' => 'recipeId',
            ),
          ),
          5 => 
          array (
            0 => 'route158',
            1 => 
            array (
              'choreId' => 'choreId',
            ),
          ),
          6 => 
          array (
            0 => 'route162',
            1 => 
            array (
              'choreId' => 'choreId',
            ),
          ),
          7 => 
          array (
            0 => 'route166',
            1 => 
            array (
              'batteryId' => 'batteryId',
            ),
          ),
          8 => 
          array (
            0 => 'route169',
            1 => 
            array (
              'batteryId' => 'batteryId',
            ),
          ),
        ),
      ),
    ),
    'POST' => 
    array (
      0 => 
      array (
        'regex' => '~^(?|/ideasboard/addboard/([^/]+)|/api/objects/([^/]+)()|/api/users/([^/]+)/permissions()()|/api/stock/products/([^/]+)/add()()()|/api/stock/products/([^/]+)/consume()()()()|/api/stock/products/([^/]+)/transfer()()()()()|/api/stock/products/([^/]+)/inventory()()()()()()|/api/stock/products/([^/]+)/open()()()()()()()|/api/stock/products/([^/]+)/merge/([^/]+)()()()()()()())$~',
        'routeMap' => 
        array (
          2 => 
          array (
            0 => 'route6',
            1 => 
            array (
              'boardId' => 'boardId',
            ),
          ),
          3 => 
          array (
            0 => 'route97',
            1 => 
            array (
              'entity' => 'entity',
            ),
          ),
          4 => 
          array (
            0 => 'route110',
            1 => 
            array (
              'userId' => 'userId',
            ),
          ),
          5 => 
          array (
            0 => 'route125',
            1 => 
            array (
              'productId' => 'productId',
            ),
          ),
          6 => 
          array (
            0 => 'route126',
            1 => 
            array (
              'productId' => 'productId',
            ),
          ),
          7 => 
          array (
            0 => 'route127',
            1 => 
            array (
              'productId' => 'productId',
            ),
          ),
          8 => 
          array (
            0 => 'route128',
            1 => 
            array (
              'productId' => 'productId',
            ),
          ),
          9 => 
          array (
            0 => 'route129',
            1 => 
            array (
              'productId' => 'productId',
            ),
          ),
          10 => 
          array (
            0 => 'route130',
            1 => 
            array (
              'productIdToKeep' => 'productIdToKeep',
              'productIdToRemove' => 'productIdToRemove',
            ),
          ),
        ),
      ),
      1 => 
      array (
        'regex' => '~^(?|/api/stock/products/by\\-barcode/([^/]+)/add|/api/stock/products/by\\-barcode/([^/]+)/consume()|/api/stock/products/by\\-barcode/([^/]+)/transfer()()|/api/stock/products/by\\-barcode/([^/]+)/inventory()()()|/api/stock/products/by\\-barcode/([^/]+)/open()()()()|/api/stock/bookings/([^/]+)/undo()()()()()|/api/stock/transactions/([^/]+)/undo()()()()()()|/api/recipes/([^/]+)/add\\-not\\-fulfilled\\-products\\-to\\-shoppinglist()()()()()()()|/api/recipes/([^/]+)/consume()()()()()()()())$~',
        'routeMap' => 
        array (
          2 => 
          array (
            0 => 'route132',
            1 => 
            array (
              'barcode' => 'barcode',
            ),
          ),
          3 => 
          array (
            0 => 'route133',
            1 => 
            array (
              'barcode' => 'barcode',
            ),
          ),
          4 => 
          array (
            0 => 'route134',
            1 => 
            array (
              'barcode' => 'barcode',
            ),
          ),
          5 => 
          array (
            0 => 'route135',
            1 => 
            array (
              'barcode' => 'barcode',
            ),
          ),
          6 => 
          array (
            0 => 'route136',
            1 => 
            array (
              'barcode' => 'barcode',
            ),
          ),
          7 => 
          array (
            0 => 'route139',
            1 => 
            array (
              'bookingId' => 'bookingId',
            ),
          ),
          8 => 
          array (
            0 => 'route141',
            1 => 
            array (
              'transactionId' => 'transactionId',
            ),
          ),
          9 => 
          array (
            0 => 'route151',
            1 => 
            array (
              'recipeId' => 'recipeId',
            ),
          ),
          10 => 
          array (
            0 => 'route153',
            1 => 
            array (
              'recipeId' => 'recipeId',
            ),
          ),
        ),
      ),
      2 => 
      array (
        'regex' => '~^(?|/api/recipes/([^/]+)/copy|/api/chores/([^/]+)/execute()|/api/chores/executions/([^/]+)/undo()()|/api/chores/([^/]+)/merge/([^/]+)()()|/api/batteries/([^/]+)/charge()()()()|/api/batteries/charge\\-cycles/([^/]+)/undo()()()()()|/api/tasks/([^/]+)/complete()()()()()()|/api/tasks/([^/]+)/undo()()()()()()())$~',
        'routeMap' => 
        array (
          2 => 
          array (
            0 => 'route155',
            1 => 
            array (
              'recipeId' => 'recipeId',
            ),
          ),
          3 => 
          array (
            0 => 'route159',
            1 => 
            array (
              'choreId' => 'choreId',
            ),
          ),
          4 => 
          array (
            0 => 'route160',
            1 => 
            array (
              'executionId' => 'executionId',
            ),
          ),
          5 => 
          array (
            0 => 'route163',
            1 => 
            array (
              'choreIdToKeep' => 'choreIdToKeep',
              'choreIdToRemove' => 'choreIdToRemove',
            ),
          ),
          6 => 
          array (
            0 => 'route167',
            1 => 
            array (
              'batteryId' => 'batteryId',
            ),
          ),
          7 => 
          array (
            0 => 'route168',
            1 => 
            array (
              'chargeCycleId' => 'chargeCycleId',
            ),
          ),
          8 => 
          array (
            0 => 'route171',
            1 => 
            array (
              'taskId' => 'taskId',
            ),
          ),
          9 => 
          array (
            0 => 'route172',
            1 => 
            array (
              'taskId' => 'taskId',
            ),
          ),
        ),
      ),
    ),
    'PUT' => 
    array (
      0 => 
      array (
        'regex' => '~^(?|/api/objects/([^/]+)/([^/]+)|/api/userfields/([^/]+)/([^/]+)()|/api/files/([^/]+)/([^/]+)()()|/api/users/([^/]+)()()()()|/api/users/([^/]+)/permissions()()()()()|/api/user/settings/([^/]+)()()()()()()|/api/stock/entry/([^/]+)()()()()()()())$~',
        'routeMap' => 
        array (
          3 => 
          array (
            0 => 'route98',
            1 => 
            array (
              'entity' => 'entity',
              'objectId' => 'objectId',
            ),
          ),
          4 => 
          array (
            0 => 'route101',
            1 => 
            array (
              'entity' => 'entity',
              'objectId' => 'objectId',
            ),
          ),
          5 => 
          array (
            0 => 'route102',
            1 => 
            array (
              'group' => 'group',
              'fileName' => 'fileName',
            ),
          ),
          6 => 
          array (
            0 => 'route107',
            1 => 
            array (
              'userId' => 'userId',
            ),
          ),
          7 => 
          array (
            0 => 'route111',
            1 => 
            array (
              'userId' => 'userId',
            ),
          ),
          8 => 
          array (
            0 => 'route115',
            1 => 
            array (
              'settingKey' => 'settingKey',
            ),
          ),
          9 => 
          array (
            0 => 'route119',
            1 => 
            array (
              'entryId' => 'entryId',
            ),
          ),
        ),
      ),
    ),
    'DELETE' => 
    array (
      0 => 
      array (
        'regex' => '~^(?|/api/objects/([^/]+)/([^/]+)|/api/files/([^/]+)/([^/]+)()|/api/users/([^/]+)()()()|/api/user/settings/([^/]+)()()()())$~',
        'routeMap' => 
        array (
          3 => 
          array (
            0 => 'route99',
            1 => 
            array (
              'entity' => 'entity',
              'objectId' => 'objectId',
            ),
          ),
          4 => 
          array (
            0 => 'route104',
            1 => 
            array (
              'group' => 'group',
              'fileName' => 'fileName',
            ),
          ),
          5 => 
          array (
            0 => 'route108',
            1 => 
            array (
              'userId' => 'userId',
            ),
          ),
          6 => 
          array (
            0 => 'route116',
            1 => 
            array (
              'settingKey' => 'settingKey',
            ),
          ),
        ),
      ),
    ),
    'OPTIONS' => 
    array (
      0 => 
      array (
        'regex' => '~^(?|/api/(.+))$~',
        'routeMap' => 
        array (
          2 => 
          array (
            0 => 'route175',
            1 => 
            array (
              'routes' => 'routes',
            ),
          ),
        ),
      ),
    ),
  ),
);