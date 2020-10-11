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
            $table->string('slug')->after('name')->default('welcome-to-');
            $table->text('geo')->nullable()->after('type');
        });

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
