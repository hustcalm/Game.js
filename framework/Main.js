
/** 每秒多少帧
    @type Number
*/
var FPS = 30;
/** 两帧间间隔的秒数
    @type Number
*/
var SECONDS_BETWEEN_FRAMES = 1 / FPS;
/** GameObjectManager 实例的全局引用
    @type GameObjectManager
*/
var g_GameObjectManager = null;
/** 应用中用到的图像
    @type Image
*/
var g_image = new Image();
g_image.src = "smiley.jpg";

// 将应用的入口设置为init函数
window.onload = init;

/**
    应用的入口
*/
function init()
{
    new GameObjectManager().startupGameObjectManager();
}
