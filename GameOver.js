/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 15-6-13
 * Time: 下午4:23
 * To change this template use File | Settings | File Templates.
 */


var GameOver = cc.Layer.extend({
    _ship: null,
    _lbScore: 0,

    ctor:function()
    {
        this._super();
        this.init();
    },
    init:function()
    {
        var sp = new cc.Sprite(res.loading_png);
        sp.anchorX = 0;
        sp.anchorY = 0;
        sp.scale = MW.SCALE;
        this.addChild(sp, 0, 1);

        var logo = new cc.Sprite(res.gameOver_png);
        logo.attr({
            anchorX: 0,
            anchorY: 0,
            x: 40,
            y: 450,
            scale: MW.SCALE
        });
        this.addChild(logo, 10, 1);

        var singalHeight = MW.menuHeight;
        var singalWidth = MW.menuWidth;

        var playAgainNormal = new cc.Sprite(res.menu_png, cc.rect(singalWidth * 3, 0, singalWidth, singalHeight));
        var playAgainSelected = new cc.Sprite(res.menu_png, cc.rect(singalWidth * 3, singalHeight, singalWidth, singalHeight));
        var playAgainDisabled = new cc.Sprite(res.menu_png, cc.rect(singalWidth * 3, singalHeight * 2, singalWidth, singalHeight));

        var flare = new cc.Sprite(res.flare_jpg);
        flare.visible = false;
        var playAgain = new cc.MenuItemSprite(playAgainNormal, playAgainSelected, playAgainDisabled, function(){
            flareEffect(flare, this, this.onPlayAgain);
        }.bind(this));
        playAgain.scale = MW.SCALE;

        var menu = new cc.Menu(playAgain);
        this.addChild(menu, 1, 2);
        menu.x = winSize.width / 2;
        menu.y = 300;

        var lbScore = new cc.LabelTTF("Your Score:"+MW.SCORE,"Arial Bold", 24);
        lbScore.x = 240;
        lbScore.y = 370;
        lbScore.color = cc.color(255, 0, 0);
        this.addChild(lbScore, 10);

        if(MW.SOUND)
        {
            cc.audioEngine.playMusic(cc.sys.os == cc.sys.OS_WP8 || cc.sys.os == cc.sys.OS_WINRT ? res.mainMainMusic_wav : res.mainMainMusic_mp3, true);
        }

        return true;
    },
    onPlayAgain:function(pSender)
    {
        cc.audioEngine.stopMusic();
        cc.audioEngine.stopAllEffects();
        var scene = new cc.Scene();
        scene.addChild(new GameLayer());
        scene.addChild(new GameControlMenu());
        cc.director.runScene(new cc.TransitionFade(1, scene));
    }
});

GameOver.scene = function(){
    var scene = new cc.Scene();
    var layer = new GameOver();
    scene.addChild(layer);
    return scene;
};
