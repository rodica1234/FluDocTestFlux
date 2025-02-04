---
title: Import Registru Contacte
sidebar_position: 1
---

Procedura permite importarea registrului de contacte (clienți sau furnizori) în **Fluentis** folosind un **fișier electronic**.

Această import este posibil datorită utilizării **Parametrilor BizLink**, deoarece de fiecare dată când este procesată o linie, aceștia vor fi apelați.


### Import folosind fișierul electronic

Clic pe **Instrumente** (de obicei, se află în partea dreaptă a aplicației Fluentis), apoi pe **BizLink > Import On Demand > Registre > Import Clienți/Furnizori** ca în figura următoare:

![](/img/it-it/applications/bizlink/import-contacts-registry/image03.png) 


### Date

În această secțiune vor fi inserate datele care vor deveni permanente prin salvarea lor în baza de date **Fluentis**.

Aplicația afișează fișierul electronic pentru import:

![](/img/it-it/applications/bizlink/import-contacts-registry/image04.png) 

Se poate opta pentru una din variantele:

 1. Importul fișierului electronic deja completat, **File > Open**.
 2. Adăugarea diferitelor coloane prin Copy&Paste din lista salvată în computer.
 3. Salvarea acestui fișier (**File > Save**) în computer, adăugarea datelor necesare și reimportarea apoi în **Fluentis** (vedeți punctul 1). Acest lucru ar putea fi foarte util pentru a pasa template-ul fișierului electronic pentru import, de completat pentru viitoarele liste pe care ni le vor trimite furnizorii. 
 4. Adăugarea manuală a câmpurilor.

:::important Important
Dacă aveți un fișier electronic salvat, acesta trebuie să respecte structura fișierului din figura de mai sus (aceeași ordine a coloanelor, tipul de date etc.)
:::


### Inserare câmpuri

Când se introduce un câmp, trebuie să se insereze și alte date, cum ar fi: tipul, lungimea maximă, obligatoriu etc…

Indicații generale:

-        Dacă este scris cu roșu, este un câmp obligatoriu;

-        Dacă numele celulei este evidențiat cu verde, este o **secțiune**

-        Dacă numele celulei este evidențiat cu galben, este un **câmp**

-        Câmp: indică dacă este sau nu necesară inserarea

-        Tip: indică tipul câmpului

-        Formatare Excel: indică formatarea Excel recomandată pentru a evita inserarea greșită (consultați la sfârșitul paginii *Sfaturi și avertismente utile*)

-        Lungime: indică limita de caractere care se poate insera în câmp

-        Descriere: scurtă descriere a câmpului

*Exemplu*: exemplu real cu ce se poate scrie în acel câmp

-        Mapping table/Coloană: dacă este prezent, indică maparea câmpului respectiv în baza de date (consultați la sfârșitul paginii *Sfaturi și avertismente utile*)


**Date generale**:

Cod:

-        Câmp: obligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: 6 caractere

-        Descriere: cod de referință client/furnizor

*Exemplu*: TEGOL

-        Mapping table/coloană: select MBAN_Nomignolo from MB_Anagr

Nume societate:

-        Câmp: obligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: /

-        Descriere: ragione sociale del client/furnizor

*Exemplu*: TEGOLA CANADESE spa

-        Mapping table/coloană: select MBAN_RagSoc from MB_Anagr

Client/Furnizor:

-        Câmp: obligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: 1 caracter

-        Descriere: indică dacă introducem un client sau un furnizor. Cele două litere care reprezintă clientul și furnizorul sunt specificate în parametri.

*Exemplu*: “C” ccorespunde clientului, "F" corespunde furnizorului.

:::important Important
Singurul mod de a introduce un contact care este atât client, cât și furnizor, este să-l introduceți mai întâi ca client și apoi ca furnizor.
:::

Cont sintetic:

-        Câmp: neobligatoriu

-        Tip: string

-        Descriere: cont sintetic furnizor

*Exemplu*: 

-        Mapping table/coloană: select MBPC_Conto from MB_PiaCon

Cont analitic:

-        Câmp: neobligatoriu

-        Tip: string

-        Descriere: cont analitic furnizor

*Exemplu*: dacă sunt introduse conturi cu un sistem gol, se poate folosi o codificare de tipul 01; 02; 03 sau 001; 002; 003.

