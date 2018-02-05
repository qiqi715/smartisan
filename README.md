# 一、smartisan
电商购物系统

## 1.1.安装前端程序
### 1. git clone
`git clone https://github.com/qiqi715/smartisan.git` 
### 2. install 依赖
`npm install` or `yarn install`
### 3. 启动前端程序
在当前前端项目目录下运行：`yarn start` or `npm start`

## 1.2.页面功能分析
- 登录页
- 商品列表
- 商品详情
- 购物车
- 下单
    - 新地址填写
- 支付
- 个人中心
    - 我的订单
    - 我的地址
        - 新地址填写
    
## 1.3.路由设计
- 登录页 ： /login
- 商品列表 : /
- 商品详情 : /detail/:id
- 购物车 : /cart
- 下单 : /checkout
    - 新地址填写 : /user/checkout/prop
- 支付 : /payment
- 个人中心
    - 我的订单 : /user/order
    - 我的地址 : /user/address
        - 新地址填写 : /user/address/prop

# 二、smartisan-backend后台程序
[github 下载地址](https://gitlab.com/zMouse/smartisan-backend)

## 2.1.准备
- 工具
     - 数据库管理：Navicat Premium
     - python
     <br/>
     
- 搭建开发所需要的后端环境
     - node：v7+
     - python：v2
     <br/>
     
- 安装 python（注：MAC用户不需要安装）
> 注意：在安装时候选择完安装目录以后，会让我们选择安装python的组件，
选中最后一项：Add python.exe to Path

- 安装 Navicat Premium

## 2.2.安装后端程序
### 1. git clone
`git clone https://gitlab.com/zMouse/smartisan-backend.git` 
> 注意：如果有问题的话，那么首先，删除项目中node_modules目录

### 2. install 
`npm install` or `yarn install`
### 3. 使用数据库管理工具对数据进行查看
该项目的数据库文件存在项目 db 目录下：db.db，使用 Navicat Premium 来打开
>万一数据库数据错误，修复：
通过命令行进入项目的 tools 目录，在该目录下有一个文件：create_data.js，使用node命令执行该文件就可以初始化修复数据。
`node create_data`

### 4. 启动后端程序
在当前后端项目目录下运行：`node server`

## 2.3.documemt
[Wiki document](https://gitlab.com/zMouse/smartisan-backend/wikis/home)