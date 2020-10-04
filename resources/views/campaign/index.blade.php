@extends('layouts.wrapper')

@section('nav')
        <a href="#" data-tab='content' class="selected">Content</a>
        @foreach ($campaign->maps as $map)
            <a href="#{{$map->id}}" data-tab='{{$map->id}}'>{{$map->name}}</a>
        @endforeach
        <a href="{{ url("campaign/{$campaign->id}/map") }}" class='new'>&#x22ef;</a>
@endsection

@section('content')

<div class="wrapper">
    <nav class="content-nav">
        <input type="text" placeholder="Filter..."/>
    </nav>

    <div id="map"></div>
</div>
<div class="panel">
    <h2>content</h2>
    <div class="main">
        Looks like something went wrong loading :(
    </div>
    <button id="json">Save</button> 
</div>
@endsection