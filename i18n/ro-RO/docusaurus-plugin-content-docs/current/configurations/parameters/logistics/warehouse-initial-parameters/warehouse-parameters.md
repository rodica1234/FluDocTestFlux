---
title: Parametri inițiali gestiune
sidebar_position: 2
---

În form-ul *Caută parametri inițiali de gestiune*, selectați rândul dorit și faceți dublu clic sau clic pe butonul *Nou*.

**An**: reprezintă anul pentru care doriți să setați parametrii.

**Data ultimei închideri exercițiu**: reprezintă data când a fost făcută ultima închidere de gestiune cu preluarea soldurilor (detalii în [Valorizare gestiunephysical-inventory/warehouse-valorization)). În majoritatea cazurilor corespunde datei 31/12 a anului precedent. În ziua succesivă, deci în mod normal 1 ianuarie, se inserează înregistrările de gestiune de încărcare pentru inventarul inițial, create automat de procedura *Valorizare gestiune*, cu ajutorul șablonului pentru încărcarea articolelor *Stocuri*; acest șablon trebuie să aibă flag-ul *Stocuri* activ.

Pentru fiecare gestiune prezentă în societate trebuie să existe un singur șablon de încărcare a stocurilor inițiale. Stocurile încărcate cu acest șablon în ziua deschiderii gestiunii reprezintă stocurile inițiale ale gestiunii însăși. Toate mișcările succesive acestei înregistrări de încărcare vor fi identificate ca intrări (în cazul încărcării) sau ca ieșiri (în cazul descărcării).

## Generale

**Modifică înregistrările de gestiune asociate altor documente**: permite modificarea înregistrărilor de gestiune asociate avizelor de achiziție/vânzări, facturilor de achiziție/vânzări etc. Absența acestui flag implică faptul că documentele de gestiune create pe baza documentelor de achiziții/vânzări nu pot fi modificate. În acest caz va fi lansat un mesaj care va aviza utilizatorul de acest lucru.

În ceea ce privește modificarea înregistrărilor de gestiune din documente, trebuie avut în vedere că este posibil să modificați cantitatea, prețul, pe ambele sau niciuna dintre ele. Acest lucru înseamnă că atunci când un document deja înregistrat în gestiune (de ex. un aviz de achiziție) este modificat, aplicația verifică dacă parametrii *Modificare cantitate* și *Modificare prețuri* sunt active sau nu. În caz afirmativ, modificarea efectuată în document este transmisă și în înregistrarea de gestiune cu care documentul este asociat, în caz contrar, modificarea documentului nu intervine asupra înregistrării de gestiune corespunzătoare.  
Poate fi activat și doar unul dintre cei doi parametri. În plus, se poate activa și posibilitatea de a insera sau șterge mișcările direct din document, prin inserarea sau eliminarea fiecărei linii. 

**Permite contropartidă listă componente incompletă**: dacă este activ, permite modificarea listei componentelor înregistrării din contropartidă. Dacă este dezactivat, înregistrarea din contropartidă va fi creată automat pentru întreaga listă de materiale, dar nu va fi posibilă modificarea ei.

Înregistrarea din contrapartidă provine dintr-un al doilea șablon legat de cel principal, care operează asupra listei componentelor. De exemplu, poate fi folosit pentru gestionarea operațiilor din producție (descărcarea componentelor listei) sau dezasamblarea materialelor. Deci, în cazul firmelor mici, permite gestionarea încărcării produselor finite și descărcarea componentelor fără a utiliza modulul de producție.

**Valorizează pe gestiune**: dacă este activ, închiderea de gestiune va ține cont de costurile medii (sau ultime sau standard în funcție de tipul de cost care va fi utilizat pentru închiderea de gestiune) asociate înregistrărilor efectuate în cursul anului, în fiecare gestiune. Acest lucru înseamnă că, dacă un articol a avut înregistrări în 3 gestiuni, de exemplu, în cazul parametrului activ va avea 3 linii diferite în *istoric gestiune* pentru anul pentru care se efectuează închiderea, probabil cu 3 costuri medii și 3 costuri ultime diferite.

**Permite modificarea conturilor articolelor deja utilizate**: permite modificarea datelor din *Facturare achiziții* și *Facturare vânzări* pentru articolele care au avut deja înregistrări de gestiune. Dacă flagul este dezactivat, această modificare nu este permisă. 

**Gestionare stare ciclu de lucru cu Workflow**: dacă este activ, stare ciclului de lucru se poate modifica doar cu ajutorul Workflow-ului.

**Controllo relazione Articolo/Fornitore tramite Workflow**: dacă este activ, parametrul **Blocare linie** din tab **Furnizori preferențiali** din registrul articolului se poate modifica doar cu ajutorul Workflow-ului.

