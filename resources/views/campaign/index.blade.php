<!DOCTYPE html>
<html>
<head>
    <title></title>
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    

     <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
   integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
   crossorigin=""/>
<link rel="stylesheet" href="https://unpkg.com/@geoman-io/leaflet-geoman-free@latest/dist/leaflet-geoman.css" />


    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
</head>

<style type="text/css">
    body {
        margin:0;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
    #map {
        width: calc(100vw - 200px);
        height: calc(100vh - 37px);
        margin:0;   
    }

    .panel {
        position: absolute;
        left:200px;
        top:37px;
        width: calc(100vw - 200px);
        height: calc(100vh - 37px);
        background: #fff;
        z-index: 999999;
        padding:1rem;
        box-sizing: border-box;
        overflow-x:auto;
        box-shadow: none;
        

    }
    .panel.min {
        position: absolute;
        width: 550px;
        height: calc(100vh - 110px);
        right:20px;
        left:auto;
        top:50px;
        box-shadow: 1px 1px 5px 2px #444;
    }

    .panel input {
        padding: .5rem;
        width: 400px;
    }

    textarea {
        width: 100%;
        line-height:1.3rem;
        font-size:1rem;
        min-height:120px;
    }

    .panel .form div {
        display: flex;
        justify-content: flex-end;
        margin-bottom:1rem;
    }
    .panel .form div label { flex:1; }
    .panel .form div input { flex:3; }
    .panel .form div textarea { flex:3; }

    .panel-block .controls {
        border-bottom: solid 1px #000;
        text-align: right;
        padding: .4rem 0;
        margin-bottom: 1rem;
    }

    button {
        background: #515278;
        border: solid 1px;
        padding: .5rem 1rem;
        color: #fff;
        cursor: pointer;
    }
    button.add {
        margin: 0 auto;
        width: 200px;
        display: block;
    }
    button.editEntity {
        float:right;
    }

    .panel-block a {
        font-weight:bold;
        color:blue;
        cursor: pointer;
    }
    .panel-block a:hover {
        text-decoration: underline;
    }
    .panel-block blockquote {
        background: #fdeec3;
        margin: 0;
        padding: .2rem;
        border-top: solid 3px #e09f61;
        border-bottom: solid 3px #e09f61;
        box-shadow: 1px 1px 2px 1px #ccc;
    }
    .panel-block p,.panel-block blockquote {
        margin-top:0;
        margin-bottom: 1rem;
     }

    .wrapper {
        display:flex;
    }

    .content-nav {
        width:200px;
        height: calc(100vh - 37px);
        box-sizing: border-box;
        background-color:#515278;
        overflow-x: auto;
    }
    .content-nav input {
        box-sizing: border-box;
        width:100%;
        padding:.5rem;
    }
    .content-nav h3 {
         display:block;
         padding:.5rem;
         margin:0;
         background:#080924;;
         color:#fff;
         font-size: 1rem;
         font-weight: normal;
    }
    .content-nav a {
         color: #fff;
         display:block;
         padding:.2rem;
         text-decoration: none;
         border-top: solid 1px #706f7e;
         font-size:0.9rem;
    }
    .content-nav a:first-child{
        border-top:none;
    }

    .bar {
        background:#080924;
        color: #fff;
        
    }
    .bar h1 {
        font-size:1rem;
        display:inline-block;
        font-weight: normal;
        width:200px;
        box-sizing: border-box;
        border-right: solid 1px #444;
        padding:8px 1rem;
        margin:0;
    }
    .bar nav {
        display:inline-block;
    }
    .bar nav a {
        color:#fff;
        display:inline-block;
        border-right: solid 1px #444;
        padding:8px;
        text-decoration: none;
        
    }
</style>

<body>
<div class="bar">
    <h1>Campaign Manager</h1>

    <nav>
        <a href="#" data-tab='content'>Content</a>
        @foreach ($campaign->maps as $map)
            <a href="#{{$map->id}}" data-tab='{{$map->id}}'>{{$map->name}}</a>
        @endforeach
        <a href="#" class='new'>+</a>
    </nav>
</div>
<div class="wrapper">
    <nav class="content-nav">
            <input type="text" placeholder="Filter..."/>
            @foreach ($campaign->entities->groupBy('category') as $groupName => $group)
            <div>
                <h3>{{ucfirst($groupName)}}</h3>
                @foreach ($group as $entity)
                    <a href="#" data-entity="{{$entity->id}}">{{$entity->name}}</a>
                @endforeach
            
                <a href="#" data-category="{{$groupName}}">Create...</a>
            </div>   
            @endforeach
    </nav>

    <div id="map"></div>
