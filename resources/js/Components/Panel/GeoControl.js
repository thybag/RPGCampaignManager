import Component from 'lumpjs/src/component.js';

const templateHasPoi = `
    <span data-action="locate">Show</span>
    <span data-action="edit">Update</span>
`;

const templateNoPoi = `
    <span data-action="create">Add</span>
`;
const templateEditing = `
    <span data-action="save">Finish editing</span>
`;
const templateNoMap = `
    <span data-action="add">Add a map?</span>
`;
export default Component.define({
    events: 
    {
        "click span[data-action='locate']": "locate",
        "click span[data-action='create']": "create",
        "click span[data-action='edit']": "edit",
        "click span[data-action='save']": "save",
        "click span[data-action='add']": "add"
    },
    editing: false,
    entity: null,
    hasGeo: function() {
        return (this.entity.data.geo != null && this.entity.data.map_id != null);
    },
    attach: function({el, entity}) {
        this.editing = false;
        this.entity = entity;
        el.appendChild(this.el);
        // Render
        this.render();
    },
    render: function()
    {
        if (this.editing) {
           return this.el.innerHTML = templateEditing;
        }
        if (this.state.data.tab == 'content') {
            return this.el.innerHTML = templateNoMap;
        }
        return  this.el.innerHTML = this.hasGeo() ? templateHasPoi : templateNoPoi;
    },
    locate: function() {
        // Trigger map focus on PoI
        this.state.trigger('map:focus', {map: this.entity.data.map_id, entity: this.entity.id});
    },
    create: function() {
        // Create PoI for entity
        this.state.trigger('map:poi:create', this.entity);
    },
    edit: function() {
        this.editing = true;
        // Create PoI for entity
        this.state.trigger('map:poi:edit', this.entity);
        this.render();
    },
    save: function() {
        this.editing = false;
        this.state.trigger('map:poi:save', this.entity);
    },
    add: function() {
        window.location = this.state.data.url + /campaign/ + this.state.data.campaign_id + '/map';
    }
});