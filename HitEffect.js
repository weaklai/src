/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 15-6-13
 * Time: 上午10:07
 * To change this template use File | Settings | File Templates.
 */


var HitEffect = cc.Sprite.extend({
    active: true,
    ctor:function()
    {
        this._super("#hit.png");
        this.setBlendFunc(cc.SRC_ALPHA, cc.ONE);
    },
    reset:function(x, y, rotation, scale)
    {
        this.attr({
            x: x,
            y: y,
            rotation: rotation,
            scale: scale
        });
        this.runAction(cc.scaleBy(0.3, 2, 2));
        this.runAction(cc.sequence(cc.fadeOut(0.3), cc.callFunc(this.destroy, this)));

    },
    destroy:function()
    {
        this.visible = false;
        this.active = false;
    }
});

HitEffect.getOrCreateHitEffect = function(x, y, rotation, scale){
    var selChild = null;
    for (var j=0; j<MW.CONTAINER.HITS.length; ++j)
    {
        selChild = MW.CONTAINER.HITS[j];
        if (selChild.active == false)
        {
            selChild.visible = true;
            selChild.active = true;
            selChild.reste(x, y,rotation,scale);
            return selChild;
        }
    }
    selChild = HitEffect.create();
    selChild.reset(x, y, rotation, scale);
    return selChild;
};

HitEffect.create = function(){
    var hitEffect = new HitEffect();
    g_sharedGameLayer.addBulletHits(hitEffect, 9999);
    MW.CONTAINER.HITS.push(hitEffect);
    return hitEffect;
};

HitEffect.preSet = function(){
    var hitEffect = null;
    for (var i=0; i<10; ++i)
    {
        hitEffect = HitEffect.create();
        hitEffect.setVisible(false);
        hitEffect.active = false;
    }
};
