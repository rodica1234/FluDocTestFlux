---
title: Tipuri test
sidebar_position: 4
---

Tabelul se află pe calea **Configurare > Tabele > Calitate > Generale > Tipuri test** și permite codificarea tipurilor de teste de calitate care se efectuează produselor.  
Acestea pot fi utilizate în **Fișe tehnice** ca proprietate articol, în **Planuri de control** ca teste de efectuat în diversele fluxuri ale companiei sau în **Certificat de analize** pentru a indica faptul că testul a detectat anumite valori de conformitate sau nu.   

*Câmpuri specifice*

**Cod** și **Descriere**: reprezintă codul și descrierea tipului testului; 

**Categorie**: permite gruparea diverselor tipuri de teste pe categorii, identificate cu un **Cod** și o **Descriere**;

**Laborator intern**: dacă este activ, semnalează că testul este realizat în companie;

**Laborator extern**: dacă testul este efectuat în exterior, permite inserarea furnizorului care efectuează testul;

**Instrument de măsură**: permite inserarea instrumentului utilizat, în cazul în care există valori de detectat. Este compus dintr-un **Cod** și o **Categorie**;

**De detectat**:  dacă este activ, semnalează că testul conține valori de detectat;

**Tip valoare**: permite alegerea tipului valorilor de detectat (*Numeric*, *Da/Nu* sau *Text*). Cu opțiunea *Numeric*, se activează câmpul **Tipul limitei** valorilor de detectat;    

**Generic**: dacă este activ, acest test va trebui întodeauna să fie propus în planurile de control. Dacă nu este activ, în câmpul succesiv,**Tip document**, va fi posibilă inserarea documentelor în care va fi activat acest test.

Tab **Atribute tip test**    
Permite inserarea [Extra Dataconfigurations/utility/extra-data/extradata/search-extradata) generale pentru tipul de test corespondent.

Tab **Parametri configurare test și instrument de măsură**  
Conține [Extra Dataconfigurations/utility/extra-data/extradata/search-extradata) necesari operatorilor pentru pregătirea tuturor instrumentelor necesare pentru a începe un anumit test. Pot fi luate în considerare configurările necesare, informațiile operaționale pregătitoare pentru efectuarea testului.

Tab **Rezultate posibile**  
Se poate personaliza, pentru fiecare test, rezultatele posibile dintr-o listă Rezultate. Când este detectat un singur test, în baza conformității sale, aplicația va propune rezultatul cu **Implicit pozitiv** sau **Implicit negativ**.

Tab **Funcţii de detectare şi aprobare**  
Permite atribuirea drepturilor funcțiilor care detectează valorile testului. Se poate alege [Funcția și **Tipul activității**.

Tab **Imagini**  
Permite asocierea imaginilor utile testului de detectat. De exemplu, este util pentru a indica vizual unele caracteristici ale testului.