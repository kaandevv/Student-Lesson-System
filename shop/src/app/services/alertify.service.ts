import { Injectable } from '@angular/core';
declare let alertify:any;

@Injectable()
export class AlertifyService {

  constructor() { }


  //kendi yazdıgım fonk
  success(message:string){ //message da yazabilirdim sadece fakat tip güvenli olsun diye message:string yazdım.
      alertify.success(message)
  }
  /*
  error(message:string){  error veya asagidaki gibi warning de kullanılabilir alertify'in 
    alertify.error(message)
}
warning(message:string){ 
  alertify.warning(message)
} */
}
