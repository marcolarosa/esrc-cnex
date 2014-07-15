'use strict';

angular.module('interfaceApp')
  .service('DataService', [ '$http', '$rootScope', 'configuration', function ForceData($http, $rootScope, configuration) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    //

    function getNodeData(nodes, contextNode) {
        DataService.selected = nodes;
        DataService.contextNode = contextNode;
        $rootScope.$broadcast('search-result-data-ready');
    }

    var DataService = {
        // connected nodes
        nodes: [],

        // un-connected nodes
        unConnectedNodes: [],

        // links
        links: [],

        getNodeData: getNodeData
    }

    return DataService;
  }]);