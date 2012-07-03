enchant();
window.onload = function(){
	var game = new Game(320,320)
	game.fps = 16;
	game.preload('puzzle.png','http://enchantjs.com/assets/images/charal.gif',
	'http://enchantjs.com/assets/images/map0.gif','http://enchantjs.com/assets/      images/icon0.gif');
	game.onload = function(){
		label = new Label("てすと");
		game.rootScene.addChild(labal);
	
	};
	
	//ブロック
	var fall_flage = True;
	game.addBlock = function(x){
		var block = new Sprite(16, 16);
		block.image = game.assets['puzzle.png'];
		block.x = x;
		block.y = -16;
		block.frame = 8;
		block.speed = 5;
		game.rootScnen.addChild(block);
		
		block.addEventListener(Event.ENTER_FRAME, function(){
			block.y += block.speed;
			fall_flage = false;
			if(block.y > 290){
				block.speed = 0;
				fall_flage = ture;
			}else if(block.within(block, 16)){
				block.speed = 0;
				fall_flage = true;
			}
		});
	};
	//シーン
	game.rootScene.addEventListener(Event.ENTER_FRAME, function(){
		if(fall_flag == Ture){
			var x = Math.floor(Math.random()* 320);
			game.addBlock(x);
		}
	});
	game.start();
};