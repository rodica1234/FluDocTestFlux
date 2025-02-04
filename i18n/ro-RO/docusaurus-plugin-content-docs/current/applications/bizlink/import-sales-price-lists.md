---
title: Import oferte vânzare
sidebar_position: 2
---



Procedura permite importarea ofertelor de vânzare în **Fluentis** folosind un **fișier electronic**.

Această import este posibil datorită utilizării **Parametrilor BizLink**, deoarece de fiecare dată când este procesată o linie, aceștia vor fi apelați.


### Import folosind fișierul electronic

Clic pe **Instrumente** (de obicei, se află în partea dreaptă a aplicației Fluentis), apoi pe **BizLink > Import On Demand > Documente de achiziție > Import oferte vânzare** ca în figura următoare:

 ![](/img/it-it/applications/bizlink/import-sales-price-lists/image03.png) 
 

### Date

În această secțiune vor fi inserate datele care vor deveni permanente prin salvarea lor în baza de date **Fluentis**.

Aplicația afișează fișierul electronic pentru import:

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image04.png) 

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


**Date articol**:

Clasă:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: /

-        Descriere: cod clasă articol

*Exemplu*: “1” pentru semifabricate, “IMB” pentru ambalaje

-        Mapping table/coloană: select MBDC_Classe from MB_Classi

Cod:

-        Câmp: obligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: /

-        Descriere: codice di riferimento all'articolo

*Exemplu*: 02030508

Descriere:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: /

-        Descriere: descriere articol (poate corespunde codului)

*Exemplu*: minge de tenis sensibilă la rotație, poate corespunde codului articolului

Unitate de măsură:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: 3 caratteri

Descriere: reprezintă codul unității de măsură utilizate pentru articolul analizat

*Exemplu*: *cm* corespunde la centimetri, *UDI* corespunde la UdI

-        Mapping table/coloană: select MBUM_Codice from MB_UnitaMisura

TVA:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: text

-        Lungime maximă: 3 caractere

-        Descriere: se referă la codul măsurii utilizate pentru articolul analizat

*Exemplu*: “22” corespunde la 22% de TVA, 

-        Mapping table/coloană: select MBIV_Code from MB_iva

Cat Merc:

Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: 3 caractere

-        Descriere: codul se referă la categoria mărfii articolului analizat

*Exemplu*: “211” corespunde materiei prime

-        Mapping table/coloană: select MBCM_Codice from MB_CatMerceologica

Fact. ach.:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: 10 caractere

-        Descriere: codul se referă la tipul facturii emise pentru articol

*Exemplu*: “4” corespunde la achiziții semifabricate, “1” corespunde la materii prime

-        Mapping table/coloană: select MBFA_TipoFatt from mb_TipoFattAcq

Fact. vânz.:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: 10 caractere

-        Descriere: codul se referă la tipul facturii emise pentru articol

*Exemplu*: “4” corespunde la achiziții semifabricate, “1” corespunde la materii prime

-        Mapping table/coloană: select MBFA_TipoFatt from mb_TipoFattVend

Nomenc. Intra:

Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: 50 caractere

-        Descriere:

*Exemplu*: “32049000” corespunde la coloranți

-        Mapping table/coloană: select INCN_CodNomencl from IN_CodNomenc

Barcode:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: /

-        Descriere: codul de bare al articolului

*Exemplu*: ABC-1234

Tip lot:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: 2 caractere

-        Descriere: tipul lotului din care face parte articolul

*Exemplu*: “4” corespunde la achiziții semifabricate, “1” corespunde la materii prime

**Date ofertă**:

Preț:

-        Câmp: obligatoriu

-        Tip: zecimale

-        Formatare Excel: valută, simbol niciunul

-        Lungime maximă: /

-        Descriere: preț articol din ofertă

*Exemplu*: 10.99, 123.45

Unità misura:

-        Câmp: neobligatoriu

-        Tip: stringa

-        Formattazione Excel: testo

-        Lunghezza massima: /

-        Descriere: serve per definire il prezzo rispetto alla cantitate (es. prezzo al kilo, prezzo al metro quadro)

*Exemplu*: “kg” corrisponde a kilogrammi

-        Mapping table/coloană: select MBUM_Codice from MB_UnitaMisura

Cantitate:

-        Câmp: neobligatoriu

-        Tip: zecimale

-        Formatare Excel: număr, poziție zecimale = 2

