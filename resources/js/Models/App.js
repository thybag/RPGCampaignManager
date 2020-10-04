import Model from 'lumpjs/src/model.js';

export default Model;

Model.prototype.request = async function(method, url, payload = '') {

    const options = {
        method: method,
        headers: { 
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': this.data.csrf,
        }
    };
    if (method != 'GET') {
        options['body'] = JSON.stringify(payload)
    }

    return await fetch(url, options);
}

Model.prototype.upload = async function(url, formData){
    const options = {
        method: 'POST',
        headers: { 
          //  'Content-Type': 'multipart/form-data',
            'X-CSRF-TOKEN': this.data.csrf,
            'X-Requested-With': 'XMLHttpRequest'
        },
        body: formData
    };
    return await fetch(url, options);
}
Model.prototype.loadEntities = async function(id) {
    const url = `${this.get('url')}/campaign/${this.get('campaign_id')}/entity`;
    return this.request("GET", url);
}
Model.prototype.loadEntity = async function(id) {
    const url = `${this.get('url')}/campaign/${this.get('campaign_id')}/entity/${id}?include=blocks`;
    return this.request("GET", url);
}
Model.prototype.loadMap = async function(id) {
    const url = `${this.get('url')}/campaign/${this.get('campaign_id')}/map/${id}?include=entities,image`;
    return this.request("GET", url);
}
Model.prototype.uploadImage = async function(image) {
    const url = `${this.get('url')}/campaign/${this.get('campaign_id')}/image`;
    var formData = new FormData();
    formData.append('image', image);  
    return this.upload(url, formData);
}
Model.prototype.deleteItem = async function(type, id) {
    const url = `${this.get('url')}/campaign/${this.get('campaign_id')}/${type}/${id}`;
    return this.request("DELETE", url);
}
