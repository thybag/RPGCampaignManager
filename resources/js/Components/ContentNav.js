import Component from 'lumpjs/src/component.js';
import NavCategory from './ContentNav/NavCategory.js'; 

export default Component.define({
    el: document.querySelector('nav.content-nav'),
    data: {},
    content: null,
    children: {},
    events: 
    {
      "keyup input": "search",
    },
    initialize: async function () {
       this.load();
       this.container = document.createElement('div');
       this.el.appendChild(this.container);

       this.state.on('entity:updated', (entity) => {
            this.el.querySelector('input').value = '';
            this.createEntity(entity);
            this.render();
       });
    },
    render: function ()
    {
        for (let [key, value] of Object.entries(this.data)) {
            if (this.children[key]) {
                this.children[key].update();
            } else {
                 const section = NavCategory.make({category: key, data: value, state: this.state});
                this.children[key] = section;
                this.container.appendChild(section.el);
            }
        }
    },
    search: function(e, target) {
        Object.values(this.children).forEach((ch) => {
            ch.filter(target.value);
        });
    },
    load: async function() {
        // Load and map data.
        const data = await (await this.state.loadEntities()).json();
        for (let item of data.data) {
            // Ensure we have category
            this.createEntity(item);
        }
        this.render();
    },
    createEntity: function(item) {
        this.data[item.data.category] = (this.data[item.data.category] || {});
        this.data[item.data.category][item.id] = item.data;
        this.data[item.data.category][item.id]._search = item.data.name.toLowerCase();
    },
});