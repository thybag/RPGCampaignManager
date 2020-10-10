@extends('layouts.app')
@section('nav')
        <a href="{{url('campaign/'.$campaign->id)}}">Back to Campiagn view</a>
        <a href="{{url('campaign/'.$campaign->id.'/map')}}">Manage maps</a>
@endsection     
@section('content')
    <div class="container">
        <form class="form" method="POST" action="{{url('campaign/'.$campaign->id)}}/image{{!empty($image) ? "/".$image->id :''}}" enctype="multipart/form-data">
            <header>
                <h2>{{empty($image) ? 'Upload new image' : "Edit ".$image->name }}</h2>
            </header>
            <div>
                <label>Name:</label>
                <input name="name" type="text" @if(!empty($image)) value="{{$image->name}}" @endif;>
            </div>
            <div>
               Campaign: <strong>{{$campaign->name}}</strong>
            </div>
            @if(!empty($image)) 
                    <img src="{{$image->preview}}" style="width:100%">
            @endif
            <div>
                <label>{{empty($image) ? 'Upload Map Image' : "New Image?"}}</label>
   
                <input name="image" type="file" accept="image/*">
        
            </div>
            @csrf

            @if(!empty($image)) 
                {{ method_field('PUT') }}
            @endif

            <footer>
                <input type="submit" class="right" value="{{empty($campaign) ? 'Upload image' : "Save changes" }}"">
                <a class="button cancel" href="{{url('campaign/'.$campaign->id.'/image')}}">Back</a>
            </footer>
        </form>
    </div>
@endsection
