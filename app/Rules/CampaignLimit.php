<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use App\Models\User;
use app\Services\SubscriptionService;

class CampaignLimit implements Rule
{
    protected $ignoreId;

    public function __construct($ignoreId = null)
    {
        $this->ignoreId = $ignoreId;
    }
    
    public function passes($attribute, $value)
    {
        $organizationId = session()->get('current_organization');

        return !SubscriptionService::isSubscriptionFeatureLimitReached($organizationId, 'campaign_limit');
    }

    public function message()
    {
        return __('You have reached your limit of campaigns. Please upgrade your account to add more!');
    }
}
