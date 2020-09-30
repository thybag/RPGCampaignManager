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
    addEntity: function(e, target){
        this.state.trigger('entity:create', {'category': target.dataset.category});
    },
    viewEntity: function(e, target)
    {
        this.state.trigger('entity:show', {'entity': target.dataset.entity});
    }
});