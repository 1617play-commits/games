MyGame.MyLotto = function(game) {
};

MyGame.MyLotto.prototype = {
    create: function() {
        this.add.image(0,0,'myLotto_bg');
        
        this.totalScore = this.add.text(game.world.width/2,370,"Nhiều game Phaser hay",{ font: "bold 42px Microsoft YaHei", fill: "#5b3716", align: "center" });
        this.totalScore.anchor.set(0.5,0);
        //this.totalScore.lineSpacing = 20;
        
        this.developer = this.add.text(game.world.width/2,550,"Góc game Phaser",{ font: "bold 50px Microsoft YaHei", fill: "#5b3716", align: "center" });
        this.developer.anchor.set(0.5,0);
        
        this.awardTime = this.add.text(game.world.width/2,680,'Thời gian nhận thưởng\n'+"Ngay bây giờ",{ font: "42px Microsoft YaHei", fill: "#5b3716", align: "center" });
        this.awardTime.anchor.set(0.5,0);
        this.awardTime.lineSpacing = 10;
        
        this.awardAddress = this.add.text(game.world.width/2,860,'Địa điểm nhận thưởng\n'+"www.1617play.com",{ font: "42px Microsoft YaHei", fill: "#5b3716", align: "center" });
        this.awardAddress.anchor.set(0.5,0);
        this.awardAddress.lineSpacing = 20;
        
        var closeBtn = game.add.button(game.world.width - 20,20,'ico',function(){
        	game.state.start('MainMenu')
        },this);
        closeBtn.anchor.set(1,0);
        closeBtn.frameName = 'close.png';
        GameUI.cutscenes()
    }
};