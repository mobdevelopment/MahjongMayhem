describe('game', function(){
    var gameFactory;
    var scope;
    var gameCtrl;
    var httpBackend;


    beforeEach(function(){
        module('mahjong');

        inject(function($rootScope, $controller, $injector){

            httpBackend = $injector.get('$httpBackend');
            scope = $rootScope.$new();
            gameFactory = $injector.get('GameFactory');
            gameCtrl = $controller('GameController',{$scope: scope});

        })
    });

    describe('selecting a tile', function(){
        it('should return false if the selected tile is not available (tiles left and right)', function(){
            
            expect(false);
        });

        it('should return false if the selected tile is not available (tile on top)', function(){

            //Assert
            expect(true);
        });
    });
});