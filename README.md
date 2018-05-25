在庫管理システム（仮）
======


動作環境
--------
* node v6.12.x
  * 6.12.3 で動作確認済み
* npm 4.x 以上
  * 4.6.1 で動作確認済み
* yarn 1.2.1 以上
  * 1.3.2 で動作確認済み

初回起動セットアップ
----------------

1. node をインストール
  * Mac/Linux なら [nodebrew](https://github.com/hokaccha/nodebrew) 等
  * Win なら [nodist](https://github.com/marcelklehr/nodist) 等
1. npm のアップグレード

  ```bash
  npm install -g npm@4
  ```

1. yarn をインストール
  * https://yarnpkg.com/en/docs/install
1. バージョンチェック

  ```bash
  # node のバージョンチェック
  node -v
  # npm のバージョンチェック
  npm -v
  # yarn のバージョンチェック
  yarn -v
  ```

1. clone

  ```bash
  cd /path/to/hoge
  git clone git@github.com:shinichi0617/kdtrust-inventry-control-front.git
  cd centra
  ```

1. 依存関係のアップデート

  ```bash
  yarn
  ```

1. 起動

  ```bash
  npm start
  ```


## おかしくなったときは

```bash
npm clean
```

まだ正常動作しない場合は、依存しているモジュールを再インストールする

```bash
# node_modules 等をまとめて削除
# 実際に実行するときは -n オプションを外す
git clean -fdxn

yarn
```
