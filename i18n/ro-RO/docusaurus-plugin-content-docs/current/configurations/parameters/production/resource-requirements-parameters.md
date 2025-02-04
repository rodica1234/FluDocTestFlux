---
title: Parametri necesar materiale
sidebar_position: 6
tags: [Necesar materiale]
---

Conține parametrii care se referă la setările principale din aria producției.

**Prima zi din săptămână pentru calcul capacitate productivă**: reprezintă ziua care trebuie să fie considerată ca fiind prima zi din săptămână în [Calendarul Capacităților productiveconfigurations/tables/production/factory-calendar), deci în calendarul Centrelor de lucru. De obicei se inserează luni.

**Ultimul ordin planificat utilizat în anul în curs**: reprezintă ultimul număr progresiv utilizat în anul în curs pentru ordinele planificate.

**Lansare CDA autorizate** dacă este activ, cererile de achiziție generate cu procedura de *lansare ordine planificate de achiziții* sunt create cu parametrul **Autorizată** activat automat. În mod contrar, utilizatorul care trebuie să genereze ordinele furnizori din CdA va fi constrâns să “autorizeze” toate liniile cererii de achiziții înainte de a genera un ordin din ea. Oricum, se pot autoriza doar câteva din liniile CdA și apoi se generează ordinele furnizori pornind doar din liniile autorizate.

**Gestionare simplificată producție**: permite activarea parametrului *Lansare ordine de producție executive*; dacă este activ, ordinele de producție generate cu procedura ordinelor planificate de producție sunt create deja cu statusul *Executive*, și deci nu vor cere o ulterioară procedură de lansare.

**Culori fond**: permite alegerea culorilor pentru diversele tipuri de ordine: de achiziții, de producție sau in SL, în timp ce secțiunea **Culori text** permite alegerea culorii textului pentru diversele tipuri de ordine: *în întârziere* și/sau *expirate*.

**Parametrii pentru lansare ordine planificate**  
În această secțiune utilizatorul poate insera tipul cererii de achiziții și tipul ordinului în SL care trebuie să fie generate automat în timpul lansării ordinelor planificate de achiziții și sistem lohn.  

**Control terț obligatoriu pentru fazele externe**: dacă este activ, în cazul în care terțul nu este inserat, acesta va fi semnalat cu **Culoare text linie ordin** inserat dedesupt.  

**Control materiale obligatoriu**: activează controlul prezenței sau nu a materialelor în gestiune și, în baza disponibilității, vor fi evidențiate cu culori diferite (**Coloare fond linie ordin**: *Complet/Parțial/Absent*). În plus, se poate insera în **Tip control pe** dacă acesta trebuie să fie făcut pe stoc sau pe disponibilitatea materialului.

**Lansare ordine de producție în execuție**: dacă este activ, permite ca ordinele de producție generate cu procedura de lansare ordine planificate de producție să fie create deja cu statusul *Executive* și deci nu cer o procedură ulterioară de lansare.

**Vizualizare în format arbore a ordinelor** permite afișarea, în partea inferioară a ferestrei de *Căutare ordine planificate*, unui arbore care leagă elementele unei comenzi de producție, pe baza legăturilor listelor componentelor implicate în planificarea acelei comenzi.

**Menține legătura între ordinele unei comenzi**: dacă este activ, permite, folosind și parametrii imediat succesivi, să se stabilească că atunci când se modifică manual data unui nou ordin planificat, procedura să efectueze modificarea și în ordinele planificate asociate.

**Gestiuni pentru planificare ordine**  
În grid sunt afișate gestiunile în care trebuie să fie controlată disponibilitatea. Această listă este inserată în fereastra **Calcul disponibilitate** care se află în *Utilitare*.

**Zile avans rezervare materiale**: valoarea inserată permite anticiparea cu acest număr de zile a disponibilității materialului în ceea ce privește începerea prelucrării(atât în ordiniele planificate de producție, cât și în ordiniele de producție), pentru a permite logisticii să aducă materialul la timp în producție.  
Acesta este luat înconsiderare de următoarele proceduri: toate planificările "cel mai devreme", "cel mai târziu", "pe capacitate finită", "MRP", "Completare date ordine" atât în ordiniele planificate, cât și în ordiniele de producție, "Recalculează dată începere" atât în ordiniele planificate de producție, cât și în ordiniele de producție, toate procedurile CRP ("Gantt", "Capacitate centre de lucru" și "Secvență faze") care operează la schimbarea datei început sau sfârșit a fazei ordinului.

**Parametrii Gantt**: permite introducerea parametrilor impliciți pentru gestionarea form-ului Gantt (*Gantt Simulation Type* și *Snapshot Simulation Type*).
