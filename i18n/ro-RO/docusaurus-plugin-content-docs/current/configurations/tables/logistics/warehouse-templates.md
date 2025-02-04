---
title: Șabloane de gestiune
sidebar_position: 9
---

Acest form se află în **Home > Tabele > Logistica > Șabloane de gestiune** și permite inserarea tuturor șabloanelor de gestiune care sunt utile înregistrării articolelor din și pentru diversele gestiuni inserate în tabelul *Gestiuni*. 

Permite inserarea înregistrărilor noi sau căutarea celor existente pentru a le vizualiza, modifica sau șterge.

Conține o zonă de filtrare și una de rezultate. După ce ați setat toate filtrele dorite, efectuați clic pe butonul **Caută** pentru a vizualiza datele în tabelul de rezultate.

Pentru a insera datele, efectuați clic pe primul rând gol din tabel sau apăsați butonul **Nou**.


*Câmpuri specifice*

**Gestiune**: din combo-box se pot alege datele care au fost inserate anterior în tabelul *Gestiuni*;

**Șablon**: se inserează șablonul de gestiune care poate avea lungimea maximă de 3 caractere alfanumerice. Pot fi create mai multe șabloane de gestiune pentru același cod, doar dacă șabloanele sunt generate pentru gestiuni diferite;

**Descriere**: se inserează descrierea șablonului de gestiune, care poate avea lungimea maximă de 80 caractere alfanumerice;

**Tip**: se inserează tipul mișcării care caracterizează șablonul. Poate fi de *Încărcare*, în cazul în care cantitatea mișcării de gestiune create cu acel șablon este salvată în baza de date ca fiind pozitivă sau de *Descărcare*, în cazul în care cantitatea mișcării de gestiune create cu acel șablon este salvată în baza de date ca fiind negativă;

**Vizibil în achiziții/vânzări/producție/sistem lohn/logistică**: dacă este activ, șablonul este vizibil în achiziții/vânzări/producție/sistem lohn/logistică;

**Cost propus**: se alege care cost trebuie să fie propus automat când se inserează manual o mișcare. Costul propus poate fi: *costul ultim*, *costul mediu*, *prețul de vânzare* sau *costul standard* al articolului înregistrat.  
**Observație**: *prețul de vânzare* și *costul standard* sunt preluate direct din *Registrul articolului*, iar *costul mediu* și *costul ultim* sunt calculate în runtime de aplicație în momentul în care se inserează mișcarea, pe baza mișcărilor efectuate cu șabloane care au flagul “Actualizare C.M.” și flag-ul “Actualizare C.U.” activat;

**Actualizare cost mediu**: când se inserează o mișcare de gestiune utilizând în antetul înregistrării șablonul care are flag-ul *Actualizare cost mediu* activat, este actualizat *costul mediu* în *registrul articolului* cu valoarea mișcării. În plus, toate înregistrările efectuate utilizând șablonul care are acest flag activ, contribuie la calcularea costului mediu ponderat al articolului.  
*Observație*: flag-ul nu se poate activa sau dezactiva după ce șablonul a fost deja utilizat și într-o înregistrare de gestiune. De obicei acest flag se activează doar pentru mișcările de încărcare, dar poate fi activat și pentru mișcările de descărcare, când  se dorește ca media ponderată a costului articolului să fie calculată considerând și prețurile de vânzare asociate descărcărilor de gestiune ale articolului.

**Actualizare cost ultim**: când se inserează o înregistrare de gestiune utilizând în antetul ei șablonul care are flag-ul *Actualizare cost ultim* activat, se actualizează costul ultim în registrul articolului cu valoarea înregistrării.  
*Observație*: flag-ul nu se poate activa sau dezactiva după ce șablonul a fost deja utilizat și într-o înregistrare de gestiune. Acest flag se activează doar pentru mișcările de încărcare;

**Actualizare preț de vânzare**: când se inserează o înregistrare de gestiune utilizând în antetul ei șablonul care are flag-ul *Actualizare preț de vânzare* activat, se actualizează prețul de vânzare în registrul articolului cu valoarea înregistrării.  
*Observație*: flag-ul nu se poate activa sau dezactiva după ce șablonul a fost deja utilizat și într-o înregistrare de gestiune. Acest flag se activează doar pentru mișcările de descărcare;

