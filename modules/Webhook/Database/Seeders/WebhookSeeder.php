<?php

namespace Modules\Webhook\Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Addon;

class WebhookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Addon::where('name', 'Webhooks')->update([
            'metadata' => '{"input_fields":[{"element":"toggle","type":"checkbox","name":"webhook","label":"Enable Webhooks","class":"col-span-2"}]}',
            'status' => 1,
        ]);
    }
}
