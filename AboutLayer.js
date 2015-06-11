/**
 * Created with JetBrains WebStorm.
 * Date: 15-6-10
 * Time: 下午7:48
 * To change this template use File | Settings | File Templates.
 */


var AboutLayer = cc.Layer.extend({

    ctor:function()
    {
        this._super();
        this.init();
    },
    init:function ()
    {
        var sp = new cc.Sprite(res.loading_png);
        sp.anchorX = 0;
        sp.anchorY = 0;
        sp.scale = MW.SCALE;
        this.addChild(sp, 0, 1);

        var cacheImage = cc.textureCache.addImage(res.menuTitle_png);
        var title = new cc.Sprite(cacheImage, cc.rect(0, 40, 120, 38));
        title.x = winSize.width / 2;
        title.y = winSize.height - 60;
        this.addChild(title);

        var about = new cc.LabelTTF("textlabel,textlabel,textlabel\ntextlabel,textlbel,textlabel", "Arial", 21, cc.size(MW.WIDTH * 0.85, 0), cc.TEXT_ALIGNMENT_LEFT);
        about.attr({
            x: winSize.width / 2,
            y: MW.HEIGHT / 2 + 30,
            anchorX: 0.5,
            anchorY: 0.5
        });
        about.setColor(cc.color(MW.FONTCOLOR));
        this.addChild(about);

        var label = new cc.LabelTTF("BACK", "Arial", 30);
        label.setColor(cc.color(MW.FONTCOLOR));
        var back = new cc.MenuItemLabel(label, this.onBackCallback);
        var menu = new cc.Menu(back);
        menu.x = winSize.width / 2;
        menu.y = winSize.height / 4;
        this.addChild(menu);

        return true;
    },
    onBackCallback:function (pSender)
    {
        var scene = new cc.Scene();
        scene.addChild(new SysMenu());
        cc.director.runScene(new cc.TransitionFadeUp(1, scene));
    }
});

