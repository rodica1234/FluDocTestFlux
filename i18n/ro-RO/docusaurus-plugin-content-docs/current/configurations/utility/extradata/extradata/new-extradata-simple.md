---
title: Nou ExtraData Simplu
sidebar_position: 2
---

Extradatatele se împart în două categorii: 

 - **Simple**: sunt proprietăți atașate obiectelor

 - **Obiecte**: sunt obiecte la rândul lor

Fiecare are o procedura. Pornim cu analizarea extradatatelor simple.



**CREARE EXTRADATA SIMPLE**:

Mai întâi creăm extradata.  Mergem în **Home** > **Utilități** > **ExtraData** > **ExtraData** și facem clic pe butonul Nou.

În imaginile următoare se vede prima parte a creării.

![](/img/ro-RO/configurations/utility/extradata/new-extradata-simple/image01.png)

        

1. selectați radio button-ul **Simplă**.

2. inserați **Codul** care va identifica extradata.

3. inserați **Numele **geo localizat al extradatei (trebuie să fie un cuvând prezent în dicționar. Dacă nu este prezent, va trebui să îl inserați).

4. selectați **Tipul de date** din combobox. 

5. inserați o **Descriere** care deseori este identic cu **Numele.**

6. dacă are o scadență, inserați **Data început/sfârșit valabilitate.**

 7. dacă este necesar, inserați **Drepturile de modificare și vizualizare.**

8. selectați **Stereotipul** valorii (modalitatea de vizualizare a coloanei Valoare în toate documentele).

Stereotipul este activabil pentru Tipul de date: Date (DateTime și Time); Decimal (Currency și Numeric); Double, Float și Long (Numeric); Int (Color, Numeric și Year); Short (Numeric și Year); String (MultiLine).

Stereotipul este activabil pentru toate obiectele activate și pentru fiecare obiect. 

În ExtraData, prezente în toate documentele, pentru coloanele: Descriere (pentru ExtraData de tip Simplu) și Note există proprietatea Multi-line (activabilă cu combinația de taste MAJUSCUL+ENTER).

În gridul **Activări, **este afișată lista cu obiectele în care extradata va putea fi visibilă.

Pentru a adăuga unul Nou, va trebui pur și simplu să îl inserați pe ultima linie din tabel.

Flag-urile **Obligatoriu** și **De listat** indică dacă, pentru obiectul în care este vizibilă extradata, este obligatorie inserarea și dacă se poate tipări.

**Sortare **este utilă vizualizării când adăugăm extradata; ordinea în care apar extradatatele în obiect este decisă de acest câmp.

![](/img/ro-RO/configurations/utility/extradata/new-extradata-simple/image02.png) 

9. Adăugare extradata în form-ul Fluentis

Pentru a putea adăuga extradata direct din unul din aceste obiecte în form-ul Fluentis apăsați tasta dreaptă pe linia cu  ![](/img/ro-RO/configurations/utility/extradata/new-extradata-simple/image03.png) și selectați **Adaugă extrada de prim nivel**. Această procedură se execută pentru fiecare extradata pe care doriți să o adăugați. După adăugarea unuia, puteți **Adăuga extradata fii**.

![](/img/ro-RO/configurations/utility/extradata/new-extradata-simple/image04.png)

În combo box, ca în imagine, selectați extradata dorită.

![](/img/ro-RO/configurations/utility/extradata/new-extradata-simple/image05.png)

10. Inserați **Propagarea**.

![](/img/ro-RO/configurations/utility/extradata/new-extradata-simple/image06.png)

În propagare se inserează proprietatea exactă în care, dacă este valorizată, extradata va fi preluată automat în obiectul selectat în **Activări**. Pot fi inserate mai multe propagări.

**Exemplu**: Referitor la imaginea anterioară cu propagarea, dacă pentru un cont este valorizată limba (“Propagare”), iar acest cont este ales la crearea unei facturi noi, limba sa va fi importată automat în tab-ul **Extradata** din antetul facturii (“Activări”).

Mai precis, în imaginea următoare observăm cum în tab-ul Extradata s-a setat și salvat valorea limbii.

![](/img/ro-RO/configurations/utility/extradata/new-extradata-simple/image07.png)

Iar în imaginea următoare vedem cum, la crearea noii facturi pentru contul analizat, este importată automat și limba.

 ![](/img/ro-RO/configurations/utility/extradata/new-extradata-simple/image08.png)

Vezi și  [Nou ExtraData Obiectconfigurations/utility/extra-data/extradata/new-extradata-object).