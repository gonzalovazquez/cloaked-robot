describe('cloaked-robot', function () {
  'use strict';

  beforeEach(module('cloaked-robot'));

  describe('cloaked-robot tests', function () {
    it('should recognize our angular module', function () {
      expect(angular.module('cloaked-robot')).to.exist;
    });
  });
});