</div>
<div class="panel">
    <h2>content</h2>
    <div class="main">
        
        Group: marker colour
        Type: landmark
        Geo:Data

        --
        Blocks
        - Markdown
        - Stats
        - Notes [tickbox]

        blarp
    </div>
    <button id="json">Save</button> 
</div>
<script type="module">


/*

    window.model = new Model({'test': {'a':'AAA','b':{'c':{'testing':'hello'}}}, 'data': 'hello', "stuff":1, "supItem": ['aaa','bbb']});
    window.model.on('change', function(x,y){
        console.log("changed", x,y);
    });
    window.model.on('read', function(x){
        console.log("read", x);
    });



(async function() {



    let mode = 'content';

    let NavBar = Component.make({
        el: document.querySelector('.bar'),
        events: 
        {
          "click .bar nav a:not(.new)": "viewMap",
          "click .bar nav a.new": "addNewMap",
          "batman:test": 'hi'
        },
        render: function ()
        {
            // Set selected state
        },
        addNewMap: function()
        {
            this.trigger('batman:test');
            console.log("Add map model?");
        },
        viewMap: function(e)
        {
            console.log("View this map!", e);

            render();
        },
        hi: function(){
            console.log("I WORK YAY VIRTUAL EVENT");
        }
    });

    let Section = Component.define({
        mode: 'view',
        initialize: function ({content}) {
            this.render();
        },
        events: {
            "click .save": "saveContent",
            "click .edit": "editContent",
            "click .delete": "remove",
        },
        render: function () {
            this.el.innerHTML = this.content;
        },
        saveContent: function(){
            this.mode = 'view';
            // do save
            // 
            render();
        },
        editContent: function(){
            this.mode = 'edit';
            // Open edit
            render();
        }
    });

    let Panel = Component.make({
        el: document.querySelector('.panel'),
        initialize: function () {
            // Show default
            this.showContent(2);
        },
        content: null,
        events: {
            "click .save": "saveContent",
            "click .edit": "editContent",
            "click .add": "addContentSection",
            "click .remove": "removeContentSection",
        },
        render: function () {
            let fragment = document.createDocumentFragment();

            this.content.blocks.forEach(function(block){
                let div = document.createElement('div');
                fragment.appendChild(div);
                console.log("make section");
                Section.make({el: div, content: block.content});
            });

            // Set HTML
            this.el.innerHTML = '';
            this.el.appendChild(fragment);
        },
        showContent: async function(contentId) {
            let data = await fetch("2/entity/"+contentId);
            let json = await data.json();

            this.content = json;
            this.render();
            console.log("i loaded a thing");
            // render();
        }
    });

    window.nav = NavBar;
    window.nav2 = NavBar;
    console.log(Component);
    console.log(NavBar);

})();
*/
</script>
<script type="text/javascript">
/*
    //init sidebar
    
    //init home
    //mapInstance.off();
    //mapInstance.remove();


    function updateLayer(node){
        document.querySelector('.panel h2').innerText = node.name;
    }


    var map = L.map('map', {
        crs: L.CRS.Simple,
        zoomSnap: 0.10,
        maxZoom: 4,
    });
    var bounds = [[0,0], [1000,1000]];
    var image = L.imageOverlay('citymap.jpg', bounds).addTo(map);
        
    map.fitBounds(bounds);
    map.pm.Draw.setPathOptions({custom:"prop"})

    map.pm.addControls({
      position: 'topleft',
    });

    let data = await fetch("json.json");
    let json = await data.json();

    L.geoJson(json, {onEachFeature: function(f,l){
        l.on({
            'click': function(x){ 

                updateLayer({
                    "name": x.target.feature.properties.id
                });
        }});
    }}).addTo(map);


    map.on('pm:create', function(x){

        x.layer.properties = {"test":"hi"};
          //var person = prompt("Lofi!");
          console.log(x);

        console.log("save");
    });




        document.getElementById("json").addEventListener("click", function(){
            var drawnItems = new L.FeatureGroup();

            map.eachLayer((layer)=>{
               if((layer instanceof L.Path || layer instanceof L.Marker) && layer.pm){
                drawnItems.addLayer(layer);
              }
            });

            let geo = drawnItems.toGeoJSON();
            let cc = 0;
            geo.features.map(function(f){
                cc++
                if(!f.properties.id){
                    f.properties.id = 'lay-'+cc;
                }
            });

            console.log(JSON.stringify(geo));
        });
    window.mmap = map;
*/


//https://leafletjs.com/examples/crs-simple/crs-simple.html
</script>
</body>
</html>