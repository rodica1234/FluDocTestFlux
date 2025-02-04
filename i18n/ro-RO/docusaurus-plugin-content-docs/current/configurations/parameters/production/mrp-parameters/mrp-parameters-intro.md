---
title: Parametri MRP
sidebar_position: 1
tags: [MRP]
---

Pentru a modifica Parametri MRP:  
1. deschideți form-ul care se află în **Parametri > Producție > Parametri MRP**  
2. selectați articolul și efectuați dublu clic pe linie sau utilizați butonul **Modifică parametri**.

### Date generale

**Politica de gestionare** permite utilizatorului să aleagă gestionarea articolului pe baza:

> **Prognoze**: articolul va fi gestionat prin intermediul generării previziunii de vânzare sau inserării unui plan principal de producție. Această politică este apoi considerată atât în *Definire MPS*, cât și în *MRP*;  
> **Stoc**: articolul va fi gestionat pe baza informațiilor momentului de lansare al comenzii și al stocului minim inserate în tab [Aprovizionareerp-home/registers/items/create-new-items/item-registry/procurement) din registrul articolului. Acest lucru pentru că sunt articole pentru care cererea clienților ajunge mai târziu decât necesitatea de aprovzionare și/sau producție și deci aceste articole trebuie să fie gestionate pe stoc pentru a  aproviziona sau produce înainte de a ajunge cererea reală. Și în acest caz, generarea comenzii de producție a articolului va fi efectuată cu procedura *Definire MPS*;  
> **Comandă**: articole pentru care se va produce pe comandă, deci pentru care doriți să urmăriți fazele de producție; în acest caz, acest tip de politică de gestionare va fi efectuată în mod implicit numai prin *Definire MPS*, în tab **Ordine clienți**, deoarece prin gestionarea MPS sunt generate comenzile de producție. Acesta poate fi, de asemenea, gestionate cu MRP, dar numai dacă se specifică cu ajutorul parametrului *Consideră articolul în calculul MRP* care se află în acest form.  
*Exemplu*: cu acest tip de gestionare, dacă aveți un ordin client pentru 6 bucăți din acest articol și un alt ordin client pentru 8 bucăți din același articol, pentru a urmări producția și legătura dintre ordinul clientului și ordinul de producție, se vor crea două comenzi de producție diferite, fiecare legată la un anumit ordin client.  
> **Necesar**: în acest caz, sunt articole pe care nu doriți să le urmăriți și, prin urmare, pot fi grupate mai multe cereri din surse diferite (nu există nicio legătură cu comanda). În acest caz, articolul poate fi luat în considerare în cazul utilizării procedurii *MRP* în locul procedurii *Planificare generală* (implicită).  
Și articolul gestionat pe *Necesar* poate fi luat în considerare de procedura *Definire MPS*, însă acest lucru este posibil datorită unor parametri din *Parametri MPS* care permit generarea automată a fluxului de producție și a comenzii în momentul inserării liniei ordinului client. Astfel procedura de *Definire MPS* este omisă.
*Exemplu*: dacă alegeți acest tip de gestionare și aveți un ordin client pentru 6 bucăți și altul pentru 8 din același articol, se va genera un ordin de producție cumulativ, de 14 bucăți, pierzând legătura dintre ordin și comandă și, prin urmare, trasabilitatea.  

:::note NOTĂ
Următoarele opțiuni pentru buffer și toleranță de timp pentru client sunt disponibile doar cu DDMRP.
:::
> **Buffere dinamice DDMRP**: prevăd variația în timp a celor trei zone caracteristice (verde, galbenă, roșie) și, în consecință, și nivelul mediu al stocului.          
> **Buffere fixe DDMRP**: utilizează valori fixe pentru zone și, în consecință, un nivel mediu fix al stocului (se folosesc în cazul spațiului limitat, al investițiilor sau securității limitate etc.).                
> **Buffere min-max DDMRP**: folosesc doar zona roșie și zona verde.           
>> **Toleranţă timp clienţi**: este timpul de livrare exprimat în zile pe care clienții îl consideră în general acceptabil (se activează doar după selectarea unui tip de buffer DDMRP).    



**Tip aprovizionare**: permite diferențierea tipului ordinelor planificate care vor fi create iar utilizator poate alege unul din următoarele tipuri de aprovizionare a articolului:  
> **Achiziții**: necesarul va crea un ordin planificat de achiziții pentru articolul ales;  
> **Producție**: necesarul va crea un ordin planificat de producție pentru articolul ales;  
> **Sistem lohn**: necesarul va crea un ordin planificat în SL pentru articolul ales.

