import Component from 'lumpjs/src/component.js';

export default Component.define({
    el: document.querySelector('nav.content-nav'),
    initialize: function () {
    },
    events: 
    {
      "click a[data-entity]": "viewEntity",
      "click a[data-category]": "addEntity",
    },
    render: function ()
    {

    },
    addEntity: function(e){
        this.state.data.entity = {'action': 'create', 'category': e.dataset.category};
    },
    viewEntity: function(e)
    {
        this.state.data.entity = {'action': 'view', 'entity': e.dataset.entity};  
    }
});