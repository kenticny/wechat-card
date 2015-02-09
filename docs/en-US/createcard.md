Wechat Create Card Field
==========================

- **card_type**: card type include `CASH`, `GROUPON`, `DISCOUNT`, `GIFT`, `GENERAL_COUPON`, `LUCK_MONEY`

- **base_info**: 

    - **logo_url**: (Required) logo url of card. size 300x300 

    - **code_type**: (Required) code display type. include:

         `CODE_TYPE_TEXT`: just show code text

         `CODE_TYPE_BARCODE`: show barcode with text

         `CODE_TYPE_QRCODE`: show qrcode with text

         `CODE_TYPE_ONLY_QRCODE`: show qrcode without text

         `CODE_TYPE_ONLY_BARCODE`: show barcode without text

    - **brand_name**: (Required) brand name.

    - **title**: (Required) card name.

    - **sub_title**: (Optional) card sub title.

    - **color**: (Required) card background color, must in color list.

    - **notice**: (Required) notice of use card.

    - **description**: (Required) description of card.

    - **date_info**: (Required)

        - **type**: (Required) date type. include `1` is Fixed date range. `2` is Fixed length of time。

        - **begin_timestamp**: begin timestamp (second). just work when type is `1`

        - **end_timestamp**: end timestamp (second). just work when type is `1`

        - **fixed_term**: the card is valid for the number of days. just work when type is `2`

        - **fixed_begin_term**: the card come into effect after the number of days. just work when type is `2`

    - **sku**:  

        - **quantity**: (Required) the stock of card code.

    - **location_id_list**: (Optional) the card can be used in shops.

    - **use_custom_code**: (Optional) custom code. true or false.

    - **bind_openid**: (Optional) specifies the user to get card. 

    - **can_share**: (Optional) get card page can be shared or not by wecaht. true or false.

    - **can_give_friend**: (Optional) card can give friend or not. true or false.

    - **get_limit**: (Optional) the maximum number of each person can receive. (default equals to sku.quantity).

    - **service_phone**: (Optional) the phone number of shop provide service.

    - **source**: (Optional) third-party service providers.

    - **url_name_type**: (Optional) custom cell on card.

        `URL_NAME_TYPE_TAKE_AWAY`: 外卖

        `URL_NAME_TYPE_RESERVATION`: 在线预订

        `URL_NAME_TYPE_USE_IMMEDIATELY`: 立即使用

        `URL_NAME_TYPE_APPOINTMENT`: 在线预约

        `URL_NAME_TYPE_EXCHANGE`: 在线兑换

        `URL_NAME_TYPE_VIP_SERVICE`: 会员服务 **(Do not support in this version)**

    - **custom_url**: (with url_name_type) the url of custom cell.

- **special_info**:

    `general_coupon`: 

      - **default_detail**: (Required) the description of general coupon.

    `groupon`:

      - **deal_detail**: (Required) the description of groupon.

    `gift`: 

      - **gift**: (Required) the name of gift.

    `cash`: 

      - **least_cost**: (Optional) 

      - **reduce_cost**: (Required) 

    `discount`:

      - **discount**: (Required) 30% off is 30.



