import Model from 'lumpjs/src/model.js';

export default Model;

Model.prototype.request = async function(method, url, payload = '') {
    const options = {
        method: method,
        headers: { 
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': this.data.csrf 
        }
    };
    if (method != 'GET'){
        options['body'] = JSON.stringify(payload)
    }

    return await fetch(url, options);
}

Model.prototype.loadEntity = async function(id) {
    const url = `${this.get('url')}/campaign/${this.get('campaign_id')}/entity/${id}?include=blocks`;
    return this.request("GET", url);
}
Model.prototype.loadMap = async function(id) {
    const url = `${this.get('url')}/campaign/${this.get('campaign_id')}/map/${id}?include=entities`;
    return this.request("GET", url);
}