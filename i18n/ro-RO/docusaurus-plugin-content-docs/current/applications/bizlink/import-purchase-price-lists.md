---
title: Import oferte furnizori
sidebar_position: 3
---

Procedura permite importarea ofertelor furnizorilor în **Fluentis** folosind un **fișier electronic**.

Această import este posibil datorită utilizării **Parametrilor BizLink**, deoarece de fiecare dată când este procesată o linie, aceștia vor fi apelați.


### Import folosind fișierul electronic

Clic pe **Instrumente** (de obicei, se află în partea dreaptă a aplicației Fluentis), apoi pe **BizLink > Import On Demand > Documente de achiziție > Import oferte furnizori** ca în figura următoare:

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image03.png) 

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


**Date generale**:

Cod:

-        Câmp: obligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: 50 caractere

-        Descriere: cod de referință articol

*Exemplu*: 02030508

Descriere:

-        Câmp: obligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: 200 caractere

-        Descriere: descriere dată de furnizorul articolului

*Exemplu*: minge de tenis sensibilă la rotație, poate corespunde codului articolului

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image06.png) 


**Date articol**:

Clasă:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: /

-        Descriere: cod clasă articol

*Exemplu*: “1” pentru semifabricate, “IMB” pentru ambalaje

-        Mapping table/coloană: select MBDC_Classe from MB_Classi

Cod intern:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text: 50 caractere

-        Descriere: dacă nu este atribuit, va fi considerat cel al furnizorului. Acesta va identifica articolul. Deci, dacă unui articol i se modifică codul intern, atunci va fi adăugat un nou articol. În schimb, dacă unui articol i se lasă nemodificat codul articolului și, de exemplu, i se modifică descrierea, se va efectua o actualizare a articolului cu acel cod articol. (nu actualizați unitatea de măsură).

*Exemplu*: 7710ct7tb

Descriere internă:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text: 200 caractere

-        Descriere: dacă nu este atribuit, va fi considerat cel al furnizorului.

*Exemplu*: minge de tenis sensibilă la rotație

Unitate de măsură:

-        Câmp: obligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: 3 caractere

-        Descriere: reprezintă codul unității de măsură utilizate pentru articolul analizat

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

-        Câmp: neobligatoriu

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

Nomenclatură:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: 50 caractere

-        Descriere: nomenclatura, clasificare articol

*Exemplu*: “32049000” corespunde la coloranți

-        Mapping table/coloană: select INCN_CodNomencl from IN_CodNomenc

Cod producător:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: 100 caractere

-        Descriere: reprezintă codul producătorului articolului

*Exemplu*: art0102032019

Cod comercial:

-        Câmp: neobligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: 100 caractere

-        Descriere: reprezintă codul categoriei comerciale

*Exemplu*: *P* corespunde la privat

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image07.png) 


**Date ofertă**:

Preț:

-        Câmp: obligatoriu

-        Tip: zecimale

-        Formatare Excel: valută, simbol niciunul

-        Lungime maximă: /

-        Descriere: preț articol din ofertă

*Exemplu*: 10.99, 123.45

UMPreț:

-        Câmp: obligatoriu

-        Tip: string

-        Formatare Excel: text

-        Lungime maximă: /

-        Descriere: pentru stabilirea prețului în raport cu cantitatea (ex. Preț pe kg, Preț pe mp)

*Exemplu*: “kg” corespunde la kilograme

-        Mapping table/coloană: select MBUM_Codice from MB_UnitaMisura


Cantitate:

-        Câmp: neobligatoriu

-        Tip: zecimale

-        Formatare Excel: număr, poziție zecimale = 2

-        Lungime maximă: /

-        Descriere: cantitatea de articol la care se referă prețul anterior

*Exemplu*: 500


**Valoare adăugată**:

-        Câmp: neobligatoriu

-        Tip: zecimale

-        Formatare Excel: număr, poziție zecimale = 2

-        Lungime maximă: /

-        Descriere: valoare adăugată care poate fi utilizată la crearea ofertelor de prețuri de vânzare din ofertele de achiziție. De exemplu, dacă există cheltuieli de transport (care trebuie plătite furnizorului), acestea sunt raportate aici pentru a fi utilizate ulterior în calculul prețului de vânzare al articolului.
*Exemplu*: 123.45


**% adăugată**:

-        Câmp: neobligatoriu

-        Tip: zecimale

-        Formatare Excel: număr, poziție zecimale = 2

-        Lungime maximă: /

-        Descriere: procent suplimentar care poate fi utilizat la crearea ofertelor de prețuri de vânzare din ofertele de achiziție  
*Exemplu*: 10        

  ![](/img/it-it/applications/bizlink/import-purchase-price-lists/image08.png)


**Discounturi**:

