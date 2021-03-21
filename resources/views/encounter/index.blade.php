@extends('layouts.app')

@section('nav')
        <a href="#" data-tab='content' class="selected">Back</a>
@endsection

@section('content')
<div class="wrapper encounter">
    <div id="map"></div>
	<div id="player-bar"></div>
</div>
<div id="control-bar">
	<a href="https://github.com/thybag/rpg-quick-encounter" target="_blank">Help</a>
	<span class='fog'>Fog</span>
	<span class="spawn">Spawn</span>
</div>

@endsection