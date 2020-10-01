@extends('layouts.wrapper')
@section('nav')
        <a href="{{url('campaign/'.$campaign->id)}}">Back to Campiagn view</a><a href="" class="selected">Manage maps</a>
@endsection     
@section('content')
    <style>

    </style>
    <div class="container">
       
        <div class="manage-maps">
            <header> <h1>{{$campaign->name}}: Maps</h1></header>
            
                @foreach ($campaign->maps->chunk(4) as $maps)
                    <div class="row">
                    @foreach ($maps as $map)
                        <div>
                            <a class="preview" href="{{url("campaign/{$campaign->id}/map/{$map->id}/edit")}}" data-tab='{{$map->id}}' style="background-image:url()">
                                <img src="{{ optional($map->image)->preview }}">
                                <button>Edit</button>
                                <div>{{$map->name}}</div>
                                <div><span class="poi">12 poi's</span></div> 
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
