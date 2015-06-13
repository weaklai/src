/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 15-6-13
 * Time: 下午3:23
 * To change this template use File | Settings | File Templates.
 */


var LevelManager = cc.Class.extend({
    _currentLevel: null,
    _gameLayer: null,
    ctor:function(gameLayer)
    {
        if (!gameLayer)
        {
            throw"gameLayer must be non-nil";
        }
        this._currentLevel = Level1;
        this._gameLayer = gameLayer;
        this.setLevel(this._currentLevel);
    },

    setLevel:function(level)
    {
        var locCurrentLevelEnemies = this._currentLevel.enemies;
        for (var i=0; i<level.enemies.length; ++i)
        {
            locCurrentLevelEnemies[i].ShowTime = this._minuteToSecond(locCurrentLevelEnemies[i].ShowTime);
        }
    },
    _minuteToSecond:function(minuteStr)
    {
        if (!minuteStr)
        {
            return 0;
        }
        if (typeof(minuteStr) != "number")
        {
            var mins = minuteStr.split(':');
            if (mins.length == 1)
            {
                return parseInt(mins[0], 10);
            }
            else
            {
                return parseInt(mins[0], 10)*60+parseInt(mins[1], 10);
            }
        }
        return minuteStr;
    },

    loadLevelResource:function(deltaTime)
    {
        if (MW.ACTIVE_ENEMIES >= this._currentLevel.enemyMax)
        {
            return;
        }

        var locCurrentLevel = this._currentLevel;
        for (var i=0; i<locCurrentLevel.enemies.length; ++i)
        {
            var selEnemy = locCurrentLevel.enemies[i];
            if (selEnemy)
        }
    }
});
