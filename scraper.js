let formato = [];

$.each($('.product-card'), function(){
    nome = $(this).find('.product-card__title').text();
    desconto = $(this).find('.promotion-tag-discount').text();
    valor = $(this).find('.promotion-price').text();
    formato.push({nome, desconto, valor});
});
console.log(JSON.stringify(formato, null, 2))

    