-        Mapping table/coloană: select BPC_SottoConto from MB_PiaCon

Angajamente (true/false):

-        Câmp: obligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: 200 caractere

-        Descriere: flag partite aperte

*Exemplu*: este suficient să scrieți “true”, iar imediat ce se schimbă celula, va apărea automat “TRUE” în centrul celulei sau “FALSE”, în funcție de caz.
Adresă:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: /

-        Descriere: adresă sediu client/furnizor

*Exemplu*: Str. Decebal 32

-        Mapping table/coloană: select MBAN_Indirizzo from MB_Anagr

Localitate:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: /

-        Descriere: localitate sediu client/furnizor

*Exemplu*: Iași

-        Mapping table/coloană: select MBAN_Comune from MB_Anagr

CP:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: 5 caractere

-        Descriere: codul poștal sediu client/furnizor

*Exemplu*: 31016

-        Mapping table/coloană: select MBAN_CAP from MB_Anagr

Județ:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: 200 caractere

-        Descriere: județ sediu client/furnizor

*Exemplu*: “IS” corespunde la Iași

-        Mapping table/coloană: select MBAN_Provincia from MB_Anagr

Țară:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: 200 caractere

-        Descriere: țara sediu client/furnizor

*Exemplu*: “RO” corespunde la România

-        Mapping table/coloană: select MBNZ_CodIso from MB_Nazioni

Limba:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: 200 caractere

-        Descriere: limba utilizată de client/furnizor

*Exemplu*: “Ro” corespunde la română

-        Mapping table/coloană: select MBAN_RagSoc from MB_Anagr

Telefon:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: 200 caractere

-        Descriere: telefon client/furnizor

*Exemplu*: 

-        Mapping table/coloană: select MBAN_Telefono from MB_Anagr

Email:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: 200 caractere

-        Descriere: e-mail principal client/furnizor

*Exemplu*: info@mycompany.com

-        Mapping table/coloană: select MBAN_Email from MB_Anagr

Nota:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: 200 caractere

-        Descriere: note suplimentare

*Exemplu*:

-        Mapping table/coloană: select MBAN_Note from MB_Anagr


**Date fiscale**:

Nr. reg. comerț:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: /

-        Descriere: număr registru de comerț client/furnizor

*Exemplu*: RO01720550936

-        Mapping table/coloană: select MBAN_CodFiscale from MB_Anagr

Cod ISO:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: 50 caractere

-        Descriere:

*Exemplu*: “RO” corespunde la România

-        Mapping table/coloană: select MBAN_CodIso from MB_Anagr

CUI:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: 200 caractere

-        Descriere: CUI client/furnizor

*Exemplu*: 28207227700

-        Mapping table/coloană: select MBAN_PartitaIva from MB_Anagr


**Plăți**:

Tip plată:

-        Câmp: obligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: /

-        Descriere: tip de plată utilizat de client/furnizor

*Exemplu*: 

-        Mapping table/coloană: select MBTP_Pagamento from MB_TipoPag

Soluții de plată:

-        Câmp: obligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: /

-        Descriere: termenele de plată client/furnizor

*Exemplu*: “60 zile DF” corespunde la *până în 60 de zile de la data facturii*. *La livrare* reprezintă plata de efectuat în momentul livrării.

-        Mapping table/coloană: select * from MB_SolPag

ABI:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: 5

-        Descriere:se referă la banca contului curent client/furnizor. Este o parte din IBAN

*Exemplu*: 01234

CAB:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare text

-        Lungime maximă: 5

-        Descriere: indică filiala băncii (ABI) client/furnizor. Este o parte din IBAN

*Exemplu*: 12345

IBAN:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: 27 caractere

-        Descriere: è un codice utilizzato nelle transazioni fra conti correnti diversi e che all'interno contiene l'identificazione del paese, della banca e del numero di conto corrente.

*Exemplu*: IT66C010050338 2000000218020     

SWIFT:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: 11 caractere

-        Descriere: cifrele de identificare care permit sistemelor să înțeleagă instantaneu care este banca acceptantă și care este banca emitentă, numele și locul de unde operează acestea. Este necesar pentru plățile la nivel internațional. Este compus din 8 caractere + 3 opționale.

Aceasta se referă la codul SWIFT (Society for Worldwide Interbank Financial Telecommunication), cunoscut și ca BIC (Bank Identifier Code).