-        Lungime maximă: /

-        Descriere: cantitatea de articol la care se referă prețul anterior

*Exemplu*:  500

Tip eșalon Cant-Val-PxC:

-        Câmp: neobligatoriu


-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: /

-        Descriere: indică dacă valorile eșaloanelor aplicate sunt pe bază cantității, valorii sau prețului pe cantitate. De obicei, este utilizat cel pe baza cantității, și anume: pentru o anumită cantitate totală, se aplică o reducere de x%.
*Exemplu*: Cant, Val, PxC

 ![](/img/it-it/applications/bizlink/import-sales-price-lists/image07.png)


**Discounturi**:

Discount1:

-        Câmp: neobligatoriu

-        Tip: zecimale

-        Formatare Excel: număr, poziție zecimale = 2

-        Lungime maximă: /

-        Descriere: discounturi posibile aplicabile

*Exemplu*: *50+10* pe totalul rândului se aplică un prim discount de 50% și pe noul total un alt discount de 10%

Aceeași procedură se aplică și celorlalte două reduceri, diferă doar valoarea reducerii.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image08.png) 


**Discounturi pe cantitate (Tip eșalon *Cantitate*)**:

Discount1:

-        Câmp: neobligatoriu

-        Tip: zecimale

-        Formatare Excel: număr, poziție zecimale = 2

-        Lungime maximă: /

-        Descriere: reducerea este aplicată dacă se achiziționează o anumită Cantitate de articol.

*Exemplu*: 10

Cantitate1:

-        Câmp: neobligatoriu

-        Tip: zecimale

-        Formatare Excel: număr, poziție zecimale = 2

-        Lungime maximă: /

-        Descriere: cantitate minimă necesară pentru a avea acel discount

*Exemplu*: 550

Aceeași procedură se aplică și celorlalte două reduceri pe cantitate, diferă doar valoarea reducerii.

 ![](/img/it-it/applications/bizlink/import-sales-price-lists/image09.png)


**Discounturi pe valoare (Tip eșalon *Valoare*)**:

Discount1:

-        Câmp: neobligatoriu

-        Tip: zecimale

-        Formatare Excel: număr, poziție zecimale = 2

-        Lungime maximă: /

-        Descriere: discount  aplicat dacă linia depășește o aumită sumă 

*Exemplu*: 20

Valoare1:

-        Câmp: neobligatoriu

-        Tip: zecimale

-        Formatare Excel: număr, poziție zecimale = 2

-        Lungime maximă: /

-        Descriere: sumă minimă necesară pentru a avea acel discount

*Exemplu*: 950

Aceeași procedură se aplică și celorlalte două reduceri pe valoare.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image10.png) 


**Preț per Cantitate (Tip eșalon *PxC*)**:

Preț1:

-        Câmp: neobligatoriu

-        Tip: zecimale

-        Formatare Excel: număr, poziție zecimale = 2

-        Lungime maximă: /

-        Descriere: preț unitar aplicat dacă se depășește o anumită cantitate

*Exemplu*: 3.99

Cantitate1:

-        Câmp: neobligatoriu

-        Tip: zecimale

-        Formatare Excel: număr, poziție zecimale = 2

-        Lungime maximă: /

-        Descriere: cantitate minimă necesară pentru a avea acel preț unitar

*Exemplu*: 250

Aceeași procedură se aplică și celorlalte două prețuri pe cantitate, diferă doar valoarea reducerii.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image11.png) 


**Alte date**:

Note:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: /

-        Descriere: note suplimentare

*Exemplu*: nu expuneți la soare

-        Mapping table/coloană: select MBNC_Codice from MB_NoteCodificat

### BizLink Parameters

Acești parametri vor fi utilizați pentru a procesa rândurile inserate în secțiunea *Date*. După cum se poate observa din imagine, unele câmpuri sunt deja completate, dar pot fi modificate.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image12.png)

1      BizLink Spreadsheet:

-        Câmp: nu trebuie completat

2      Limba:

-        Câmp: obligatoriu

-        Tip: string

-        Descriere: Iso code aferent limbii

*Exemplu*: “it-IT” este pentru italiană, “en-US” este pentru engleza americană.

3      Societate:

-        Câmp: obligatoriu

-        Tip: string

-        Descriere: este un câmp deja populat, deoarece preia valorile deja existente în Fluentis. Acestea pot fi vizualizate în colțul din stânga sus.

