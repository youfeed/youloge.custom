# Youloge.custom 原生网络组件 无依赖

> 组件专门用于开发者渲染`富文本HTML内容`，组件会读取`sessionStorage.ukey`配置，

### 更新日志

- 0.0.1 项目立项 配置架构 打包方式

## 开始使用
推荐使用CDN引入使用：保持持续更新
建议直接引入CDN 即可使用 35.39 kB │ gzip: 10.59 kB

```html
 // 必须采用 `defer` 方式加载
<script src="unpkg.com/youloge.custom" defer></script>
<script src="https://cdn.jsdelivr.net/npm/youloge.custom" defer></script>
// 默认前缀`youloge`
<div>
  <youloge-hello><youloge-hello>
  <youloge-video poster="" uuid="uuid" mp4="" m3u8="" dash=""><youloge-video>
    ....
</div>
```

// 像广告组件 依赖`sessionStorage.ukey`如果没有你的`ukey` 广告可能不展示，开发者也获取不到广告收入