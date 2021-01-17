import Component from 'lumpjs/src/component.js';
import dragSort from '../../Service/utils/dragSort.js'

const playerTpl = function(player) {
    const tpl = `
        <img src="${player.img}">
        ${player.name}
    `;
    const template = document.createElement('div');
    template.innerHTML = tpl;
    return template;
}

export default Component.define({
    el: document.querySelector('#players'),
    initialize: function () {
        this.render();
    },
    events: {
        "click div": "playerSelect"
    },
    playerSelect: function(e, target)
    {
        this.trigger("select:player");
    },
    render: async function () 
    {
       const data = [
            {"name": "Player 1", img: "https://placeimg.com/70/70/animals"},
            {"name": "Player 2", img: "https://placeimg.com/70/70/animals?2"},
            {"name": "Player 3", img: "https://placeimg.com/70/70/animals?3"},
            {"name": "Player 4", img: "https://placeimg.com/70/70/animals?4"},
            {"name": "Player 5", img: "https://placeimg.com/70/70/animals?5"}
        ];

        data.map(player => {
            this.el.appendChild(playerTpl(player));
        });

        dragSort(document.querySelectorAll("#players div"));       
    }
});