Discount1:

-        Câmp: neobligatoriu

-        Tip: zecimale

-        Formatare Excel: număr, poziție zecimale = 2

-        Lungime maximă: /

-        Descriere: discounturi posibile aplicabile

*Exemplu*: *50+10* pe totalul rândului se aplică un prim discount de 50% și pe noul total un alt discount de 10%

Aceeași procedură se aplică și celorlalte două reduceri, diferă doar valoarea reducerii.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image09.png) 


**Discounturi pe cantitate**:

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

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image10.png) 


**Discounturi pe valoare**:

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

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image11.png) 


**Preț per Cantitate**:

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

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image12.png) 


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

 ![](/img/it-it/applications/bizlink/import-purchase-price-lists/image13.png)

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

6      Barcode:

-        Câmp: obligatoriu doar dacă în secțiunea *Date* a fost inserat barcodul cel puțin pentru un articol

-        Tip: string

-        Descriere: indică tipul de barcode utilizat

*Exemplu*: “39” corespunde la COD39

-        Mapping table/coloană: select MBBC_Codice from MB_BarCode

7      Cont sintetic:

-        Câmp: obligatoriu

-        Tip: string

-        Descriere: cont sintetic furnizor

*Exemplu*: 

-        Mapping table/coloană: select MBPC_Conto from MB_PiaCon

8      Cont analitic:

-        Câmp: neobligatoriu

-        Tip: string

-        Descriere: cont analitic furnizor

*Exemplu*: 

-        Mapping table/coloană: select BPC_SottoConto from MB_PiaCon

9      Deviza:

-        Câmp: obligatoriu

-        Tip: string

-        Descriere: deviza cu care se interpretează datele introduse în secțiunea *Date*

*Exemplu*: “EUR” corespunde la Euro, “USD” corespunde la dolar.

-        Mapping table/coloană: select MBDI_Divisa from MB_Divise

10  Început valabilitate:

-        Câmp: obligatoriu

-        Tip: datetime

-        Descriere: indică începutul valabilității ofertei inserate (zz/ll/aaaa)

*Exemplu*: 1/10/2018

11  Sfârșit valabilitate:

-        Câmp: neobligatoriu

-        Tip: datetime

-        Descriere: indică sfârșitul valabilității ofertei inserate (zz/ll/aaaa)

*Exemplu*: 31/12/2027

12  Tip discount ofertă:

-        Câmp: neobligatoriu

-        Tip: string

-        Descriere: indică tipul de reducere efectuată. Vor fi trei tipuri diferite, fiecare pentru reducerea sa din secțiunea *Discounturi*.

*Exemplu*: “4” corespunde discountului final la vânzare

-        Mapping table/coloană: select MBST_Code from MB_Sconti

15 Tip discount cantitate:

-        Câmp: neobligatoriu

-        Tip: string

-        Descriere: indică tipul discountului efectuat

*Exemplu*: “4” corespunde discountului final la vânzare

-        Mapping table/coloană: select MBST_Code from MB_Sconti

16 Tip discount valore:

-        Câmp: neobligatoriu

-        Tip: string

-        Descriere: indică tipul discountului efectuat

*Exemplu*: “4” corespunde discountului final la vânzare

-        Mapping table/coloană: select MBST_Code from MB_Sconti

17 Pe terț:

-        Câmp: obligatoriu

-        Tip: boolean

-        Descriere: indica dacă acea ofertă (în sistem lohn) va fi sau nu pentru un terț

*Exemplu*: “1” corespunde la true, “0” corespunde la false

18 Inserare articol:

-        Câmp: obligatoriu

-        Tip: boolean

-        Descriere: dacă este setat , inserează articolul în tabelul *Registru articole* MG_AnaArt

*Exemplu*: “1” corespunde la true, “0” corespunde la false

19  Inserare articol pe furnizor:

-        Câmp: obligatoriu

-        Tip: boolean

-        Descriere: dacă este setat , inserează articolul în tabelul *Articole pe furnizor* MB_ArticoliFornitore, MG_FornPreferenziali

*Exemplu*: “1” corespunde la true, “0” corespunde la false

### Start import

După introducerea datelor, pentru a începe importul, clic pe butonul **Import**.

### Concluzie – Inserare efectuată

Verificarea operației se face accesând registrul articolelor (**Home > Articole**) pentru a vedea dacă sunt prezente articolele importate de la furnizor. În caz contrar, aplicația va genera un mesaj de eroare care va indica ce parametri și/sau câmpuri sunt incorecte. Pentru a interpreta tipul de eroare, consultați secțiunea *Sfaturi și atenționări utile* din ultimul paragraf.



### Sfaturi și atenționări utile

**Formatare Excel recomandată**:

