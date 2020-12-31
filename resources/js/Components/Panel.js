import Component from 'lumpjs/src/component.js';
import Section from './Section.js';
import Menu from './Element/Menu.js';
import GeoControl from './Panel/GeoControl.js';

const panelTpl = function(title) {
    const tpl = `
        <header>
            <span class='editEntity menu'>&#x22ef;</span>
            <h2>${title}</h2>
            <div class='geo'></div>
        </header>
        
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
            <button class='saveEntity right'>save</button><button class='cancel cancelEntity'>cancel</button>
        </div>
    `;
    const template = document.createElement('div');
    template.innerHTML = tpl;
    return template;
}

const menu = Menu.make({
    options: {
        'menu:edit': 'Edit',
        'menu:close': 'Close',
        'menu:remove': 'Remove',
    }
});

export default Component.define({
    el: document.querySelector('.panel'),
    children: [],
    geoControls: null,
    initialize: function () {
        // Listen to model events
        this.listenTo(this.state);
        // Setup controls
        this.geoControls = GeoControl.make({state: this.state});
    },
    content: null,
    mode: 'hide',
    events: {
        // Sections
        "click .add": "addContentSection",
        // Menu actions
        "click .menu": "menu",
        "menu:close": "hidePanel",
        "menu:edit": "editEntity",
        "menu:remove": "removeEntity",
        // Entity General
        "click .saveEntity": "saveEntity",
        "click .cancelEntity": "cancelEntity",        
        // Model events
        "update:tab": "updatePanelDisplay",
        "entity:create": "createEntity",
        "entity:show": "showEntity",
        "entity:update": "updateEntity",
    },
    menu: function()
    {
        menu.attach(this);
    },
    updateEntity: function(entity) {
        this.content = entity.entity;
        this.content.data._geo = entity.geo;
        this.mode = 'edit';
        this.render();
    },
    createEntity: function(entity)
    {
        // Else make new!
        this.mode = 'new';
        this.content = {data: {category: entity.category, name: entity.name, _geo: entity.geo}, links: {'create': this.content.links.create}};
        return this.render();
    },
    removeEntity: function(entity)
    {
        if (confirm("Are you sure you want to permanently delete this content?")) {
            // DO remove
            this.state.deleteItem('entity', this.content.id);
            this.hidePanel();
        }
        this.menu();
    },
    showEntity: function(entity) {
        // Clean up, if unsaved entity
        if (this.content && this.content.data._geo) {
            this.content.data._geo.layer.remove();
        }  

        // Store entity
        this.state.data.entity = entity.entity;
        return this.showContent(entity.entity);
    },
    editEntity: function() {
        this.mode = 'edit';
        this.render();
    },
    cancelEntity: function(){
        if (this.content.data._geo) {
            this.content.data._geo.layer.remove();
        }    
        this.showEntity({'entity': this.state.data.entity});
    },
    hidePanel: function(){
        return this.el.classList.add('hide');
    },
    saveEntity: async function() {
        let payload = {
            data: {
                'name': this.el.querySelector("input[name=title]").value,
                'category': this.el.querySelector("input[name=category]").value,
            }
        };

        // Add geo data
        if (this.content.data._geo) {
            payload.data.map_id = this.state.data.tab;
            payload.data.geo = JSON.stringify(this.content.data._geo.layer.toGeoJSON());
            // Tidy from map
            this.content.data._geo.layer.remove();
        }

        let results;
        if(this.mode == 'edit') {
            results = await this.state.request('PUT', this.content.links.update + '?include=blocks', payload);
        } else {
            results = await this.state.request('POST', this.content.links.create + '?include=blocks', payload);
        }
        this.content = await results.json();

        this.state.trigger('entity:updated', this.content)

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
        this.el.classList.remove('hide');

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

        this.geoControls.attach({
            el: template.querySelector('.geo'),
            entity: this.content
        });

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
        this.el.querySelector('input[name=title]').focus();
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
        let data = await this.state.loadEntity(entity);

        if (data.status == 200 || data.status == 201) {
            let json = await data.json();
            this.content = json;
            this.mode = 'view';
            return this.render();
        }

        if (data.status == 404) {
            return this.state.trigger('entity:create', {'name': entity});
        }
    }
});