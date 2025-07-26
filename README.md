# 気象データ比較アプリ（フロントエンド）

アプリ URL : [https://d3najlyap0uyr2.cloudfront.net](https://d3najlyap0uyr2.cloudfront.net)

![アプリイメージ](./docs/app_image.png)

## 📌 概要

このアプリは日本の主要都市の気象データを比較表示する Web アプリケーションです。  
フロントエンドは React と Tailwind CSS をベースに構築されています。

- 各地の気象データを比較表示
  - 現在の天気
    - 天気、気温、湿度を表示
    - 1 時間ごとに更新
  - 日次レポート
    - 任意の日付を選択し、その日の気象データを表示
    - 気温変化グラフ、データサマリー（平均気温など）
  - 週次レポート
    - 任意の週を選択し、その週の気象データを表示
    - 気温変化グラフ、気温ランキング、データサマリー（平均気温など）
- レスポンシブ対応（PC・スマホ両対応）
- API を通じてバックエンドの Lambda 関数と連携

## ⚙️ 使用技術

| 分類         | 技術要素                |
| ------------ | ----------------------- |
| 言語         | TypeScript              |
| ライブラリ   | React, react-router-dom |
| スタイル     | Tailwind CSS            |
| 日付選択     | react-datepicker        |
| グラフ       | recharts                |
| 開発環境     | Docker, Docker Compose  |
| ホスティング | S3 + CloudFront         |

## 🌤️ システム構成図

![システム構成図](./docs/system_configuration_diagram.png)

## 📜 ライセンス

このプロジェクトは MIT ライセンスのもとで公開されています。
