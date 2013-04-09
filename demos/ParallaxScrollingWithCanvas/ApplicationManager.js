/**
    ApplicationManager用于管理应用
    @class
*/
function ApplicationManager()
{
    /**
        初始化对象
        @return A 对初始化对象的引用
    */
    this.startupApplicationManager = function()
    {
        this.startupGameObject();
    	this.background3 = new RepeatingGameObject().startupRepeatingGameObject(g_back2, 0, 100, 				3, 600, 320, 1);
        this.background2 = new RepeatingGameObject().startupRepeatingGameObject(g_back1, 0, 100, 				2, 600, 320, 0.75);
        this.background = new RepeatingGameObject().startupRepeatingGameObject(g_back0, 0, 0, 1, 				600, 320, 0.5);
        return this;
    }
 
    /**
        更新当前对象
        @param dt 自上一帧绘制起经过的秒数
        @param context 绘制上下文
        @param xScroll x轴的全局滚动值
        @param yScroll y轴的全局滚动值
    */
    this.update = function(/**Number*/ dt, /**CanvasRenderingContext2D*/ context, /**Number*/ 			xScroll, /**Number*/ yScroll)
    {
        g_GameObjectManager.xScroll += 50 * dt;
    }
}
ApplicationManager.prototype = new GameObject