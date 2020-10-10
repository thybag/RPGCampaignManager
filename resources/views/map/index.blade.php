@extends('layouts.app')
@section('nav')
        <a href="{{url('campaign/'.$campaign->id)}}">Campiagn view</a>
        <a href="{{url('campaign/'.$campaign->id.'/map')}}" class="selected">Maps</a>
        <a href="{{url('campaign/'.$campaign->id.'/image')}}">Images</a>
@endsection     
@section('content')
    <style>

    </style>
    <div class="container">
       
        <div class="content-list">
            <header> <h1>{{$campaign->name}}: Maps</h1></header>
            
                @foreach ($campaign->maps->chunk(4) as $maps)
                    <div class="row">
                    @foreach ($maps as $map)
                        <div>
                            <a class="preview" href="{{url("campaign/{$campaign->id}/map/{$map->id}/edit")}}" data-type='map' data-id='{{$map->id}}' style="background-image:url()">
                                <img src="{{ optional($map->image)->preview }}">
                                <div>{{$map->name}} <span class="poi">12 poi's</span></div>
                            </a>
                        </div>
                    @endforeach
                </div>
             @endforeach
            <footer class="controls">
                <a class="button" href="{{url("campaign/{$campaign->id}/map/create")}}">
                Add map
            </a>
            </footer>
        </div>
    </div>
@endsection
