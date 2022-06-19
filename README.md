# 我的餐廳清單 2.0

## 簡介

可以瀏覽餐廳名稱、類別和評分，並可查看詳細資訊，以及可讓使用者透過關鍵字搜尋。
更新後可新增、編輯和刪除餐廳。

## 功能

1. 瀏覽所有餐廳的名稱、類別、相片和評分
2. 可點擊觀看更多資訊，如餐廳介紹、電話和地址
3. 可利用關鍵字搜尋
4. 可透過連結至該餐廳的 Google Map 網頁
5. 可新增、編輯和刪除餐廳
6. 需要註冊後登入才可使用上述功能

## 開始使用

1. 進入"restaurant_List"資料夾
2. 安裝所需套件

   ```
   npm install
   ```

3. 依照 .env.example 建立 .env 文件，並填寫需要的環境變數
4. 產生種子資料

   ```
   npm run seed
   ```

5. 開啟伺服器

   ```
   npm run dev
   ```

6. 打開瀏覽器輸入網址 http://localhost:3000
7. 關閉伺服器請按 `ctrl + c`

## 套件版本

1. bcryptjs: 2.4.3
2. body-parser: 1.20.0
3. connect-flash: 0.1.1
4. dotenv: 16.0.1
5. express: 4.16.4
6. express-handlebars: 4.0.2
7. express-session: 1.17.1
8. method-override: 3.0.0
9. mongoose: 5.9.17
10. passport: 0.4.1
11. passport-facebook: 3.0.0
12. passport-local: 1.0.0
