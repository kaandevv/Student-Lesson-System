import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], FilterText?: string): Product[] {
    FilterText = FilterText ? FilterText.toLocaleLowerCase() : null//bu eğer arama ifadesi gönderildiyse yani --> FilterText?  ,FilterText i kücük harfe cevir eğer yoksa null demek bu kod! (cunku JS buyuk kucuk harfe duyarlıdır.)

    return FilterText ? value.filter((p: Product) => p.name
      .toLocaleLowerCase().indexOf(FilterText) !== -1) : value; //burada ise ilk Filtertext varmı diye bakıyor eğer varsa her bir p (ürün) için 
    //kücük harfe ceviriyor ve içerisinde abak!rama ifadesi varmı diye .filtreliyo vgelenveriyi yoksa(filtreleme) direk olan seyi (value yu) geri bir şey yapmadan(filtrelemeden)döndür demek istiyor.
  }

}
