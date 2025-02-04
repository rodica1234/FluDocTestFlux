---
title: Tip facturi de achiziţie
sidebar_position: 9
---

Tabelul se află pe calea **Configurare > Tabele > Achiziții > Tip facturi de achiziţie**.

Permite inserarea datelor noi sau căutarea celor existente pentru a le vizualiza, modifica sau șterge.

Conține o zonă de filtrare și una de rezultate. După ce ați setat toate filtrele dorite, efectuați clic pe butonul **Caută** pentru a vizualiza datele în tabelul de rezultate.

Pentru a insera datele, efectuați clic pe primul rând gol din tabel sau apăsați butonul **Nou**.

*Câmpuri specifice*

**Numerotare**: consultați [Numerotări Fluentisconfigurations/tables/fluentis-numerations).   
**Natură factură**: indică natura facturii: factură, chitanţă, credit/debit note etc. Este un tabel fix, care nu se poate modifica.  
**Şablon/Descriere şablon**: șablon contabil folosit pentru contabilizarea facturii. Este utilizat în cazul în care nu a fost inserată facturarea achizițiilor sau contrul de contrapartidă implicit în *registrul furnizorului*.  
**Şablon analitic/Descriere şablon analitic**: reprezintă șablonul utilizat pentru contabilizarea facturii.  
**Tran. codice**: reprezintă codul de grupare al documentelor pentru declarația Intrastat și trebuie să fie completat în cazul facturilor sau documentelor CEE.  
**Gestiune/Descriere** și **Şablon gestiune/Descriere**: sunt propuse la inserarea în liniile facturii însoțitoare și reprezintă gestiunea și șablonul cu care va fi încărcată marfa în momentul recepției.    
**Din ordin**: dacă este activ, factura cu acest tip poate executa ordine furnizori.  
**Factura imediată**: dacă este activ, factura cu acest tip este imediată; în factură trebuie să fie inserate și datele pentru transport.  
**Intracomunitar**: dacă este activ, aplicaţia controlează dacă ţara furnizorului este CEE; dacă tipul facturii şi furnizorul nu sunt de acelaşi tip, aplicaţia avizează utilizatorul cu un mesaj. Acest parametru se activează doar pentru tipurile de facturi Intracomunitare.
**În statistică**: dacă este activ, factura cu acest tip este reportată în statistici, deci va fi afișată în rapoatele *Facturat*;  
**Control furnizor**: dacă este activ, pot fi create facturile de achiziţie doar cu contul sintetic/analitic care sunt de tip furnizor; dacă nu este setat pot fi utilizaţi şi clienții.  
**Grupare angajamente**: dacă este activ, în momentul contabilizării facturii angajamentele vor fi grupate și astfel se va utiliza modalitatea *Grupare angajamente*.  
**Executare cantitate articol netotalizată**: dacă este activ, în momentul executării facturlor de acest tip, permite preluarea cantităţilor executate ale documentului de executare, subdivize pe linia articol, chiar și în cazul articolelor de același tip. În caz contrar, însumează cantitățile.    
**Linii document grupate**: dacă este activ, în cazul gestionării articolelor cu matrice, permite afișarea unui tab suplimentar pentru inserarea valorilor cantității pe fiecare celula de matrice. Dacă nu este activ, acest tab și matricea rezultată nu sunt afișate.  
**Facturi de primit** și **Storno facturi de primit**: aceste câmpuri nu mai sunt folosite;  
**Şablon competență economică**: se referă la gestionarea facturilor care urmează să fie primite și, prin urmare, la posibilitatea de a detecta automat amânări pentru eventuale linii de cost care ar putea avea un interval de date de competență în afara exercițiului contabil.  
**Raport**: permite inserarea unui model de raport care va fi utilizat în momentul tipăririi facturii.  
**Număr de copii**: reprezintă numărul de copii ale documentului care va fi propus în mod implicit pentru tipărire. Imprimarea facturilor de achiziție nu prea este utilizată, deoarece factura este de fapt primită de la furnizor și, prin urmare, nu trebuie să fie tipărită ulterior de Fluentis.  