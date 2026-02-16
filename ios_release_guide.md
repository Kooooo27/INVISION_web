# iOSアプリ リリースガイド

Webアプリ（HTML/JS）をiOSアプリとしてリリースするためのステップバイステップガイドです。

## 1. 準備段階（Apple Developer Program）

App Storeでアプリを公開するには、Appleの開発者プログラムへの登録（有料）が必須です。

- [ ] **Apple Developer Programへの登録**
    - **費用**: 年額 約$99 USD（約15,000円〜）
    - **必要書類**: 個人事業主（Individual）として登録する場合、本人確認書類が必要。法人の場合はD-U-N-S Numberが必要。
    - **URL**: [https://developer.apple.com/jp/programs/](https://developer.apple.com/jp/programs/)
    - **注意**: 登録完了まで数日〜数週間かかる場合があります。早めの登録をおすすめします。

## 2. アプリの技術的な変換（今回の場合）

現在のWebアプリをiOSアプリ（Xcodeプロジェクト）に変換します。最も手軽な方法は「Capacitor」を使用することです。

- [ ] **Capacitorの導入**
    - `npm` プロジェクトとして初期化 (`npm init -y`)
    - Capacitorのインストール (`npm install @capacitor/core @capacitor/cli @capacitor/ios`)
    - iOSプラットフォームの追加 (`npx cap add ios`)
- [ ] **アプリアイコン・スプラッシュ画面の作成**
    - アイコン（1024x1024px）
    - スプラッシュ画面（起動画面）
    - ツール: `cordova-res` や `capacitor-assets` を使うと自動生成できます。
- [ ] **Xcodeでの設定**
    - `Info.plist` の編集（プライバシー設定など）
    - バージョン番号の設定
    - Bundle Identifier（例: `com.koichirotanaka.invision`）の設定
- [ ] **実機テスト**
    - iPhoneをMacに接続し、Xcodeからビルドして実機で動作確認。

> ※この技術的な変換作業は、私がサポート可能です。

## 3. ストア公開情報の準備（App Store Connect）

開発者登録が完了したら、App Store Connect（管理画面）でアプリの情報を入力します。

- [ ] **プライバシーポリシーURLの用意**  
    - **重要**: アプリ内だけでなく、**一般公開されたWeb上のURL**が必要です。
    - 内容: 個人情報の取り扱い（収集するデータ、利用目的など）
    - 無料のホスティング（GitHub PagesやNetlify）にHTMLファイルを置くだけでOKです。
- [ ] **サポートURL**
    - ユーザーからの問い合わせ窓口となるWebページ（プライバシーポリシーと同じページでも可）。
- [ ] **スクリーンショット**
    - 必須サイズ: 6.5インチ（iPhone 14 Pro Max等）、5.5インチ（iPhone 8 Plus等）
    - iPad対応にする場合はiPad用も必要。
    - シミュレーターで撮影するのが最も綺麗です。
- [ ] **アプリ説明文・キーワード**
    - 検索されやすいキーワードを選定。

## 4. 審査提出（Review）

- [ ] **アーカイブとアップロード**
    - Xcodeで「Archive」を実行し、App Store Connectへアップロード。
- [ ] **審査リクエスト**
    - App Store Connectでビルドを選択し、審査へ提出。
    - 審査期間: 通常1〜2日（初回は詳しく見られるため長引くこともあります）。
- [ ] **リリース**
    - 審査通過後、「リリース」ボタンを押すとApp Storeに公開されます。

---

## 次のアクション（提案）

もしよろしければ、**ステップ2（技術的な変換）**を私が実行しましょうか？以下の作業を行います：

1.  プロジェクトを `npm` 管理化する
2.  Capacitorをインストールし、iOSプロジェクトを作成する
3.  アイコン設定の雛形を作る

実行してよければ、「iOS化を進めて」とおっしゃってください。
