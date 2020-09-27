import Component from 'lumpjs/src/component.js';

export default Component.define({
    el: document.querySelector('.bar'),
    initialize: function () {
        // Listen to state
        this.state.on('update:tab', () => {
            
        });
    },
    events: 
    {
      "click .bar nav a[data-tab]": "viewTab",
    },
    viewTab: function(e)
    {
        this.state.data.tab = e.dataset.tab;
        [...e.parentNode.children].map(function(x){x.classList.remove('selected');});
        e.classList.add('selected');
    }
});