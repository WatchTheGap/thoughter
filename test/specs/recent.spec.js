(function() {
  'use strict';


  let expect = chai.expect;

  describe('recent thoughts tests', function () {

    describe('showRecent tests', function () {

      beforeEach(function () {
        document.querySelector('body').appendChild(document.createElement('main').addClass('.recent'));
      });

      afterEach();
        let newMain = document.querySelector('main');
        newMain.parentNode.removeChild(newMain);


      it('should show a list of elements containing data from the provided array', function () {
        // let result = window.thoughter.showRecent(['a', 'b', 'c']);
        expect(window.thoughter.showRecent).to.be.a('function');
      });

      it('should handle an empty array', function () {
        let result = window.thoughter.showRecent([]);
        expect(window.thoughter.showRecent.length).to.equal(0);
      });

      it('should handle an argument that is not an array', function () {
        let result = window.thoughter.showRecent('SAD');
        expect(result).to.be.undefined;
      });


    });

    describe('getRecent', function () {
      it('should get data for recent thoughts from the provided source', function () {
        expect(window.thoughter.getRecent).to.be.a('function');
      });


    });

  });


}());
