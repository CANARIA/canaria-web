# canaria-web

CANARIAのwebアプリケーションです。
このプロジェクトはNodeとYarnに依存しているので、先にインストールしてください。

* Node v7.7.3
* Yarn v0.21.3

NodeとYarnは随時アップデートしていきます。

## タスクについて

## get started

```
$ git clone git@github.com:CANARIA/canaria-web.git
$ cd canaria-web
$ yarn install

# ビルド
$ docker build -t canaria-web:latest .

# コンテナの起動
$ docker run -d -it -v $(pwd):/node -p 3000:3000 canaria-web:latest /bin/sh

# Nodeサーバ起動
$ yarn start
```
