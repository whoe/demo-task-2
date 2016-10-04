/* global describe, it, global */

'use strict';

require('should');

var tags = require('./getUniqTags');

describe('Кол-во тегов.', function(){
    it('Должно быть не менее уникальных 5 тегов.', function () {

        console.log('   Кол-во уникальных тегов: ' + tags.length);

        (tags.length >= 5).should.be.eql(true);
    });
});