**Dată început perioadă** și **Dată sfârșit perioadă**: permit utilizatorului să definească perioada până la care pot fi inserate și/sau modificate și/sau șterse înregistrările de gestiune. De obicei se inserează ca *dată început perioadă* o dată imediat anterioară ultimei date de închidere gestiune, iar ca *dată pentru sfârșit perioadă* data sfârșitului anului solar în curs.

### Gestiune loturi și numere de serie  

**Gestiune loturi și număr serial**: cu ajutorul acestui flag se poate decide dacă să fie permise înregistrări de gestiune pe loturi și/sau numere seriale. Dacă acest flag este dezactivat, toate celelalte flaguri prezente în baza de date, care gestionează opțiuni relative la loturi și numere seriale, nu vor fi incluse.

**Loturi și numere de serie obligatorii**: dacă este activ, obligă utilizatorul să insereze, în toate documentele de achiziție și vânzare, lotul articolului inserat în documentul însuși, doar dacă articolul este gestionat pe loturi sau numere seriale.

**Gestiune obligatorie pentru articolele gestionate cu loturi**: impune utilizatorului să insereze, în documentele de descărcare, gestiunea și șablonul de descărcare înaintea selectării lotului care va fi descărcat. Sau utilizatorul poate decide să descarce, în același articol al documentului, un lot dintr-o gestiune și un alt lot dintr-o altă gestiune, nemaiavând necesitatea de a insera din care gestiune vor fi descărcate loturilor la nivelul liniei documentului. 

**Usa barcode movimenti**: se attivo, nelle righe dei movimenti di magazzino viene visualizzata la colonna **Barcode**.   
Sigur, iată traducerea în română:

**Utilizare barcode înregistrări**: dacă este activ, în înregistrările de gestiune se afișează coloana **Cod de bare**.

## Parametri închidere

În acest tab se pot insera **Gestiunile** pentru care trebuie efectuate închiderile, pe **Variantă**, **Locație**, **Loturi**, **Comenzi de vânzare** și pe **Client/furnizor**. Mai exact, activând una dintre aceste opțiuni, se poate decide ca înregistrarea de încărcare pentru inventarul inițial efectuat de procedura automată de *Valorizare gestiune* să fie creată ținând cont de setarea efectuată.

*Pentru fiecare gestiune se pot activa următoarele gestiuni*:	

**Variante**: dacă este activ, închiderea și preluarea datelor vor ține cont de variante;	

**Locații**: dacă este activ, închiderea și preluarea datelor vor ține cont de locații;	

**Loturi și serial number**: dacă este activ, închiderea și preluarea datelor vor ține cont de loturi și S/N;	

**Comenzi**: dacă este activ, închiderea și preluarea datelor vor ține cont de comenzi;	

**Client/Furnizor**: dacă este activ, închiderea și preluarea datelor vor ține cont de client/furnizor. 	

*Exemplu*
În depozit *Sistem lohn* flag-ul este de obicei lasat activ pe coloana *Client/Furnizor*, deoarece este util ca procedura să creeze o înregistrare de gestiune de încărcare pentru inventarul inițial în depozitul *Sistem lohn* pentru fiecare terț; în gestiunile în care sunt depozitate și manipulate mărfurile gestionate în loturi, este recomandat să activați flag-ul *Loturi/SN* , precum și în depozitele în care mărfurile sunt depozitate și gestionate cu variante, este recomandabil să se activeze flag-ul relativ.

## Parametri stoc

În acest tab se pot insera depozitele pentru care se poate gestiona *Stocul negativ*. 

**Permite stoc negativ**: în cazul în care flag-ul nu este activat, sistemul nu permite salvarea înregistrărilor de gestiune sau a operațiilor de descărcare care au ca rezultat stoc zero pentru orice articol. Menționăm că în cazul în care articolul este gestionat pe loturi sau numere seriale, activarea acestui flag nu oferă posibilitatea de a avea acest articol cu stoc zero deoarece articolul gestionat pe loturi sau numere seriale nu poate fi niciodată descărcat dacă stocul lotului sau numărului serial care se descarcă nu există. 

*Pot fi activate următoarele opțiuni pentru fiecare depozit*:	

**Stoc negativ**: permite un stoc negativ în gestiune (numai dacă este activ și flag-ul *Permiteți stocul negativ* din *Parametrii generali*);

**Stoc locație**: permite verificarea stocului și pentru locația specificată în înregistrare (dacă stocul pentru locația respectivă nu este suficient, înregistrarea nu este creată);

**Stoc proiect**: permite verificarea stocului și pentru comanda(proiectul) specificată în înregistrare (în cazul în care stocul pentru comanda respectivă nu este suficient, mișcarea nu este creată);   

**Stoc client/furnizor**: pentru verificarea stocului și pentru clientul/furnizorul specificat în înregistrare (în cazul în care stocul pentru acel client/furnizor nu este suficient, mișcarea nu este creată. Poate fi utilizat pentru depozitele terților).
