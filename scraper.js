let formato = [];

$.each($('.product-card'), function(){
    nome = $(this).find('.product-card__title').text();
    desconto = $(this).find('.promotion-tag-discount').text();
    valor = $(this).find('.promotion-price').text();
    formato.push({nome,
                  desconto,
                  valor});
});
console.log(JSON.stringify(formato))

    




let arrayJson = [];
$.each($(".product-card"), function( index, value ) {
titulo = $(this).find(".product-card__support-text").text();
desconto = $(this).find(".promotion-tag-discount").text();
valor = $(this).find(".promotion-price").text();
arrayJson.push({titulo,desconto,valor});
});
console.log(JSON.stringify(arrayJson));