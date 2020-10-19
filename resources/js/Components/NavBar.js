import Component from 'lumpjs/src/component.js';
import Menu from './Element/Menu.js';

const menu = Menu.make();

const menuCampaign = {
    'menu:settings':    'Campaign settings',
    'menu:images':      'Campaign Images',
    'menu:maps':        'Campaign Maps',
    'menu:home':        'Main Menu',
    'menu:logout':      'Logout'
};
const menuBasic = {
    'menu:home':        'Main Menu',
    'menu:logout':      'Logout'
};


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
        // Menu
        "click .menu": "menu",
        "menu:logout": "logout",
        "menu:home":   "home",
        'menu:settings': 'settings',
        'menu:maps':    'maps',
        'menu:images':  'images'
    },
    "menu": function(e, target) {
        if (this.state.get('campaign_id')) {
            menu.setOptions(menuCampaign);
        } else {
            menu.setOptions(menuBasic);
        }
        menu.attach(this);
    },
    viewTab: function(e, target)
    {
        this.state.data.tab = target.dataset.tab;
    },
    selectTab: function(target) {
        [...target.parentNode.children].map(function(x){x.classList.remove('selected');});
        target.classList.add('selected');
    },
    // Menu
    campaignUrl: function(path) {
        return this.state.data.url +/campaign/+this.state.data.campaign_id + path;
    },
    settings: function() {
        document.location = this.campaignUrl('/edit');
    },
    images: function() {
        document.location = this.campaignUrl('/image');
    },
    maps: function() {
        document.location = this.campaignUrl('/map');
    },
    home: function() {
        document.location = this.state.data.url;
    },
    logout: function() {
        document.getElementById('logout-form').submit();
    }
});