# ders_kayit_sistemi

# Ders Kayıt Sistemi

* Bu projede ders kayıt sistemi oluşturularak NEAR Protocol üzerinden sisteme öğrencilerin ders kayıt yapması sağlanmıştır.

* Oluşturulan derslerin isimleri, detayları dersin sahibi (kontrat sahibi) tarafından oluşturulup, blokzincire kayıt edilmektedir.

* Öğrenciler bu ders listelerinden kendilerine uygun olan derslere kayıt oluşturabilmektedir.

* Ayrıca derslerin tek tek veya liste halinde çağrılması için kontratta fonsiyonlar tanımlanmıştır.

* Projeyi çalıştırmak için github'dan proje indirildikten sonta `yarn install` komutu ile gerekli paketler indirilir.

* `yarn asb` komutu ile compile edilir

* `near login` ile oturum açılır.

* `near deploy --accountId=enespolat25.testnet --wasmFile=build/release/students.wasm` ile kontrat deploy edilir.

*  Örnek kurs oluşturma komutu:  `near call enespolat25.testnet createCourse '{"course": {"id": "0", "name": "MATH", "description": "Linear Algabra"}}' --accountId=enespolat25.testnet`

* Kursu çağırma komutu: `near view enespolat25.testnet getCourse '{"id": "0"}'`

* Tüm kursları çağırma komutu: `near view enespolat25.testnet getCourses`

* Öğrenci için herhangi bir kursa kayıt olma komutu: `near call enespolat25.testnet registerCourse '{"courseId": "0"}'  --accountId=enespolat25.testnet`

https://www.loom.com/share/33d40300605e4e1683c3cae765715a77


[Video](https://www.loom.com/share/33d40300605e4e1683c3cae765715a77)
