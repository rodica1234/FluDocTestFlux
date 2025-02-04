---
title: Parametri ordine de producție
sidebar_position: 1
---

Form-ul se deschide din **Parametri > Producție > Parametri ordine de producție**. 

### General

**Gestionare automată loturi și numere de serie**: dacă este activ, propune automat loturile și/sau numerele de serie ale materialelor utilizate în producției, direct în tabelele relaționate cu tabelul materialor utilizate de semnalarea de producție. În caz contrar, utilizatorul va trebui să seteze manual atât loturile, cât și numerele de serie ale articolelor utilizate care au acest tip de gestionare; reamintim că gestionarea lotului sau SN este setată în *Registrul articolului* în tab [Loturi și SNerp-home/registers/items/create-new-items/item-registry/lots-and-serial-number) selectând tipul de gestionare dorit.

**Determinare automată timpi în semnalări**: dacă este activ, calculează automat timpul mașină și timpul operator pe baza orarelor semnalărilor. În caz contrar, utilizatorul va trebui să seteze manual orele menționate pe linia semnalării de producție; 

**Gestionare unitate de măsură dublă**: dacă este activ, permite utilizatorului să gestioneze unitatea de măsură dublă din semnalările de producție, deci atât pentru articolele produse, cât și pentru materialele utilizate;

**Propune automat U.M. alternativă**: dacă este activ, propune automat unitatea de măsură alternativă stabilită pentru articol în semnalarea de producție. De obicei, dacă este activă opțiunea *Gestionare unități de măsură duble* se activează și acest parametru;

**Același lot pentru deșeuri materiale**: dacă este activ, permite utilizatorului să decidă ca lotul încărcat în depozitul de deșeuri să fie identic cu lotul care a fost produs sau cu lotul care a fost utilizat;

**Divide ordine dacă loturile de materiale sunt insuficiente**: dacă este activ, procedura de *Lansare ordine de producție* verifică dacă sunt suficiente cantitățile de materiale care urmează să fie descărcate din depozit; dacă nu sunt suficiente, procedura împarte ordinul de producție în 2 ordine diferite care vor avea același număr/an, dar lot diferit (primul va avea lotul 0, al doilea lot 1; primul va fi cel pentru care materialele din stoc sunt suficiente);

**Modifică data comenzii la modificarea datei ordinului de producție**: dacă este activ, la modificarea *Datei de sfârșit* a ordinului de producție, *Data sfârșit* a comenzii de producție este modificată automat, cu condiția ca articolul din ordinul de producție să fie identic cu cel din comanda de producție. Prin urmare, ordinul de producție trebuie să fie de nivel 0;

**Asociază lot cu lista de ieșire**: dacă este activ, indică faptul că atunci când se creează o listă de ieșiri prin procedura relativă, pentru materialele gestionate pe loturi sistemul alege materialele care urmează să iasă pentru ordinul (ordinele) de producție selectate. Dacă nu este activat, înseamnă că utilizatorul va trebui să declare manual care sunt loturile care au ieșit;

**Calcul cost de producție pentru avansări**: dacă este activ, pe măsură ce se înregistrează progresul producției, costul înregistrării de gestiune este majorat cu costul real calculat pe baza timpului efectiv declarat în semnalare înmulțit cu costul orar al mașinii și/sau al manoperei, apoi pe costul orar al centrului de lucru utilizat;

**Actualizează materiale utilizate în ordinul de producție**: dacă este activ, la modificarea cantității declarate într-o declarație de producție, va fi afișat un mesaj care solicită recalcularea sau nu a cantităților utilizate de materiale; dacă nu este activ, recalcularea materialelor se efectuează automat;

**Înregistrare automată semnalări**: dacă este activ, indică faptul că, imediat ce este inserată semnalarea, acesta este înregistrată automat;

**Raport foi de lucru pentru ordine lansate**: este o valoare implicită care este setată în fereastra de lansare a imprimării relative, iar la lansarea ordinelor, imprimarea ordinelor este automată;

**Foi de lucru gestionate pe**: secțiunea permite, prin activarea uneia dintre opțiuni, alegerea tipului de grupare care urmează să fie utilizat la imprimarea foii de lucru (care conține parametrii care indică modul în care trebuie produs materialul respectiv). Cu toate acestea, este o propunere, care poate fi apoi modificată în form-ul de imprimare a foii de lucru;

**Perioada de analiză**: secțiunea permite, prin activarea uneia dintre opțiuni, alegerea perioadei de filtrare a ordinelor de producție care trebuie afișate în fereastra de imprimare a foii de lucru (săptămânal, zilnic sau la fiecare X zile);

**Valorizare materiale la cost**: secțiunea permite, prin activarea uneia dintre opțiuni, alegerea tipului de cost pentru valorizarea materialelor.

**Propune secvență faze**: secțiunea permite alegerea, în timpul creării unui ciclu de lucru, a numărului secvenței fazei propuse, care poate fi preluat din numărul secvenței fazei standard sau ca progresiv al ordinei de inserare.

### Gestiuni

Form-ul este dedicat inserării gestiunilor și șabloanelor aferente care reglementează circulația articolelor prin procedurile legate de producție; același form este în *Parametrii MRP* ai articolului din [Gestiuniconfigurations/parameters/production/mrp-parameters/search-mrp-parameters), cu diferența că depozitele setate în *Parametrii de producție* sunt considerate date generale valabile în mod implicit pentru articole; dacă sunt setați pentru un anumit articol din depozite diferite în *Parametrii MRP* ai articolului, sistemul va da <u>prioritate parametrilor</u> care sunt setați în această ultima fereastră pentru încărcările și descărcările de materiale legate de producerea acestui articol.

Prin urmare, în acest tab, pot fi configurate depozitele relative la *Materii prime*, *Produse semifinite*, *Produse finite* și orice *Deșeuri* cu șabloanele relative pentru încărcare și descărcare.

Pentru a putea configura unul dintre aceste depozite, va fi suficient să selectați din relativele combo box **Depozitul** și **Șablonul**.

În plus față de aceste depozite principale există depozitele **W.I.P.** care sunt activate cu depozitele și șabloanele relative.

**Gestiunile W.I.P.** (Work in Progress) sunt depozite de tranziție, în care mărfurile tranzitează atunci când se lansează ordinul de producție a produsului finit sau a produsului semifinit. Când aceste depozite sunt setate, tipul de ieșire al materialului trebuie să fie **Manual**. Dacă  tipul ieșirii este **Automat**, descărcarea materialelor ar avea loc automat în momentul lansării ordinului de producție.  
În cazul depozitelor W.I.P., materialul în momentul lansării este mutat în aceste depozite și este descărcat în timpul semnalării de producție al ultimei faze de prelucrare a articolului ordinului de producție sau în timpul fazei de prelucrare la care este asociat materialul.

În caz contrar, dacă tipul de ieșire a materialului este **Cu listă**,  tranzitarea materialului în depozitul W.I.P. are loc în același mod ca tipul de ieșire manual, descărcarea din W.I.P. are loc prin procedura listei de ieșiri.

Pentru generalități despre funcționarea form-urilor consultați [Funcționalități, butoane și câmpuri comuneguide/common).