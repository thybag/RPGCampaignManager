import Component from 'lumpjs/src/component.js';

const button = function() {
    const btn = document.createElement('span');
    btn.className = 'menu';
    btn.innerHTML = `&#x22ef;`;
    return btn;
}

const menu = function(title) {
    const tpl = `
        <span data-action="edit">Edit</span>
        <span data-action="remove">Remove</span>
    `;
    const template = document.createElement('div');
    template.className = 'menu-content';
    template.innerHTML = tpl;
    return template;
}

export default Component.define({
    menu: null,
    initialize: function() {
        // Add menu button
        this.el.appendChild(button());
    },
    events: 
    {
      "click .menu": "show",
      "blur": "hide",
      "click .menu-content span": "action"
    }, 
    render: function()
    {
        // Create menu markup if not done before
        if (!this.menu) {
            this.el.tabindex = 0;
            this.menu = menu();
            this.el.appendChild(this.menu);
        }
        // Toggle menu visibility
        this.menu.classList.toggle('show');
    },
    "show": function(e, target){
        e.preventDefault();
        this.render();
    },
    "hide": function(e) {
        this.menu.classList.remove('show');
    },
    "action": async function(e, target) {
        e.preventDefault();
        const action = target.dataset.action;
        const type = this.el.dataset.type;

        switch(action) {
            case 'edit':
                return this.el.click();
            case 'remove':
                if (confirm(`Are you sure you want to permanently delete this ${type}?`)) {
                    // Nuke and refresh
                    await this.state.deleteItem(this.el.dataset.type, this.el.dataset.id);
                    window.location.reload();
                }
        }
    }
});