@extends('layouts.wrapper')
@section('nav')
        <a href="{{url('')}}">Home</a>
@endsection     
@section('content')
    <style>
        .form {border: solid 1px; padding:1rem;max-width:400px; margin:0 auto;}
   
    </style>
    <div class="container">
        <form class="form" method="POST" action="{{url('campaign/')}}" enctype="multipart/form-data">
            <h2>{{empty($campaign) ? 'New Campaign' : "Edit ".$campaign->name }}</h2>
            <div>
                <label>Name:</label>
                <input name="name" type="text" @if(!empty($campaign)) value="{{$campaign->name}}" @endif;>
            </div>
            <div>
                <label>Description:</label>
                <textarea name="description">@if(!empty($campaign)){{$campaign->description}}@endif</textarea>
            </div>

            @csrf

            <input type="submit"><a class="button right" href="{{url('/')}}">Back</a>
        </form>
    </div>
@endsection
