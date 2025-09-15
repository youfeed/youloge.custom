/**
 * 进行批量注册
 * extend 扩展的元素为div li ... 则需要 is="youloge.xxx" 使用 
 * 扩展的元素为null 则需要直接使用 <youloge-xxx></youloge-xxx> 使用
 * 扩展的元素为div li ... 则需要 is="youloge.xxx" 使用
 * */
const modules = import.meta.glob(['/lib/*/index.js'], { import: 'default',eager: true });

for (const key in modules) {
  const {name,components,extend=null} = modules[key];
  const named = `youloge-${name}`
  customElements.get(named) || customElements.define(named, components, { extends: extend });
}