**Tip ieșire** permite utilizatorului să aleagă tipul prelevării articolului, și anume cum să fie descărcat articolul în producție, și anume:  
> **Manual**: cu această setare, articolul va fi prelevat doar în timpul semnalării de producție a nivelului listei componentelor imediat superior lui. Prelevarea se va realiza simultan cu semnalarea fazei de producție la care a fost asociat materialul sau, în lipsa fazei asociate, simultan cu semnalarea ultimei faze interne de producție. Menționăm faptul că, în cazul utilizării gestiunii WIP, tipul prelevării manuale implică transferul materialului ales din gestiunea de materii prime în gestiunea WIP în timpul lansării ordinului de producție și apoi descărcarea din WIP în timpul semnalării;  
> **Automat**: cu această setare, articolul va fi prelevat în timpul lansării ordinului de producție cu schimbarea ordinului de producție din *Lansat* > *În execuție*;  
> **Cu listă**: cu această setare, articolul va fi prelevat cu generarea unei liste de ieșiri, cu ajutorul utilizării procedurii omonime prezente în *Producției > Ordine de producție > Rapoarte*.

**Prioritate aprovizionare**: permite utilizatorului să aleagă tipul priorității de atribuit articolului. Aceasta va fi utilizată la crearea *Cererilor de achiziție* în faza de [Lansării ordinelor planificate/ms-master-scheduling/planned-orders/procedures/release-planned-orders/) dacă a fost activat parametrul **Prioritate aprovizionare din parametrii MRP articol**;

**Com. producție**: dacă este activ, liniile ordinului client care au acest articol trebuie să fie afișate în filtrul ordinelor clienți în *Definire MPS*;

**% reziduu**: permite utilizatorului să insereze procentul de reziduu fix pentru articol. Acest procent va fi tot timpul inserat atunci când articolul este preluat într-o listă de componente.   
*Exemplu*: dacă se presupune că pentru a produce un material există un deșeu de obicei de 10%, iar dacă ordinul care urmează să fie produs este de 100 de bucăți, planificatorul sau MRP-ul la crearea ordinului planificat în loc să îl facă de 100 de bucăți, îl va face de 100 de bucăți + 10%.

**Nr. ciclu**: permite utilizatorului să aleagă ciclul implicit al articolului;

**Consideră în SL**: dacă este activat, articolul este considerat la completarea automată a tab-ului *Materiale de livrat* și în tab *Materiale de utilizat* al ordinului în SL;

**Consideră cantitățile pe baza lotului economic**: dacă este activ, permite ca pentru articol să fie considerat lotul economic inserat (cantitatea minimă de producție/achiziție) de producție (setat în secțiunea *Parametri de producție* din acest form) sau de achiziție (setat în secțiunea *Parametri de achiziție* din acest form);

**Consideră multiplii lotului economic**: dacă este activ, permite ca pentru articol să fie considerat multiplul lotului economic de producție sau de achiziție inserat;

**Completare stoc minim articol**: dacă este activ, permite ca pentru articol să fie completat stocul minim inserat în registrul său, tab *Aprovizionare*;

**Completare moment reaprovizionare articol**: dacă este activ, permite ca pentru articol să fie completat momentul reaprovizionării inserat în registrul său, tab *Aprovizionare*;

**Consideră indicele de acoperire**: dacă este activ, permite ca pentru articol să fie considerat indicele de acoperire inserat în registrul său, tab *Aprovizionare*; indicele de acoperire este exprimat în săptămâni și indică aplicației să acopere necesarul pentru saptămânile inserate.

**Consideră și alternativele materialelor**: dacă este activ, permite ca pentru articol să fie considerate și alternativele sale inserate în lista componentelor, tab *Alternative*;

**Consideră fazele alternative**: dacă este activ, permite ca pentru articol să fie considerate, dacă este de producție, fazele alternative inserate în ciclul de lucru al aceluiași articol. În câmpul *Toleranță pentru ocuparea CdL* se poate insera un procent pentru a stabili cât se poate utiliza cantitatea de lucru disponibilă a centrului de lucru(de ex., dacă se inserează 90%, când se ajunge la 90% din ocuparea acestui centru de lucur, aplicația va considera alternativele inserate centrului), iar în câmpul *Toleranță de producție* se poate insera, tot în procent, cât de mult se poate produce din articol față de cantitatea prevăzută în ordinul de producție și la fel pentru *Toleranță de achiziție*; 

**Blocare pt. producție**: dacă este activ și dacă o comandă de producție pentru acest articol este elaborată din **Planificarea generală** este lansat mesajul *Planificare imposibilè, articolul XXXX este blocat pentru producție*. În acest caz, planificarea se blochează și utilizatorul trebuie să o relanseze, excluzând comanda relativă la acest articol.

