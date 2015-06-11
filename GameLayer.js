/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 15-6-11
 * Time: 上午11:09
 * To change this template use File | Settings | File Templates.
 */


STATE_PALEYING = 0;
STATE_GAMEOVER = 1;
MAX_CONTAINT_WIDTH = 40;
MAX_CONTAINT_HEIGHT = 40;

var g_sharedGameLyaer;

var GameLayer = cc.Layer.extend({
    _time:null,
    _ship:null,
    _backSky:null,
    _backSkyHeight:0,
    _backSkyRe:null,
    levelManager:null,
    _tmpScore:0,
    _isBackSkyReload:false,
    _isBackTileReload:false,
    ibScore:null,
    screenRect:null,
    explosionAnimation:[],
    _beginPos:cc.p(0, 0),
    _state:STATE_PLAYING,
    _explosions:null,
    _texOpaqueBatch:null,
    _texTransparentBatch:null,

    ctor:function()
    {
        cc.spriteFrameCache.addSpriteFrames(res.textureOpaquePack_plist);
        cc.spriteFrameCache.addSpriteFrames(res.b01_plist);


    },


});
