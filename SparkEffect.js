/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 15-6-12
 * Time: 下午4:31
 * To change this template use File | Settings | File Templates.
 */


var SparkEffect = cc.Class.extend({
    active: true,
    spark1: null,
    spark2: null,
    scale: 1.2,
    duration: 0.7,
    ctor:function()
    {
        this.spark1 = new cc.Sprite("#explode2.png");
        this.spark2 = new cc.Spriet("#explode3.png");

    },

    reset:function(x, y)
    {
        this.spark1.attr({
            x: x,
            y: y,
            scale: this.scale,
            opacity: 255
        });

        var right = cc.rotateBy(this.duration, 45);
        var scaleBy = cc.scaleBy(this.duration, 3, 3);
        var seq = cc.sequence(cc.fadeOut(this.duration), cc.callFunc(this.destroy, this));

        this.spark1.runAction(right);
        this.spark1.runAction(scaleBy);
        this.spark1.runAction(seq);

        this.spark2.runAction(scaleBy.clone());
        this.spark2.runAction(seq.clone());
    },
    destroy:function()
    {
        this.active = false;
        this.spark1.visible = false;
        this.spark2.visible = false;
    }
});

SparkEffect.getOrCreateSparkEffect = function(x, y){
    var selChild = null;
    for (var j=0; j<MW.CONTAINER.SPARKS.length; ++j)
    {
        selChild = MW.CONTAINER.SPARKS[j];
        if (selChild.active == false)
        {
            selChild.active = true;
            selChild.spark1.setVisible(true);
            selChild.spark2.setVisible(true);
            selChild.reset(x, y);
            return selChild;
        }
    }
    var spark = SparkEffect.create();
    spark.reset(x, y);
    return spark;
};

SparkEffect.create = function(){
    var sparkEffect = new SparkEffect();
    g_sharedGameLayer.addSpark(sparkEffect.spark1);
    g_sharedGameLayer.addSpark(sparkEffect.spark2);
    MW.CONTAINER.SPARKS.push(sparkEffect);
    return sparkEffect;

};

SparkEffect.preSet = function(){
    var sparkEffect = null;
    for (var i=0; i<6; ++i)
    {
        sparkEffect = SparkEffect.create();
        sparkEffect.active = false;
        sparkEffect.spark1.visible = false;
        sparkEffect.spark2.visible = false;
    }
};