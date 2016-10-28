<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMarkinsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('markins', function (Blueprint $table) {
            $table->increments('markin_id');
            $table->integer('user_id')->nullable();
            $table->string('title')->nullable();
            $table->date('when')->nullable();
            $table->string('status')->nullable();
            $table->string('priority')->nullable();
            $table->text('description')->nullable();
            $table->float('latitude')->nullable();
            $table->float('longitude')->nullable();
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('markins');
    }
}