*Exemplu*: “1” corespunde societății demo

-        Mapping table/coloană: Select MBSC_Code from MB_Soc

4      Diviziune:

-        Câmp: obligatoriu

-        Tip: string

-        Descriere: este un câmp deja populat ca in cazul societății.

*Exemplu*: “1” corespunde sediului legal, “2” sediului operativ

-        Mapping table/coloană: select MBDP_Code from MB_Dep

5      Țară:

-        Câmp: obligatoriu

-        Tip: string

-        Descriere: reprezintă țara în care se află diviziunea pentru care a fost importată ofera de prețuri

*Exemplu*: “GB” corespunde Marii Britanii, “USA” corespunde Statelor Unite

-        Mapping table/coloană: select MBNZ_Codice from MB_Nazioni

6     Tip Barcode:

-        Câmp: obligatoriu doar dacă în secțiunea *Date* a fost inserat barcodul cel puțin pentru un articol

-        Tip: string

-        Descriere: indică tipul de barcode utilizat

*Exemplu*: “39” corespunde la COD39

-        Mapping table/coloană: select MBBC_Codice from MB_BarCode

7      Natura ofertă de preț (GEN-CUST):

-        Câmp: obligatoriu

-        Tip: string

-        Descriere: indică dacă oferta de prețuri este standard sau personalizată. 'GEN' este de obicei folosit pentru ofertele de prețuri care pot fi transferate de la un client la altul, deoarece vor fi la fel. În schimb, 'CUST' corespunde unei oferte de prețuri personalizată pe client.

*Exemplu*: “GEN” corespunde la generală, “CUST” corespunde la  personalizată

-        Mapping table/coloană:

8      Tip ofertă:

-        CCâmp: obligatoriu

-        Tip: string

-        Descriere: indică tipul ofertei. Trebuie inserat doar dacă natura ofertei = ”GEN”.

*Exemplu*: “GEN” corespunde la generală, “PRO” corespunde la promoții

-        Mapping table/coloană: select MBLV_List from MB_LisVen

9      Cont sintetic:

-        Câmp: obligatoriu

-        Tip: string

-        Descriere: cont sintetic client. Dacă oferta este custom, contul sintetic și analitic vor fi creați cum a fost setat în parametri. Dacă este *Gen* nu trebuie inserat.

*Exemplu*: 

-        Mapping table/coloană: select MBPC_Conto from MB_PiaCon

10  Cont analitic:

-        Câmp: neobligatoriu

-        Tip: string

-        Descriere: cont analitic client. Dacă oferta este custom, contul sintetic și analitic vor fi creați cum a fost setat în parametri. Dacă este *Gen* nu trebuie inserat.

*Exemplu*: 

-        Mapping table/coloană: select BPC_SottoConto from MB_PiaCon

11  Deviza:

-        Câmp: obligatoriu

-        Tip: string

-        Descriere: deviza cu care se interpretează datele introduse în secțiunea *Date*

*Exemplu*: “EUR” corespunde la Euro, “USD” corespunde la dolar.

-        Mapping table/coloană: select MBDI_Divisa from MB_Divise

12  Rotunjiri:

-         Câmp: obligatoriu

-        Tip: zecimal

-         Descriere: indică dacă se rotunjește în plus sau în minus

*Exemplu*: 1 corespunde la niciunul, 2 corespunde la rotunjire în superioară, 3 corespunde la rotunjire inferioară

-        Mapping table/coloană: select MBRNT_Id from MB_RoundingType

13  Început valabilitate:

-        Câmp: obligatoriu

-        Tip: datetime

-        Descriere: indică începutul valabilității ofertei inserate (zz/ll/aaaa)

*Exemplu*: 1/10/2018

11  Sfârșit valabilitate:

-        Câmp: neobligatoriu

-        Tip: datetime

-        Descriere: indică sfârșitul valabilității ofertei inserate (zz/ll/aaaa)

*Exemplu*: 31/12/2027

15  Tip discount ofertă:

-        Câmp: neobligatoriu

-        Tip: string

-        Descriere: indică tipul de reducere efectuată relativ la secțiunea *Discounturi*.

*Exemplu*: “4” corespunde discountului final la vânzare

-        Mapping table/coloană: select MBST_Code from MB_Sconti

16  Tip discount ofertă2:

