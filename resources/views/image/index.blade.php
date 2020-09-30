@extends('layouts.wrapper')
@section('nav')
        <a href="{{url('campaign/'.$campaign->id)}}">Back to Campiagn view</a><a href="" class="selected">Manage Images</a>
@endsection     
@section('content')
    <style>

    </style>
    <div class="container">
       
        <div class="manage-maps">
            <header> <h1>{{$campaign->name}}: Images</h1></header>
            <div class="row wrap">
                @foreach ($campaign->images as $image)
                    <div>
                        <a class="map-preview" href="{{url("campaign/{$campaign->id}/image/{$image->id}/edit")}}" data-tab='{{$image->id}}'>
                            <img src="{{ optional($image)->preview }}">
                            <button>Edit</button>
                            <div>{{$image->name}}</div>
                        </a>
                    </div>
                @endforeach

            </div>
            <footer class="controls">
                <a class="button" href="{{url("campaign/{$campaign->id}/image/create")}}">
                Upload new image
            </a>
            </footer>
        </div>
    </div>
@endsection
