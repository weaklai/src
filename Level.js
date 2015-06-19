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
            ShowType:"Repeate",
            ShowTime:"00:02",
            Types:[0,0,1,1,2,2,3]
        },
        {
            ShowType:"Repeate",
            ShowTime:"00:10",
            Types:[3,4,5]
        },
        {
         ShowType:"Repeate",
         ShowTime:"00:50",
         Types:[0,4,3,5]
         },
         {
         ShowType:"Repeate",
         ShowTime:"01:15",
         Types:[0,2,4,3]
         },
         {
         ShowType:"Once",
         ShowTime:"02:15",
         Types:[0,2,5,4,3]
         },
         {
         ShowType:"Once",
         ShowTime:"02:45",
         Types:[0,3,5,4,3]
         },
         {
         ShowType:"Once",
         ShowTime:"05:00",
         Types:[4,5,3,1,3]
         },
         {
         ShowType:"Repeate",
         ShowTime:"05:30",
         Types:[0,3,2,1,0,3]
         },
         {
         ShowType:"Once",
         ShowTime:"03:00",
         Types:[4,5,2,1,0]
         }
    ]
};
