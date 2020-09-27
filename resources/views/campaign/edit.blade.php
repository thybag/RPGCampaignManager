@extends('layouts.wrapper')
@section('nav')
        <a href="{{url('')}}">Home</a>
@endsection     
@section('content')

    <div class="container">
        <form class="form" method="POST" action="{{url('campaign/')}}" enctype="multipart/form-data">
            <header><h2>{{empty($campaign) ? 'New Campaign' : "Edit ".$campaign->name }}</h2></header>
            <div>
                <label>Name:</label>
                <input name="name" type="text" placeholder="The saga of..." @if(!empty($campaign)) value="{{$campaign->name}}" @endif;>
            </div>
            <div>
                <label>Description:</label>
                <textarea name="description">@if(!empty($campaign)){{$campaign->description}}@endif</textarea>
            </div>

            @csrf
            <footer>
            <input type="submit" class="right" value="{{empty($campaign) ? 'Create campaign' : "Save changes" }}">
            <a class="button cancel" href="{{url('/')}}">Back</a>
        </footer>
        </form>
    </div>
@endsection
