<!DOCTYPE html>
<html>
<head>
    <title>RPG Campaign Manager</title>
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
    <a href="{{url('/')}}" ><h1>RPG Campaign Manager</h1></a>

    <nav>
        @yield('nav')
    </nav>
    <a class='mainMenu'>{{ Auth::user()->name }}</a>
    <div class="main-menu">
        @yield('menu')

        <a href=""{{url("/")}}">Main menu</a>
        <a href=""{{url("/logout")}}">Logout</a>
    </div>
</div>
	@yield('content')
</body>
</html>