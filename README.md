# Pythonをブラウザで動かす

## 動機
- AIの実装は、Pythonで行われてる（他、Rなども）
- Pythonひとつで、AIもWEBも、両方開発できれば一挙両得なのではないか
    + 将来的にAIが、JSで実装される事も有るかもしれないが、そう言った話は、いっこうに聞かないので

## ゴール
- ブラウザ（Chrome）で、Pythonのコードが動く事

## アプローチ
1. Pythonのコードそのままで、ブラウザ上で動かす
2. PythonのコードをJSに変換し、ブラウザ上で動かす

## アプローチ1
`Brython`を使う  
<https://www.brython.info>

> 参考  
<http://qiita.com/ryo_grid/items/5e34220ed48f4580126d>

### 特徴
- HTMLから読み込むライブラリ（JSで書かれている）の形をとっている
- ライブラリとして、`brython.js`をブラウザに読み込むと、それ以降、Pythonコードを実行できる
- Pythonの実行ブロックは、type="text/python"とする

### 所感
- ブラウザのAPIも一通り揃っていて、DOM操作も問題無く使えそう
- Pythonコードを変更すると、即座にブラウザに反映される
- Dev toolsに慣れていると、デバックしづらそう
- 基本的にPythonであって、必要に応じて、JSっぽいライブラリを付け足したようなイメージ

## アプローチ2
`JavaScripthon`を使う  
<https://github.com/azazel75/metapensiero.pj>

### 特徴
- ローカル上で、PythonのコードをJSに変換する
- ローカル環境に、`python3.5以上を実行できる環境`と`javascripthonのインストール`が必要
- あくまで、ローカルでPython -> JSにトランスパイルするので、ブラウザへのライブラリ読み込みは不要
    - トランスパイルしたJSを、`<script>`で読み込むだけ

### 所感
- ブラウザに特別なライブラリを読み込むことは無い
- Dev tools上で、Pythonコードのデバッグができる（sourceMap経由）
- Pythonコードの修正の度に、トランスパイルする必要が有る
    - nodeなどで、watchさせれば行けるかも？
- 最終的に、Pythonコードは全てJSに変換されるので、今風の`ES` -> `babel` -> `JS`的な使い方ができそう
- JSをPythonの構文で書くようなイメージ

## ファイルの共有
[ファイル一式は、こちらからダウンロードできます](https://tkr00st.github.io/20170523_run_python_on_browser/20170523_run_python_on_browser.zip)