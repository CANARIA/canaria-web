# canaria-web

CANARIAのwebアプリケーションです。
このプロジェクトはNodeとYarnに依存しているので、先にインストールしてください。

* Node v7.4.0
* Yarn v0.19.1

## get started

まず初めにプロジェクトのルートにconfig.jsを設置する必要があります。  
config.jsの中身に関しては [@nabeliwo](https://github.com/nabeliwo) まで。

```
$ git clone git@github.com:CANARIA/canaria-web.git
$ cd canaria-web
$ touch config.js # 別途中身記述
$ yarn install

# ビルド
$ docker build -t canaria-web:latest .

# コンテナの起動
$ docker run -d -it -v $(pwd):/node -p 3000:3000 canaria-web:latest /bin/sh

# Nodeサーバ起動
$ yarn start
```
