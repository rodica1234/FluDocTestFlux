---
title: Soluții de plată
sidebar_position: 10
---

Tabelul conține termenele de plată care vor fi utilizate în aplicație pentru calcularea scadențelor și angajamentelor deschise.

:::note Observație
Introducerea corectă a unui termen de plată necesită completarea atât a tabelului superior, cât și a tabelului cu detalii care definește calculul zilelor de expirare. Deși programul permite salvarea fără tabelul cu detalii, o soluție astfel creată nu va fi complet utilizabilă. 
:::

### Soluții de plată

**Soluție/Descriere**: reprezintă codul și descrierea soluției de plată.

**Sfârșit lună**: dacă este activ, plata se efectuează la sfârșitul lunii, după aplicarea numărului de zile definit în tabelul cu detalii inferior.  

**Zile**: reprezintă numărul de zile care trebuie adăugate la sfârșitul lunii pentru a obține ziua exactă a scadenței (setarea corectă necesită inserarea în partea inferioară a numărului de zile de amânare, chiar și zero, dacă este necesar; apoi este citit parametrul *Sfârșit lună* și sunt adăugate zilele suplimentare după sfârșitul lunii. Pentru a normaliza calculul, se recomandă combinarea parametrului pentru calendarul comercial care face toate lunile de 30 de zile).

**DL Art 62**: parametru care identifică cele două rate de 30 și 60 de zile care vor fi utilizate pentru calcularea termenelor de plată în facturile care conțin mărfuri perisabile conform art. 62 din Decretul lege 24 ianuarie 2012 n.1 (pentru Italia).

**Țară**: permite vizualizarea soluției de plată aferente doar companiilor din baza de date care au țara specificată.

### Tabel secundar

La nivelul ratelor, se pot divide procentual pe diverse rate baza de impozitare, TVA-ul și cheltuielile documentului (% cheltuieli nu se aplică direct în evidențele contabilității generale).

**Comercial**: dacă este activ, se pot introduce multipli doar de 30 de zile în câmpul relativ, care va fi gestionat ca singură lună.

Cazul tipic este o scadență la *30 de zile de la sfârșitul lunii*, când data facturii este 31/01: dacă aplicăm 30 de zile calendaristice (deci fără parametrul *Comercial*), vom obține scadența 02/03 și apoi sfârșitul lunii va duce scadența la 31/03, adică la 60 de zile mai târziu și nu 30 așa cum se înțelege din nume. Dacă parametrul *Comercial* este activ, cele 30 de zile vor fi gestionate ca 1 lună mai mult + sfârșitul lunii, deci de la 31/01 se va ajunge corect la 28 sau 29 februarie, așa cum era programat.


### Limbi

Pentru fiecare tip de plată selectat în tabelul superior se pot insera descrieri în limbă (utilizat în rapoarte personalizate).
