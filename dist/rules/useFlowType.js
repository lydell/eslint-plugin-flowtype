"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var schema = [];

var create = function create(context) {
  var markTypeAsUsed = function markTypeAsUsed(node) {
    context.markVariableAsUsed(node.id.name);
  };

  return {
    DeclareClass: markTypeAsUsed,
    DeclareFunction: markTypeAsUsed,
    DeclareModule: markTypeAsUsed,
    DeclareVariable: markTypeAsUsed
  };
};

exports.default = {
  create,
  schema
};
module.exports = exports["default"];