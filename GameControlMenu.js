/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 15-6-11
 * Time: 上午11:14
 * To change this template use File | Settings | File Templates.
 */


var GameControlMenu = cc.Layer.extend({
    pauseMenu: null,
    systemMenu: null,
    ctor:function()
    {
        this._super();
        this.init();
    },

    init:function ()
    {
        cc.MenuItemFont.setFontSize(40);
        cc.MenuItemFont.setFontName("Arial");
        var self = this;
        var Pause = new cc.MenuItemFont("||", function() {
            self.onPause();
        });
        Pause.setColor(cc.color(MW.FONTCOLOR));
        this.pauseMenu = new cc.Menu(Pause);
        this.pauseMenu.x = 0;
        this.pauseMenu.y = 0;
        Pause.attr({
            x: winSize.width-50,
            y: 5,
            anchorX: 0,
            anchorY: 0
        });
        this.addChild(this.pauseMenu, 1, 2);

        return true;
    },

    onPause:function()
    {
        cc.audioEngine.pauseMusic();
        cc.audioEngine.pauseAllEffects();
        cc.director.pause();
        this.pauseMenu.visible = false;
        this.pauseMenu.setEnable = false;
        if (this.systemMenu === null)
        {
            cc.MenuItemFont.setFontSize(25);
            cc.MenuItemFont.setFontName("Arial");
            var self = this;
            var MainMenu = new cc.MenuItemFont("Main Menu", function(){
                self.onSysMenu();
            });
            var resume = new cc.MenuItemFont("Resume", function(){
                self.onResume();
            });
            var NextLevel = new cc.MenuItemFont("Next Level", function(){
                self.onNextLevel();
            });
            MainMenu.setColor(cc.color(MW.FONTCOLOR));
            resume.setColor(cc.color(MW.FONTCOLOR));
            NextLevel.setColor(cc.color(MW.FONTCOLOR));
            this.systemMenu = new cc.Menu(MainMenu, resume, NextLevel);
            this.systemMenu.x = 0;
            this.systemMenu.y = 0;
            MainMenu.attr({
                x: winSize.width / 2 - 60,
                y: winSize.height / 2,
                anchorX: 0,
                anchorY: 0
            });
            resume.attr({
                x: winSize.width / 2 - 60,
                y: winSize.height / 2 - 30,
                anchorX: 0,
                anchorY: 0
            });
            NextLevel.attr({
                x: winSize.width / 2 - 60,
                y: winSize.height / 2 - 60,
                anchorX: 0,
                anchorY: 0
            });
            this.addChild(this.systemMenu, 2, 3);
        }
        this.systemMenu.visible = true;
        this.systemMenu.setEnable = true;
    },

    onSysMenu:function()
    {
        cc.audioEngine.stopMusic();
        cc.audioEngine.stopAllEffects();
        var scene = new cc.Scene();
        scene.addChild(new SysMenu());
        cc.director.resume();
        cc.director.runScene(new cc.TransitionFade(1, scene));
    },

    onResume:function()
    {
        cc.audioEngine.resumeAllEffects();
        cc.audioEngine.resumeMusic();
        cc.director.resume();
        this.pauseMenu.visible = true;
        this.pauseMenu.setEnable = true;
        this.systemMenu.visible = false;
        this.systemMenu.setEnable = false;
    },

    onNextLevel:function()
    {

        //LevelManager._currentLevel = ;
        cc.audioEngine.resumeAllEffects();
        cc.audioEngine.resumeMusic();
        cc.director.resume();
        this.pauseMenu.visible = true;
        this.pauseMenu.setEnable = true;
        this.systemMenu.visible = false;
        this.systemMenu.setEnable = false;
        GameLayer.resetTime();
    }
});