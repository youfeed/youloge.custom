/**
 * 测试组件
 * */
class YouWorld extends HTMLElement {
  constructor() {
    // 必须首先调用 super 方法, 继承基类
    super();

    // 初始化web component
    this.init();
  }
  connectedCallback() {
		console.log("connectedCallback.");
	}
  disconnectedCallback() {
		console.log("disconnectedCallback.");
	}
  adoptedCallback(){
    console.log("adoptedCallback.");
  }
  attributeChangedCallback(name, oldValue, newValue) {
    console.log("attributeChangedCallback. change " + name + "value is" + newValue + "old Value is" + oldValue);
  }
  init() {
    var shadow = this.attachShadow({mode: 'open'});
    var wrapper = document.createElement('span');
		wrapper.innerHTML = "Hello World.3";
    shadow.appendChild(wrapper);
  }
}
// 统一导出
export default {
  name:'world',
  extend:null,
  components:YouWorld
}