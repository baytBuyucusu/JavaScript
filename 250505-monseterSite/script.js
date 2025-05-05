
/*let isim="Merhab Kullanıcı!!!"; //bir değişeken oluşturduk string türünde ve buna bir değer verdik.

alert (isim); //burda o değeri yazdırdık.


//let sayi1=10;  iki sayı oluşturduk bu sayılarla işlem yapıcağımız için int türünde oluşturduk.
//let sayi2=18;

//alert (sayi1+sayi2); // ve işlemi yaptık ve sonucu yazdırdık.



let s1=12;//ilk önce iki değişkeni int türünde oluşturup onlara birer değer verdik
let s2=12;

let toplam=s1+s2;// sonra bunların işleminin yapıldığı bir değişken oluşturduk ve onun içinde işlemim yapıp değişkene verdik

alert (toplam+" JavaScript öğreniyorum herkese selamunaleyküm!!!");// sonucu görmek için değişkenlerin işlemini tekrar yazmak yarine direk işlemi yaptığımızz değişkenin adını yazdık.

*/


//alert (sayi1*sayi2); 

/*alert (sayi1/sayi2);

alert (sayi1-sayi2);*/

//Toast mesajı--->
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}
//<----Bitişi





