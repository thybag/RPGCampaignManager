<?php

use App\Models\Campaign;
use Faker\Generator as Faker;

$factory->define(Campaign::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'description' => $faker->text(),
    ];
});
