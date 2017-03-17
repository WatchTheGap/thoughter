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

      afterEach(function () {
        let newMain = document.querySelector('main.recent'); //added class so it removes the correct main
        newMain.parentNode.removeChild(newMain);
      });

      it('should be a function', function () {
        expect(window.thoughter.showRecent).to.be.a('function');
      });

      it('should handle no argument', function () {
        let result = window.thoughter.showRecent();
          expect(result).to.be.undefined;
      });

      it('should handle an empty array', function () {
        let result = window.thoughter.showRecent([]);
        let articles = document.querySelectorAll('main.recent article');
        expect(articles.length).to.equal(0);
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
      it('should handle an array that has some objects that do not meet specified content criteria', function () {
        window.thoughter.showRecent([{name:'SAD'}, {content: 'testing', createTime: 'time', id: 'id'}]);
        let articles = document.querySelectorAll('main article');
        expect(articles.length).to.equal(1);
      });
      it('should handle an array that contains only objects that do not meet the specified criteria', function () {
        window.thoughter.showRecent([{name: 'SAD'}, {number: 9}]);
        let articles = document.querySelectorAll('main article');
        expect(articles.length).to.equal(0);
      });

      it('should handle more than one array', function () {
        window.thoughter.showRecent(
          [{content: 'testing', createTime: 'time', id: 'id'}],
          [{content: 'testing', createTime: 'time', id: 'id'}]
        );
        let articles = document.querySelectorAll('main article');
        expect(articles.length).to.equal(1);
      });

      it('should handle more than one argument, one correct, others not', function () {
        window.thoughter.showRecent([{content: 'testing', createTime: 'time', id: 'id'}], [1,2,3]);
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
