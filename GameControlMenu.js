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
        var self = this;
        var onPause = new cc.MenuItemFont("Pause", function() {
            self.onPause();
        });
        onPause.setColor(cc.color(MW.FONTCOLOR));
        var menu = new cc.Menu(onPause);
        menu.x = 0;
        menu.y = 0;
        onPause.attr({
            x: winSize.width-100,
            y: 5,
            anchorX: 0,
            anchorY: 0
        });
        this.addChild(menu, 1, 2);

        return true;
    },

    onPause:function()
    {
        cc.MenuItemFont.setFontSize(25);
        cc.MenuItemFont.setFontName("Arial");
        cc.audioEngine.pauseMusic();
        cc.audioEngine.pauseAllEffects();
        cc.director.pause();
        var systemMenu = new cc.MenuItemFont("Main Menu", this.onSysMenu);
        var resume = new cc.MenuItemFont("Resume", this.onResume);
        systemMenu.setColor(cc.color(MW.FONTCOLOR));
        resume.setColor(cc.color(MW.FONTCOLOR));
        var menu = new cc.Menu(systemMenu, resume);
        menu.x = 0;
        menu.y = 0;
        systemMenu.attr({
            x: winSize.width / 2,
            y: winSize.height / 2,
            anchorX: 0,
            anchorY: 0
        });
        resume.attr({
            x: winSize.width / 2,
            y: winSize.height / 2 - 30,
            anchorX: 0,
            anchorY: 0
        });
        this.addChild(menu, 2, 3);
    },

    onSysMenu:function()
    {
        cc.audioEngine.stopMusic();
        cc.audioEngine.stopAllEffects();
        var scene = new cc.Scene();
        scene.addChild(new SysMenu());
        cc.director.runScene(new cc.TransitionFade(1, scene));
    },

    onResume:function()
    {
        cc.audioEngine.resumeAllEffects();
        cc.audioEngine.resumeMusic();
        cc.director.resume();
    }
});