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
        Schema::create('actuators', function (Blueprint $table) {
            $table->id();
            $table->string("name",45);
            $table->string("status",45);
            $table->unsignedBigInteger('greenhouses_id');
            $table->unsignedBigInteger('greenhouses_users_id');
            $table->foreign('greenhouses_id')->references('id')->on("greenhouses")->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('greenhouses_users_id')->references('users_id')->on("greenhouses")->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('actuators');
    }
};
