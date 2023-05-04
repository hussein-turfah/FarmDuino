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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('first_name',45);
            $table->string('last_name',45);
            $table->string('email',45)->unique();
            $table->string('password');
            $table->string('salt',45);
            $table->date('dob');
            $table->string('favorite_color',45);
            $table->boolean('is_deleted')->default(0);
            $table->boolean('is_admin')->default(0);
            $table->string('plant_name',45);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
