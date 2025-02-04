---
title: Nou ExtraData Obiect
sidebar_position: 3
---

Extradatele se împart în două categorii:

- **Simple**: sunt proprietăți atașate obiectelor

- **Obiecte**: sunt obiecte la rândul lor



Fiecare are o procedură. Analizăm în continuare extradatele obiect.



**CREARE EXTRADATA OBIECT**:



Întâi creăm extradata. Mergem în:**Home** > **Utilități** > **ExtraData** > **ExtraData** și facem clic pe butonul Nou.



În imaginile de mai jos puteți vedea prima parte a creării.

![](/img/ro-RO/configurations/utility/extradata/new-extradata-object/image01.png) 

1. selectați radio butonul corespunzător **Obiectului**.

2. introduceți **Codul** care va identifica extradata.

3. introduceți **Numele** geo-localizat al extradatei (trebuie să fie un cuvând prezent în dicționar. Dacă nu este prezent, va trebui să îl inserați).

4. introduceți **Obiectul de business** geo-localizat pe care doriți să-l dați noului obiect; acesta corespunde cu numele obiectului.

5. introduceți o **Descriere** care deseori este identic cu **Numele**.

6. dacă are o scadență, introduceți **Data început/sfârșit valabilitate** (altfel nu este necesar să le introduceți datele).

7. dacă este necesar, introduceți **Drepturile de modificare **și** vizualizare**.



În gridul **Activări**, puteți vedea lista obiectelor în care extradatele pot fi văzute și valorizate.



Pentru a adăuga unul Nou, scrieți pe ultimul rând din tabel.Parametrii **Obligatoriu** și **De listat** identifică dacă,pentru obiectul în care este vizibilă extradata, este obligatorie inserarea și dacă se poate tipărit.**Sortarea** este utilizată pentru vizualizare, atunci când adăugăm extradata; ordinea în care vor apărea apoi extradatele în cadrul obiectului este decisă de acest câmp.![](/img/ro-RO/configurations/utility/extradata/new-extradata-object/image02.png)

8. Adăugare extradata în form Fluentis

Pentru a putea adăuga extradata direct din unul dintre aceste obiecte, în fereastra Fluentis corespunzătoare, apăsați tasta dreapta a mouseului pe linia albastră (cu ![](/img/ro-RO/configurations/utility/extradata/new-extradata-object/image03.png)) și selectați **Adăugă extradata de primul nivel**. Această procedură se execută pentru fiecare extradata pe care doriți să o adăugați. După adăugarea unuia, puteți **Adăuga extradata fii**.

![](/img/ro-RO/configurations/utility/extradata/new-extradata-object/image04.png)

Din lista, care se poate observa în imaginea următoare, alegeți extradata dorită pe care ulterior o veți puteți valoriza.

 ![](/img/ro-RO/configurations/utility/extradata/new-extradata-object/image05.png)

9. În final, se poate insera **Propagarea**.

![](/img/ro-RO/configurations/utility/extradata/new-extradata-object/image06.png)


În propagare se inserează proprietatea exactă în care, dacă este valorizată, extradata va fi preluată automat în obiectul selectat în **Activări**. Pot fi inserate mai multe propagări.


**Exemplu**: 

Referitor la imaginea anterioară cu propagarea, dacă pentru un cont este valorizată limba (“Propagare”), iar acest cont este ales la crearea unei facturi noi, limba sa va fi importată automat în tab-ul **Extradata** din antetul facturii (“Activări”).

Mai precis, în imaginea următoare observăm cum în tab-ul Extradata s-a setat și salvat valorea limbii.

![](/img/ro-RO/configurations/utility/extradata/new-extradata-object/image07.png)


Iar în imaginea următoare vedem cum, la crearea noii facturi pentru contul analizat, este importată automat și limba.

![](/img/ro-RO/configurations/utility/extradata/new-extradata-object/image08.png)

Vezi și  [Nou ExtraData Simpluconfigurations/utility/extra-data/extradata/new-extradata-simple).






