import Component from 'lumpjs/src/component.js';
import NavCategory from './ContentNav/NavCategory.js'; 

export default Component.define({
    el: document.querySelector('nav.content-nav'),
    data: {},
    content: null,
    children: {},
    initialize: async function () {
       this.load();
       this.container = document.createElement('div');
       this.el.appendChild(this.container);
    },
    events: 
    {
     
      "click a[data-category]": "addEntity",
    },
    render: function ()
    {
        this.container.innerHTML = '';
        for (let [key, value] of Object.entries(this.data)) {
            const section = NavCategory.make({category: key, data: value, state: this.state});
            this.children[key] = section;
            this.container.appendChild(section.el);
        }
    },
    load: async function() {
        // Load and map data.
        const data = await (await this.state.loadEntities()).json();
        for (let item of data.data) {
            // Ensure we have category
            this.data[item.data.category] = (this.data[item.data.category] || {});
            this.data[item.data.category][item.id] = item.data;
        }

        this.render();
    },
    addEntity: function(e, target){
        this.state.trigger('entity:create', {'category': target.dataset.category});
    },
    viewEntity: function(e, target)
    {
        this.state.trigger('entity:show', {'entity': target.dataset.entity});
    }
});