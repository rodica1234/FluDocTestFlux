---
title: Antet
sidebar_position: 3
---

Dupa inserarea: tip factura, numar si data va deveni activ campul pentru inserarea furnizorului. Selectarea furnizorului se poate face cu ajutorul ferestei de help, care inaintea inserarii facturii a fost inserat in registru parteneri ca si furnizor cu adresa, tara, deviza, limba, datele fiscale si solutiile de plata convenite prin contract. Prin inserarea furnizorului toate datele din registru partener vor fi aduse in fereastra de antet.

Datele propuse, daca au fost inserate in registru, sunt: 

**Expeditii**: este propusa informatia inserata in registrul furnizorului in tab ‘Expeditii' (tabelul de referinta este "Expeditii");

**Taxe de transport**: este propusa informatia inserata in registrul furnizorului in tab ‘Expeditii' (tabelul de referinta este "Taxe de transport");

**Ambalaj**: este propusa informatia inserata in registrul furnizorului in tab ‘Expeditii' (tabelul de referinta este "Ambalaje");

**Tara**: este propusa informatia inserata in tab-ul “Date comune” din registrul furnizorului (tabelul de referinta este "Tari");

**Zona**: este propusa informatia inserata in registrul furnizorului in tab ‘Expeditii' (tabelul de referinta este "Zone");

**Oferta**: este propusa informatia inserata in registrul furnizorului in tab Oferte, dar numai in cazul in care exista o oferta implicita (tabelul de referinta este "Oferte de Vanzare");

**Valabila De la**: este data de la care este valabila oferta selectata;

**Valabila (pina) La**: este data pana la care este valabila oferta selectata;

**Limba**: este propusa informatia inserata in tab-ul “Date comune” din registrul furnizorului.

**Deviza**: este propusa informatia inserata in registrul furnizorului in tab ‘Administrativ' (tabelul de referinta este Devize);

**Schimb valutar**: daca valuta societatii cu care se opereaza este aceeasi cu a documentului, valoarea raportata va fi 1, daca nu, valoarea va fi preluata din Schimburi valutare sau Schimburi fixe pentru Euro;

**Data valutei**: este data la care este calculata valoarea schimbului ca raport dintre moneda societatii cu care se lucreaza si cea a clientului, pe baza tabelului Schimburi valutare.

**Note initiale**: pot fi inserate note manuale sau note care au fost in prealabil definite in ‘note codificate'. Pentru aceasta trebuie sa faceti dubluclick in campul "Note initiale" sau cu tasta dreaptă a mouse-ului puteți să deschideți o fereastră pentru a insera un text mai lung;

**Comandă**: permite asocierea documentului la o comandă;

**Ref.FA și Tip**: după stornarea unei facturi, utilizatorul trebuie să asocieze cele două facturi inserând, în storno, numărul, data și tipul facturii inițiale;

**Înreg. cont.**: preia numărul, data și numărul în jurnalul de V/C derivate din contabilizării facturii;

**Stare document**: trebuie să fie inserată de utilizator și poate fi utilizată de procedurile de replicare ale aplicației pentru administrarea unui sediu cu mai multe puncte de vânzare.

Exista campuri caracteristice antetului facturii care pot avea o gestiune un pic diferita fata de alte documente. Acestea sunt:

**Referinta noastra**: in momentul completarii “Executarii din ordin”, este propusa informatia prezenta in campul omonim din ordin. Aceast transfer este valabil numai in cazul in care factura este creata prin preluarea datelor dintr-un singur ordin. In cazul in care factura a fost emisa prin intermediul procedurii "Valorizare avize de achizitii", dintr-un singur aviz, in acest camp este propusa informatia prezenta in campul omonim din aviz.

**Referinta voastra**: in momentul completarii “Executarii din ordin”, este propusa informatia prezenta in campul omonim din ordin. Aceast transfer este valabil numai in cazul in care factura este creata prin preluarea datelor dintr-un singur ordin. In cazul in care factura a fost emisa prin intermediul procedurii "Valorizare avize de achizitii" dintr-un singur aviz, in acest camp este propusa informatia prezenta in campul omonim din aviz.

**Situatia facturii**: factura, in momentul in care este creata, nu are nici un flag setat. Trebuie sa aiba flag-ul “Controlat” pentru a putea fi contabilizata. Flag-ul “Contabilizat” este marcat automat cand factura suporta procedura de contabilizare, flag-ul “Incarcat” cand suporta procedura de incarcare si este inlaturat prin operatiile de restaurare. Exista posibilitatea de a anula o factura prin flagul “Anulat”. Executare din ordine furnizori, permite inserarea automata a informatiilor cuprinse in unul sau mai multe ordine.

RIBBON BAR: reprezinta meniul cu butoanele de executie, pentru fiecare operatie in parte aferentă fiecarei ferestre din aria in care se lucreaza. Lista functionalitatiilor posibile cuprinde:



| Functie | Functionalitate |
| --- | --- |
| Salvează | Permite salvarea facturii de achizitie. |
|  [Creare din ordin furnizorpurchase/purchase-delivery-note/insert-purchase-delivery-note/header-procedures/execution-from-purchase-order)  | Procedura ofera posibilitatea crearii unui A.E dintr-un Ordin Furnizor.  |
| Deschide registru | Permite vizualizarea  datelor din registrul partener. |
| Sterge plati | Permite stergerea platii inserate in antet; plata este preluata din Registrul furnizorului. |



| Functie | Functionalitate |
| --- | --- |
| Document manager | Procedura da posibilitatea de a atasa documente. |






