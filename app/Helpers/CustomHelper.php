<?php

namespace App\Helpers;

use Cache;
use DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Session;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use App\Models\Addon;
use App\Models\Setting;
use App\Models\Subscription;
use App\Models\SubscriptionPlan;
use Money\Currencies\ISOCurrencies;
use Money\Currency;
use Money\Formatter\IntlMoneyFormatter;
use Money\Money;
use NumberFormatter;
use Symfony\Component\Mime\Part\HtmlPart;

class CustomHelper {
    public static function config($key){
        $config = Setting::where('key', $key)->first();
        return $config ? $config->value : null;
    }

    public static function isModuleEnabled($module, $organizationId = null){
        $addon = Addon::where('name', $module)
            ->where('status', 1)
            ->where('is_active', 1)
            ->exists();

        $orgId = $organizationId ?? session()->get('current_organization');

        $subscription = Subscription::with('plan')
            ->where('organization_id', $orgId)
            ->first();

        if($addon){
            if ($subscription && $subscription->status === 'trial' && $subscription->valid_until > now()) {
                return true; // Allow trial users to test features
            }

            if (!$subscription || !$subscription->plan) {
                return false; // Subscription or plan not found
            }

            $plan = SubscriptionPlan::find($subscription->plan->id);

            if (!$plan) {
                return false; // Plan not found
            }

            $metadata = json_decode($plan->metadata, true);

            return isset($metadata['addons'][$module]) && $metadata['addons'][$module] === true;
        }

        return false; // Default to false if module is not enabled
    }
}
