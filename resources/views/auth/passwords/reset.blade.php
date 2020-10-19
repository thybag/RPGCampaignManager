@extends('layouts.app')

@section('content')
<div class="container">
    <form class="form" method="POST" action="{{ route('password.update') }}">
        <header>
            <h2>{{ __('Reset Password') }}</h2>
        </header>

        <div>
            <label for="password">New Password:</label>
            <input id="password" type="password" class="@error('password') invalid @enderror" name="password" required autofocus>
             @error('password') <span class="errors">{{ $message }}</span> @enderror
        </div>
        <div>
            <label for="password-confirm">Confirm password:</label>
            <input id="password-confirm" type="password" name="password_confirmation" required>
        </div>

        @csrf
        <input id="email" type="hidden" name="email" value="{{ $email }}" required >
        <input type="hidden" name="token" value="{{ $token }}">
        <footer>
            <input type="submit" class="full" value="{{ __('Reset Password') }}" />
        </footer>
    </form>
</div>
@endsection
