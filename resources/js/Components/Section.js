import Component from 'lumpjs/src/component.js';
import Marked from 'marked/marked.min.js'

const viewTpl = function(content) {
    return `
        <div>
            ${content}
        </div>
        <div class='controls'><button class='edit'>Edit</button></div>
    `;
}

const editTpl = function(content) {
    return `
        <textarea>${content}</textarea>
        <div class='controls'><button class='save'>Save changes</button></div>
    `;
}

export default Component.define({
    mode: 'view',
    initialize: function () {
        this.render();
    },
    events: {
        "click button.save": "saveContent",
        "click button.edit": "editContent",
        "click a[data-link]": "showLinkedContent",
        "keyup textarea": "setHeight"
    },
    render: function () {
         // redraw
        let div = document.createElement('div');
        div.className = 'panel-block'
        // Clear
        this.el.innerHTML = '';

        switch (this.mode) {
            case 'view':
                return this.renderView(div, this.data.data);
            case 'edit':
                return this.renderEdit(div, this.data.data);
            case 'new':
                return this.renderEdit(div, {content: ''});
        }
    },
    renderEdit: function(container, block){
        container.innerHTML = editTpl(block.content);
        this.el.appendChild(container);    
        this.setHeight(container.querySelector('textarea'));
    },
    renderView: function(container, block) {
        let parsed = Marked(block.content);
        parsed = parsed.replace(/\[\[([a-zA-Z0-9_ ]*)\]\]/g,'<a data-link="$1">$1</a>');
        container.innerHTML = viewTpl(parsed);
        this.el.appendChild(container);
    },
    request: async function(method, url, payload) {
        let data = await fetch(url, {
            method: method,
            body: JSON.stringify(payload),
            headers: { 
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': this.state.data.csrf 
            }
        });
        return await data.json();
    },
    saveContent: async function() {
        let newContent = this.el.querySelector('textarea').value;
        let payload = {data:{content: newContent}};
        let json;
        // Save?
        if(this.mode == 'edit') {
            json = await this.request('PUT', this.data.links.update, payload);
        } else {
            json = await this.request('POST', this.data.links.create, payload);
        }
        console.log(json);
        
        this.data = json;

        this.mode = 'view';
        this.render();
    },
    editContent: function() {
        this.mode = 'edit';
        this.render();
    },
    showLinkedContent: function(e) {
        let link = e.dataset.link.replace(/ /g,'-');
        console.log(typeof link);
        this.state.trigger('entity:show', {'entity': link});
    },
    setHeight: function(e)
    {
        e.style.height = 0;
        e.style.height = e.scrollHeight+'px';
    }
});