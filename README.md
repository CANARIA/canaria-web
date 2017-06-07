# canaria-web

CANARIAのwebアプリケーションです。  
このプロジェクトはNodeに依存しているので、先にインストールしてください。

* Node v8.0.0

Nodeは随時アップデートしていきます。  
バージョン管理ツールを使うのがおすすめです。1番良いのは [nodebrew](https://github.com/hokaccha/nodebrew) かも。

## タスクについて

## get started

```
$ git clone git@github.com:CANARIA/canaria-web.git
$ cd canaria-web
$ npm install

# ビルド
$ docker build -t canaria-web:latest .

# コンテナの起動
$ docker run -d -it -v $(pwd):/node -p 3000:3000 canaria-web:latest /bin/sh

# Nodeサーバ起動
$ npm start
```
