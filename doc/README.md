# Angular学習まとめ

UdemyのAngular学習コースで習得した内容を整理するためのメモである。

## Get Started

### Angularの特徴

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
- [TypeScript](https://www.typescriptlang.org/index.html)
  - オブジェクト指向言語(Java, C#)できる人と親和性が高い
  - TypeScriptはあくまでサポート、JavaScriptできるに越したことない

### 環境構築

Windows 10 で作業を行う。事前に[chocolatey](https://chocolatey.org/)をインストールしておく。

#### chocolateyでインストール

```bash
## 開発環境と必要ツールインストール
choco install nodejs-lts notepadplusplus vscode git -y

## 自動更新のソフトをchocoから管理外にする
choco uninstall vscode --skip-autouninstaller
```

#### npmからAngular Cliをインストール

```bash
npm i -g @angular/cli
```

#### vscodeの拡張機能をインストール

- Angular Extension Pack

## Basic

### プロジェクト作成

```bash
## プロジェクト作成
ng new demo1

## 起動
cd demo1
npm start
```

### プロジェクト構造

```
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
```

### ModuleとComponent

![ModuleComponent](2020-01-17-18-09-13.png)

### 基本コマンド

Component生成

```bash
ng generate component page1

## 簡略版
ng g c page2
```

発行

```bash
ng build

## 製品版(JavaScriptが圧縮される)
ng build --prod
```

[Angularのバージョンアップサイト](https://update.angular.io/)

```bash
## local angular
ng update

## global angular cli update
npm list -g --depth=0
npm outdated -g
npm i -g @angular/cli
```

## Data Binding

### Interprolation

`{{property}}`

- html

  ```html
  <p>{{title}}</p>
  ```

- ts

  ```ts
  export class AppComponent {
    title = 'demo1';
  }
  ```

### Property Binding

`[property]="statement"`

- html

  ```html
  <a [href]="url" [attr.data-title]="title">{{title}}</a>
  ```

- ts

  ```ts
  export class AppComponent {
    title = 'demo1';
    url = 'http://dongsu.dev/';
  }
  ```

### Event Binding

`(click)="method()"`

- html

  ```html
  <button (click)="doCancel()">Cancel Edit</button>
  ```

- ts

  ```ts
  export class AppComponent {
    doCancel() {
      // Dosomething
      this.isEdit = false;
    }
  }
  ```

### Two-way Binding

`[(ngModel)]="Property"`

- html

  ```html
   <input type="text" size="70" [(ngModel)]="item.title" >
  ```

- ts(app.module.ts)

  ```ts
  import { FormsModule } from '@angular/forms';

  @NgModule({
  imports: [
    CommonModule,
    FormsModule
  ]
  })
  ```

- ts(app.component.ts)

  ```ts
  export class AppComponent {
    item;
  }
  ```

### Template Reference variables

HTMLの任意のタグで`#name`をつけることでタグ配下の要素を取得できたり、
Component配下のObjectをアクセスできる。

- html

  ```html
  <app-header #tHeader></app-header>

  <p (click)="#tHeader.title = 'Title Changed'">Click Me</p>
  ```

## Directives

### Component Directives

Componetごとのcssは独立しており、タグでスタイルを定義しても他のComponentのスタイルに影響はない。やろうと思えば、以下のやり方でスタイル全体適用は可能。

- ts

  ```ts
  @Component({
    styleUrls : ['./footer.component.css'],
    encapsulation : ViewEncapsulation.None
  })
  ```

### Attribute Directives

#### ngClass

動的にスタイルを変更させる。
`[ngClass]="bool値"`

- html
  
  ```html
  <h3 [ngClass]="{'highlight' : counter %2 ==0}">Hello</h3>
  <h3 [class.highlight]="{counter %2 ==0}">Hello</h3>
  ```

#### NgIf

動的にタグの存続状態を変化させる
`*ngIf="bool値"`

- html
  
  ```html
  <div *ngIf="counter %2 ==0">
    <!-- ここ配下全部消える-->
    <h1>H1</h1>
    <h1>H1</h1>
    <h1>H1</h1>
  </div>
  ```

#### NgSwitch

動的にタグをCase文で制御する
`[ngSwitch] = {条件}`
`ngSwitchCase={ケース}`

- html

  ```html
  <ng-container [ngSwith] = "counter % 2">
    <ng-container *ngSwitchCase="0">Output0</ng-container>
    <ng-container *ngSwitchCase="1">Output1</ng-container>
    <ng-container *ngSwitchDefault>N/A</ng-container>
  </ng-container>
  ```

`div`じゃなく`ng-container`にした理由は余計なHTMLタグを生成されず、レイアウトを崩さないため

#### NgFor

繰り返し処理
`*ngFor = ley item of data`

- html

  ```html
  <article class="post" id="post{{idx}}" *ngFor="let item of data; let idx=index">
    <app-article-header [item]="item" (delete)="doDelete($event)" (titleChanged)="doModify($event)">
    </app-article-header>
    <app-article-body [item]="item" [counter]="counter"></app-article-body>
  </article>
  ```