*Exemplu*: „UNCRITMM” corespunde codului SWIFT al UniCredit.

Zona:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: /

-        Descriere: zonă definită la începutul codului IBAN

*Exemplu*: “IT” corespunde Italiei


**Agenți**:

Agent:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: /

-        Descriere: dacă există un agent (prezent în baza de date a agenților), acesta poate fi asociat cu clientul.

*Exemplu*:

-        Mapping table/coloană: select * from MB_Agenti

Provvigioni:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: /

-        Descriere: comisionul agentului, dacă este diferit de cel introdus în baza de date a agenților, poate fi ajustat printr-o interfață unde se poate decide care dintre ele are prioritate.

*Exemplu*:

-        Mapping table/coloană: select * from MB_AgentiZone


**Listini**:

Listino:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: /

-        Descriere:

*Exemplu*:

Discount 1:

-        Câmp: neobligatoriu

-        Tip: zecimale

-        Formatare Excel: număr, poziție zecimale = 2

-        Lungime maximă: /

-        Descriere: valoare discount

*Exemplu*: 550

Discount 2:

-        Câmp: neobligatoriu

-        Tip: zecimale

-        Formatare Excel: număr, poziție zecimale = 2

-        Lungime maximă: /

-        Descriere: valoare discount

*Exemplu*: 5%

 
### BizLink Parameters

Acești parametri vor fi utilizați pentru a procesa rândurile inserate în secțiunea *Date*. După cum se poate observa din imagine, unele câmpuri sunt deja completate, dar pot fi modificate.

![](/img/it-it/applications/bizlink/import-contacts-registry/image10.png) 

 BizLink Spreadsheet:

-        Câmp: nu este obligatoriu

Limba:

-        Câmp: obligatoriu

-        Tip: string

-        Descriere: Iso code aferent limbii

*Exemplu*: “it-IT” este pentru italiană, “en-US” este pentru engleza americană.

Societate:

-        Câmp: obligatoriu

-        Tip: string

-        Descriere: este un câmp deja populat, deoarece preia valorile deja existente în Fluentis. Acestea pot fi vizualizate în colțul din stânga sus.

*Exemplu*: “1” corespunde societății demo

-        Mapping table/coloană: Select MBSC_Code from MB_Soc

Diviziune:

-        Câmp: obligatoriu

-        Tip: string

-        Descriere: este un câmp deja populat ca in cazul societății.

*Exemplu*: “1” corespunde sediului legal, “2” sediului operativ

-        Mapping table/coloană: select MBDP_Code from MB_Dep

Identificator client:

-        Câmp: obligatoriu

-        Tip: string

-        Descriere: o literă oarecare care se inserează în parametri și care va corespunde câmpului client/furnizor. Recomandăm litera „C”.

*Exemplu*: “C” corespunde clienților

Identificator furnizor:

-        Câmp: obligatoriu

-        Tip: string

-        Descriere: o literă oarecare care se inserează în parametri și care va corespunde câmpului client/furnizor. Recomandăm litera “F”.

*Exemplu*: “F” corespunde furnizorilor

Cod tip cont clienți:

-        Câmp: obligatoriu

-        Tip: string

-        Descriere: contul în raport cu clienții. În Fluentis se poate vizualiza în *Home > Parametri > Administrativ > Parametri contabilitate*. Dublu clic pe anul curent pentru a afișa în partea dreaptă *Tipul contului*.

*Exemplu*: “CIT” corespunde clienților din Italia

Cod tip cont furnizori:

-        Câmp: obligatoriu

-        Tip: string

-        Descriere: contul în raport cu furnizorii. În Fluentis se poate vizualiza în *Home > Parametri > Administrativ > Parametri contabilitate*. Dublu clic pe anul curent pentru a afișa în partea dreaptă *Tipul contului*.

*Exemplu*: “FIT” corespunde furnizorilor din Italia

Grup clienți:

-        Câmp: obligatoriu

-        Tip: string

-        Descriere: codurile prezente pot fi vizualizate în *Home > Contabilitate > Plan de conturi*. Primul form afișează codul grupului.

*Exemplu*: 

-        Mapping table/coloană: select MBGR_Gruppo from MB_GRUPP

Grup furnizori:

-        Câmp: obligatoriu

-        Tip: string

