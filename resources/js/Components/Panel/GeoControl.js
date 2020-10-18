import Component from 'lumpjs/src/component.js';

const templateHasPoi = `
    <span data-action="locate">Show</span>
    <span data-action="edit">Update</span>
`;

const templateNoPoi = `
    <span data-action="create">Create new</span>
`;
const templateEditing = `
    <span data-action="save">Finish editing</span>
`;

export default Component.define({
    events: 
    {
        "click span[data-action='locate']": "locate",
        "click span[data-action='create']": "create",
        "click span[data-action='edit']": "edit",
        "click span[data-action='save']": "save"
    },
    editing: false,
    entity: null,
    hasGeo: function(){
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
        if(this.editing) {
           this.el.innerHTML = templateEditing;
        } else {
            this.el.innerHTML = this.hasGeo() ? templateHasPoi : templateNoPoi;
        }
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
    }
});