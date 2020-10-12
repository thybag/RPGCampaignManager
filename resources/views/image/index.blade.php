@extends('layouts.app')
@section('nav')
        <a href="{{url('campaign/'.$campaign->id)}}">Campiagn view</a>
        <a href="{{url('campaign/'.$campaign->id.'/map')}}">Maps</a>
        <a href="{{url('campaign/'.$campaign->id.'/image')}}" class="selected">Images</a>
@endsection     
@section('content')
    <style>

    </style>
    <div class="container">
       
        <div class="content-list">
            <header> <h1>{{$campaign->name}}: Images</h1></header>
            
                @foreach ($campaign->images->chunk(4) as $images)
                <div class="row">
                      @foreach ($images as $image)
                        <div>
                            <a class="preview" href="{{url("campaign/{$campaign->id}/image/{$image->id}/edit")}}" data-type='image' data-id='{{$image->id}}'>
                                <img src="{{ optional($image)->preview }}">
                                <div>{{$image->name}}</div>
                            </a>
                        </div>
                     @endforeach
                </div>
                @endforeach

           
            <footer class="controls">
                <a class="button" href="{{url("campaign/{$campaign->id}/image/create")}}">
                Upload new image
            </a>
            </footer>
        </div>
    </div>
@endsection
