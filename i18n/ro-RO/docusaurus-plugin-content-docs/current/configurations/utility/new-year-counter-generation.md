---
title: Generare contoare an nou
sidebar_position: 3
---

Form-ul permite gestionarea contoarelor prezente în Fluentis, în mod deosebit la schimbarea anului.

La deschiderea forumului, Fluentis vizualizează ** Ultimul an contabil existent ** (preluat din parametrii contabili) și filtru pentru *Contoare invalide pentru anul viitor*.

Tabelul afișează lista contoarelor nedefinite (sau definite incorect) pentru anul următor, permițând utilizatorului, cu dublu click, să identifice motivul: 
în general problema se află în configurarea contorului cu o dată de sfârșit valabilitate fără un motiv valabil, forțând (înaintea creării actualului automatism) crearea unei noi linii în fiecare an, în locul setării unui contor cu opțiunea Anuală, care repornește în fiecare an automat; oricum se poate întâmpla ca numărătorul să fie blocat pentru un motiv (schimbarea modului de a numerota etc.).

* butoane specifice*: 

> ** creare**: afișează un un mesaj pentru confirmarea creării automate a contoarelor pentru liniile selectate în tabel.  
> **Rollback**: efectuează restaurarea procedurii.

* exemplu*   
dacă mesajul lui i se răspunde:  
- afirmativ, vor fi șterse datele pentru sfârșitul valabilității contoarelor care au fost în mod greșit închise în anul 2017 din exemplu (deci nu se vor debloca contoare închisă în anii precedenți), setându-i ca ‘anuale' astfel încât să fie valabil pentru totdeauna.

- negativ, numărătorii Fluentis vor rămâne cum sunt.

Exemple:

A) presupunem ultimul an 2017, numărător facturi Fluentis cu codul ‘1' setat cu data sfârșit valabilitate 2020 și deci valabil pentru 2018, procedura va crea și numărătorul ex-Ideale2010 cu codul 1 pentru 2018.

B) presupunem ultimul an 2017, numărător facturi Fluentis cu codul ‘2' setat cu data sfârșit valabilitate 2017 și deci invalid pentru 2018, dacă utilizatorul confirmă corectarea numărătorului Fluentis atunci în numărător va fi eliminată data sfârșit valabilitate și va fi setat tipul ca anual apoi va fi recreat numărătorul corespondent ex-Ideale2010 cu codul ‘2'; în cazul în care numărătorul Fluentis nu este corectat, acest numărător nu va fi valabil pentru 2018 și deci și numărătorul ex-Ideale2010 cu codul ‘2' va rămâne blocat.

C) presupunem ultimul an 2017, numărător facturi Fluentis cu codul ‘3' fără data de sfârșit valabilitate pentru 2018, procedura va crea și numărătorul ex-Ideale2010 cu codul 3 pentru 2018 (indiferent de modul în care utilizatorul răspunde la mesajul de confirmare a modificării în Fluentis).


Nota
Acest element de conexiune este util pentru că în anumite proceduri, se folosesc stored procedures sau funcții care se bazează pe tabele din baza de date diferite de cele conectate la algoritmii scrise în codul C#.

Exemple tabele din database FT_Num; BL_Num; PO_Num.