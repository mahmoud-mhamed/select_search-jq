# select search

search in select by jQuery

## Getting Started



### Prerequisites

jQuery library


### Installing
```
<script src='select_search.js'></script>
```

## Running the tests
```html
<input type="text" id="input">
    <select id="select">
        <option value="">option1</option>
        <option value="">option2</option>
        <option value="">option3</option>
        <option value="">option4</option>
    </select>
```
```javascript
$('#input').keyup(function () {
    select_search($('#input').val(),$('#select option'));
});
```

```javascript
$('#input2').keyup(function () {
    select_search($('#input2').val(),$('#select2 option'),'my custom option message if no result');
});
```

## Authors

* **Mahmoud Mohamed** - [github](https://github.com/mahmoud-mhamed)

Find me in [facebock](https://www.facebook.com/profile.php?id=100009734383434) who participated in this project.



