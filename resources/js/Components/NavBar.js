import Component from 'lumpjs/src/component.js';

export default Component.define({
    el: document.querySelector('.bar'),
    initialize: function () {
        // Listen to state
        this.state.on('update:tab', () => {
            this.render();
        });
    },
    events: 
    {
      "click .bar nav a[data-tab]": "viewTab",
      "click .bar nav a.new": "addNewMap",
      "batman:test": 'hi'
    },
    render: function ()
    {
        console.log("render triggered");
        // Set selected state
    },
    addNewMap: function()
    {
        console.log("Add map model?");
    },
    viewTab: function(e)
    {
        this.state.data.tab = e.dataset.tab;  
    },
    hi: function(){
        console.log("I WORK YAY VIRTUAL EVENT");
    }
});