-        Descriere: codurile prezente pot fi vizualizate în *Home > Contabilitate > Plan de conturi*. Primul form afișează codul grupului.

*Exemplu*: 

-        Mapping table/coloană: select MBGR_Gruppo from MB_GRUPPI

Cod Tip discount 1:

-        Câmp: obligatoriu doar dacă a fost inserat discount 1

-        Tip: string

-        Descriere: Reprezintă categoria de discount aplicat ofertei de prețuri

*Exemplu*: “C1” corespunde discountului în cascadă

-        Mapping table/coloană: select MBST_TipSco from MB_Sconti

Cod Tip discount 2:

-        Câmp: obligatoriu doar dacă a fost inserat discount 2

-        Tip: string

-        Descriere: Reprezintă categoria de discount aplicat ofertei de prețuri

*Exemplu*: “3” corespunde discountului comercial

-        Mapping table/coloană: select MBST_TipSco from MB_Sconti



### Start import

După introducerea datelor, pentru a începe importul, clic pe butonul **Import**.

### Concluzie – Inserare efectuată

Verificarea operației se face accesând registrul articolelor (**Home > Articole**) pentru a vedea dacă sunt prezente articolele importate de la furnizor. În caz contrar, aplicația va genera un mesaj de eroare care va indica ce parametri și/sau câmpuri sunt incorecte. Pentru a interpreta tipul de eroare, consultați secțiunea *Sfaturi și atenționări utile* din ultimul paragraf.



### Sfaturi și atenționări utile

**Formatare Excel recomandată**:

- Pentru un import corect, recomandăm să formatați coloanele conform tipului indicat în secțiunea *Formatare Excel* pentru fiecare câmp. De exemplu, dacă tipul câmpului este zecimal și în acel câmp va fi introdusă o valută, formatați câmpul ca valută. Dacă celula nu este formatată corespunzător, Excel elimină cifrele nesemnificative. Pentru a aplica formatarea, urmați pașii de mai jos:

1. selectați coloana dorită:

![](/img/it-it/applications/bizlink/import-contacts-registry/image12.png)

2. poziționați-vă în coloană și faceți clic dreapta.

![](/img/it-it/applications/bizlink/import-contacts-registry/image13.png)

3. selectați cu clic stânga **> Format Cells...**

![](/img/it-it/applications/bizlink/import-contacts-registry/image14.png)

4. formatați coloana selectată. Conform indicațiilor furnizate în *Inserare câmpuri*, selectați categoria corespunzătoare, cu specificațiile relative (de exemplu, valută, fără simbol). Același lucru se poate face și din foaia de calcul prezentă în Fluentis.

:::note Atenție
O situație tipică implică coduri care conțin zerouri aparent nesemnificative, de exemplu "001". Dacă câmpul este formatat generic sau ca număr, zerourile vor fi eliminate, dar dacă este formatat ca text, acestea vor fi păstrate.
:::

**Mapping table/coloană**:

- Dacă în *Inserare câmpuri* există *Mapping table/coloană*, înseamnă că valoarea introdusă în câmp pentru import poate fi deja prezentă în baza de date. A fost inserat și în câmpurile care vor fi introduse de la zero, pentru a putea vedea un exemplu, dacă este prezent în baza de date. Pentru a vizualiza datele prezente în baza de date, urmați pașii de mai jos, utilizând ca exemplu clasa articole și mapping-ul aferent:

select MBDC_Classe from MB_Classi. Executați interogarea în "Microsoft SQL Server Management Studio" și obțineți rezultatul:

![](/img/it-it/applications/bizlink/import-contacts-registry/image15.png)

Rezultatul nu oferă informații clare; pentru a înțelege semnificația, înlocuiți după clauza select simbolul "*" cu câmpul pentru a compune noua interogare. În acest caz, ar fi select * from MB_Class, care selectează întregul conținut al tabelului.

![](/img/it-it/applications/bizlink/import-contacts-registry/image16.png)

Aceasta operație este utilă deoarece datorită descrierii (MBDC_Descr) se poate înțelege ce reprezintă câmpul și verifica dacă ceea ce veți introduce este sau nu în baza de date. Această procedură este universală, valabilă pentru fiecare câmp și aceeași reprezentare este vizibilă și în Fluentis:

În Fluentis selectați **Home > Articole > Articole furnizori**. În acest form, alegeți clasa articolelor cu descrierea aferentă.

