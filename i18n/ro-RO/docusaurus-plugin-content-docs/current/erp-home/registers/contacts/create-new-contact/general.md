---
title: Generale
sidebar_position: 3
---

## Generale

Acest tab reprezintă detaliul datelor legale ale registrului deschis. Toate elementele din partea superioară a ferestrei sunt comune pentru toate societățile active în baza de date. Doar gridul din partea inferioară a ferestrei este specific pentru societatea curentă și permite definirea caracteristicilor administrative/comerciale.

### Date registru

**Nume societate**: este câmpul în care se inserează numele partenerului; va fi atribuit tuturor conturilor analitice contabile definite pentru registrul deschis și va fi preluat cu ajutorul acestuia în fiecare raport contabil.

Pe baza textului inserat aici, ieșind din câmp, aplicația va genera automat un ‘Cod' univoc scurt care va identifica registrul; acesta poate fi modificat de utilizator, dar trebuie să fie unic în lista tuturor registrelor. Deoarece căutarea partenerului (dacă este contabil) va fi efectuată, în mod normal, pe baza numelui societății, acest câmp nu este relevant.

Flag-ul **Contabil**, prezent implicit în noile inserări, va permite definirea detaliilor pentru gestionarea administrativă/comercială a conturilor analitice asociate la registrul în uz.

**Adresă**: reprezintă adresa sediului legal;

**CP**: reprezintă codul poștal și poate fi inserat manual sau poate deriva din selectarea localității, în câmpul succesiv, cu ajutorul helpului Localități.

**Localitate**: câmp editabil în care se poate insera localitatea sediului legal. Este prezent helpul Localități care facilitează căutarea în lista localităților definite anterior în tabelul (Home > Tabele > Setări generale)

**Județ**: câmp editabil în care se poate insera codul județului. Este prezent helpul județelor care facilitează căutarea în lista județelor definite anterior în tabelul (Home > Tabele > Setări generale)

**Note**: câmp liber în care se poate defini, de exemplu, textul complet al adresei care va fi preluată la listarea documentelor, fără a fi necesară combinarea adresei+codului poștal+localității+județului.

**Țara**: codul țării registrului, așa cum a fost definit în tabelul (Home > Tabele > Setări generale). Amintim că acest câmp este cel mai important pentru identificarea partenerilor prezenți în țări cu fiscalitate privilegiată (Home > Tabele > Setări generale > Țări black list), pentru relativa declarație fiscală din aria administrativă. 

**Regiune**: codul regiunii de apartenență (Home > Tabele > Setări generale)

**Limba**: codul limbii (Home > Tabele > Setări generale) de referință a registrului. Este posibilă generarea rapoartelor automat în limba aleasă, pe baza dicționarului definit în Arm (Application Resource Manager)

**Cod fiscal**: câmp compus din codul ISO internațional al țării (definit în tabelul țări) și din relativul cod fiscal. Aplicația verifică dacă este corect inserat codul fiscal italian (test care se execută la ieșirea din câmp sau manual cu butonul succesiv).

**Nr. registru comerț**: câmp pentru inserarea numărului registrului de comerț al contactului;

**Persoană fizică/juridică**: indică dacă partenerul este privat sau nu;

**Telefon**: câmp pentru inserarea telefonului principal al contactului;

**Fax**: câmp pentru inserarea faxului principal al contactului;

**Website**: câmp pentru inserarea site-ului web al contactului;

**E-mail**: câmp pentru inserarea adresei de email implicită a contactului;

**Dată ult. modificare**: în acest câmp este afișată data ultimei salvări efectuate pentru acest registru.

**Dată sfârșit valabilitate**: câmp pentru blocarea utilizării registrului. După inserarea acestei date, sistemul va întreba dacă trebuie să atribuie această dată tuturor conturilor analitice contabile asociate registrului, nici unuia, doar pe societatea în uz, pe toate societățile sau să anuleze modificarea.

*Butoane specifice*

