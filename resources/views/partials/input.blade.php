@php
$value = old($name) ?? (!empty($model) ? $model->$name : '');
@endphp

<label>{{$label}}</label>
@if($type == 'textarea')
	<textarea name="{{$name}}" placeholder="{{$placeholder??''}}" class="@error($name) invalid @enderror">{{$value}}</textarea>
@else
	<input name="{{$name}}" type="{{$type}}" placeholder="{{$placeholder??''}}"  value="{{$value}}" class="@error($name) invalid @enderror">
@endif

@error($name) <span class="errors">{{ $message }}</span> @enderror