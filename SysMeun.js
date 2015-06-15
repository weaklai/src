
var SysMenu = cc.Layer.extend({
    _ship: null,

    ctor:function ()
    {
        this._super();
        this.init();
    },
    init:function ()
    {
        cc.spriteFrameCache.addSpriteFrames(res.textureTransparentPack_plist);

        winSize = cc.director.getWinSize();
        var sp = new cc.Sprite(res.loading_png);
        sp.anchorX = 0;
        sp.anchorY = 0;
        sp.scale = MW.SCALE;
        this.addChild(sp, 0, 1);

        var logo = new cc.Sprite(res.logo_png);
        logo.attr({
            anchorX: 0,
            anchorY: 0,
            x: 0,
            y: MW.LOGOY,
            scale: MW.SCALE
        });
        this.addChild(logo, 10, 1);

        var logoBack = new cc.Sprite(res.logoBack_png);
        logoBack.attr({
            anchorX: 0,
            anchorY: 0,
            x: 60,
            y: MW.LOGOY + logo.height,
            scale: MW.SCALE
        });
        this.addChild(logoBack, 9);

        var singalHeight = MW.menuHeight;
        var singalWidth = MW.menuWidth;
        var newGameNormal = new cc.Sprite(res.menu_png, cc.rect(0, 0, singalWidth, singalHeight));
        var newGameSelected = new cc.Sprite(res.menu_png, cc.rect(0, singalHeight, singalWidth, singalHeight));
        var newGameDisabled = new cc.Sprite(res.menu_png, cc.rect(0, singalHeight * 2, singalWidth, singalHeight));

        var gameSettingsNormal = new cc.Sprite(res.menu_png, cc.rect(singalWidth, 0, singalWidth, singalHeight));
        var gameSettingsSelected = new cc.Sprite(res.menu_png, cc.rect(singalWidth, singalHeight, singalWidth, singalHeight));
        var gameSettingsDisabled = new cc.Sprite(res.menu_png, cc.rect(singalWidth, singalHeight * 2, singalWidth, singalHeight));

        var aboutNormal = new cc.Sprite(res.menu_png, cc.rect(singalWidth * 2, 0, singalWidth, singalHeight));
        var aboutSelected = new cc.Sprite(res.menu_png, cc.rect(singalWidth * 2, singalHeight, singalWidth, singalHeight));
        var aboutDisabled = new cc.Sprite(res.menu_png, cc.rect(singalWidth * 2, singalHeight * 2, singalWidth, singalHeight));
        var flare = new cc.Sprite(res.flare_jpg);
        this.addChild(flare, 15, 10);
        flare.visible = false;
        var newGame = new cc.MenuItemSprite(newGameNormal, newGameSelected, newGameDisabled, function(){
            this.onButtonEffect();
            flareEffect(flare, this, this.onNewGame);
        }.bind(this));
        var gameSettings = new cc.MenuItemSprite(gameSettingsNormal, gameSettingsSelected, gameSettingsDisabled, this.onSettings, this);
        var about = new cc.MenuItemSprite(aboutNormal, aboutSelected, aboutDisabled, this.onAbout, this);
        newGame.scale = MW.SCALE;
        gameSettings.scale = MW.SCALE;
        about.scale = MW.SCALE;

        var menu = new cc.Menu(newGame, gameSettings, about);
        menu.alignItemsVerticallyWithPadding(15);
        this.addChild(menu, 1, 2);
        menu.x = winSize.width / 2;
        menu.y = winSize.height / 2 - 140;

        if (MW.SOUND)
        {
            cc.audioEngine.setMusicVolume(0.5);
            cc.audioEngine.playMusic(cc.sys.os == cc.sys.OS_WP8 ||
                                     cc.sys.OS_WINRT ?
                                     res.mainMainMusic_wav : res.mainMainMusic_mp3, true);
        }
        return true;
    },
    onButtonEffect:function()
    {
        if (MW.SOUND)
        {
            var s = cc.audioEngine.playEffect(cc.sys.os == cc.sys.OS_WP8 ||
                                              cc.sys.os == cc.sys.OS_WINRT ?
                                              res.buttonEffet_wav : res.buttonEffet_mp3);
        }
    },
    onNewGame:function (pSender)
    {
        cc.LoaderScene.preload(g_maingame, function () {
            cc.audioEngine.stopMusic();
            cc.audioEngine.stopAllEffects();
            var scene = new cc.Scene();
            scene.addChild(new GameLayer());
            scene.addChild(new GameControlMenu());
            cc.director.runScene(new cc.TransitionFadeBL(1, scene));
        }, this)
    },
    onSettings:function (pSender)
    {
        this.onButtonEffect();
        var scene = new cc.Scene();
        scene.addChild(new SettingsLayer());
        cc.director.runScene(new cc.TransitionFade(1, scene));
    },
    onAbout:function (pSender)
    {
        this.onButtonEffect();
        var scene = new cc.Scene();
        scene.addChild(new AboutLayer());
        cc.director.runScene(new cc.TransitionFade(1, scene));
    }

});

SysMenu.scene = function ()
{
    var scene = new cc.Scene();
    var layer = new SysMenu();
    scene.addChild(layer);
    return scene;
};

