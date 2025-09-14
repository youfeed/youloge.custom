# Youloge.custom 原生网络组件 无依赖

> 组件专门用于开发者渲染`富文本HTML内容`，组件会自动读取`sessionStorage.apikey`配置，

### 更新日志

- 0.0.2 新增组件`youloge-map` 地图组件
- 0.0.1 项目立项 配置架构 打包方式

## 开始使用 2.40 kB │ gzip: 1.00 kB
- NPM 安装
```bash
npm install youloge.custom
```
- 引入组件
```html
import 'youloge.custom'
```
- vite vue项目排除前缀自定义组件
```js
export default defineConfig({
  plugins:[
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('youloge-')
        }
      }
    })
  ]
})
```

另外支持CDN引入使用：保持持续更新
- `https://unpkg.com/youloge.custom`或者`https://cdn.jsdelivr.net/npm/youloge.custom`

```html
 // 必须添加 `defer` 属性 方式加载
<script src="unpkg.com/youloge.custom" defer></script>
<script src="https://cdn.jsdelivr.net/npm/youloge.custom" defer></script>
// 默认前缀`youloge`
<div>
  <youloge-hello><youloge-hello>
  <youloge-video data-poster="" data-uuid="uuid" data-mp4="" data-m3u8="" data-dash=""><youloge-video>
    ....
</div>
```

// 像广告组件 依赖`sessionStorage.youloge.apikey`如果没有你的`apikey` 广告可能不展示，开发者也获取不到广告收入