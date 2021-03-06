# HTML5特性
- **语义化：** 拥有更丰富的标签，对微数据、微结构等有着非常友好的支持，赋予网页更好的意义和结构。
- **本地存储：** 基于该技术开发的网页应用拥有更短的启动时间，更快的联网速度，甚至可以做到离线使用。
- **设备兼容：** HTML5为开发者提供了非常丰富的API，让开发者能够在功能是有更好的体验和优化选择。
- **连接特性：** Server-Sent 和 WebSocke技术，使得连接工作更有效率，特别是在实时聊天和网页游戏方面，大大提高了用户体验。
- **多媒体：** 网页标签自身支持音频和视频的播放，完全打破了依赖Flash的困局，为开发降低成本提高效率的同时，用户体验得以提升。
- **图形特效：** HTML5 提供了诸如Canvas、WebGL等图形和三维功能，使普通网页也能呈现出惊人的视觉效果。

# 简单列举一些移动Web开发常用的HTML5技术
**1.视口控制**
    为了解决设备实际可视区域与浏览器自设宽度不同的问题，引入Viewport属性，通过meta标签引入。
```
 <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0">

```
    上述代码的作用让当前Viewport的宽度等于设备的宽度，同时不允许用户手动缩放。

**2.媒体查询**
   其允许开发者基于设备的不同特性来应用不同的样式声明，通过对视口宽度的判断，对网页输出不同的展示效果。
**3.音视频播放**
   借助于HTML5的音频和视频标签，可以轻松实现播放功能，无需依赖Flash技术。
   除此之外，还有各种多列布局，以及丰富的设备API。


