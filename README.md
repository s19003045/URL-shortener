# URL-shortener with mongoDB

## 目標

- 打造 URL-shortener。
- 建立 mongoDB 資料庫。
- 使用 mongoose 連接 mongoDB 資料庫。

## 網站功能

- 可將網址轉成短網址
- 透過短網址可連結至原始網站

## 後端工具

Node.js、Express、Express-handlebars
mongoDB、mongoose、express-session、
connect-flash、

## 環境建置

環境建置簡略帶過，安裝方式請參考官方網站。
依序介紹完成這支程式需要的軟體及套件：

- 安裝 VS code
  https://code.visualstudio.com/

* 安裝 VS code 常用套件：
  - Emment( Visual studio code 已經預設安裝的擴充套件，提供 快速編寫 HTML 與 CSS 的縮寫 )
    - Emment 常見縮寫： https://docs.emmet.io/cheat-sheet/
  - Bracket Pair Colorizer ( allows matching brackets to be identified with colours )
  - Live Server( 在檔案儲存的同時，就直接在瀏覽器裡同步看到結果)
  - Markdown Preview Enhanced ( 預覽 .md 檔案的 output )

- 安裝 Cmder
  https://cmder.net/
  常用指令同 windows 的 CMD
- 安裝 node.js
  https://nodejs.org/en/download/

  - 查看 node.js 版本指令：`node -v`

  - 以 node 啟動伺服器的指令如下(假設 app.js 是伺服器啟動的進入點)：`node app.js`

- 安裝 npm
  Node.js for Windows 於 0.6.2 版開始內建 npm，使用 nodejs.org 官方提供的安裝程式，不需要進一步的設定，就可以立即使用 npm 指令，對於 Windows 的開發者來說，大幅降低環境設定的問題與門檻。
  - 查看 npm 版本指令：`npm -v`
- 安裝 nodemon：啟動伺服器後，當專案資料夾中的檔案修改時，自動偵測，並自動重啟 server ，不需要手動再一次啟動 server。

  - 參考資料： https://www.npmjs.com/package/nodemon
  - 全域都可使用，不限於某專案資料夾，依下列指令安裝：`npm install -g nodemon`

  - 以 nodemon 啟動伺服器的指令如下(假設 app.js 是伺服器啟動的進入點)：`nodemon app.js`

- 安裝 mongoDB

  - 官方下載：https://www.mongodb.com/download-center/community

- 註冊 heroku 及下載 CLI
  - 註冊 heroku 帳號：https://www.heroku.com/home
  - 下載 heroku CLI：https://devcenter.heroku.com/articles/heroku-cli#download-and-install

## 安裝流程

- 下載專案
  - 從終端機下載：`https://github.com/s19003045/URL-shortener.git`
  - 直接點選 download 下載
- 開啟終端機，進入專案資料夾：
  `cd url-Shortener`
- 安裝 npm：
  `npm install 10.16.3`
- 使用 npm 安裝 所有套件：
  `npm install express express-handlebars body-parser mongoose express-session connect-flash`

- 將帳本記錄種子清單儲存至 mongoDB 資料庫：

  - `cd 專案資料夾/models/seeds`
  - 建立種子清單至本地端 mongoDB 資料庫 `node seed.js`

* 使用 package.json 的 scripts 執行：
  `npm run dev`
* server 啟動成功：
  `Express server start`
* 連線 mongoDB 成功：
  `mongoose connect success`
* 啟動瀏灠器：
  網址：http://localhost:3000

## 畫面(手機)

- mobile UI-
  ![首頁](https://github.com/s19003045/URL-shortener/blob/master/imagesForGithub/URLshortener-mobile.png)
## 畫面

- 首頁
  ![首頁](https://github.com/s19003045/URL-shortener/blob/master/imagesForGithub/URL-shortener.png)

## 開發人員

[Gary Wu](https://github.com/s19003045)