Aceasta este pentru clasa articolelor. Pentru alte câmpuri, se poate urma aceeași procedură, dar în locații diferite. Trebuie să selectați una din valorile prezente, altfel importul nu va reuși și va afișa un mesaj de eroare. Acest lucru este valabil pentru fiecare câmp pentru care există un mapping table/coloană.

Dacă doriți să adăugați un câmp cu mapping care nu este în baza de date, acesta va trebui să fie inserat cu un query sau din Fluentis. În acest caz, interogarea de inserție nu este recomandată deoarece este mai complicată decât vizualizarea descrisă anterior. Procedura recomandată este inserarea din Fluentis. Tot pentru clasa articole, în *Articole furnizori*, faceți clic dreapta în filtrul de căutare al clasei articole și selectați **Deschide form**.

În fereastra care se va deschide, faceți clic pe butonul de căutare pentru a vizualiza clasele de articole existente.

Sub ultima linie inserată se află o linie goală. Aceasta este folosită pentru introducerea de noi valori.

![](/img/it-it/applications/bizlink/import-contacts-registry/image21.png)

Introduceți valorile noi și apăsați *Enter*.

Această procedură este similară pentru celelalte câmpuri, singurul lucru care se schimbă fiind locația filtrelor de căutare unde trebuie să faceți clic stânga pentru a deschide form-ul.

**Erori**:

În cazul importului nereușit, aplicația va genera un mesaj de eroare.

Dacă eroarea s-a produs în secțiunea *Data*, se poate identifica rândul care conține eroarea, deoarece va fi scris, de exemplu: "System.ArgumentException: Error importing row 4". În acest caz (vedeți figura de mai jos), eroarea va fi pe rândul 4, care însă nu este rândul care conține efectiv eroarea. Pentru a identifica exact rândul cu eroarea, utilizați numerele din coloana din stânga și adăugați 1. Deci:

Rând real care conține eroarea = Error importing rownum + 1

![](/img/it-it/applications/bizlink/import-contacts-registry/image22.png)

Pentru a interpreta eroarea din mesaj, urmați pașii de mai jos:  
- pe același rând care conține numărul rândului menționat anterior, este scris **obiectul** la care se referă, apoi **eroarea** propriu-zisă și în final **proprietatea** în care a fost detectată eroarea.  
Tot în exemplul de mai sus *Failed to create, update or delete the object of type Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.FSPurchasePriceListItem, Fluentis.FluentisErp.Core.Scm.PurchasePriceLists* not-null property references a null or transient value Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.ReadWrite.FSWPurchasePriceListItem.MeasurementUnit*, așa cum se poate observa în imaginea de mai sus, unitatea de măsură aferentă prețului de achiziție din ofertă a generat eroarea deoarece aceasta este nulă. Aplicația avizează că inserarea acesteia este obligatorie.

Dacă eroarea s-a produs în secțiunea *Parametri*, mesajul va fi similar, metoda de rezolvare rămânând aceeași. Deci, în baza proprietății, verificați inserarea corectă a acesteia.

:::important Important  
Dacă este găsit un rând complet gol, nu va fi raportată nicio eroare, dar importul se va opri. De exemplu, dacă primul rând (rândul nr. 4) este gol dintr-un motiv oarecare și sub acesta (începând cu rândul nr. 5) se află rânduri populate, nu se va importa nimic.
:::

:::important Important  
Dacă este introdus un registru de 10 rânduri, de exemplu, și în rândul nr. 7 apare o eroare, primele 6 rânduri, neavând probleme, sunt inserate. Dacă nu este schimbată nicio valoare în primele 6 rânduri (și evident, dacă eroarea este corectată), reluând importul nu vor apărea nici erori de duplicare, deoarece se verifică mai întâi dacă este deja prezent contactul. Dacă este schimbată chiar și o singură valoare, acel contact va fi inserat deoarece va fi văzut ca un nou contact.
:::

În final, un alt mesaj de eroare care poate apărea este următorul:

 ![](/img/it-it/applications/bizlink/import-contacts-registry/image23.png)

Așa cum se poate observa în imaginea de mai sus, acest tip de mesaje sunt mai ușor de interpretat deoarece se referă exact la celula cu eroarea. În acest caz, în celula F:4 nu este prezentă nicio valoare.