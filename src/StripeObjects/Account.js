export const stripeAccount = {
    "id": "acct_1KHbbdEJ9Q1w9DUS",
    "object": "account",
    "business_profile": {
      "mcc": null,
      "name": null,
      "product_description": null,
      "support_address": null,
      "support_email": null,
      "support_phone": null,
      "support_url": null,
      "url": null
    },
    "capabilities": {
      "card_payments": "active",
      "transfers": "active"
    },
    "charges_enabled": false,
    "controller": {
      "type": "application",
      "is_controller": true
    },
    "country": "US",
    "default_currency": "usd",
    "details_submitted": false,
    "email": "juanjose@saldada.com",
    "external_accounts": {
      "object": "list",
      "data": [],
      "has_more": false,
      "url": "/v1/accounts/acct_1KHbbdEJ9Q1w9DUS/external_accounts"
    },
    "future_requirements": {
      "alternatives": [],
      "current_deadline": null,
      "currently_due": [],
      "disabled_reason": null,
      "errors": [],
      "eventually_due": [],
      "past_due": [],
      "pending_verification": []
    },
    "metadata": {},
    "payouts_enabled": false,
    "requirements": {
      "alternatives": [],
      "current_deadline": null,
      "currently_due": [
        "business_profile.product_description",
        "business_profile.support_phone",
        "business_profile.url",
        "external_account",
        "tos_acceptance.date",
        "tos_acceptance.ip"
      ],
      "disabled_reason": "requirements.past_due",
      "errors": [],
      "eventually_due": [
        "business_profile.product_description",
        "business_profile.support_phone",
        "business_profile.url",
        "external_account",
        "tos_acceptance.date",
        "tos_acceptance.ip"
      ],
      "past_due": [],
      "pending_verification": []
    },
    "settings": {
      "bacs_debit_payments": {},
      "branding": {
        "icon": null,
        "logo": null,
        "primary_color": null,
        "secondary_color": null
      },
      "card_issuing": {
        "tos_acceptance": {
          "date": null,
          "ip": null
        }
      },
      "card_payments": {
        "decline_on": {
          "avs_failure": false,
          "cvc_failure": true
        },
        "statement_descriptor_prefix": null
      },
      "dashboard": {
        "display_name": null,
        "timezone": "America/New_York"
      },
      "payments": {
        "statement_descriptor": null,
        "statement_descriptor_kana": null,
        "statement_descriptor_kanji": null
      },
      "payouts": {
        "debit_negative_balances": true,
        "schedule": {
          "delay_days": 2,
          "interval": "daily"
        },
        "statement_descriptor": null
      },
      "sepa_debit_payments": {}
    },
    "type": "standard"
  }