import Component from 'lumpjs/src/component.js';

export default Component.define({
    el: document.querySelector('.bar'),
    initialize: function () {
        // Listen to state
        this.state.on('update:tab', (tab) => {
            this.selectTab(this.el.querySelector(`a[data-tab="${tab}"]`));
        });
    },
    events: 
    {
      "click .bar nav a[data-tab]": "viewTab",
      "click .menu": "showMenu",
      "click .main-menu .logout": "logout"
    },
    "showMenu": function(e, target){
        this.el.querySelector('.main-menu').classList.toggle('show');
    },
    viewTab: function(e, target)
    {
        this.state.data.tab = target.dataset.tab;
    },
    selectTab: function(target) {
        [...target.parentNode.children].map(function(x){x.classList.remove('selected');});
        target.classList.add('selected');
    },
    logout: function(e) {
        e.preventDefault();
        document.getElementById('logout-form').submit();
    }
});