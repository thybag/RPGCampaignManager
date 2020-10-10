@extends('layouts.app')

@section('content')
<div class="container">
    <form class="form" method="POST" action="{{ route('register') }}">
        <header>
            <h2>{{ __('Register') }}</h2>
        </header>
        <div>
            <label for="name">Name:</label>
            <input id="name" type="text" class="@error('name') invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

            @error('name') <span class="errors">{{ $message }}</span> @enderror
        </div>
        <div>
            <label for="email">Email:</label>
            <input id="email" type="email" class="@error('email') invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

            @error('email') <span class="errors">{{ $message }}</span> @enderror
        </div>
        <div>
            <label for="password">Password:</label>
            <input id="password" type="password" class="@error('password') invalid @enderror" name="password" required autocomplete="new-password">
            @error('password') <span class="errors">{{ $message }}</span> @enderror
        </div>
        <div>
            <label for="password-confirm">{{ __('Confirm Password') }}</label>
            <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">             
        </div>

        @csrf

        <footer>
            <input type="submit" class="full" value="Create your account" />
        </footer>
    </form>
</div>
@endsection