-        Câmp: neobligatoriu

-        Tip: string

-        Descriere: indică tipul discountului efectuat relativ la secțiunea *Discounturi*.

*Exemplu*: “4” corespunde discountului final la vânzare

-        Mapping table/coloană: select MBST_Code from MB_Sconti

17  Tip discount ofertă3:

-        Câmp: neobligatoriu

-        Tip: string

-        Descriere: indică tipul discountului efectuat relativ la secțiunea *Discounturi*.

*Exemplu*: “4” corespunde discountului final la vânzare

-        Mapping table/coloană: select MBST_Code from MB_Sconti

18  Tip discount cantitate:

-        Câmp: neobligatoriu

-        Tip: string

-        Descriere: indică tipul discountului efectuat

*Exemplu*: “4” corespunde discountului final la vânzare

-        Mapping table/coloană: select MBST_Code from MB_Sconti

19  Tip discount valore:

-        Câmp: neobligatoriu

-        Tip: string

-        Descriere: indică tipul discountului efectuat

*Exemplu*: “4” corespunde discountului final la vânzare

-        Mapping table/coloană: select MBST_Code from MB_Sconti

### Start import

După introducerea datelor, pentru a începe importul, clic pe butonul **Import**.

### Concluzie – Inserare efectuată

Verificarea operației se face accesând registrul articolelor (**Home > Articole**) pentru a vedea dacă sunt prezente articolele importate de la furnizor. În caz contrar, aplicația va genera un mesaj de eroare care va indica ce parametri și/sau câmpuri sunt incorecte. Pentru a interpreta tipul de eroare, consultați secțiunea *Sfaturi și atenționări utile* din ultimul paragraf.



### Sfaturi și atenționări utile

**Formatare Excel recomandată**:

- Pentru un import corect, recomandăm să formatați coloanele conform tipului indicat în secțiunea *Formatare Excel* pentru fiecare câmp. De exemplu, dacă tipul câmpului este zecimal și în acel câmp va fi introdusă o valută, formatați câmpul ca valută. Dacă celula nu este formatată corespunzător, Excel elimină cifrele nesemnificative. Pentru a aplica formatarea, urmați pașii de mai jos:

1. selectați coloana dorită:

 ![](/img/it-it/applications/bizlink/import-sales-price-lists/image14.png)

2. poziționați-vă în coloană și faceți clic dreapta.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image15.png) 


3. selectați cu clic stânga **> Format Cells...**

 ![](/img/it-it/applications/bizlink/import-sales-price-lists/image16.png)

4. formatați coloana selectată. Conform indicațiilor furnizate în *Inserare câmpuri*, selectați categoria corespunzătoare, cu specificațiile relative (de exemplu, valută, fără simbol). Același lucru se poate face și din foaia de calcul prezentă în Fluentis.

:::note Atenție
O situație tipică implică coduri care conțin zerouri aparent nesemnificative, de exemplu "001". Dacă câmpul este formatat generic sau ca număr, zerourile vor fi eliminate, dar dacă este formatat ca text, acestea vor fi păstrate.
:::

**Mapping table/coloană**:

- Dacă în *Inserare câmpuri* există *Mapping table/coloană*, înseamnă că valoarea introdusă în câmp pentru import poate fi deja prezentă în baza de date. A fost inserat și în câmpurile care vor fi introduse de la zero, pentru a putea vedea un exemplu, dacă este prezent în baza de date. Pentru a vizualiza datele prezente în baza de date, urmați pașii de mai jos, utilizând ca exemplu clasa articole și mapping-ul aferent: 

select MBDC_Classe from MB_Classi (**\<-** questo è il mapping). Executați query in “Microsoft SQL server management studio” și obțineți rezultatul:

![](/img/it-it/applications/bizlink/import-sales-price-lists/image17.png) 

Rezultatul nu oferă informații clare; pentru a înțelege semnificația, înlocuiți după clauza select simbolul "*" cu câmpul pentru a compune noua interogare. În acest caz, ar fi select * from MB_Class, care selectează întregul conținut al tabelului.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image18.png) 

Aceasta operație este utilă deoarece datorită descrierii (MBDC_Descr) se poate înțelege ce reprezintă câmpul și verifica dacă ceea ce veți introduce este sau nu în baza de date. Această procedură este universală, valabilă pentru fiecare câmp și aceeași reprezentare este vizibilă și în Fluentis:

