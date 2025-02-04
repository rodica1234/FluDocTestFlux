---
title: Identificare produse și părți relative
sidebar_position: 0
---

:::important **Fluentis Academy**     

Fiecare companie de producție vinde produse fizice denumite în mod obișnuit produse finite. 

Pentru a le realiza sunt necesare materiile prime și componentele disponibile pe piață.

Este evident că fiecare companie de producție are cel puțin necesitatea de a identifica bunurile în intrare și ieșire pentru a gestiona procesele de achiziție, vânzare și contabile aferente.

Fiecare produs este identificat în mod unic printr-un cod articol, în general alfanumeric, în conformitate cu logica de codificare tipică fiecărei companii.

Prin urmare, teoretic, este întotdeauna posibil să se descrie structura produselor finite prin intermediul unei liste de componente la un nivel care să includă toate materiile prime și/sau componentele achiziționate.

Cu toate acestea, foarte des, cele expuse mai sus reprezintă o metodă de reprezentare prea simplă și nu foarte eficientă și este necesar să se codifice și produsele intermediare numite produse semifinite.

Ce logică ar trebui adoptată pentru a determina când este necesar să se creeze un cod articol pentru un produs semifinit? 

Având în vedere un produs finit, câte produse semifinite trebuie să codificați pentru a-i defini structura? 

Din punct de vedere al proiectării/ingineriei este posibil să se identifice multe părți într-un produs finit, dar din punct de vedere al producției nevoia de codificare poate fi foarte diferită.

În general, dacă o componentă logică a structurii este întotdeauna reutilizată imediat după realizarea acesteia, nu este recomandabil să creați un cod articol (cu unele excepții explicate mai jos).

Dacă, pe de altă parte, timpul de realizare și utilizare nu coincide temporal, atunci trebuie să stocați elementul și, prin urmare, trebuie să îl codificați pentru a gestiona procesele aferente și contabilitatea de sfârșit de an.

Prin urmare, necesitatea de a stoca un articol este o condiție suficientă pentru a solicita codificarea acestuia printr-un cod articol.

Motivele care duc la necesitatea stocării unei componente sunt de obicei următoarele:
- Producția componentei implică un cost de instalare a mașinii care nu este neglijabil, deci se stabilesc loturi minime de producție pentru a limita instalările și pentru a crește raportul dintre orele de producție efectivă și orele de lucru disponibile. Prin urmare, în mod normal, loturile sunt mai mari decât cerințele momentului, deci o parte din producție va fi stocată și consumată în viitor.
- Unele componente sunt produse în avans față de pentru a putea livra produsele finite în timpul cerut de piață, deci cantitățile efectiv necesare în momentul producției nu sunt cunoscute, prin urmare se creează un stoc în anticiparea consumului viitor.
-  Unele procese de producție au un randament inconstant, prin urmare este necesar să existe un stoc de materiale care să fie utilizate.   
- Se dorește crearea unui stoc în amonte față de o resursă critică pentru a evita pericolul ca aceasta să se oprească din cauza lipsei de materiale, deoarece rata de producție a fabricii este determinată tocmai de blocaje
- Se dorește separarea proceselor de producție pentru a reduce interdependența atunci când nu sunt sincronizate, așa cum se întâmplă într-o producție în flux continuu;  

Uneori se alege oricum articolului, chiar dacă nu se sochează.

Acesta se întâmplă din următoarele motive:
- Articolul servește doar ca o grupare logică a unui grup de articole care sunt utilizate împreună în alte produse sau vândute în grupuri.
Acest lucru vă permite să accelerați și să simplificați crearea listelor de materiale prin gestionarea unui singur articol în locul unui grup de articole care altfel ar fi inserate și gestionate individual în listele în care sunt utilizate (în literatura de specialitate numită adesea kit bill).
- În mod normal, articolul este consumat imediat după utilizare, dar este necesar să se mențină un stoc mic ca piese de schimb pentru asistență tehnică.
-  Ciclul de lucru al unui articol asamblat nu poate fi reprezentat printr-o secvență liniară de faze, deoarece are un caracter reticular (adică cu mai multe ramuri).  
De fapt, marea majoritate a sistemelor ERP vă permit să definiți doar cicluri de lucru secvențiale, astfel încât, în cazul unui ciclu de rețea, este necesar să introduceți coduri articole la fiecare ramură a ciclului de lucru.
- Pentru a identifica părți ale produsului din punct de vedere logic sau pentru că trebuie să calculați costurile pentru părți ale acestuia.
- Pentru documentația tehnică pentru reparații și întreținere.

În cazurile în care este creat un cod articol, întodeauna fără stoc, articolul este identificat ca un articol fantomă sau fictiv, prin urmare, pentru acesta nu va fi posibil să se emită ordine sau să se efectueze înregistrări de gestiune, iar sistemul MRP va lua în considerare direct componentele sale fără a-l planifica, deoarece nu poate avea stoc sau ordine.*

:::