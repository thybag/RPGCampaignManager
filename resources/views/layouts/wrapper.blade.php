<!DOCTYPE html>
<html>
<head>
    <title>Soon</title>
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

    .panel .menu {
        float: right;
        font-size: 2.4rem;
        line-height: .5rem;
        height: 16px;
        cursor:pointer;
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

    .panel.min.hide {
        display: none;
    }

    .panel .hidePanel {
        display:none;
        float:right;
        cursor:pointer;
        width: 20px;
        height: 20px;
        text-align: center;
    }
    .panel.min .hidePanel {
       /* display:block;*/

    }
    .panel header {
        margin-bottom:1rem;
    }
    .panel header h2 {
        margin-bottom:.6rem;
    }
    .panel header .poi {
        background-image: url(../images/map/marker-icon-2x-blue.png);
        background-repeat: no-repeat;
        background-size: 11px;
        background-position: 5px;
        border: solid 1px #9495bf;
        display: inline-block;
        border-radius: 5px;
        padding: .2rem;
        padding-left: 22px;
        line-height: 1rem;
        padding-right: .3rem;
        cursor: pointer;
    }
    /*
    .panel .poi {
        background-color: #9495bf;
        border: solid 2px #515278;
        vertical-align: bottom;
        background-image: url(../images/map/marker-icon-2x-blue.png);
        background-repeat: no-repeat;
        background-size: 25px;
        background-position: 10px 5px;
        margin-bottom: 1rem;
        cursor: pointer;
        width: 45px;
        float: right;
        padding-top: 50px;
        text-align: center;
        padding-bottom: 5px;
    }
    #080924
    solid 1px #706f7e
*/

    .panel h2 {
        margin-top:0;
        margin-bottom:1rem;
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

    .mainMenu {
        float:right;
        color: #fff;
        text-decoration: none;
        line-height: 36px;
        margin-right: 2rem;
    }
    .mainMenu::after {
        display: inline-block;
        margin-left: 0.255em;
        vertical-align: 0.255em;
        content: "";
        border-top: 0.3em solid;
        border-right: 0.3em solid transparent;
        border-bottom: 0;
        border-left: 0.3em solid transparent;
    }

</style>

<body>
<div class="bar">
    <h1>Campaign Manager</h1>

    <nav>
        @yield('nav')
    </nav>
    <a href="#" class='mainMenu'>Bob Smith</a>
    <!--
        Campaign Settings
        Main menu
        Logout
    -->
</div>
	@yield('content')
</body>
</html>