În Fluentis selectați **Articoli > Articoli**. În acest form, alegeți clasa articolelor cu descrierea aferentă.

Aceasta este pentru clasa articolelor. Pentru alte câmpuri, se poate urma aceeași procedură, dar în locații diferite. Trebuie să selectați una din valorile prezente, altfel importul nu va reuși și va afișa un mesaj de eroare. Acest lucru este valabil pentru fiecare câmp pentru care există un mapping table/coloană.

Dacă doriți să adăugați un câmp cu mapping care nu este în baza de date, acesta va trebui să fie inserat cu un query sau din Fluentis. În acest caz, interogarea de inserție nu este recomandată deoarece este mai complicată decât vizualizarea descrisă anterior. Procedura recomandată este inserarea din Fluentis. Tot pentru clasa articole, în *Articole*, faceți clic dreapta în filtrul de căutare al clasei articole și selectați **Deschide form**.

În fereastra care se va deschide, faceți clic pe butonul de căutare pentru a vizualiza clasele de articole existente.

Sub ultima linie inserată se află o linie goală. Aceasta este folosită pentru introducerea de noi valori.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image23.png) 

Introduceți valorile noi și apăsați *Enter*.

Această procedură este similară pentru celelalte câmpuri, singurul lucru care se schimbă fiind locația filtrelor de căutare unde trebuie să faceți clic stânga pentru a deschide form-ul.

**Errori**:

În cazul importului nereușit, aplicația va genera un mesaj de eroare.

Dacă eroarea s-a produs în secțiunea *Data*, se poate identifica rândul care conține eroarea, deoarece va fi scris, de exemplu: "System.ArgumentException: Error importing row 4". În acest caz (vedeți figura de mai jos), eroarea va fi pe rândul 4, care însă nu este rândul care conține efectiv eroarea. Pentru a identifica exact rândul cu eroarea, utilizați numerele din coloana din stânga și adăugați 1. Deci:

Rând real care conține eroarea = Error importing rownum + 1

![](/img/it-it/applications/bizlink/import-sales-price-lists/image24.png)

Pentru a interpreta eroarea din mesaj, urmați pașii de mai jos:  
- pe același rând care conține numărul rândului menționat anterior, este scris **obiectul** la care se referă, apoi **eroarea** propriu-zisă și în final **proprietatea** în care a fost detectată eroarea.  
Tot în exemplul de mai sus *Failed to create, update or delete the object of type Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.FSPurchasePriceListItem, Fluentis.FluentisErp.Core.Scm.PurchasePriceLists* not-null property references a null or transient value Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.ReadWrite.FSWPurchasePriceListItem.MeasurementUnit*, așa cum se poate observa în imaginea de mai sus, unitatea de măsură aferentă prețului de achiziție din ofertă a generat eroarea deoarece aceasta este nulă. Aplicația avizează că inserarea acesteia este obligatorie.

Dacă eroarea s-a produs în secțiunea *Parametri*, mesajul va fi similar, metoda de rezolvare rămânând aceeași. Deci, în baza proprietății, verificați inserarea corectă a acesteia.

:::important Important  
Dacă este găsit un rând complet gol, nu va fi raportată nicio eroare, dar importul se va opri. De exemplu, dacă primul rând (rândul nr. 4) este gol dintr-un motiv oarecare și sub acesta (începând cu rândul nr. 5) se află rânduri populate, nu se va importa nimic.
:::

:::important Important  
Dacă este introdus un registru de 10 rânduri, de exemplu, și în rândul nr. 7 apare o eroare, primele 6 rânduri, neavând probleme, sunt inserate. Dacă nu este schimbată nicio valoare în primele 6 rânduri (și evident, dacă eroarea este corectată), reluând importul nu vor apărea nici erori de duplicare, deoarece se verifică mai întâi dacă este deja prezent contactul. Dacă este schimbată chiar și o singură valoare, acel articol va fi inserat deoarece va fi văzut ca un nou articol.
:::

În final, un alt mesaj de eroare care poate apărea este următorul:

![](/img/it-it/applications/bizlink/import-sales-price-lists/image25.png) 

Așa cum se poate observa în imaginea de mai sus, acest tip de mesaje sunt mai ușor de interpretat deoarece se referă exact la celula cu eroarea. În acest caz, în celula F:4 nu este prezentă nicio valoare.
