@extends('layouts.wrapper')
@section('nav')
        <a href="{{url('campaign/'.$campaign->id)}}">Back to Campiagn view</a>
        <a href="{{url('campaign/'.$campaign->id.'/map')}}">Manage maps</a>
@endsection     
@section('content')
    <style>
        .form {border: solid 1px; padding:1rem;max-width:400px; margin:0 auto;}
   
    </style>
    <div class="container">
        <form class="form" method="POST" action="{{url('campaign/'.$campaign->id)}}/map/{{$map->id}}" enctype="multipart/form-data">
            <h2>{{empty($map) ? 'Create new map' : "Edit ".$map->name }}</h2>
            <div>
                <label>Name:</label>
                <input name="name" type="text" @if(!empty($map)) value="{{$map->name}}" @endif;>
            </div>
            <div>
                <label>Campaign:</label>
                <div>{{$campaign->name}}</div>
            </div>
            @if(!empty($map)) 
                    <img src="{{$map->preview}}" style="width:100%">
            @endif
            <div>
                <label>{{empty($map) ? 'Upload Map Image' : "New Image?"}}</label>
   
                <input name="image" type="file" accept="image/*">
        
            </div>
            @csrf
            {{ method_field('PUT') }}
            <input type="submit"><a class="button right" href="{{url('campaign/'.$campaign->id.'/map')}}">Back</a>
        </form>
    </div>
@endsection
