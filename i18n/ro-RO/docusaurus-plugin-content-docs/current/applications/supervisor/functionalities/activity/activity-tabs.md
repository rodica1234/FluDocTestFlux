---
title: Activitate
#hide_title: true
sidebar_label: Activitate
sidebar_position: 1
---

:::info Nota
În partea superioară a ferestrei sunt câțiva parametri standard importanți deoarece determină modul în care se va compune activitatea.
:::

### Parametri asociați

Toate *Tipurile de activitate* au *Parametri asociați* (atât de input cât și de output). Aceștia, atunci când sunt utilizați într-un *Task*, sunt vizibili (lucru evident când sunt utilizați în Widget-ul *Blockly*). Acești parametri sunt esențiali în multe cazuri, deoarece reprezintă singura conexiune dintre *Activitate* și *Task*.

Pentru a crea un parametru este necesar să specificați o valoare implicită (cum ar fi *Nume*, *Descriere*) și câteva valori specifice cum ar fi *ParametruInput*, *Obligatoriu*, *Tip* și *Parametru Global*.

### Mapare înregistrări

Pentru tipul de activitate **Template Mail**, există posibilitatea de a mapa înregistrările (numele coloanelor) la antet; rezultatul mapării va fi vizualizat după ce un set de înregistrări a fost utilizat într-un document (din tab-ul *Template Document*).

### Configurare activitate

Acest tab se schimbă în baza **Tipului activității** și singura valoare comună tuturor acestor tipuri este **Parametru rezultat**.

**Tip activitate**

> **Generate Script**: conține două tab-uri, *Parametri* și *Script*. Valorile de input și output care au fost utilizate în tab-ul *Script*, trebuie să fie declarate în tab-ul *Parametri*.

> **Datasource**: permite configurarea parametrilor *Datasource* și selecția *Datasource*.

> **Run Report** permite selectarea unui *Business Object*, a *Tipului de raport* și a *Formatului exportului*.

> **Sql Query**: similar activității *Generate Script*, cu excepția tab-ului *Script* care nu va mai conține un script în C#, ci în SQL. Pentru a mapa parametrii activității în cadrul query-ului, este necesar să îi includeți între paranteze pătrate.

> **Stored procedure**: permite configurarea parametrilor de input pentru stored procedures.

> **Mail Template**: conține două tab-uri, *Setări Generare Document* și *Template Document*. În primul tab, în partea superioară, este posibil să setați *Master Record* (și anume setul de înregistrări care va popula template-ul documentului), *Document Generat* (variabila care conține documentul, care trebuie mapată din tab-ul *Parametri asociați* ca parametru de output pentru a obține un rezultat atunci când va fi utilizată în cadrul unui *Task*), *Format Document* (adică .pdf, .html, .docx, .doc), *Descriere* și *Send as HTML body*.
În partea inferioară a tab-ului se află variabilele documentului (variabilele sunt prezente în al doilea tab, sub secțiunea *Variabile document* în panoul din partea dreaptă a interfeței).
În al doilea tab există un Widget (ssimilar cu un document în *Microsoft Word*) pentru a vizualiza/modifica template-ul documentului, folosind instrumentele integrate și variabilele documentului care pot fi găsite în panoul din partea dreaptă.