- Pentru un import corect, recomandăm să formatați coloanele conform tipului indicat în secțiunea *Formatare Excel* pentru fiecare câmp. De exemplu, dacă tipul câmpului este zecimal și în acel câmp va fi introdusă o valută, formatați câmpul ca valută. Dacă celula nu este formatată corespunzător, Excel elimină cifrele nesemnificative. Pentru a aplica formatarea, urmați pașii de mai jos:

1. selectați coloana dorită:

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image15.png)

2. poziționați-vă în coloană și faceți clic dreapta.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image16.png)

3. selectați cu clic stânga **> Format Cells...**

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image17.png) 

4. formatați coloana selectată. Conform indicațiilor furnizate în *Inserare câmpuri*, selectați categoria corespunzătoare, cu specificațiile relative (de exemplu, valută, fără simbol). Același lucru se poate face și din foaia de calcul prezentă în Fluentis.

:::note Atenție
O situație tipică implică coduri care conțin zerouri aparent nesemnificative, de exemplu "001". Dacă câmpul este formatat generic sau ca număr, zerourile vor fi eliminate, dar dacă este formatat ca text, acestea vor fi păstrate.
:::

**Mapping table/coloană**:

- Dacă în *Inserare câmpuri* există *Mapping table/coloană*, înseamnă că valoarea introdusă în câmp pentru import poate fi deja prezentă în baza de date. A fost inserat și în câmpurile care vor fi introduse de la zero, pentru a putea vedea un exemplu, dacă este prezent în baza de date. Pentru a vizualiza datele prezente în baza de date, urmați pașii de mai jos, utilizând ca exemplu clasa articole și mapping-ul aferent: 

select MBDC_Classe from MB_Classi (**\<-** questo è il mapping). Executați query in “Microsoft SQL server management studio” și obțineți rezultatul:

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image18.png) 

Rezultatul nu oferă informații clare; pentru a înțelege semnificația, înlocuiți după clauza select simbolul "*" cu câmpul pentru a compune noua interogare. În acest caz, ar fi select * from MB_Class, care selectează întregul conținut al tabelului.

 ![](/img/it-it/applications/bizlink/import-purchase-price-lists/image19.png)

Aceasta operație este utilă deoarece datorită descrierii (MBDC_Descr) se poate înțelege ce reprezintă câmpul și verifica dacă ceea ce veți introduce este sau nu în baza de date. Această procedură este universală, valabilă pentru fiecare câmp și aceeași reprezentare este vizibilă și în Fluentis:

În Fluentis selectați **Home > Articole > Articole furnizori**. În acest form, alegeți clasa articolelor cu descrierea aferentă.

Aceasta este pentru clasa articolelor. Pentru alte câmpuri, se poate urma aceeași procedură, dar în locații diferite. Trebuie să selectați una din valorile prezente, altfel importul nu va reuși și va afișa un mesaj de eroare. Acest lucru este valabil pentru fiecare câmp pentru care există un mapping table/coloană.

Dacă doriți să adăugați un câmp cu mapping care nu este în baza de date, acesta va trebui să fie inserat cu un query sau din Fluentis. În acest caz, interogarea de inserție nu este recomandată deoarece este mai complicată decât vizualizarea descrisă anterior. Procedura recomandată este inserarea din Fluentis. Tot pentru clasa articole, în *Articole furnizori*, faceți clic dreapta în filtrul de căutare al clasei articole și selectați **Deschide form**.

În fereastra care se va deschide, faceți clic pe butonul de căutare pentru a vizualiza clasele de articole existente.

Sub ultima linie inserată se află o linie goală. Aceasta este folosită pentru introducerea de noi valori.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image24.png)

Introduceți valorile noi și apăsați *Enter*.

Această procedură este similară pentru celelalte câmpuri, singurul lucru care se schimbă fiind locația filtrelor de căutare unde trebuie să faceți clic stânga pentru a deschide form-ul.

**Erori**:

În cazul importului nereușit, aplicația va genera un mesaj de eroare.

Dacă eroarea s-a produs în secțiunea *Data*, se poate identifica rândul care conține eroarea, deoarece va fi scris, de exemplu: "System.ArgumentException: Error importing row 4". În acest caz (vedeți figura de mai jos), eroarea va fi pe rândul 4, care însă nu este rândul care conține efectiv eroarea. Pentru a identifica exact rândul cu eroarea, utilizați numerele din coloana din stânga și adăugați 1. Deci:

Rând real care conține eroarea = Error importing rownum + 1

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image25.png)

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

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image26.png) 

Așa cum se poate observa în imaginea de mai sus, acest tip de mesaje sunt mai ușor de interpretat deoarece se referă exact la celula cu eroarea. În acest caz, în celula F:4 nu este prezentă nicio valoare.
