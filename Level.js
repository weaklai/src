/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 15-6-13
 * Time: 下午4:50
 * To change this template use File | Settings | File Templates.
 */


var Level1 = {
    enemyMax:6,
    enemies:[
        {
            ShowType: "Repeate",
            ShowTime: "00:02",
            Types: [0,1,2,2,3]
        },
        {
            ShowType: "Repeate",
            ShowTime: "00:10",
            Types: [4,5]
        },
        {
            ShowType: "Repeate",
            ShowTime: "00:50",
            Types: [0,4,3,5]
         },
         {
            ShowType: "Repeate",
            ShowTime: "01:15",
            Types: [0,2,4,3]
         },
         {
            ShowType: "Once",
            ShowTime: "02:15",
            Types: [0,2,5,4,3]
         },
         {
            ShowType: "Once",
            ShowTime: "03:00",
            Types: [0,0,1,1,5,5]
         }
    ]
};

var Level2 = {
    enemyMax:17,
    enemies:[
        {
            ShowType: "Repeate",
            ShowTime: "00:02",
            Types: [0,0,0,1]
        },
        {
            ShowType: "Repeate",
            ShowTime: "00:05",
            Types: [2,2,1,3]
        },
        {
            ShowType: "Repeate",
            ShowTime: "00:30",
            Types: [4,5]
        },
        {
            ShowType: "Repeate",
            ShowTime: "01:00",
            Types: [4,4,4]
        },
        {
            ShowType: "Once",
            ShowTime: "02:00",
            Types: [0,0,2,2,3,3,1,1]
        },
        {
            ShowType: "Once",
            ShowTime: "03:00",
            Types: [4,4,5,5,5,5,5,1,1,1]
        }
    ]
};

var Level3 = {
    enemyMax: 26,
    enemies: [
        {
            ShowType: "Repeate",
            ShowTime: "00:05",
            Types: [1,1,3,3,3]
        },
        {
            ShowType: "Repeate",
            ShowTime: "00:08",
            Types: [0,0,0,2,2]
        },
        {
            ShowType: "Repeate",
            ShowTime: "00:15",
            Types: [4,4,5,5]
        },
        {
            ShowType: "Repeate",
            ShowTime: "00:45",
            Types: [1,1,1,2,2,2,5,5]
        },
        {
            ShowType: "Once",
            ShowTime: "02:00",
            Types: [3,3,3,3,4,4,4]
        },
        {
            ShowType: "Once",
            ShowTime: "03:00",
            Types: [0,0,1,1,2,2,3,3,4,4,5,5,5,5]
        }
    ]
};
