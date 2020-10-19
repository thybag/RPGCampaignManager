import Component from 'lumpjs/src/component.js';

export default Component.define({
    open: false,
    parent: null,
    options: {},
    initialize: function() {
        // Add menu button
        const menu = document.createElement('div');
        menu.className = 'menu-content';
        this.el = menu;
        this.el.tabIndex = 0;
    },
    events: 
    {
      "blur": "hide",
      "click span": "action"
    },
    attach: function(parent) {
        this.parent = parent;
        // Ensure exists
        this.parent.el.appendChild(this.el);
        this.show();
    },
    setOptions: function(options){
        this.options = options;
    },
    render: function()
    {
        let tpl = '';
        for (const [action, name] of Object.entries(this.options)) {
          tpl += `<span data-action="${action}">${name}</span>`;
        }
        this.el.innerHTML = tpl;

        // Change state
        if (this.open) {
            this.el.classList.add('show');
            this.el.focus();
        } else {
            this.el.classList.remove('show');
        }
    },
    "show": function() {
        this.open = true;
        this.render();
    },
    "hide": function() {
        // Slight delay so the click fires before blur
        setTimeout(()=> {
            this.open = false;
            this.render();
        },150)
    },
    "action": async function(e, target) {
        e.preventDefault();
        const action = target.dataset.action;
        // Trigger action on parent
        this.parent.trigger(action);
        this.hide();
    }
});