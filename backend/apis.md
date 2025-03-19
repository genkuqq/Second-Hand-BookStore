## Headers

- [Books](#books)
- [Shelves](#Shelves)

### Books

<details>
<summary><code>GET</code><code><b>/</b></code><code>(gets all books)</code></summary>

##### Parameters

> | name | type         |
> | ---- | ------------ |
> | None | non-required |

##### Example

> ```
>  http://localhost:3000/book
> ```

</details>
<details>
<summary><code>GET</code><code><b>/getbook</b></code><code>(get book by id)</code></summary>

##### Parameters

> | name   | type     |
> | ------ | -------- |
> | bookID | required |

##### Example

> ```
>  http://localhost:3000/book/getbook?bookID=1
> ```

</details>
<details>
<summary><code>POST</code><code><b>/addbook</b></code><code>(add book to database)</code></summary>

##### Parameters

> | name | type         |
> | ---- | ------------ |
> | None | non-required |

##### Example

> ```
>  http://localhost:3000/book/addbook
> ```

</details>
<details>
<summary><code>PUT</code><code><b>/updatebook</b></code><code>(update book details)</code></summary>

##### Parameters

> | name   | type     |
> | ------ | -------- |
> | bookID | required |

##### Example

> ```
>  http://localhost:3000/book/updatebook?bookID=1
> ```

</details>
<details>
<summary><code>DELETE</code><code><b>/removebook</b></code><code>(remove book from database)</code></summary>

##### Parameters

> | name   | type     |
> | ------ | -------- |
> | bookID | required |

##### Example

> ```
>  http://localhost:3000/book/removebook?bookID=1
> ```

</details>

### Shelves

<details>
<summary><code>GET</code><code><b>/</b></code><code>(gets all shelves)</code></summary>

##### Parameters

> | name | type         |
> | ---- | ------------ |
> | None | non-required |

##### Example

> ```
>  http://localhost:3000/shelf
> ```

</details>
<details>
<summary><code>GET</code><code><b>/getshelf</b></code><code>(get shelf by id)</code></summary>

##### Parameters

> | name    | type     |
> | ------- | -------- |
> | shelfID | required |

##### Example

> ```
>  http://localhost:3000/shelf/getshelf?shelfID=1
> ```

</details>
<details>
<summary><code>POST</code><code><b>/addshelf</b></code><code>(add shelf to database)</code></summary>

##### Parameters

> | name | type         |
> | ---- | ------------ |
> | None | non-required |

##### Example

> ```
>  http://localhost:3000/shelf/addshelf
> ```

</details>
<details>
<summary><code>PATCH</code><code><b>/addbook</b></code><code>(add book into shelf)</code></summary>

##### Parameters

> | name    | type     |
> | ------- | -------- |
> | shelfID | required |
> | bookID  | required |

##### Example

> ```
>  http://localhost:3000/shelf/addbook?shelfID=1&bookID=1
> ```

</details>

<details>
<summary><code>PATCH</code><code><b>/removebook</b></code><code>(remove book from shelf)</code></summary>

##### Parameters

> | name    | type     |
> | ------- | -------- |
> | shelfID | required |
> | bookID  | required |

##### Example

> ```
>  http://localhost:3000/shelf/removebook?shelfID=1&bookID=1
> ```

</details>
<details>
<summary><code>PUT</code><code><b>/updateshelf</b></code><code>(update shelf details)</code></summary>

##### Parameters

> | name    | type     |
> | ------- | -------- |
> | shelfID | required |

##### Example

> ```
>  http://localhost:3000/shelf/updateshelf?shelfID=1
> ```

</details>

<details>
<summary><code>DELETE</code><code><b>/removeshelf</b></code><code>(remove shelf from database)</code></summary>

##### Parameters

> | name    | type     |
> | ------- | -------- |
> | shelfID | required |

##### Example

> ```
>  http://localhost:3000/shelf/removeshelf?shelfID=1
> ```

</details>
<details>
<summary><code>GET</code><code><b>/placement</b></code><code>(get available shelf for book placement)</code></summary>

##### Parameters

> | name   | type     |
> | ------ | -------- |
> | bookID | required |

##### Example

> ```
>  http://localhost:3000/shelf/placement?bookID=1
> ```

</details>
