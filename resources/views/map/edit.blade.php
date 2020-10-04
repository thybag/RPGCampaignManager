@extends('layouts.wrapper')
@section('nav')
        <a href="{{url('campaign/'.$campaign->id)}}">Back to Campiagn view</a>
        <a href="{{url('campaign/'.$campaign->id.'/map')}}">Manage maps</a>
@endsection     
@section('content')
    <div class="container">
        <form class="form" method="POST" action="{{url('campaign/'.$campaign->id)}}/map{{!empty($map) ? "/".$map->id :''}}" enctype="multipart/form-data">
            <header>
                <h2>{{empty($map) ? 'Create new map' : "Edit ".$map->name }}</h2>
            </header>
            <div>
                <label>Name:</label>
                <input name="name" type="text" @if(!empty($map)) value="{{$map->name}}" @endif;>
            </div>
            <div>
               Campaign: <strong>{{$campaign->name}}</strong>
            </div>
            @if(!empty($map)) 
                    <img src="{{optional($map->image)->preview}}" style="width:100%">
            @endif
            <div>
                <label>{{empty($map) ? 'Upload Map Image' : "New Image?"}}</label>
   
                <input name="image" type="file" accept="image/*">
        
            </div>
            @csrf

            @if(!empty($map)) 
                {{ method_field('PUT') }}
            @endif

            <footer>
                <input type="submit" class="right" value="{{empty($campaign) ? 'Upload map' : "Save changes" }}"">
                <a class="button cancel" href="{{url('campaign/'.$campaign->id.'/map')}}">Back</a>
            </footer>
        </form>
    </div>
@endsection
