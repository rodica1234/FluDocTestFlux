---
title: Tipuri de activitate
sidebar_label: Tipuri de activitate
sidebar_position: 2
---

Aplicația conține o serie de *Tipuri de activități*

**Generate Script**: permite crearea unui script generic în C# folosind Widget-ul script editor (menționat în articolul *Scripting*).  

**Data Source**: permite selectarea unui Data Source în tab-ul **Configurare Activitate** dintr-o colecție existentă de Data Sources creată anterior de utilizator (în aplicația ARM).

:::success Video Tutorial
Acest **[video](https://youtu.be/egDCFGZOu14)** explică acest tip de activitate.
:::

**Run Report**: permite crearea unui raport bazat pe anumiți parametri setați și selectați din tab-ul **Configurare Activitate**, cum ar fi: Business Object, tipul raportului, formatul de export și multe altele.

**SQL Query**: permite executarea de interogări create din tab-ul **Configurare Activitate** > **Script**, cu un set de parametri predefiniți - disponibili în cazul în care trebuie executate interogări pe baze de date externe - și parametri personalizați opționali.

:::success Video Tutorial
Acest **[video](https://youtu.be/bzyelPIs9tk)** explică acest tip de activitate.
:::

**Stored procedure**: execută stored procedures create anterior într-o bază de date *Fluentis*, cu valorile definite în tab-ul **Parametri asociați**. Este important să verificați parametrii utilizați în stored procedure cu cei definiți în tab-ul menționat anterior.

**Mail Template**: returnează un document formatat (de exemplu .pdf, .html, .docx, .doc) selectabil din tab-ul **Setare Generare Document** - conform definițiilor din tab-ul **Template Document**, cu datele care provin din parametrii de input definiți în tab-ul **Parametri asociați**.