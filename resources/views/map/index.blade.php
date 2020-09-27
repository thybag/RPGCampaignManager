@extends('layouts.wrapper')
@section('nav')
        <a href="{{url('campaign/'.$campaign->id)}}">Back to Campiagn view</a><a href="" class="selected">Manage maps</a>
@endsection     
@section('content')
    <style>

   
    </style>
    <div class="container">
        <h1>{{$campaign->name}}</h1>
        <h2>Manage Maps</h2>
        <div class="row">
            @foreach ($campaign->maps as $map)
                <div>
                    <a class="map-preview" href="#{{$map->id}}" data-tab='{{$map->id}}' style="background-image:url()">
                        <img src=" ../{{ $map->path }}">
                        <button>Edit</button>
                        <div>{{$map->name}}</div>
                        <div><span class="poi">12 poi's</span></div> 
                    </a>
                </div>
            @endforeach

        </div>
        <div class="controls"><button>Add map</button></div>
    </div>
@endsection
