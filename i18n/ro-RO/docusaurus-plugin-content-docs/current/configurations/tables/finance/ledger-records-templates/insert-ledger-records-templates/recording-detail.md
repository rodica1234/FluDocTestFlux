---
title: Detalii înregistrare
sidebar_position: 3
---

*Câmpuri specifice*: 

**Registru TVA**: câmpul, obligatoriu doar pentru șabloanele cu tipul mișcării TVA, permite atribuirea registrului TVA de referință șablonului analizat.    
**Dată competență TVA**: această dată va fi atribuită înregistrării TVA. Aplicația propune data înregistrării pentru înregistrările din registrele de achiziție și data documentului pentru înregistrările din registrele de vânzare. 

### Opțiuni tip document**:

**Tip/Nr. document**: selectarea acestui flag impune completarea câmpului *Număr document* pentru salvarea înregistrării bazate pe acest șablon.  
**Nr. doc. = Nr. în jurnal C/V**: dacă este activ, aplicația va propune numărul documentului pe baza numărului din jurnalul de C/V progresiv. Deci câmpul nu se setează pentru înregistrări de achiziții pentru care numărul documentului și numărul în jurnalul de C/V nu au o legătură reciprocă. În ce privește vânzările, în schimb, utilizarea este sugerată doar pentru șabloanele înregistrărilor efectuate direct în contabilitatea generală. Selectarea acestui flag nu este recomandată pentru șabloanele inserate în *Tipuri facturi de vânzare* și utilizate la contabilizarea facturilor.  
**Dată document**: selectarea acestui flag impune completarea câmpului *Dată document* pentru salvarea înregistrării bazate pe acest șablon.    
**Nr. în jurnal C/V = Nr. doc.**: dacă este activ, aplicația va propune numărul în jurnalul de C/V pe baza numărului documentului. Deci câmpul nu se setează pentru înregistrări de achiziții pentru care numărul documentului și numărul în jurnalul de C/V nu au o legătură reciprocă; în ce privește vânzările. Utilizarea însă este sugerată pentru toate șabloanele inserate în *Tipuri facturi de vânzare* și utilizate în contabilizarea automată a facturilor. Posibilitatea de a utiliza această setare dipende de certitudinea că numerotarea tipurilor de facturi este aceeași pentru toate documentele de înregistrat în același registru TVA.  

### Opțiuni tip înregistrare

**Deschidere angajamente**: dacă este activ, se va activa tabul pentru crearea registrului clienților în înregistrarea contabilă care va utiliza acest șablon. Selectarea acestui flag este deci recomandată pentru toate înregistrările cu TVA și, în general, pentru a putea gestiona lo scadențarul clienți/furnizori. Flag-ul poate fi setat și pentru șabloanele care înregistrează o plată anticipată. În acest caz va fi deschis un angajament cu semnul invers de compensat apoi cu angajamentele care se vor crea în momentul înregistrării contabile a documentului fiscal care va fi emis.    
**Detaliu mișcare în angajamente**: dacă este activ, aplicația va insera în notele angajamentelor, textele inserate în câmpul *Detaliu mișcare* din linia contabilă sursă a angajamentului. Flagul este activ doar dacă a fost selectat precedentul, *Deschidere angajamente*.    
**Deschidere pt. fiecare rând înreg.**: dacă este activ, aplicația va insera un angajament pentru fiecare linie de înregistrare, în care este prezent un cont analitic cu flagul de gestiune *Angajamente deschise* selectat. Flagul este activ doar dacă a fost selectat precedentul *Deschidere angajamente*.   
**Închidere angajamente**: dacă este activ, se va activa tabul pentru închiderea registrelor clienților din înregistrarea contabilă care va utiliza acest șablon. Este vorba în mod normal de toate înregistrările de plată/încasare fără TVA, doar poate fi setat și în combinație cu deschidere angajamentelor și compensare angajamente pentru șabloanele de credit note și, în general, pentru toate înregistrările care prevăd o deschidere angajamente cu compensarea simultană a unei situații precedente.   
**Utiliz. schimb vechi**: cu acest flag, disponibil doar în cazul în care a fost setată închiderea angajamentelor, aplicația va închide angajamentele cu schimbul istoric al deschiderii, fără a înregistra automat diferențele de schimb valutar (va putea fi făcut manual).   
**Grupează plăți în registrul jurnal**: cu acest flag, disponibil doar în cazul în care a fost setată închiderea angajamentelor, aplicația va grupa, într-o unică înregistrare contabilă, toate valorile de închidere angajamente asociate la același cont analitic (în particular, va grupa înregistrările cu același semn si aceeași deviză).   
**Exclude din comis. acumulate**: cu acest flag, disponibil doar în cazul în care a fost setată închiderea angajamentelor, închiderile angajamente efectuate cu acest șablon contabil nu vor fi considerate valide pentru calcularea comisioanelor acumulate pe agenți cu calculul de tipul *Plată efectuată*.    
**Ref. doc. angajament în plată**: cu acest flag, disponibil doar în cazul în care a fost setată închiderea angajamentelor, aplicația va gestiona codurile (8) și (9) pentru relevarea referințelor închiderilor angajamentelor în descrierile detaliate ale înregistrărilor.    
**Compens. angajamente**: cu acest flag, disponibil doar în cazul în care au fost selectate opțiunile pentru deschiderea și închiderea angajamentelor, procedura va activa posibilitatea de a efectua o compensare angajamente în înregistrarea bazată pe acest șablon: această combinație de parametri este recomandată pentru toate șabloanele asociate documentelor de tip credit note.    
**Aviz comp.**: cu acest flag se activează, la salvarea înregistrării contabile, un control care avizează utilizatorul de prezența angajamentelor de compensat.   
**Grupare angajamente**: dacă este activ, se va activa și gruparea angajamentelor (deci nu gestiunea standard) la deschiderea/închiderea angajamentelor, cu ajutorul unui tab specific în înregistrarea contabilă.    
**Creează grup**: dacă este activ și este activ și parametrul precedent, creează automat un grup de angajamente în grupare angajamente, în care însumează angajamentele înregistrării (de activat în șabloanele facturilor de achiziție/vânzări).
**Grupare angajamente – tip plată**: reprezintă tipul de plată care va fi atribuit înregistrărilor grupărilor angajamentelor care au acest șablon.
**Proiecte**: dacă este activ, va determina activarea câmpului *Proiect* în antetul înregistrării, împreună cu detaliile pentru asociera proiectelor la înregistrările contabile detaliate.  
**Centre de cost**: dacă este activ, se va activa tabul pentru gestionarea valorizării centrelor de cost în înregistrările contabile.  
**Centre de profit**: dacă este activ, se va activa tabul pentru gestionarea valorizării centrelor de profit în înregistrările contabile.  
**Mijloace fixe**: dacă este activ, se va activa tabul pentru gestionarea mijloacelor fixe în înregistrarea contabilă.  
**Tip operație**: se referă la tipul de operație care este propusă implicit pentru noile mișcări înregistrate în tabul *Mijloace fixe* în contabilitate. 
**Actualizare solduri**: parametru setat implicit.  
**Descr. mișc. în jurnal și în plăți**: dacă este activ, procedura va copia descrierea generală a înregistrării în toate descrierile detaliate ale mișcărilor și în notele plății.   
**Comisioane**: dacă este activ, va activa în înregistrările contabile un tab pentru gestionarea datelor pentru calcularea comisioanelor din modulul Administrativ.  
**Intrastat**: dacă este activ, va activa în înregistrările contabile un tab pentru gestionarea datelor care provin din factura de achiziție/vânzări, contabilizată automat cu ajutorul procedurii relative sau inserate în momentul creării notei contabile, și relative la crearea modelelor intrastat. Datele astfel gestionate vor fi preluate în procedura de creare a modelelor intrastat cu ajutorul procedurii *Preluare înregistrări contabile*. Amintim că, alternativ, este prezentă procedura de *Preluare din facturi* che non interagisce con i movimenti contabili andando a leggere direttamente e soltanto i documenti di acquisto / vendita.
care nu interacționează cu mișcările contabile, mergând să citească direct doar documentele de achiziție/vânzare.
**Antrepriză**: parametrul identifică înregistrarile care provin din contracte de antrepriză, utilizat pentru rapoartele fiscale.    

