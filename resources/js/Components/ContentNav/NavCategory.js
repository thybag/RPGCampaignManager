import Component from 'lumpjs/src/component.js';

const categoryTpl = function(title, links) {
    const tpl = `
        <h3>${title} <span>&rsaquo;</span></h3>
        <div class='panel-content'>
            ${Object.entries(links).map(([id, entity]) => 
                `<a href="#${entity.slug}" data-entity="${id}">${entity.name}</a>`
            ).join('')}
            <a href="#${title}" data-category="${title}">New...</a>
        </div>
    `;
    return tpl;
}

export default Component.define({
    data: {},
    filtered: {},
    open: true,
    initialize: async function () {
        this.el = document.createElement('div');
        this.filtered = this.data;
        this.render();
    },
    events: 
    {
        "click h3": "toggleSection",
        "click a[data-entity]": "showEntity",
        "click a[data-category]": "addEntity"
    },
    filter: function(filter) {
       this.filtered = {};
       Object.entries(this.data).map(([key, entity]) => {
            if (entity._search.indexOf(filter.toLowerCase()) != -1){
                this.filtered[key] = entity;
            }
       });
       this.render();
    },
    update: function(entity)
    {
       // this.data[entity.id] = entity.data;
       // this.data[entity.id]._search = entity.data.name.toLowerCase();
        this.filtered = this.data;
        this.render();
    },
    render: function ()
    {
        if (Object.keys(this.filtered).length == 0) {
            this.el.style.display = 'none';
            return;
        }
        this.el.style.display = 'block';
        this.el.innerHTML = categoryTpl(this.category, this.filtered);
        this.refreshHeight();
    },
    refreshHeight: function(){
        let section = this.el.querySelector(".panel-content");
        section.style.height = (Object.keys(this.filtered).length+1)*1.65 + 'rem';
    },
    showEntity: function(e, target)
    {
        e.preventDefault();
        this.state.trigger('entity:show', {'entity': target.dataset.entity});
    },
    toggleSection: function(e, target) {
        if (this.open) {
            // Refresh
            target.classList.add('closed');
            let section = this.el.querySelector(".panel-content").style.height = `0px`;
            this.open = false;
        } else {
            target.classList.remove('closed');
            this.refreshHeight();
            this.open = true;
        }
    },
    addEntity: function(e, target)
    {
        this.state.trigger('entity:create', {'category': target.dataset.category});
    },
});