**Actualizare cost articol**: când se inserează o înregistrare de gestiune utilizând în antetul ei șablonul care are flag-ul *Actualizare cost articol* activat, se actualizează costul mediu, costul ultim și/sau prețul de vânzare în registrul articolului cu valoarea înregistrării pe baza activării parametrilor: *Actualizare C.M.*, *Actualizare C.U.* și *Actualizare P.V.*. 

**Cu înreg. mișc. în gestiune**: când se inserează o înregistrare de gestiune utilizând în antetul ei șablonul care are flag-ul *Cu înreg. mișc. în gestiune* activat, înregistrarea însăși este considerată în registrul de gestiune și la calculul inventarului pe cantitate valorizat, doar dacă articolul înregistrat are flag-ul *Cu înreg. mișc. în gestiune* activ în tab-ul său, *Generalități*.

**Calc. ABC**: când se inserează o înregistrare de gestiune utilizând în antetul ei șablonul care are flag-ul *Calcul ABC*activat, înregistrarea însăși este considerată la calculul ABC pentru articolul înregistrat;

**Moment reaprovizionare**: când se inserează o înregistrare de gestiune utilizând în antetul ei șablonul care are flag-ul *Moment reaprovizionare* activat, înregistrarea este considerată de procedura care efectuează calcularea momentului pentru reaprovizionare. De obicei, flag-ul este activ doar pentru șabloanele de descărcare;

**Gestionare loturi**: când se inserează o înregistrare de gestiune utilizând în antetul ei șablonul care are flag-ul *Gestionare loturi* activat, înregistrarea permite inserarea lotului în gridul relativ din înregistrarea de gestiune pentru un anumit articol care este gestionat cu loturi. Acest lucru este valabil și pentru gestionarea cu numere de serie.

**"Completează cantitate iniţială"**: se poate utiliza dost asociat la gestionarea loturilor. Permite majorarea cantității lotului încărcat cu o înregistrare precedentă, menținând același număr lot; 

**Crează lot din loto**: dacă este activ, afișează șablonul ca fiind al procedurii *Creare lot din lot* pentru a schimba un lot într-un altul. Deci, programul va face automat descărcarea unui lot și încărcarea altuia pentru același articol. În plus, este disponibilă și procedura *Creare lot din lot cu schimbarea articolului*, care permite descărcarea unui articol cu un anumit lot și încărcarea altui articol cu un alt lot. Pentru a activa acest parametru, șablonul creat trebuie să fie de *Descărcare* și trebuie să fie activi și următorii parametrii: *Gest. loturi*, *completează cantitatea inițială*, dar nu trebuie să fie activ parametrul *Listă componente*  “Dist. Base” și trebuie să existe un *Șablon contropartidă*;

**Loturi nedisponibile**: când se inserează o înregistrare de gestiune utilizând în antetul ei șablonul care are flag-ul **Loturi nedisponibile** activat, cu mișcarea se vor putea descărca loturi care au statusul nedisponibil;

**C.U. Lotto**: când se inserează o înregistrare de gestiune utilizând în antetul ei șablonul care areparametrul *Cost ultim lot* și, simultan, costul propus este costul ultim, când se încarcă un anumit cos lot, în loc să fie propus în valoarea înregistrării costul ultim din registrul articolului, va fi propus costul ultimei încărcări efectuate cu acel cod lot;

**Descărcare lot**: util când este necesar ca în documentul de vânzare (ordin client, aviz sau factură de vânzare), șablonul de descărcare al lotului este propus automat în tabelul loturilor din document. Șablonul care are activ acest parametru va fi propus automat de procedură, dar utilizatorul îl poate schimba;

**Crează S/N**: dacă este activ, permite activarea creării automate a numerelor seriale;

**Consum**: înregistrările efectuate cu șabloanele care au parametrul *Consum* activ, sunt afișate în fereastra pentru calculul costului comenzii de producție din tab *Rezumat costuri și timpi* din tabelul *Materiale utilizate*;

**Document obligatoriu**: când se inserează o înregistrare de gestiune utilizând în antetul ei șablonul care are flag-ul *Document obligatoriu* activ, este obligatorie completarea câmpului *Document de referință* a înregistrării de gestiune;

**Cont obligatoriu**: când se inserează o înregistrare de gestiune utilizând în antetul ei șablonul care are flag-ul *Cont obligatoriu* activ, este obligatorie completarea câmpului *Client/Furnizor* din înregistrarea de gestiune. Este utilizat de obicei pentru înregistrările relative la consumul și la livrarea materialelor în sistem lohn;

