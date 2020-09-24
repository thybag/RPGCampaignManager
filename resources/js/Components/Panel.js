import Component from 'lumpjs/src/component.js';
import Section from './Section.js';

const panelTpl = function(title) {
    const tpl = `
        <div>
            <button class='editEntity'>rename</button>
            <h2>${title}</h2>
        </div>
        <div class='panel-content'>
        </div>
        <div class='controls'><button class='add'>Add Content Section</button></div>
    `;
    const template = document.createElement('div');
    template.innerHTML = tpl;
    return template;
}

const panelEditTpl = function(data, action) {

    let actionName;
    switch (action) {
        case 'new':
            actionName = 'New Entity';
            break;
        case 'edit':
            actionName = 'Editing ' + data.name;
            break;
    }

    const tpl = `
        <div class="form">
            <h2>${actionName}</h2>
            <div>
                <label>Title</label>
                <input name="title" type="text" value="${data.name || ''}">
            </div>
            <div>
                <label>Category</label>
                <input name="category" type="text" value="${data.category || ''}">
            </div>
            <div>
                <label>Geo</label>
                <input name="geo" type="text" value="${data.geo || ''}">
            </div>
            <button class='saveEntity'>save</button>
        </div>
    `;
    const template = document.createElement('div');
    template.innerHTML = tpl;
    return template;
}

export default Component.define({
    el: document.querySelector('.panel'),
    children: [],
    initialize: function () {
        // Listen to model events
        this.listenTo(this.state);
    },
    content: null,
    mode: 'view',
    events: {
        // Sections
        "click .add": "addContentSection",
        // Entity
        "click .saveEntity": "saveEntity",
        "click .editEntity": "editEntity",
        // Model events
        "update:tab": "updatePanelDisplay",
        "update:entity": "entity"
    },
    entity: function(entity) {
        if (entity.action == 'view') {
            return this.showContent(entity.entity);
        }
        // Else make new!
        this.mode = 'new';
        this.content = {data: {category: entity.category, name: entity.name}, links: {'create': this.content.links.create}};
        return this.render();
    },
    editEntity: function() {
        this.mode = 'edit';
        this.render();
    },
    saveEntity: async function() {
        let payload = {
            data: {
                'name': this.el.querySelector("input[name=title]").value,
                'category': this.el.querySelector("input[name=category]").value,
                'geo': this.el.querySelector("input[name=geo]").value
            }
        };

        if(this.mode == 'edit') {
            this.content = await this.state.request('PUT', this.content.links.update + '?include=blocks', payload);
        } else {
            this.content = await this.state.request('POST', this.content.links.create + '?include=blocks', payload);
        }

        this.mode = 'view';
        this.render();
    },
    updatePanelDisplay: function(tab) {
        if (tab == 'content') {
            this.el.classList.remove('min');
        } else {
            this.el.classList.add('min');
        }
    },
    render: function() {
        this.clearChildren();
        this.el.innerHTML = '';

        switch (this.mode) {
            case 'view':
                return this.renderView();
            case 'edit':
                return this.renderEdit();
            case 'new':
                return this.renderEdit();
        }
    },
    renderView: function () {
        let template = panelTpl(this.content.data.name);
        let container = template.querySelector('.panel-content');

        let blocks = this.content.data.blocks;
        blocks.forEach((block) => {
            let section = Section.make({data: block, state: this.state});
            container.appendChild(section.el);
            this.children.push(section);
        });

        this.el.appendChild(template);
    },
    renderEdit: function () {
        let template = panelEditTpl(this.content.data, this.mode);
        this.el.appendChild(template);
    },
    clearChildren: function () {
        this.children.map(function(i){
            i.disconnect();
        });
        this.children = [];
    },
    addContentSection: function()
    {
        let container = this.el.querySelector('.panel-content');

        let section = Section.make({
            mode: 'new',
            data: {links: {'create': this.content.links.newBlock}},
            state: this.state
        })
        container.appendChild(section.el);
        this.children.push(section);
    },
    showContent: async function(entity) {
        let data = await fetch("2/entity/"+entity+"?include=blocks");

        if (data.status == 200 || data.status == 201) {
            let json = await data.json();
            this.content = json;
            this.mode = 'view';
            return this.render();
        }

        if (data.status == 404) {
            return this.state.data.entity = {'action': 'create', 'name': entity};
        }
    }
});