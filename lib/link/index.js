/**
 * 链接组件
 * @param {*} options 配置参数
 */
class YouLink extends HTMLElement {
    constructor() {
        super();
        // 初始化属性
        this.delay = 500;
        this.timer = null;
        this.iframe = null;
        // 初始化
        this.init();
    }
    static get observedAttributes() {
        return ['data-uuid'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if(oldValue !== newValue && this.iframe){
            this.update();
        }
    }
    connectedCallback() {
        this.update();
    }
    style() {
        return `
            .youloge-player {
                aspect-ratio: 16 / 9;
                width: 60%;
                height: 100%;
                overflow: hidden;
                border: 0;
                border-radius: 10px;
                margin:10px auto;
                display: block;
            }
        `
    }
    update(){
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            // 获取当前属性值，设置默认值
            const {uuid=''} = this.dataset;
            // 更新iframe的src
            this.iframe.src = `https://open.youloge.com/link.html?uuid=${uuid}`;
        }, this.delay);
    }
    init() {
        var shadow = this.attachShadow({ mode: 'closed' });
        const style = document.createElement('style');
        style.textContent = this.style();
        var iframe = document.createElement('iframe');
        iframe.className = 'youloge-player';
        iframe.src = "https://open.youloge.com/player.html";
        shadow.appendChild(iframe);
        shadow.appendChild(style);
        this.iframe = iframe;
    }
}
// 统一导出
export default {
    name: 'link',
    extend: null,
    components: YouLink
}
