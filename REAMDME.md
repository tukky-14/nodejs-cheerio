### Cheerio

jQuery ライクな HTML 解析ライブラリ

<br>

### 要素の取得方法の例

| メソッド                           | 説明                                                                                            |
| ---------------------------------- | ----------------------------------------------------------------------------------------------- |
| $(selector)                        | 指定された CSS セレクターに一致する最初の要素を返します。                                       |
| $(selector, context)               | 指定された CSS セレクターに一致する最初の要素を、指定されたコンテキスト内から検索して返します。 |
| $(selector, element)               | 指定された CSS セレクターに一致する最初の要素を、指定された要素内から検索して返します。         |
| $(element)                         | 指定された HTML 要素を Cheerio オブジェクトに変換します。                                       |
| $(html)                            | 指定された HTML 文字列を Cheerio オブジェクトに変換します。                                     |
| $(selector).attr(attributeName)    | 指定された属性名の値を取得します。                                                              |
| $(selector).prop(propertyName)     | 指定されたプロパティの値を取得します。                                                          |
| $(selector).text()                 | 指定された要素のテキストを取得します。                                                          |
| $(selector).html()                 | 指定された要素の HTML を取得します。                                                            |
| $(selector).val()                  | 指定されたフォーム要素の値を取得します。                                                        |
| $(selector).addClass(className)    | 指定されたクラス名を要素に追加します。                                                          |
| $(selector).removeClass(className) | 指定されたクラス名を要素から削除します。                                                        |
| $(selector).hasClass(className)    | 要素が指定されたクラスを持つかどうかを判定します。                                              |
| $(selector).each(function)         | 要素の集合を反復処理します。                                                                    |
| $(selector).find(selector)         | 指定された CSS セレクターに一致する要素を、指定された要素の子孫から検索して返します。           |
| $(selector).parent()               | 要素の親要素を取得します。                                                                      |
| $(selector).next()                 | 要素の次の兄弟要素を取得します。                                                                |
| $(selector).prev()                 | 要素の前の兄弟要素を取得します。                                                                |

<br>

### 参考資料

- [cheerio](https://cheerio.js.org/)
