# 02-routing-json

Expressの基本的なルーティング機能と、JSON形式でのレスポンス返却方法を学ぶためのサンプルです。

## 機能

このアプリケーションは、以下の2つのエンドポイント（ルート）を提供します。

1.  **ルート (`/`)**
    -   `GET` リクエストを受け付けます。
    -   簡単なテキストメッセージを返します。
    -   アクセスURL: `http://localhost:3000/`

2.  **ユーザーAPI (`/api/users`)**
    -   `GET` リクエストを受け付けます。
    -   ダミーのユーザーデータ（IDと名前の配列）をJSON形式で返します。
    -   アクセスURL: `http://localhost:3000/api/users`

## 使い方

1.  **依存関係のインストール** (まだの場合)
    ```bash
    npm install
    # または
    yarn install
    ```

2.  **TypeScriptのコンパイル**
    ```bash
    npx tsc src/02-routing-json/app.ts --outDir dist/02-routing-json
    ```
    (プロジェクトの設定によっては `tsconfig.json` を使って `tsc` だけでコンパイルできる場合もあります)

3.  **サーバーの起動**
    ```bash
    node dist/02-routing-json/app.js
    ```

4.  **アクセス**
    -   ブラウザや `curl` コマンドなどで上記のURLにアクセスして、動作を確認してください。
    -   例:
        ```bash
        curl http://localhost:3000/
        curl http://localhost:3000/api/users
        ```

## 学べること

-   `app.get()` を使った特定のパスへのGETリクエストの処理方法
-   複数のルートを定義する方法
-   `response.send()` を使ったテキストレスポンスの返却
-   `response.json()` を使ったJSONレスポンスの返却 