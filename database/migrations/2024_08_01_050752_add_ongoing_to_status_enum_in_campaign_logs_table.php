<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('campaign_logs', function (Blueprint $table) {
            DB::statement("ALTER TABLE campaign_logs MODIFY COLUMN status ENUM('pending', 'success', 'failed', 'ongoing') NOT NULL");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('campaign_logs', function (Blueprint $table) {
            DB::statement("ALTER TABLE campaign_logs MODIFY COLUMN status ENUM('pending', 'success', 'failed') NOT NULL");
        });
    }
};
