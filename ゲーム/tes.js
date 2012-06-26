enchant();
window.onload = function(){
	game.fps = 16;
	
	game.preload('puzzle.png');
	game.onload = function(){
		label = new Label("てすと");
		game.rootScene.addChild(labal);
	};
	//ブロック
	var fall_flage = ture;
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
				fall_flage = ture;
			}
		});
	};
	//シーン
	game.rootScene.addEventListener(Event.ENTER_FRAME, function(){
		if(fall_flag == ture){
			var x = Math.floor(Math.random()* 320);
			game.addBlock(x);
		}
	});
	game.start();
};