'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }])
  .filter('secondsToHours', function() {
  	return function(seconds) {
  		if(!seconds) {return '';}
  		var hours = Math.floor(seconds/3600);
  		var minutes = Math.floor((seconds - (hours*3600)) / 60);
  		
  		if(hours<1) {return minutes+' mins'};
  		if(minutes<1) {return hours+' hrs'};
	    return hours+' hrs '+minutes+' mins';
  	}
  })
