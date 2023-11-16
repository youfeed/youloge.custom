class YouDrive extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // count words in element's parent element
    var wcParent = this.parentNode;

    function countWords(node) {
      var text = node.innerText || node.textContent;
      return text.split(/\s+/g).length;
    }

    var count = "Words: " + countWords(wcParent);

    // Create a shadow root
    var shadow = this.attachShadow({ mode: "open" });

    // Create text node and add word count to it
    var text = document.createElement("span");
    text.textContent = count;

    // Append it to the shadow root
    shadow.appendChild(text);

    // Update count when element content changes
    setInterval(function () {
      var count = "Words: " + countWords(wcParent);
      text.textContent = count;
    }, 200);
  }
}
// customElements.define(`you-drive`, YouDrive);
export default {
  name:'drive',
  extend:null,
  custom: YouDrive
}