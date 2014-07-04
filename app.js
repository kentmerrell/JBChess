var app = angular.module('jbchess', [])
  .directive('square', function(movementservice) {
    return {
      restrict: 'E',
      scope: {},
      replace: true,
      template: '<span  class="{{sq.color}} square" >({{sq.x}},{{sq.y}})<div>{{piecename}}</div></span>',
      link: function(scope, el, attrs) {
        scope.piecename = attrs.piece;
        el.on('click', function() {

          alert('the piece on me is: ' + movementservice.getsquare(sq.x, sq.y, attrs.piece));
        });
        var sq = new Square(attrs.xcoord, attrs.ycoord);
        console.log('sq', sq);
        scope.sq = sq;
      }
    };
  });



app.factory('movementservice', function() {
  return {
    /*
    
var bishop options = function (xcoord, ycoord) {
  //select all squares for which xcoord + ycoord = xcoord of bishop + ycoord of bishop 
  &
  //select all squares for which xcoord - ycoord = xcoord of bishop - ycoord of bishop
  }

var king options = function (xcoord, ycoord){
  reference rook code, trim distance to 1
  & 
  reference bishop code, trim distance to 1}

var knight = function (xcoord, ycoord){ 1
}

var pawn = function (xcoord, ycoord, color) {
//if black, define 'piecedirection' as '-1'
//if white, define 'piecedirection' as '+1'
//selection passive: reference rook code, trim distance to 1
///initial: reference rook code, trim distance to 2
//selection aggressive: reference bishop code, trim distance to 1, implement 'piecedirection
///en passant: 'selection aggressive' turned on, conditions specified later


var queen = function (xcoord, ycoord) {
  //reference bishop code
  & 
  //reference rook code
}

var rook = function (xcoord, ycoord){
  select: 
  all squares in row ycoord,
  and all squares in column xcoord
}

    */

    getsquare: function(x, y, pid) {
      return pid + '(' + x + ',' + y + ')';
    },

    getMoveUniverse: function(x, y, pid) {
      var piecetype = pid.substring(1, 1);
      switch (piecetype) {
        case 'r':
          
          break;
        case 'n':
          break;
        case 'b':
          break;
        case 'q':
          break;
        case 'k':
          break;
        case 'p':
          break;
      }
    },

    movePiece: function(fromx, fromy, tox, toy, pid) {


    }

  };
});

app.directive('piece', function() {
  return {
    restrict: 'A',
    transclue: 'true',
    link: function(scope, el, att) {

    }
  };
});


app.directive('pawn', function() {
  return {
    restrict: 'E',
    scope: {
      //id: '@id'
    },

    template: '<span>{{pid}}</span>',
    link: function(scop, elem, attr) {
      console.log(attr.pid);
      scop.pid = attr.pid;
      elem.on('click', function() {
        scop.move();
        alert("I'm gonna move now!" + attr.pid);
      });

      scop.move = function() {
        console.log(scop, elem, attr);
        alert("I'm gonna move now!" + scop.pid);
      };
    }
  };
});


app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
  //$scope.squares=angular.element('square');
});

Square = function(x, y) {
  var _x = x;
  var _y = y;
  return {
    x: _x,
    y: _y,
    color: getcolor(x, y)
  };
};

getcolor = function(col, row) {
  var colodd = (col == '1' || col == '3' || col == '5' || col == '7');
  var rowodd = (row == '1' || row == '3' || row == '5' || row == '7');


  if (rowodd & colodd) {
    return 'black';
  }

  if (!rowodd & !colodd)
    return 'black';

  return 'white';


};