**Lista componentelor**: când se inserează o înregistrare de gestiune utilizând în antetul ei șablonul care are flag-ul *Lista componentelor* activ atunci, în momentul în care se salvează linia mișcării, în loc să se insereze articolul selectat (care trebuie să aibă o listă de componente) sunt inserate articolele de prim nivel din lista componentelor. Este deseori utilizat în șabloanele de descărcare de contrapartidă pentru a descărca componentele unui articol încărcat de șablonul principal.

**Gestionare inventar fizic**: permite utilizatorului să decidă care șabloane de gestiune trebuie să se poată selecta în *Parametrii inițiali de gestiune* ca șabloane de utilizat pentru calcularea diferențelor din inventar. Înregistrările de gestiune care vor fi create automat de procedura “Diferențe inventar” vor avea, în antet, șabloanele de acest tip.

**Gestiune contrapartidă**: din combo-box se pot alege datele care au fost inserate anterior în tabelul *Gestiuni*. Este gestiunea care va apare în tab *Contrapartită* din înregistrarea de gestiune;

**Șablon contrapartidă**: se poate insera codul șablonului care va fi utilizat în contrapartită. Permite ca, în momentul creării unei mișcări de gestiune utilizând șablonul principal, să fie automat inserată o înregistrare cu semnul opus. De exemplu, se inserează șablonul de contrapartidă pentru a efectua mișcările între gestiuni diferite sau între locații diferite în aceeași gestiune;

**Stocuri**: cu acest flag utilizatorul poate desena, pentru un singur șablon și pentru fiecare gestiune, șablonul care trebuie să fie utilizat de procedura *Valorizare gestiune* care realizează închiderea de gestiune pentru a crea înregistrările de încărcare pentru inventarul inițial;

**Tip doc. gestional**: utilizat pentru localizările Romania/Croazia deoarece înregistrările de gestiune trebuie înregistrate și în contabilitate;     

**Șablon contab.**: utilizat pentru localizările Romania/Croazia deoarece înregistrările de gestiune trebuie înregistrate și în contabilitate;       

**Tip șablon cont.**: utilizat pentru localizările Romania/Croazia deoarece înregistrările de gestiune trebuie înregistrate și în contabilitate;   

**Locație**: pentru a completa acest câmp se poate utiliza help-ul de câmp care se deschide efectuând dublu clic pe banda galbenă. Locația inserată va fi propusă în mișcarea de încărcare sau de descărcare când nu a fost transferată din procedura care creează mișcarea. Inserarea locației implicite este utilizată de obicei în șabloanele de încărcare, deoarece descărcarea trebuie să fie efectuată din locația în care se află articolul în momentul în care se efectuează descărcarea;

**Indice rotație**: dacă acest flag este activ, înregistrările create cu aceast șablon vor fi considerate în procedura pentru calcularea indicelului de rotație;

**Alternative**: activarea acestui flag se produce simultan cu flag-ul *Lista componentelor*; dacă este activ, când se reează o mițcare cu un șablon de descărcare care are ambele flaguri activate și unul din componente nu are cantitatea suficientă pentru a fi descărcată, procedura controlează dacă un articol alternativ (specificat în lista componentelor) are, în schimb, cantitatea suficientă pentru a fi descărcată în locul componentului principal.

**Alternative mixte**: activarea acestui flag se produce simultan cu flag-ul *Lista componentelor*; dacă este activ, procedura descarcă simultan mai multe articole alternative până lacompletarea cantității necesare. Este legat de flag -ul *Alternative*;

**Consideră mișcările cu zero**: cu activarea acestui flag utilizatorul poate decide care sunt înregistrările de gestiune cu costul egal cu zero care trebuie să fie considerate la calcularea costului mediu ponderat al articolelor. Acest flag este activat de obicei în șabloanele care au flag-ul *Actualizare cost mediu* activat;

**Trasabilitate**: dacă este activ, înregistrările generate cu acest șablon vor fi utilizate pentru urmărirea loturilor;	

**Deșeuri**: dacă este activ, sablonul pentru deșeuri din oridinul de producție va fi vizibil;	

**Corecţie UDI**: dacă este activ, sablonul pentru rectificarea UDI va fi vizibil.