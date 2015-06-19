/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 15-6-9
 * Time: 下午5:14
 * To change this template use File | Settings | File Templates.
 */
var MW = MW || {};


MW.GAME_STATE = {
    HOME:0,
    PLAY:1,
    OVER:2
};

MW.KEYS = [];

MW.LEVEL = {
    STAGE1:1,
    STAGE2:2,
    STAGE3:3
};

MW.LIFE = 4;

MW.SCORE = 0;

MW.SOUND = true;

MW.ENEMY_MOVE_TYPE = {
    ATTACK:0,
    VERTICAL:1,
    HORIZONTAL:2,
    OVERLAP:3
};

MW.DELTA_X = -100;

MW.OFFSET_X = -24;

MW.ROT = -5.625;

MW.BULLET_TYPE = {
    PLAYER:1,
    ENEMY:2
};

MW.WEAPON_TYPE = {
    ONE:1
};

MW.UNIT_TAG = {
    ENEMY_BULLET:900,
    PLAYER_BULLET:901,
    ENEMY:1000,
    PLAYER:1000
};

MW.ENEMY_ATTACK_MODE = {
    NORMAL:1,
    TSUIHIKIDAN:2
};

MW.LIFEUP_SORCE = [50000, 100000, 150000, 200000, 250000, 300000];

MW.CONTAINER = {
    ENEMIES:[],
    ENEMY_BULLETS:[],
    PLAYER_BULLETS:[],
    EXPLOSIONS:[],
    SPARKS:[],
    HITS:[],
    BACKSYS:[],
    BACKTILEMAPS:[]
};

MW.BULLET_SPEED = {
    ENEMY:-300,
    SHIP:900
};

MW.ACTIVE_ENEMIES = 0;

MW.LOGOY = 350;
MW.FLAREY = 445;
MW.SCALE = 1.5;
MW.WIDTH = 480;
MW.HEIGHT = 720;
MW.FONTCOLOR = "#1f2d96";
MW.menuHeight = 36;
MW.menuWidth = 123;