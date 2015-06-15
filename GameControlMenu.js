/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 15-6-11
 * Time: 上午11:14
 * To change this template use File | Settings | File Templates.
 */


var GameControlMenu = cc.Layer.extend({
    ctor:function()
    {
        this._super();
        this.init();
    },
    init:function ()
    {
        cc.MenuItemFont.setFontSize(25);
        cc.MenuItemFont.setFontName("Arial");
        var systemMenu = new cc.MenuItemFont("Main Menu", this.onSysMenu);
        var onPause = new cc.MenuItemFont("Pause", this.onPause);
        systemMenu.setColor(cc.color(MW.FONTCOLOR));
        onPause.setColor(cc.color(MW.FONTCOLOR));
        var menu = new cc.Menu(systemMenu, onPause);
        menu.x = 0;
        menu.y = 0;
        systemMenu.attr({
            x: winSize.width-125,
            y: 35,
            anchorX: 0,
            anchorY: 0
        });
        onPause.attr({
            x: winSize.width-100,
            y: 5,
            anchorX: 0,
            anchorY: 0
        });
        this.addChild(menu, 1, 2);

        return true;
    },
    onSysMenu:function(pSender)
    {
        cc.audioEngine.stopMusic();
        cc.audioEngine.stopAllEffects();
        var scene = new cc.Scene();
        scene.addChild(new SysMenu());
        cc.director.runScene(new cc.TransitionFade(1, scene));
    },
    onPause:function(pSender)
    {
        cc.audioEngine.stopMusic();
        cc.audioEngine.stopAllEffects();
    }
});