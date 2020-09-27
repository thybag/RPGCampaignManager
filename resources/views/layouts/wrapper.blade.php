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
 <link href="{{ asset('css/main.css') }}" rel="stylesheet">

    <!-- Scripts -->

    <script src="{{ asset('js/app.js') }}" defer></script>
</head>

<style type="text/css">


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