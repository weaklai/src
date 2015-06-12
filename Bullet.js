/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 15-6-12
 * Time: 下午5:21
 * To change this template use File | Settings | File Templates.
 */


var Bullet = cc.Sprite.extend({
    active: true,
    xVelocity: 0,
    yVelocity: 200,
    power: 1,
    HP: 1,
    moveType: null,
    zOrder: 300,
    attackMode: MW.ENEMY_MOVE_TYPE.NORMAL,
    parentType: MW.BULLET_TYPE.PLAYER,
    ctor:function(bulletSpeed, weaponType, attakMode)
    {
        this._super("#"+weaponType);

        this.yVelocity = -bulletSpeed;
        this.attackMode = attackMode;
    },
    update:function(dt)
    {
        var x = this.x;
        var y = this.y;
        this.x = x - this.xVelocity * dt;
        this.y = y - this.yVelocity * dt;
        if (x < 0 || x > g_sharedGameLayer.screenRect.width ||
            y < 0 || y > g_sharedGameLayer.screenRect.height ||
            this.HP <= 0)
        {
            this.destroy();
        }
    },

    destroy:function()
    {
        var explode = HitEffect.getOrCreateHitEffect(this.x, this.y, Math.random() * 360, 0.75);
        this.active = false;
        this.visible = false;
    },
    hurt:function()
    {
        this.HP--;
    },
    collideRect:function(x, y)
    {
        return cc.rect(x - 3, y - 3, 6, 6);
    }
});

Bullet.getOrCreateBullet = function(bulletSpeed, weaponType, attackMode, zOrder, mode){
    var selChild = null;
    if (mode == MW.UNIT_TAG.PLAYER_BULLET)
    {
        for (var i=0; j<MW.CONTAINER.PLAYER_BULLETS.length; ++j)
        {
            selChild = MW.CONTAINER.PLAYER_BULLETS[j];
            if (selChild.active = false)
            {
                selChild.visible = true;
                selChild.HP = 1;
                selChild.active = true;
                return selChild;
            }
        }
    }
    else
    {
        for (var i=0; j<MW.CONTAINER.ENEMY_BULLETS.length; ++j)
        {
            selChild = MW.CONTAINER.ENEMY_BULLETS[j];
            if (selChild.active == false)
            {
                selChild.visible = true;
                selChild.HP = 1;
                selChild.active = true;
                return selChild;
            }
        }
    }
    selChild = Bullet.create(bulletSpeed, weaponType, attackMode, zOrder, mode);
    return selChild;
};


