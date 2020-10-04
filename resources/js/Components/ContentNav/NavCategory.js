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
    initialize: async function () {
       this.el = document.createElement('div');
       this.render();
    },
    open: true,
    openHeight: 0,
    events: 
    {
        "click h3": "toggleSection",
        "click a[data-entity]": "showEntity",
    },
    render: function ()
    {
        //console.log(this.data);
        this.el.innerHTML = categoryTpl(this.category, this.data);
        this.refreshHeight();
    },
    refreshHeight: function(){
        let section = this.el.querySelector(".panel-content");
        section.style.height = Object.keys(this.data).length*27.4 + 'px';
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