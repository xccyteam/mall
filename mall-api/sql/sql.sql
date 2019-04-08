/*[11:03:47][7 ms]*/ CREATE TABLE `mall`.`user_info`( `user_id` INT(20) NOT NULL AUTO_INCREMENT COMMENT '用户信息', `user_tel` VARCHAR(255) COMMENT '用户手机号', `user_code` VARCHAR(255) COMMENT '登录验证码', `user_banner` VARCHAR(255) COMMENT '推荐给用户的图片链接', `user_image` VARCHAR(255) COMMENT '用户头像', PRIMARY KEY (`user_id`) ); 
/*[11:08:29][7 ms]*/ CREATE TABLE `mall`.`bannner`( `banner_id` INT(20) NOT NULL AUTO_INCREMENT COMMENT 'banner的id', `banner_img` VARCHAR(255) COMMENT '首页的轮播图', `banner_message` VARCHAR(255) COMMENT '轮播图的描述', `banner_href` VARCHAR(255) COMMENT '轮播图的跳转链接', PRIMARY KEY (`banner_id`) ); 
/*[11:17:03][7 ms]*/ CREATE TABLE `mall`.`goods`( `goods_id` INT(20) NOT NULL AUTO_INCREMENT COMMENT '商品id', `goods_img` VARCHAR(255) COMMENT '商品图', `goods_detail` VARCHAR(255) COMMENT '商品介绍', `goods_price` VARCHAR(255) COMMENT '商品现价', `goods_cost` VARCHAR(255) COMMENT '商品原价', `goods_status` VARCHAR(255) COMMENT '商品状态(0:卖光；1:有售)', `goods_number` INT(20) COMMENT '商品数量', `goods_extra` VARCHAR(255) COMMENT '商品额外属性', `goods_sales` INT(20) COMMENT '商品销量', `goods_deliver` VARCHAR(255) COMMENT '快递', `goods_express` VARCHAR(255) COMMENT '快递费用', `cart_status` VARCHAR(255) COMMENT '是否加入购物车(0:否，1:是)', `cart_number` INT(20) COMMENT '购物车数量', PRIMARY KEY (`goods_id`) ); 
/*[11:22:15][7 ms]*/ CREATE TABLE `mall`.`order`( `order_id` INT(20) NOT NULL AUTO_INCREMENT COMMENT '订单id', `address_id` INT(20) COMMENT '地址id', `goods_id` INT(20) COMMENT '商品id', `order_message` VARCHAR(255) COMMENT '留言信息', PRIMARY KEY (`order_id`) ); 
/*[11:25:22][7 ms]*/ CREATE TABLE `mall`.`address`( `id` INT(20) NOT NULL AUTO_INCREMENT COMMENT '地址id', `address_receiver` VARCHAR(255) COMMENT '收货人', `address_tel` VARCHAR(255) COMMENT '收货人手机号', `address_area` VARCHAR(255) COMMENT '区域', `address_address` VARCHAR(255) COMMENT '具体地址', `default` VARCHAR(255) COMMENT '是否默认地址(0:否，1:是)', PRIMARY KEY (`id`) ); 
/*[14:52:49][14 ms]*/ ALTER TABLE `mall`.`order` CHANGE `goods_id` `goods_nums` INT(20) NULL COMMENT '商品数量', ADD COLUMN `order_status` VARCHAR(255) NULL COMMENT '订单状态' AFTER `order_message`, ADD COLUMN `goods_img` VARCHAR(255) NULL COMMENT '商品图片' AFTER `order_status`, ADD COLUMN `goods_detail` VARCHAR(255) NULL COMMENT '商品介绍' AFTER `goods_img`, ADD COLUMN `goods_price` VARCHAR(255) NULL COMMENT '商品价格' AFTER `goods_detail`; 
/*[14:59:17][6 ms]*/ CREATE TABLE `mall`.`cart`( `cart_id` INT(20) NOT NULL AUTO_INCREMENT, `goods_id` INT(20) COMMENT '商品id', `goods_number` INT(20) COMMENT '商品数量', `goods_price` VARCHAR(255) COMMENT '商品价格', PRIMARY KEY (`cart_id`) ); 
/*[15:03:32][13 ms]*/ ALTER TABLE `mall`.`goods` DROP COLUMN `cart_status`, DROP COLUMN `cart_number`; 
/*[15:11:42][12 ms]*/ ALTER TABLE `mall`.`cart` ADD FOREIGN KEY (`goods_id`) REFERENCES `mall`.`goods`(`goods_id`); 
/*[15:13:17][13 ms]*/ ALTER TABLE `mall`.`order` ADD CONSTRAINT `order_address_id` FOREIGN KEY (`address_id`) REFERENCES `mall`.`address`(`id`); 
/*[15:51:14][13 ms]*/ ALTER TABLE `mall`.`cart` ADD CONSTRAINT `cart_goods_id` FOREIGN KEY (`goods_id`) REFERENCES `mall`.`goods`(`goods_id`), DROP FOREIGN KEY `cart_ibfk_1`; 
/*[15:53:03][11 ms]*/ ALTER TABLE `mall`.`cart` ADD COLUMN `user_id` INT(20) NULL COMMENT '用户id' AFTER `goods_price`, ADD CONSTRAINT `cart_user_id` FOREIGN KEY (`user_id`) REFERENCES `mall`.`user_info`(`user_id`); 