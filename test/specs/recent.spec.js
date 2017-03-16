(function() {
  'use strict';


  let expect = chai.expect;

  describe('recent thoughts tests', function () {

    describe('showRecent tests', function () {

      beforeEach(function () {
        let newMain = document.createElement('main');
        newMain.classList.add('recent');
        document.querySelector('body').appendChild(newMain);
      });

      // afterEach();
      //   let newMain = document.querySelector('main');
      //   newMain.parentNode.removeChild(newMain);


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
      it('should create an element for each piece of data', function () {
        window.thoughter.showRecent([{content: 'testing', createTime: 'time', id: 'id'}]);
        let articles = document.querySelectorAll('main article');
        expect(articles.length).to.equal(1);
      });
    });

    describe('getRecent', function () {
      it('should get data for recent thoughts from the provided source', function () {
        expect(window.thoughter.getRecent).to.be.a('function');
      });


    });

  });


}());
