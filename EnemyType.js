/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 15-6-13
 * Time: 下午2:54
 * To change this template use File | Settings | File Templates.
 */


var EnemyType = [
    {
        type: 0,
        textureName: "E0.png",
        bulletType: "W2.png",
        HP: 1,
        moveType: MW.ENEMY_MOVE_TYPE.ATTACK,
        attackMode: MW.ENEMY_ATTACK_MODE.NORMAL,
        scoreValue: 5
    },
    {
        type: 1,
        textureName: "E1.png",
        bulletType: "W2.png",
        HP: 2,
        moveType: MW.ENEMY_MOVE_TYPE.ATTACK,
        attackMode: MW.ENEMY_ATTACK_MODE.NORMAL,
        scoreValue: 15
    },
    {
        type: 2,
        textureName: "E2.png",
        bulletType: "W2.png",
        HP: 4,
        moveType: MW.ENEMY_MOVE_TYPE.HORIZONTAL,
        attackMode: MW.ENEMY_ATTACK_MODE.TSUIHIKIDAN,
        scoreValue: 30
    },
    {
        type: 3,
        textureName: "E3.png",
        bulletType: "W2.png",
        HP: 6,
        moveType: MW.ENEMY_MOVE_TYPE.OVERLAP,
        attackMode: MW.ENEMY_ATTACK_MODE.NORMAL,
        scoreValue: 45
    },
    {
        type: 4,
        textureName: "E4.png",
        bulletType: "W2.png",
        HP: 10,
        moveType: MW.ENEMY_MOVE_TYPE.VERTICAL,
        attackMode: MW.ENEMY_ATTACK_MODE.TSUIHIKIDAN,
        scoreValue: 70
    },
    {
        type: 5,
        textureName: "E5.png",
        bulletType: "W2.png",
        HP: 15,
        moveType: MW.ENEMY_MOVE_TYPE.HORIZONTAL,
        attackMode: MW.ENEMY_ATTACK_MODE.NORMAL,
        scoreValue: 100
    }
];