**Creare ordine planificate din calculul MRP**: dacă este activ, MRP-ul va crea ordinele planificate (doar dacă este activ și cu flagul omonim prezent în tab-ul [Parametri MRPconfigurations/parameters/production/mrp-parameters/mrp-parameters-intro)). Dacă nu este activ, MRP-ul va crea doar propunerile de ordine planificate (fără să le creeze efectiv).

**Listă componente de referință**  

În această secțiune se poate insera articolul a cărui *listă de componente* trebuie să fie de referință pentru planificarea unei eventuale comenzi de producție pe articol/variantă. Deci, se va putea insera articolul (inclusiv clasa, codul și descrierea), unitatea de măsură și, eventual, varianta.

**Parametrii producție**  
Secțiunea este activă dacă politica gestională a articolul este *Producție*. Aici pot fi inserate următoarele câmpuri:

> **Lead Time**: în acest câmp utilizatorul care nu utilizează ciclurile de producție poate insera un lead time de producție pentru articolul ales, timp calculat în zile lucrătoare bazat pe calendarul de fabrică și care nu variază atunci când este modificată cantitatea de produs;

> **Unitate de capacitate productivă**: se inserează capacitatea productivă pentru care trebuie să fie considerat lead time-ul articolului;

> **Lead Time Fix**: în acest câmp, utilizatorul poate decide să considere un timp de execuție fix și nu calculat pe baza ciclurilor de lucru (prin urmare, sistemul nu va considera lead time setat în ciclul de lucru, ci va lua în considerare această valoare), introducând valoarea în zile lucrătoare și activând această modalitate prin flag. 
Dacă flagul este activ, timpul calculat va fi dat de suma valorii **Lead Time Fix** (introdusă lângă flag) și valoarea **Lead Time Analiză** din tabul [Calitateerp-home/registers/items/create-new-items/item-registry/quality) al *Registrului articolului*, deci în acest caz timpul pe faze nu este considerat, iar data de început este recalculată pe baza *Calendarului de Fabrică*. Dacă flagul nu este activ, data de început va fi recalculată luând în considerare fazele, fazele alternative și *Calendarul centrelor de lucru*.

> **Lot economic**: în acest câmp utilizatorul poate insera un lot economic de producție pentru articol, care va fi considerat de procedurile pentru **Definirea MPS** și **Planificarea generală** (doar în cazul parametrului **Consideră cantitatea pe baza lotului econimic**);

> **Zile limită planificare**: în planificare va ține cont doar de ordine, rezervări, necesar pe această durată; tot ceea ce depășește nu va fi considerat;

> **Multipli**: în acest câmp utilizatorul poate insera multipli lotului economic de producție ai articolului, care vor fi considerate de procedurile pentru **Definirea MPS** și **Planificarea generală** (doar în cazul parametrului **Consideră cantitatea pe baza lotului econimic**);

> **De declarat pe Mobile**: acest flag este activat dacă articolul este gestionat prin intermediul aplicației Fluentis Mobile;

> **Zile grupare**: în acest câmp utilizatorul determină perioada de timp în care procedura grupează eventualele ordine planificate. Dacă, de exemplu, acest parametru este 5 pentru un anumit articol, vor fi grupate toate ordinele planificate care au data cuprinsă în intervalul de 5 zile lucrătoare (din calendarul fabricii);

**Zile toleranță anticipări**, **Zile toleranță posticipări**: sunt zilele pe care MRP le tolerează (anticipat/posticipat) pentru un document fără a propune efectiva anticipare/posticipare, dar utilizând eventuala depășire fără propuneri. Pentru acest motiv, dacă de exemplu un articol specific are ca valori Zile tol. avansuri = 2 și Zile tol. posticipări = 5, înseamnă că algoritmul MRP relevă exigența de anticipare sau posticipare un document pentru acel articol, acesta nu va fi comunicat utilizatoruilui ca cerere de anticipare sau posticipare dacă în intervalul de 2 zile precedente în cazul posticipării (utilizatorului îi va fi comunicat doar că exigența a fost satisfăcută de documentul particular);

> **Zile perioadă blocată**: protejează comenzile deja lansate în această perioadă de timp, în timp ce cele planificate sunt regenerate;

> **Toleranță în zile/procent din lead time**: determină perioada de timp în care se poate anticipa sau posticipa (după această limită MRP propune eliminarea documentului) și până când se comunică eventuala depășire a unui articol. Se poate exprima în zile sau procent din leadtime. Dacă, de exemplu, pentru un articol sunt definite 90 de zile de toleranță, documentele relative acestui articol specific vor putea fi anticipate sau posticipate cu maxim 90 de zile, dacă excesul va depăși această limită, MRP va propune eliminarea documentului și crearea unuia nou în data în care a fost identificat excesul. În plus, pentru articolul specific, o eventuală disponibilitate în exces va putea fi disponibilă până la un maxim de 90 de zile.

