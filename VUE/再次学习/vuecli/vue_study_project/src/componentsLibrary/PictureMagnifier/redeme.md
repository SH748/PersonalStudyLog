# 图片放大镜
## HTML结构
> .picture-magnifier --> 内容盒子
  > initial --> 原始图片盒子
    > img --> 原始大小图片
    > selector --> 图片上的放大区域示意区
    > mark --> 蒙版 用来解决selector跳动问题
  > enlarge --> 放大图片盒子
    > img --> 放大盒子

## 样式解析
```css
.picture-magnifier {
  position: relative;//相对定位 - 为了放大盒子的绝对定位设置
  width: 100%;//抛出宽度控制，让使用区域决定
  height: 100%;//抛出高度控制，让使用区域决定，如果使用区域不设定，则由图片决定
  &:hover {
    .initial .selector {
      display: block; //显示器显示隐藏
    }
    .enlarge {
      display: block; //放大区域显示隐藏
    }
  }
  .initial {
    position: relative; // 相对定位 - 为了选择器和蒙版设置
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
    .selector {
      display: none; // 选择器 - 显示隐藏 默认：隐藏
      position: absolute;//定位 绝对
      // width: 50%; //选择器宽高由 原始盒子(initial)的宽高和放大倍数决定
      // height: 50%;
      background: rgba(200, 200, 200, 0.4);
      top: 0;
      left: 0;
    }
    .mark {
      position: absolute; //蒙版 
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 2;
    }
  }
  .enlarge {
    display: none; //放大区域显示隐藏
    position: absolute; //放大区域定位
    width: 100%;
    height: 100%;
    overflow: hidden;
    // top: 0; //放大区域交由外部控制，默认0 ，100 
    // left: 120%;
    img {
      position: absolute; //定位
      // width: 200%;  //宽高由放大倍数决定
      // height: 200%;
    }
  }
}
```

## props解析
* picture 
  * 类型: String
  * 必需: 必须
  * 解释 显示图片
* enlargePositionTop
  * 类型: Number
  * 必需: 非必需
  * 解释: 放大区域位置 - top: 实质是定位的top,百分比控制，传入百分号前的即可
* gain
* enlargePositionLeft
  * 类型: Number
  * 必需: 非必需
  * 解释: 放大区域位置 - left: 实质是定位的left,百分比控制，传入百分号前的即可
* gain
  * 类型: Number
  * 必需: 非必需
  * 解释: 放大倍数

## 计算属性解析
* enlarge 
  * 使用获取放大图片dom
* selector
  * 使用获取选择器dom
* initial
  * 使用获取原始盒子dom


## methods解析
* moveEnlarge
  * 移动放大图片事件
* handleMouseMove
  * 鼠标移动事件
    * 调用moveEnlarge , moveSelector
* moveSelector
  * 移动选择器事件

## mounted解析
```js
// 初始化放大盒子位置
this.enlarge.parentElement.style.top = this.enlargePositionTop + '%'
this.enlarge.parentElement.style.left = this.enlargePositionLeft + '%'
//初始化放大图片倍数
this.enlarge.style.width = this.gain * 100 + '%'
this.enlarge.style.height = this.gain * 100 + '%'
//初始化选择器大小
this.selector.style.width = (1 / this.gain) * 100 + '%'
this.selector.style.height = (1 / this.gain) * 100 + '%'
```