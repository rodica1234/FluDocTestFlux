---
title: Parametri MPS
sidebar_position: 3
tags: [MPS]
---

În acest form pot fi setați toți parametrii care se referă la gestionarea comenzilor de producție și modul în care trebuie să fie gestionate fazele succesive operației de generare a comenzilor.

**Metodă generare comandă**

În această secțiune trebuie să fie inserat **Tipul comenzii** (Monoprodus/Multiprodus) care trebuie să fie propus în tab **Definire MPS**, tab *Parametri*.  
În momentul generării comenzii din *Definire MPS* este oricum posibilă modificarea acestei setări, precum și cea succesivă numită **Grupare produse după**, cu ajutorul căreia este posibilă stabilirea modului de grupare a articolelor în aceeași comandă *Monoprodus* sau *Multiprodus*.

Dacă *Tipul comenzii* este:  
- **Monoprodus**, unica grupare admisă este cea pe articol: acest tip de gestiune permite utilizatorului să genereze automat din sistem o serie de comenzi monoprodus, selectând o listă de linii din ordine clienți, linii care provin din previziuni de vânzare sau din planul principal de producție sau din substoc, făcând astfel încât fiecare comandă care va fi generată să aibă suma cantităților cerute pentru același articol. Data terminării unei comenzi grupate este întodeauna egală cu cea a necesarului cel mai apropiat datei în care se lansează elaborarea.  
- **Multiprodus**, grupările pot fi efectuate pe client, comandă de vânzare, client/comandă și permit utilizatorului să insereze aceeași comandă Multiprodus pentru articolele care provin din liniile ordinului client asociate la același client, comandă sau la aceeași comandă de vânzare a aceluiași client.

**Prioritate aprovizionare** va fi implicită când comenzile vor fi generate.

**Generare comandă din**  
În această secțiune, utilizatorul poate alege, cu ajutorul parametrilor, dacă se generează comanda din *Ordine clienți* sau din *Previziuni* (previziuni de vânzare, plan principal de producție).  
Acești parametrii pot fi modificați din *Definire MPS*.    
În cazul *Generării comenzii de producție din previziuni*, utilizatorul trebuie să specifice dacă se generează comanda de producție cu scadență săptămânală sau lunară.

**Consideră disponibilitățile provenite din** permit utilizatorului să aleagă ca aplicația să considere disponibilitatea produselor finite pentru generarea comenzilor de producție din: **sistem loh**, **achiziții**, **vânzări**, **producție**, **gestiune**.

**Calcul cantitate pe baza LeadTime articol**: este utilizat în cazul în care nu dorește utilizarea ciclurilor de lucru pentru a calcula durata unei comenzi de producție; în acest caz, pentru a calcula durata comenzii se face referință la câmpul Lead time de producție prezent în [Parametri MRPconfigurations/parameters/production/mrp-parameters/search-mrp-parameters) ai articolului.  

**Generare automată comenzi din ordine clienți**: dacă este activ, procedura creează automat comanda de producție imediat ce este inserată o linie ordin client. Comanda, în acest caz, este creată cu statusul *Neexaminată*. În general, este activat când pentru planificare se utilizează procedura *MRP* în locul *Planificării generale*.

**Actualizare dată prevăzută livrare**: dacă este activ, permite afișarea, automat actualizată, a datei prevăzute pentru livrarea liniei ordinului client asociat liniei comenzii de producție pentru care se modifică manual **data prevăzută sfârșit**.

**Generare automată flux de producție**  
Această secțiune, care depinde de activarea parametrului omonim, utilizatorul poate decide să activeze flag-ul *Planificare*, care permite afișarea comenzilor de producție deja planificate și abia generate de **Definire MPS**. Activarea parametrului *Planificare* permite apoi activarea flagului **Lansare**, care permite apoi planificarea automată a ordinelor planificate de achiziție, producție și/sau sistem lohn care trebuie relansate automat. În acest ultim caz, pentru ordinele planificate de producție se poate activa și flag-ul *Lansare OP executive*, care permite generarea directă a ordinelor de producție în execuție, sărind deci și procedura de *Lansare ordine de producție*.  
În final, activând și flag-ul *Lansare OP executive*, se pot selecta și flag-urile **Generare semnalări de producție automată** și **Elimină materiale fără stoc**, care determină ca pentru ordinul de producție care se generează să fie inserată automat și semnalarea de deschidere și semnalarea de închidere a tuturor fazelor ordinului, să fie înregistrate în gestiune și că materialele care ar trebui să fie utilizate, dar care nu au stoc disponibil, să fie eliminate din tab-ului *Materiale* al semnalării de producție a fazei care descarcă materialele.

**Estimare cost comandă**      
În această secțiune se inserează parametri care vor fi propuși implicit la estimarea costului comenzilor de producție.    

> **Tip cost**: reprezintă tipul care va fi utilizat pentru valorizarea materiilor prime între cost *Ultim*, *Mediu* și *Standard*;    
> **Tip reîncărcare**: reprezintă tipul de reîncărcare dintre *Cost* (pe valoare) și *Procent*; în câmpul alăturat se inserează valoarea corespondentă;      
> **Cost lot**: dacă este activ, procedura valorizează costul materialul pe baza tipului de cost selectat, considerând doar valorile acelui lot specific;     
> **Cost comandă**: dacă este activ, procedura valorizează costul materialul pe baza tipului de cost selectat, considerând doar valorile acelei comenzi specifice.     

:::note Nota
În cazul în care **Cost lot** și **Cost comandă** sunt activate împreună, procedura va valoriza costul materialului pe baza tipului costului selectat, considerând valorile doar a acelei comenzi specifice și pentru acel specific lot.
::: 


**Gestiuni pentru planificare comenzi**  
Gridul afișează lista cu gestiunile în care trebuie să fie controlată disponibilitatea pentru generarea comenzilor de producție. Această listă se inserează în fereastra *Calcul disponibilitate* care se află în **Utilitare**.

**Date ultima planificare**  
În secțiune sunt afișate câteva informații despre ultima planificare (oră început, număr erori generate, oră sfârșit, progresiv planificare).

**Parametrii propuși planificare**: permite definirea parametrilor propuși pentru planificare, poate re-propune parametrii ultimei programări efectuate sau poate propune parametrii utilizați pentru planificare de către fiecare operator.

**Planificare capacitate finită**: permite activarea planificării la capacitate finită. Dacă este activat, valoarea introdusă în **Zile următoarea planificare** indică numărul de zile pentru următorul program.

**Numărul maxim de luni pentru calcularea disponibilității materialelor**: se poate insera numărul pentru calcularea disponibilității, și anume numărul de luni în care vor fi luate în considerare documentele; în schimb, documentele cu o dată ulterioară lunilor luate în considerare nu vor fi incluse în planificare. 

**Prima zi din săptămână vizualizată în calendarul fabricii**: combo box-ul permite alegerea zilei care va fi prima din săptămâna de lucru în [Calendar fabricăconfigurations/tables/production/factory-calendar). De obicei este luni.

**Culori comenzi**  
În această secțiune se pot insera culorile fontului și ale textului comenzilor de producție, pe baza statusului lor (neexaminate, lansate...etc).