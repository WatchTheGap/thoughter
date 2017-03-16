(function() {
  'use strict';


  let expect = chai.expect;

  describe('recent thoughts tests', function () {


    describe('showRecent tests', function () {

      it('should show a list of elements containing data from the provided array', function () {
        // let result = window.thoughter.showRecent(['a', 'b', 'c']);
        expect(window.thoughter.showRecent).to.be.a('function');
      });

      it('should handle an empty array', function () {
        let result = window.thoughter.showRecent([]);
        expect(window.thoughter.showRecent.length).to.equal(0);
      });

    });

    describe('getRecent', function () {
      it('should get data for recent thoughts from the provided source', function () {
        expect(window.thoughter.getRecent).to.be.a('function');
      });


    });

  });


}());
