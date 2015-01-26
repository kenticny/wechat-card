微信修改卡券字段
==========================

- **card_id**: (必填) 卡券ID.

- **base_info**: (必填)

    - **logo_url**: (必填) 卡券LOGO，尺寸为 300x300

    - **notice**: (必填) 卡券使用提醒.

    - **description**: (必填) 使用说明.

    - **service_phone**: (可选) 服务电话.

    - **color**: (必填) 卡券背景颜色，必须在颜色列表中选择.

    - **location_id_list**: (可选) 门店ID，显示在卡券适用门店中.

    - **url_name_type**: (可选) 自定义CELL.

        `URL_NAME_TYPE_TAKE_AWAY`: 外卖

        `URL_NAME_TYPE_RESERVATION`: 在线预订

        `URL_NAME_TYPE_USE_IMMEDIATELY`: 立即使用

        `URL_NAME_TYPE_APPOINTMENT`: 在线预约

        `URL_NAME_TYPE_EXCHANGE`: 在线兑换

        `URL_NAME_TYPE_VIP_SERVICE`: 会员服务 **(当前版本不支持)**

    - **custom_url**: (和url_name_type同时存在) 自定义CELL跳转的链接.

    - **can_share**: (可选) 卡券领取页面是否可以分享。true 或者 false.

    - **can_give_friend**: (可选) 卡券是否可以赠送. true 或者 false.

    - **get_limit**: (可选) 每人可以领取的最大数量.

    - **date_info**: (必填)

        - **type**: (必填) 日期类型. 1:固定日期区间,2:固定时长 (自领取后按天算)。

        - **begin_timestamp**: 起始时间戳 (秒). 仅在固定日期区间类型生效

        - **end_timestamp**: 结束时间戳 (秒). 仅在固定日期区间类型生效

        - **fixed_term**: 自领取后多少天内有效（天）. 仅在固定时长类型生效

        - **fixed_begin_term**: 自领取后多少天开始生效（天）. 仅在固定时长类型生效