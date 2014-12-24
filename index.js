'use strict';

var react = require('react-tools');

module.exports = function(content, file, conf){
    return react.transform(content, conf);
};