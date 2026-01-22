MyGame.Result = function(game) {
};

MyGame.Result.prototype = {
  create: function() {
    this.add.image(0,0,'result_bg');
    
    this.totalScore = this.add.text(game.world.width/2,200,'',{ font: "50px Microsoft YaHei", fill: "#3e3e3e", align: "center" });
    this.totalScore.anchor.set(0.5,0);
    this.totalScore.setText('Tổng quãng đường đã đạp\n'+game.score/1000+'Km');
    this.totalScore.lineSpacing = 20;
    
    this.facingScore = this.add.text(game.world.width/2,450,'',{ font: "50px Microsoft YaHei", fill: "#3e3e3e", align: "center" });
    this.facingScore.anchor.set(0.5,0);
    this.facingScore.setText('Quãng đường lượt đạp này\n'+game.score/1000+'Km');
    this.facingScore.lineSpacing = 20;
    
    var lotteryBtn = game.add.button(game.world.width/2,700,'ico',function(){},this);
    lotteryBtn.anchor.set(0.5,0);
    lotteryBtn.frameName = 'lottery_btn.png';
    
    var backIndexBtn = game.add.button(game.world.width/2,850,'ico',function(){
      window.location.reload();
    },this);
    backIndexBtn.anchor.set(0.5,0);
    backIndexBtn.frameName = 'backIndex_btn.png';
    
    GameUI.cutscenes()
  }
};