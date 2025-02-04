---
title: Cote TVA
sidebar_position: 2
---

Acest form se află pe calea **Configurare > Tabele > Administrativ > Cote TVA** și este comun tuturor societăților prezente în baza de date. Afișează  lista cu cotele TVA care vor fi aplicate în toată aplicația.

Este un tabel predefinit în care utilizatorul care are drepturi poate opera pentru a modifica sau adăuga datele necesare pentru activitatea societății.

Fereastra se compune din trei secțiuni: una superioară cu lista cotelor TVA, una centrală care permite definirea pentru fiecare cotă TVA a mai multor conturi analitice achiziții/vânzări care vor fi utilizate pentru fiecare *Tip de contabilizare TVA* atribuit clientului/furnizorului (sau prevăzut implicit în parametrii contabili; utilizarea depinde și de setările specifice ale șabloanelor din contabilitatea generală) și una inferioară, care conține detaliul notelor codificate specifice cotei, neutilizate în nici o opțiune standard a aplicației.

### Cote TVA

**Cod**: cod numeric pentru identificarea cotei;  
**Descriere**: descrierea va fi preluată în toate rapoartele fiscale standard ale aplicației;  
**Procent**: reprezintă procentul TVA de aplicat. Pentru codurile de scutire de TVA, excludere și neimpozabilitate, setați 0.  
**Cat. TVA**: permite selectarea categoriilor TVA fixe, prevăzute de aplicație.    
**Proc. nedeductibilitate**: permite definirea procentului de nedeductibilitate care va fi aplicată taxei. Va fi preluată în înregistrarea contabilă în secțiunea TVA în scopul calculării efective a cotei de nedeductibile, putând fi modificată sau forțată direct în înregistrare.  
**Plafond**: parametrul definește care cote trebuie gestionate, ca majorare sau diminuare (în vânzări sau achiziții), la calcularea plafonului TVA;  
**În declar. TVA**: parametrul definește care cote trebuie gestionate în declarația TVA;  
**Non Intra**: parametrul definește cotele care, chiar dacă sunt utilizate în documente (în modulele facturi achiziții/vânzări) sau în înregistrări de tip intra-cee, nu sunt considerate. Este considerat la crearea automată a rezumatelor intrastat;  
**Permite TVA 0 în RJ**: permite înregistrarea liniilor TVA cu valoare 0 atât în credit, cât și în debit în registrul jurnal. [Șablonul contabilconfigurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail) utilizat trebuie să prevadă același tip de autorizare a liniilor cu valoare 0;  
**Nu în clienți/furnizori**: parametrul permite excluderea din lista clienți/furnizori a înregistrărilor TVA asociate acestei cote.  

Secțiunea centrală permite definirea, pentru fiecare cotă TVA, a mai multor conturi analitice achiziții/vânzări care vor fi utilizate pentru fiecare ‘Tip contabilizare TVA' atribuit clientului/furnizorului (sau prevăzut implicit în parametrii contabili; utilizarea depinde și de setările specifice ale șabloanelor în contabilitatea generală).

**Cod PA**: reprezintă codul prevăzut pentru facturarea electronică între dovedit în cazurile în care TVA nu este prezentă (scutire, excludere, neimpozabilitate).  
**Exclude din declarația de intenție**: momentan neutilizat;  
**Exclude din șablon automat**: dacă este activ, codul TVA corespunzător nu este preluat în înregistrările contabile generate automat, deoarece sunt asociate șablonului contabil principal cu ajutorul *Șablonului automat*.

:::note Notă
Utilizarea parametrului devine *fundamentală* în cazul unei facturi de achiziție "mixte", în care furnizorul a facturat parțial cu *taxare inversă* și parțial în regim obișnuit. Prin urmare, pentru acesta din urmă va exista deducerea TVA la achiziție, în timp ce partea cu taxă inversă va fi neutră, deoarece este înregistrată atât în registrul de achiziții, cât și în registrul de vânzări. Prin diferențierea corespunzătoare a codurilor TVA utilizate, dacă în înregistrarea principală pe partea de achiziție se vor percepe sumele corespunzătoare celor două coduri (de exemplu, 22 pentru cota de taxare inversă și "Taxă inversă mixtă ....") în contul de transfer creat automat, se va raporta numai codul 22, generând automat deducerii doar pe cota exclusă din mecanismul de taxare inversă.
:::

**TVA pentru șabloane automate**: acest câmp este utilizat pentru a impune un anumit cod TVA în înregistrfață de cel utilizat în înregistrarea principală (de exemplu, partea de achiziții în taxarea inversă).

:::note Notă
Utilizarea parametrului devine *fundamentală* în cazul primirii unei *facturi de achiziții  cu taxare inversă cu TVA parțial sau total nedeductibil*. Implicit, aplicația ar seta același cod TVA și în contul de transfer pe partea de vânzări, iar procentul de nedeductibilitate ar determin o "neimpozabilitate" pentru aceeași cotă. Deci, efectul ar fi tot neutru. Pe de altă parte, pentru a exercita deducerea limitată, este necesar ca tot TVA-ul aferent vânzărilor să fie impozabil, rămânând astfel un cost cota nedeductibilă pe partea de achiziție. 
:::

**Dată sfârșit valabilitate**: codul nu va mai putea fi utilizat după data stabilită. Este util pentru a bloca utilizarea codurilor care nu mai sunt în vigoare.

**Bază calcul timbru**: deoarece taxa de timbru în factură este introdusă automat numai atunci când există coduri tva scutite, excluse sau neimpozabile și factura depășește o anumită sumă (stabilită în registrul societății), semnificația acestui parametru este de a gestiona unele cazuri care, deși sunt scutite sau nu sunt impozabile sau excluse, constituie excepție și nu prevăd aplicarea timbrului. În aceste cazuri, prin urmare, parametru trebuie să fie dezactivat.

### Tip contabilizare TVA

**Tip contab. TVA**: codul alfanumeric al tipului de contabilizare TVA;  
**Descr. tip contab.**: descrierea tipului de contabilizare TVA;  
**Cont sintetic achiziții**: cont sintetic de achiziții care va fi propus pentru acest tip de contabilizare TVA;  
**Cont analitic achiziții**: cont analitic de achiziții care va fi propus pentru acest tip de contabilizare TVA;  
**Descriere**: descriere contului analitic de achiziții care va fi propus pentru acest tip de contabilizare TVA;  
**Cont  sintetic vânzări**: cont sintetic de vânzări care va fi propus pentru acest tip de contabilizare TVA;  
**Cont analitic vânzări**: cont analitic de vânzări care va fi propus pentru acest tip de contabilizare TVA;  
**Descriere**: descrierea contului analitic de vânzări care va fi propus pentru acest tip de contabilizare TVA.  

### Specificații pentru declarație

In aceasta sectiune este posibila parametrizarea diferitelor coduri TVA, utilizate in evidentele contabile, pentru a obtine un raport care reprezinta un facsimil al decontului anual de TVA.
Raportul va agrega diferitele coduri TVA utilizate în cursul anului pentru a expune diferitele totaluri care trebuie raportate în liniile declarației fiscale. Prin urmare, este necesar să se combine fiecare cod TVA cu linia corectă a declarației.  
**Operații**: poate fi activă, pasivă sau cu taxare inversă.  
**Linie declarație fiscală/Descriere**: permite alegerea declarației TVA de asociat. 