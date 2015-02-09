微信创建卡券字段
==========================

- **card_type**: 卡券类型包括 `CASH`, `GROUPON`, `DISCOUNT`, `GIFT`, `GENERAL_COUPON`, `LUCK_MONEY`

- **base_info**: 

    - **logo_url**: (必填) 卡券LOGO，尺寸为 300x300 

    - **code_type**: (必填) 卡券的显示类型:

         `CODE_TYPE_TEXT`: 仅显示文本

         `CODE_TYPE_BARCODE`: 显示条形码和文本

         `CODE_TYPE_QRCODE`: 显示二维码和文本

         `CODE_TYPE_ONLY_QRCODE`: 仅显示二维码

         `CODE_TYPE_ONLY_BARCODE`: 仅显示条形码

    - **brand_name**: (必填) 商户名.

    - **title**: (必填) 卡券名称.

    - **sub_title**: (可选) 卡券副标题.

    - **color**: (必填) 卡券背景颜色，必须在颜色列表中选择.

    - **notice**: (必填) 卡券使用提醒.

    - **description**: (必填) 使用说明.

    - **date_info**: (必填)

        - **type**: (必填) 日期类型. 1:固定日期区间,2:固定时长 (自领取后按天算)。

        - **begin_timestamp**: 起始时间戳 (秒). 仅在固定日期区间类型生效

        - **end_timestamp**: 结束时间戳 (秒). 仅在固定日期区间类型生效

        - **fixed_term**: 自领取后多少天内有效（天）. 仅在固定时长类型生效

        - **fixed_begin_term**: 自领取后多少天开始生效（天）. 仅在固定时长类型生效

    - **sku**:  

        - **quantity**: (必填) 卡券库存数量.

    - **location_id_list**: (可选) 门店ID，显示在卡券适用门店中.

    - **use_custom_code**: (可选) 自定义code. true 或者 false.

    - **bind_openid**: (可选) 指定领取用户.

    - **can_share**: (可选) 卡券领取页面是否可以分享。true 或者 false

    - **can_give_friend**: (可选) 卡券是否可以赠送. true 或者 false.

    - **get_limit**: (可选) 每人可以领取的最大数量 (不填写默认为 sku.quantity 的值).

    - **service_phone**: (可选) 服务电话.

    - **source**: (可选) 第三方来源名.

    - **url_name_type**: (可选) 自定义CELL.

        `URL_NAME_TYPE_TAKE_AWAY`: 外卖

        `URL_NAME_TYPE_RESERVATION`: 在线预订

        `URL_NAME_TYPE_USE_IMMEDIATELY`: 立即使用

        `URL_NAME_TYPE_APPOINTMENT`: 在线预约

        `URL_NAME_TYPE_EXCHANGE`: 在线兑换

        `URL_NAME_TYPE_VIP_SERVICE`: 会员服务 **(当前版本不支持)**

    - **custom_url**: (和url_name_type同时存在) 自定义CELL跳转的链接.

- **special_info**:

    `general_coupon`: 

      - **default_detail**: (必填) 描述文本.

    `groupon`:

      - **deal_detail**: (必填) 团购券专用,团购详情.

    `gift`: 

      - **gift**: (必填) 礼品券专用,表示礼品名字.

    `cash`: 

      - **least_cost**: (可选) 代金券专用,表示起用金额(单位为分)

      - **reduce_cost**: (必填) 代金券专用,表示减免金额(单位为分)

    `discount`:

      - **discount**: (必填) 折扣券专用,表示打折额度(百 分比)。填 30 就是七折.



