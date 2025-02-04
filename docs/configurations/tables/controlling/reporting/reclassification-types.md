---
title: Tipi riclassificazione
sidebar_position: 1
---

La tabella dei ***Tipi riclassificazione*** è già precompilata dal [***Fast start***guide/fast-start) con le tipologie
- *IV - Riclassificazione IV direttiva UE*
- *EC - Riclassificazione economico*
- *BEP - Break even point*

Tali tipologie sono utilizzate per i modelli contabili che il ***Fast start*** precarica, in particolare per il modello del *Bilancio IV direttiva*.

Nel caso in cui la società abbia la gestione *Controlling* attiva, suggeriamo di impostare un tipo
- *COGE - Controllo di gestione* con flag *Controlling* attivo, da utilizzare per i modelli che valorizzano lo ***Storico registrazioni gestionali*** tramite una ***Comparazione*** del controlling
- *PRO - Riclassificazione di progetto/commessa* con flag *Consolidato di commessa*, da utilizzare se la società ha impostato una *dimensione* di gestione dei progetti e vuole elaborare un *Consolidato di progetto*

:::tip Nota
Il tipo riclassificazione con flag ***Costo prodotto*** prevede caratteristiche specifiche all'interno dei Modelli di riclassificazione, ma attualmente deve essere valorizzato con procedure custom
:::

:::tip Nota
E' possibile, tramite *Object navigator*, rendere visibile in griglia la proprietà *Nazione*, che non è obbligatoria per i Tipi riclassificazione: se si imposta una nazione in un tipo riclassificazione, i ***Modelli di riclassificazione*** collegati a questa tipologia saranno visibili sono nelle società della localizzazione geografica impostata
:::