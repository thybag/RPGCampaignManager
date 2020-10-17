<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('images', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('campaign_id');
            $table->string('name', 100);
            $table->string('path', 100);
            $table->timestamps();
            $table->foreign('campaign_id')->references('id')->on('campaigns');
        });

        Schema::table('maps', function (Blueprint $table) {
            $table->dropColumn('path');
            $table->unsignedBigInteger('image_id')->nullable()->after('campaign_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('images');
    }
}
