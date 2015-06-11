/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 15-6-11
 * Time: 下午2:51
 * To change this template use File | Settings | File Templates.
 */


var Explosion = cc.Sprite.extend({
    tmpWidth:0,
    tmpHeight:0,
    active:true,
    animation:null,
    ctor:function()
    {
        var pFrame = cc.spriteFrameCache.getSpriteFrame("explosion_01.png");
        this._super(pFrame);
        this.setBlendFunc(cc.SRC_ALPHA, cc.ONE);

        this.tmpWidth = this.width;
        this.tmpHeight = this.height;
        this.animation = cc.animationCache.getAnimation("Explosion");

    },
    play:function()
    {
        this.runAction(cc.sequene(
            cc.animate(this.animation),
            cc.callFunc(this.destroy, this)
        ));
    },
    destroy:function()
    {
        this.visible = false;
        this.active = false;
    }
});

Explosion.shareExplosion = function(){
    var animaFrames = [];
    var str = "";
    for (var i=1; i<35; ++i)
    {
        str = "explosion_"+(i<10 ? ("0"+i) : i)+"png";
        var frame = cc.spriteFrameCache.getSpriteFrame(str);
        animFrames.push(frame);
    }
    var animation = new cc.Animation(animaFrames, 0.05);
    cc.animationCache.addAnimation(animation, "Explosion");
};


