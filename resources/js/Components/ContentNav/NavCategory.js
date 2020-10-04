import Component from 'lumpjs/src/component.js';

const categoryTpl = function(title, links) {
    console.log(links);
    const tpl = `
        <h3>${title}</h3>
        <div class='panel-content'>
            ${Object.entries(links).map(([id, entity]) => 
                `<a href="#${entity.slug}" data-entity="${id}">${entity.name}</a>`
            ).join('')}
        </div>
    `;
    return tpl;
}

export default Component.define({
    data: {},
    filtered: {},
    initialize: async function () {
        this.el = document.createElement('div');
        this.filtered = this.data;
        this.render();
    },
    open: true,
    openHeight: 0,
    events: 
    {
        "click h3": "toggleSection",
        "click a[data-entity]": "showEntity",
    },
    filter: function(filter) {
        console.log("apply filter", this.data);
       this.filtered = Object.values(this.data).filter((ent) => {
            return ent._search.indexOf(filter.toLowerCase()) != -1;
       });
       console.log("render filter", this.filtered);
       this.render();
    },
    render: function ()
    {
        //console.log(this.data);
        this.el.innerHTML = categoryTpl(this.category, this.filtered);
        this.refreshHeight();
    },
    refreshHeight: function(){
        let section = this.el.querySelector(".panel-content");
        section.style.height = Object.keys(this.filtered).length*27.4 + 'px';
    },
    showEntity: function(e, target)
    {
        e.preventDefault();
        this.state.trigger('entity:show', {'entity': target.dataset.entity});
    },
    toggleSection: function(){
        if (this.open) {
            // Refresh
            let section = this.el.querySelector(".panel-content").style.height = `0px`;
            this.open = false;
        } else {
            this.refreshHeight();
            this.open = true;
        }
    }
});