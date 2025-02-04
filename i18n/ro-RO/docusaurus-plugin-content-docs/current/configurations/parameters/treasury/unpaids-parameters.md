---
title: Parametri efecte neîncasate
sidebar_position: 2
---

Parametrii modulului Efecte neîncasate se găsesc în **Parametri > Trezoreri**.

În parametrii efectelor neîncasate se pot predefini elementele implicite care vor fi propuse în procedurile modulului.

*Tip înregistrare*  
> **Cont provizoriu + cheltuieli contestație**: permite redeschiderea angajamentul client într-un cont tranzitoriu, pentru suma din efectul inițial, și se vor debita cheltuielile în contul bancar.   
> **Client + cheltuieli contestație**: permite redeschiderea angajamentul client într-un cont tranzitoriu, pentru suma din efectul inițial, și se vor debita cheltuielile în contul bancar.  

*Gestiune angajamente*  
> **Redeschide angajamentul relativ la factură**: permite deschiderea unui nou angajament care conține numărul și data facturii inițiale. În cazul efectului care se referă la mai multe documente, doar primul din listă va fi introdus, însă în notele angajamentului va fi inclusă lista tuturor referințelor.  
> **Deschidere nou angajament**: opțiunea alternativă, permite crearea unui angajament cu numărul și data documentului atribuite pe baza numărului și datei efectului neplătit. 

*Cheltuieli*  
Secțiunea permite inserarea datelor implicite care vor fi propuse la crearea facturii către client pentru cheltuielile efectului neîncasat.


*Parametri*
> **Șablon contabil**: reprezintă șablonul care va fi propus în procedurile de contabilizare a efectelor neîncasate.  
> **Cont de cheltuieli contestație**: reprezintă contul care va fi propus pentru a identifica cheltuielile percepute de bancă.  
> **Cont tranzitoriu**: reprezintă contul care va fi propus pentru contabilizare în cazul în care a fost setat *Cont provizoriu + cheltuieli contestație*. Recomandăm să completați câmpul (poate fi identic cu contul de cheltuieli), deoarece va fi necesar procedurii de contabilizare.  
> **Cont tranzitoriu bancă**: este contul bancar provizoriu care trebuie utilizat în cazul în care efectul neîncasat se referă la efecte care nu sunt prezentate în procedură (de exemplu, în cazul utilizării modulului DocFinance). 
 
:::note
Acest cont va fi utilizat indiferent de datele inserate în secțiunea *Tip înregistrare*, cu prioritate față de contul de contrapartidă utilizat în mod normal.  
Recomandăm să-l setați doar dacă este necesar.
:::

> **Cont debit cheltuieli client**: este contul de venituri care trebuie utilizat în procedura de contabilizare a efectelor neîncasate dacă a fost aleasă opțiunea de a debita cheltuielile clientului.  
> **Tip dobândă**: efectelor neîncasate li se pot asocia dobânzi. În cazul cambiilor, se poate simula un calcul inițial al dobânzilor între data scadenței preconizate a titlului și data identificării efectului neîncasat.  
> **Creare angajament unic**: permite deschiderea unui angajament unic pentru incasso documentar creat din N angajamente diferite.  
> **Data scadenței egală cu data scadenței efectului**: prin activarea acestui parametru, data scadenței angajamentului redeschis pentru efectul neîncasat este egală cu data expirării efectului, în loc de data efectului neîncasat.
