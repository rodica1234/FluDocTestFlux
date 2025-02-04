---
title: Tipuri de flux
sidebar_position: 2
---

În acest tabel se inserează codul tipurilor de flux ale cash flow-ului pe care societatea intenționează să o utilizeze pentru simulări. 

Se recomandă totuși să codificați toate tipologiile prevăzute: procedura de *generare automată a fluxului de numerar* permite selectarea, de fiecare dată, a celor care trebuie considerate.

*Câmpuri specifice*

**Angajamente**: sursa datelor sunt angajamentele din contabilitatea generală;

**Sold contabil**: din acest tip de flux se obțin disponibilitățile financiare inițiale, față de tipurile de conturi financiare codificate;

**Ordine clienți/ordine furnizori**: ordine, cu tipul care conțin flag-ul ‘cash flow', listate și confirmate, neexecutate;

**Facturi de achiziții/vânzări**: facturi listate/controlate dar încă necontabilizate (nu de tip proformă);

**Extracontabil**: scadențe manuale extracontabile definite în modulul cash flow (vedeți documentul succesiv);

**Liber profesioniști**: compensări liber profesioniști încă necontabilizate;

**A.E. achiziție/vânzări**: avize cu tipul care conțin flag-ul ‘cash flow', listate și confirmate, nevalorizate;

**Ordine și reintrări SL**: ordine în sistem lohn de executat și reintrări din sistem lohn încă nefacturate;

**RdA**: cereri de achiziție;

**Ordine planificate**: ordine de producție cu faze externe planificate sau ordine de producție care prevăd o cerere de achiziție;

**Portofoliu efecte**: reprezintă efectele emise (și prezentate, în baza parametrului *Utilizează în scadența în finanțare din form *Generare automată cashflow*)

**Avansuri**: reprezintă liste de facturi de avans create. Elaborarea cash flow, dacă pentru acest tip a fost selectat parametrul *Utilizează în scadența în finanțare* (din form *Generare automată cashflow*) preia sumele din listele contabilizate ca avans în contul bancar și în fluxurile de numerar la datele scadențelor. Atunci când facturile sunt încasate (prin procesarea unui nou flux de numerar), fluxurile de numerar în scadență sunt eliminate, iar suma din contul bancar este actualizată cu cota rămasă, neanticipată deja și fără eventuale comisioane și dobânzi.