## Carhoo Dealer Widget

![Print](https://github.com/juniornelson123/widget-dealer/blob/master/print.png)

### Como usar?

Primeiro copie e cole este trecho de html no local onde deseja renderizar a lista
```html
<div class="carhoo-dealer"></div>
```

Após o primeiro passo, copie e cole este script no seu site
```js
<script async>
  (function (w,d,s,o,f,js,fjs) {
      w['Carhoo-Dealer']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
      js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
      js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
  }(window, document, 'script', 'cw', 'https://unpkg.com/@carhoo/widget-dealers@0.0.1/dist/widget.js'));
  cw('render', {responsive: true, client_id: 'id client carhoo'});
</script>
```


