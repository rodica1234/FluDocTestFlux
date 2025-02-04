---
title: Loturi și Numere seriale
sidebar_position: 16
---

Articolul poate fi gestionat pe loturi sau pe numere de serie și pentru fiecare cod articol se pot crea subgrupări care pot fi gestionate pe loturi sau numere de serie.

Loturile sunt grupuri de cantități omogene de articole care intră în companie (loturi de achiziție) sau care sunt produse în companie (loturi de producție).

Fiecare lot trebuie să poată fi identificat printr-un cod unic, care conține unele informații care caracterizează lotul în sine.  
Acest cod poate fi definit de companie în **Tip cod lot** sau, în cazul loturilor de achiziție, poate fi păstrat codul lotului furnizorului.  
Deci, fiecare lot trebuie să poată fi urmărit și, în cazul mai multor depozite, datorită codului lotului, trebuie să fie posibilă urmărirea datelor privind stocurile pe fiecare depozit.

### Gestionat cu loturi

**Tip ieșire lot**: cu dispoziție de livrare, data scadență sau manual;
**Tip cod lot**: tipuri codificate anterior în tabelul omonim;
**Stare inițială lot**: de obicei, starea lotului îi definește valabilitatea. Pentru anumite tipuri de materiale, în special produsele alimentare și farmaceutice, starea este obligatorie (de exemplu, în sectorul farmaceutic, un lot care necesită analize înainte de a putea fi utilizat va avea ca statut inițial „în carantină” până la completarea analizelor); pentru acest tip de produse, starea va fi însoțită de data expirării pentru a evita vânzarea și utilizarea mărfurilor expirate.  
În baza stării lotului se va putea alege și modul de gestionare al lui: Rfid sau Rfid unic.   
**Gestionat RFid**: dacă este activ, articolul va fi gestionat cu tehnologia Rfid (radiofrecvență) cu ajutorul aplicației **Fluentis Mobile**. Această tehnologie se bazează pe memorizarea datelor de către etichete particulare, utile pentru identificarea informațiilor articolelor. Cu ajutorul unui device mobile, etichetele se interoghează la distanță.   
**RFID unic**: dacă este activ, codul RFID asociat articolului este unic pentru articol;   
**Tip scadență lot**: permite alegerea tipului de scadență de atribuit lotului (la data scadenței, în ultima zi a lunii scadenței, în prima zi a lunii scadenței);   
**Modifică data scadență lot**: dacă este activ, permite modificarea manuală a datei scadenței lotului;
**Aviz blocare lot în zile**: cele două câmpuri **Aviz** și **Blocare** permit inserarea zilelor care preced blocarea lotului și stabilirea zilei de blocare a lotului;
**Lot unic furnizor**: dacă este activ, lotului îi vor aparține doar articole aceluiași furnizor.

### Gestionat cu număr de serie

În acest caz, pentru fiecare piesă este creat un număr de serie care o identifică în mod unic pentru a o putea fi urmărită. Acest tip de gestiune este util mai ales pentru articolele considerate *critice* sau cu *valoare mare* pentru care este necesară urmărirea fiecărei piese și nu a întregului ansamblu.

**Tip cod număr serial**: informație codificată anterior în tabelul omonim;
**Zile valabilitate număr serial**: reprezintă valabilitatea acestui cod;
**Generare număr serial**: permite stabilirea modului de creare a numărului.

Pentru detalii generale despre form-uri, consultați articolul  [Inserare manuală/help și Selecție dateguide/common/operations-with-data/manual-entry-or-help-and-data-selection).