> **Declarare material manual obligatorie**: este utilizată în Fluentis MES. Dacă este activată, împreună cu **Declarare cantitate material obligatorie** din  [Resurse de producție/production-resources) prezent în MES, determină ca în tabul *Materiale* din Fluentis MES articolul să fie propus cu cantitatea zero, obligând astfel utilizatorul să introducă manual o valoare pentru a continua.

**Citire liste/cicluri**  
În secțiune utilizatorul poate insera versiunea listei și a ciclcului de producție care trebuie să fie considerată de procedura MRP pentru articolul ales.

**Consideră disponibilitățile din**  
În secțiune utilizatorul are posibilitatea să decidă care sunt ariile gestionale în care documentele trebuie să fie luate în considerare în timpul elaborării procedurii MRP. Ariile sunt: Achiziții, Vânzări, Gestiune (și în acest caz se poate decide dacă trebuie să fie considerate sau nu stocurile loturilor cu statusul nedisponibil cu ajutorul flag-ului relativ), Sistem lohn, Planificare (deci Comenzi de producție, ordine planificate de achiziție, Sistem lohn și/sau Producție), Producție lansată (deci Ordine de producție).

**Consideră loturi cu statusul nedisponibil**: dacă este activ (editabil doar dacă se alege ca disponibilitatea să provină din *Gestiune*), aplicația va considera și loturile care vor avea statusul *Nedisponibil*;

**Exclude stoc negativ**: dacă este activ, permite să nu fie considerate articolele cu stoc negativ.

**Consideră articolul în calculul MRP**: editabil doar dacă politica de gestiune este *pe comandă*. Dacă este activ, și articolele cu politica de gestiune *pe comandă* vor fi analizate și de MRP.

**Gestiune previziune**: cu ajutorul acestui combo-box se poate stabili cum să fie generate comenzile de producție din *Definire MPS* în cazul generării din *Previziuni*. Posibilitățile sunt: cel mai mare dintre Ordinele clienți și Previziuni de vânzare; Întodeauna Previziunea de vânzare; Cel mai mic dintre Ordinele clienți și Previziuni de vânzare; Întodeauna Ordinele clienți; Suma Ordinelor clienți și Previziunilor de vânzare.  
Este recomandat să se utilizeze *cel mai mare dintre ordine și previziuni* deoarece dacă s-a planificat să se producă 100 de bucăți din acest material, conform previziunilor și până la data de începere a producției, vor fi primite ordine pentru 200 bucăți, în cazul setării acestei politici de gestiune a previziunii, aplicația va crea un ordin pentru 200 bucăți și nu unul pentru 100 bucăți cum era în previziune și 200 bucăți din ordin, deoarece în 200 bucăți este inclusă previziunea inițială care a fost depășită în realitate.

**Parametri de achiziție/Sistem lohn** care este activ dacă politica gestională a articolului este *Achiziții* sau *Sistem lohn*, se pot vizualiza și modifica datele inserate în tab *Furnizori preferențiali* din registrul articolului.

### Gestiuni

În acest tab utilizatorul poate decide ca, pentru articolul ales, mișcarea articolelor cu ajutorul procedurilor ariei de producție, să nu se realizeze considerând setările din *Parametri ordine de producție* ci pe cele ale articolului însuși.   
*Exemplu*: dacă în secțiunea **Materii prime** se setează o *Gestiune* și un *Șablon* diferite de cele inserate în secțiunea *Parametrii ordine de producție*, înseamnă că atunci când acel articol este prelevat pentru producție cu ajutorul listei de ieșiri, lansarea ordinelor de producție sau înregistrarea semnalării de producție va trebui să fie prelevată cu gestiunea și șablonul inserate aici, în locul valorilor inserate în *Parametri ordine de producție*, care sunt valabile pentru toate articolele, cu excepția celor pentru care utilizatorul a inserat valori diferite în acest tab *Gestiuni* din *Parametri MRP*.

Deci, în acest tab, se vor putea seta gestiunile relative la *Materii prime*,  *Semifabricate*, *Produse finite* și eventuale *Deșeuri* cu relativele șabloane de încărcare și descărcare.

Gestiunile **W.I.P.** sunt depozite de tranziție, prin care mărfurile trec și apoi se mută în următorul depozit *General*.

Aceleași gestiuni sunt și în [Parametri ordine de producțieconfigurations/parameters/production/production-orders-parameters/production-orders-parameters-intro).



