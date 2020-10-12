<!DOCTYPE html>
<html>
<head>
    <title>RPG Campaign Manager</title>
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

 <link href="{{ asset('css/main.css') }}" rel="stylesheet">

    <!-- Scripts -->

<script src="{{ asset('js/app.js') }}" defer></script>
 
@if (!empty($campaign))
    <script>
        window._campaign = {
            'id': '{{$campaign->id}}',
            'mode': '{{empty($mode) ? 'default' : 'campaign'}}',
            'url': '{{url('/')}}',
            'default_entity': '{{$campaign->default_entity_id ?? $campaign->entities->first()->id}}',
            'default_map': '{{$campaign->default_map_id}}'
        };
    </script>
@else
    <script>
        window._campaign = {
            'mode': 'home',
            'url': '{{url('/')}}',
        };
    </script>
@endif
</head>

<body>
<div class="bar">
    <a href="{{url('/')}}" ><h1>RPG Campaign Manager</h1></a>

    <nav>
        @yield('nav')
    </nav>
    
     @guest
        <span class="menu">
            <a href="{{ route('login') }}">{{ __('Login') }}</a>
            @if (Route::has('register'))
                <a href="{{ route('register') }}">{{ __('Register') }}</a>
            @endif
        </span>
    @else
       <a class='menu'>{{ Auth::user()->name }}</a>
    @endguest
    
    <div class="main-menu">

        @if(!empty($campaign))
            <a href="{{url("/campaign/{$campaign->id}/edit")}}">Campaign Settings</a>
            <a href="{{url("/campaign/{$campaign->id}/image")}}">Manage Images</a>
            <a href="{{url("/campaign/{$campaign->id}/map")}}">Manage Maps</a>
        @endif
        <a href="{{url("/")}}">Main menu</a>
        <a class="logout">Logout</a>
    </div>
</div>
	@yield('content')

    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display:none;"> @csrf</form>
</body>
</html>