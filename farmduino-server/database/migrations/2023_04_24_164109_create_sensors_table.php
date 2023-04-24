<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sensors', function (Blueprint $table) {
            $table->id();
            $table->string("name",45);
            $table->string("value",45);
            $table->unsignedBigInteger('greenhouses_id');
            $table->unsignedBigInteger('greenhouses_users_id');
            $table->foreign('greenhouses_id')->references('id')->on("greenhouses");
            $table->foreign('greenhouses_users_id')->references('users_id')->on("greenhouses");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sensors');
    }
};
