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
        "keyup textarea": "setHeight",
        "click img": "viewImage",
        "drop textarea": "upload",
        "dragenter textarea": "uploadFocus",
        "dragleave textarea": "uploadBlur",
    },
    uploadFocus:function(e,target){
        target.classList.add('uploadable');
    },
    uploadBlur: function(e, target) {
        target.classList.remove('uploadable');
    },
    viewImage: function(e, target)
    {   
        console.log(this.state.getEncounterUrl());

        var win = window.open(this.state.getEncounterUrl()+'?map='+target.src, '_blank');
        win.focus();
    },
    upload: async function(e, target) {
        e.preventDefault();
        const files = e.dataTransfer.files;
        // what did we get?
        for (var f=0; f<files.length; f++) {
            let file = files[f], path;
            // Only process image files.
            if (!file.type.match('image.*')) continue;

            path = await (await this.state.uploadImage(file)).json();
            const [start, end] = [target.selectionStart, target.selectionEnd];
            target.setRangeText(`![${path.data.name}](${path.data.url})`, start, end);
        }
        this.uploadBlur(e, target);
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
        this.setHeight(null,container.querySelector('textarea'));
    },
    renderView: function(container, block) {
        let parsed = Marked(block.content);
        parsed = parsed.replace(/\[\[([a-zA-Z0-9_\- ]*)\]\]/g,'<a data-link="$1">$1</a>');
        container.innerHTML = viewTpl(parsed);
        this.el.appendChild(container);
    },
    saveContent: async function() {
        let newContent = this.el.querySelector('textarea').value;
        let payload = {data:{content: newContent}};
        let json;
        // Save?
        if(this.mode == 'edit') {
            json = await (await this.state.request('PUT', this.data.links.update, payload)).json();
        } else {
            json = await (await this.state.request('POST', this.data.links.create, payload)).json();
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
    showLinkedContent: function(e, target) {
        let link = target.dataset.link.replace(/ /g,'-');
        this.state.trigger('entity:show', {'entity': link});
    },
    setHeight: function(e, target)
    {
        target.style.height = 0;
        target.style.height = target.scrollHeight+'px';
    }
});