### Alte câmpuri în tabelul înregistrărilor contabile

**Deviză**: dacă este activ, va determina afișarea câmpului *deviză* în secțiunea registrului jurnal.    
**Schimb/Dată valută**: dacă este activ, va determina afișarea câmpurilor *schimb valutar* și *dată valută* în secțiunea registrului jurnal.   
**Valoare valută**: dacă este activ, va determina afișarea câmpului *valoare valută* în secțiunea registrului jurnal.    
**Cont analitic contrapartidă**: dacă este activ, va determina afișarea câmpurilor conturilor analitice din contrapartidă în secțiunea registrului jurnal. Gestionarea câmpurilor din contrapartidă nu este recomandată.    
**Detalii mișcare**: dacă este activ, va determina afișarea câmpului *Detaliu mișcare* în secțiunea registrului jurnal. Se recomandă setarea acestui flag pentru toate șabloanele contabile, pentru a permite inserarea notelor detaliate pentru fiecare înregistrare contabilă.    
**Diviziune**: dacă este activ, va determina afișarea câmpului *diviziune* deja din secțiunea TVA, precup și în secțiunea registrului jurnal. Cu această setare va fi posibilă împărțierea încărcării aceluiași document în mai multe diviziuni ale societății.   
**Zile bancă**: dacă este activ, va determina afișarea câmpului *dată valută bancă* în secțiunea registrului jurnal. Câmpul este recomandat pentru toate șabloanele contabile care înregistrează mișcări financiare. Gestionarea acestui câmp poate fi automatizată pe baza zilelor valută (pozitive/negative) inserate în registrul băncilor pentru fiecare șablon.   
**Nr. progresiv**: dacă este activ, va determina afișarea câmpului număr linie în secțiunea registrului jurnal: se recomandă inserarea acestui flag pentru șabloanele lungi, pentru a permite utilizatorului să ordoneze înregistrările ca în șablon (ex. salarii).   
**Ref. manuală angajamente**: dacă este activ, va determina afișarea câmpului *Ref. manuală angajament* în secțiunea registrului jurnal. Câmpul este recomandat pentru asocierea manuală a înregistrărilor contabile fără să se mai treaca prin gestiunea angajamentelor.

**Operații extraordinare**: dacă este activ, va determina afișarea câmpului omonim pentru a evidenția anumite înregistrări contabile ca *extraordinare* și permite apoi căutarea și extragerea lor rapidă în rapoarte.  

**Tip operație fiscală**: dacă este activ, va determina afișarea unui combo box 
cu care să se marcheze linia contabilă în sprijinul unei prelucrări ulterioare (externe) a decontului anual de TVA, unde se cere să se indice dacă operațiunea corespunde la:
- achiziții de bunuri amortizabile
- achiziții de bunuri neamortizabile
- achiziții de bunuri/servicii destinate revânzării
- alte achizitii
 
**Referință document**: face vizibile, în corespondență cu rândurile mișcării contabile, două câmpuri suplimentare pentru a nota referința la data și numărul documentului (de exemplu, factură pe linia contului de contrapartida).