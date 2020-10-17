<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SlugsAndGeo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('entities', function (Blueprint $table) {
            $table->string('slug')->nullable()->after('name');
            $table->text('geo')->nullable()->after('type');
        });
        // SQL lite doesn't create other columns if this is run together
        Schema::table('entities', function (Blueprint $table) {
            $table->renameColumn('type', 'category');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('entities', function (Blueprint $table) {
            $table->dropColumn('slug');
            $table->dropColumn('geo');
            $table->renameColumn('category', 'type');
        });
    }
}
