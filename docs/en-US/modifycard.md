Wechat Modify Card Field
==========================

- **card_id**: (Required) the id of card.

- **base_info**: (Required)

    - **logo_url**: (Required) logo url of card. size 300x300

    - **notice**: (Required) notice of use card.

    - **description**: (Required) description of card.

    - **service_phone**: (Optional) the phone number of shop provide service.

    - **color**: (Required) card background color, must in color list.

    - **location_id_list**: (Optional) the card can be used in shops.

    - **url_name_type**: (Optional) custom cell on card.

        `URL_NAME_TYPE_TAKE_AWAY`: 外卖

        `URL_NAME_TYPE_RESERVATION`: 在线预订

        `URL_NAME_TYPE_USE_IMMEDIATELY`: 立即使用

        `URL_NAME_TYPE_APPOINTMENT`: 在线预约

        `URL_NAME_TYPE_EXCHANGE`: 在线兑换

        `URL_NAME_TYPE_VIP_SERVICE`: 会员服务 **(Do not support in this version)**

    - **custom_url**: (with url_name_type) the url of custom cell.

    - **can_share**: (Optional) get card page can be shared or not by wecaht. true or false.

    - **can_give_friend**: (Optional) card can give friend or not. true or false.

    - **get_limit**: (Optional) the maximum number of each person can receive.

    - **date_info**: (Required)

        - **type**: (Required) date type. include `1` is Fixed date range. `2` is Fixed length of time。

        - **begin_timestamp**: begin timestamp (second). just work when type is `1`

        - **end_timestamp**: end timestamp (second). just work when type is `1`

        - **fixed_term**: the card is valid for the number of days. just work when type is `2`

        - **fixed_begin_term**: the card come into effect after the number of days. just work when type is `2`
