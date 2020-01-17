# Angular学習まとめ

UdemyのAngular学習コースで習得した内容を整理するためのメモである。

## Angularの特徴

- クロスプラットフォーム
  - PWA
  - Electron
- パフォーマンス
  - Code generation (AOT)
  - Universal
- 生産性
  - Templates
  - Angular CLI
  - IDE (Vscode)
- テストビリティ
  - Unit Test (Karma)
  - E2E Test (Protractor)

### [TypeScript](https://www.typescriptlang.org/index.html)

オブジェクト指向言語(Java, C#)できる人と親和性が高い。

## 環境構築

Windows 10 で作業を行う。事前に[chocolatey](https://chocolatey.org/)をインストールしておく。

### chocolateyでインストール

```bash
## 開発環境と必要ツールインストール
choco install nodejs-lts notepadplusplus vscode git -y

## 自動更新のソフトをchocoから管理外にする
choco uninstall vscode --skip-autouninstaller
```

### npmからAngular Cliをインストール

```bash
npm i -g @angular/cli
```

### vscodeの拡張機能をインストール

- Angular Extension Pack

## Hello World

### プロジェクト作成

```bash
## プロジェクト作成
ng new demo1

## 起動
cd demo1
npm start
```

### プロジェクト構造

demo1
├── angular.json (Angular設定ファイル)
├── browserslist
├── e2e (E2Eテスト)
│   ├── protractor.conf.js (E2Eテスト設定ファイル)
│   ├── src
│   │   ├── app.e2e-spec.ts
│   │   └── app.po.ts
│   └── tsconfig.json
├── karma.conf.js (Unitテスト設定ファイル)
├── package-lock.json
├── package.json (npm設定ファイル)
├── src
│   ├── app
│   │   ├── app-routing.module.ts
│   │   ├── app.component.css (CSS)
│   │   ├── app.component.html (HTML)
│   │   ├── app.component.spec.ts　(Unit Test Code)
│   │   ├── app.component.ts (Class)
│   │   ├── app.module.ts
│   │   └── page1
│   │       ├── page1.component.css
│   │       ├── page1.component.html
│   │       ├── page1.component.spec.ts
│   │       └── page1.component.ts
│   ├── assets (静的リソース)
│   │   ├── fonts
│   │   ├── images
│   │   ├── scripts
│   │   └── styles
│   ├── environments (環境変数)
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts (古いブラウザ対応必要なときの設定ファイル)
│   ├── styles.css
│   └── test.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
└── tslint.json
