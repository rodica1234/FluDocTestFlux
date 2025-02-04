---
title: Schimburi valutare
sidebar_position: 4
---

Acest tabel, comun tuturor societăților din aceeași bază de date, permite inserarea zilnică a schimburilor oficiale care vor fi utilizate în diversele proceduri ale aplicației. Semnalăm faptul că programul va lua din acest tabel ultimul schimb valabil în baza datei documentului/înregistrării în momentul inserării sale.

Tabelul poate fi completat manual, prin introducerea directă a cursului de schimb al monedei și zilei, și acestea setate manual sau se poate efectua o actualizare automată prin descărcarea cursurilor de schimb utilizând butonul **Descărcare rate de schimb**.  
După apăsarea butonului, apare un **pop-up** care solicită introducerea datelor **De la/La** în care pot fi căutate cursurile de schimb. Cu parametrul **Inserare automată** tabelul va fi completat direct (recomandăm să îl lăsați activ). 

:::note Nota
Cursurile de schimb sunt descărcate doar pentru monedele care au activ parametrul **Descarcă schimburi** în [**Devize**configurations/tables/general-settings/currencies).
:::

**Schimb**: în mod normal se inserează deviză societății (euro);   
**Descriere**:  reprezintă descrierea devizei;  
**In**: reprezintă deviza de referință;  
**Descriere**: reprezintă descrierea devizei de referință;  
**Dată valută**: reprezintă data de referință a schimbului;  
**Valoare schimb**: reprezintă schimbul 'incert pe cert', utilizat efectiv de program la calcularea contravalorilor. În cazul euro, deci, este valoarea inversă a schimbului oficial al zilei.  
**Valoare directă**: reprezintă schimbul 'cert pe incert'. În cazul euro, deci, este valoarea schimbului oficial al zilei.  