> **[Propune date-intro#v)**: după ce ați inserat codul fiscal puteți să apăsați acest buton sistemul, prin intermediul web-service va interoga sistemul informatic V.I.E.S. care va verifica valabilitatea și corectitudinea codului fiscal. Daca este corect, sistemul va propune toate celelalte date de bază ale contactului , evitând astfel inserarea manuală. 

### Referințe

În secțiunea **Acces Web**, relativă la EDI, se poate abilita accesul via Internet Explorer la aplicație, abilitând registrul și atribuind numele utilizatorului și parola de acces.

În secțiunea **Cod EDI**: codul identificativ al registrului pentru pentru transferul fișierelor cu ajutorul procesului EDI cu relativul **Număr intern **atribuit subiectului și cu posibilitatea de a alege ca acest cod să facă referință la un vânzător;

În secțiunea **Extra Data** se poate insera **Numărul clientului,** **Nr. reg. autotrasp** (pentru registrele relative la transportatori, reprezintă codul subiectului în registrul autotransportorului) și **Data nașterii**, în cazul persoanelor fizice.

În secțiunea inferioară sunt prezente 2 griduri:

- **Persoane de referință**: se pot insera, pentru contactul curent, lista cu persoanele de referință și datele lor.

- **Conturi analitice în toate societățile** asociate contactului curent: acestea vor avea, deci, aceleași date comune generale. Inserarea prevede identificarea tipului de cont partener de creat  (client, furnizor, bancă, agent) și, pe baza acestuia, din parametrii contabilității generale, este propus contul asociat și următorul număr de cont analitic. Dacă sunt prezente mai multe conturi pentru tipul de cont selectat, nu va fi propus nici un cont iar utilizatorul va trebui să-l insereze (eventual cu ajutorul helpului conturi). 

### Adrese alternative

Aici se pot insera adresele alternative pe baza *Tipului adresei* asociat (nu este vorba despre adresele de expediție a mărfii, care se pot specifica în tab [Expedițiierp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery) în Date contabile unde se inserează Destinatarii și Destinațiile care permit gestionarea documentelor din achiziții și vânzări).

*Exemplu*: dacă în grid selectăm tipul de adresă Sediu comercial vom insera și persoana/persoanele de referință pentru biroul comercial la care care va fi expediată, de exemplu, confirmarea ordinului via mail (mail-ul se inserează în câmpul de lângă grid, împreună cu numărul de telefon și celelalte date). Astfel, în tab-ul **Rezumate** al ordinului, când se vom alege expedierea confirmării ordinului la client, se va deschide un form care va afișa mailul cu adresa destinatarului deja completată cu informațiile care au fost inserate în acest tab, evitându-se astfel inserarea lor manuală. Urmând aceeași procedura, se va putea alege la cine să fie expediate facturile, comenzile etc.

Funcționalitatea acestui form, pe lângă inserarea adreselor (mai ales a e-mailurilor la care trebuie expediate pdf-urile facturilor active emise, a ordinelor clienți/furnizori) este limitată la două posibile automatizări foarte utile:

- gestionarea adreselor de e-mail la expedierea masivă a documentelor (facturi de vânzare, dar și alte tipuri dacă au fost configurate) printr-o coadă de expediție gestionată de BizLink.

- gestionarea [Cotitularilorerp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) facturii de vânzare

### Procedură pentru inserare adrese

Inserarea unei noi adrese prevede selectarea tipului de adresă și o descriere a acesteia. În momentul salvării liniei, sistemul va propune pentru această adresă alternativă toate datele sediului legal oficial din tab-ul ‘Date comune', care apoi vor putea fi modificate.

Se pot insera și gestiona mai multe adrese e-mail simultan (pentru a fi expediate la mai mulți destinatari), inserând adresele și separându-le cu semnul **;**.

### Expediere masivă documente via mail

Pentru gestionarea automată a adresei de e-mail la expedierea masivă a facturilor de vânzare este necesară utilizarea unui tip de adresă particular (mai exact, în tabelul [Tipuri adreseconfigurations/tables/general-settings/address-types) trebuie să aibă activ flag-ul **Email Fact.C.=email factură client**).

Va fi posibilă, dacă s-a configurat, gestionarea expedierii masive și a altor tipuri de documente (de exemplu, solicitarea unei plăți etc.) atașând adresa de e-mail unui anume tip de adresă utilizând unul din flag-urile disponibile în tabelul Tipuri de adrese. În acest caz va fi necesară definirea atât a *Transformation* pentru documentului specificat, cât și Workflow-ului (Schimbare status) dedicat.

Gestionare adresei de e-mail inserate, codificate și cu flag-ul Email Fact. C. activat, este asociată și compunerii automate a email-ului atașat (este necesară instalarea aplicației Outlook pe PC-ul propriu) care se poate executa din factura, la vizualizarea documentului, cu butonulSend (Pdf, Word, etc.). 

![](/img/ro-RO/erp-home/registers/contacts/create-new-contact/general/image01.png)

### Gestionare cotitulari

În acest caz, informația relevantă este numele cotitularilor. Va fi deci necesară inserarea unei linii pentru fiecare cotitular pentru inserarea tuturor datelor personale. În tabelul [Tipuri adreseconfigurations/tables/general-settings/address-types) trebuie să le activati flagul [Cotitulariconfigurations/tables/general-settings/address-types).

Pentru modul în care este gestionat în factură vezi [documentulerp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information).

După inserarea acestor date **Generale** se continuă cu inserarea detaliilor în **Date contabile**.