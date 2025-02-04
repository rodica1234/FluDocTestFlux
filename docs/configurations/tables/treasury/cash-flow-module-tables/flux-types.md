---
title: Tipi flusso
sidebar_position: 2
---

:::tip[FAst Start]
La tabella è interessata dalla procedura di [**Fast Start**guide/fast-start)

Nel caso in cui si intenda configurare manualmente fare riferimento alla check list della pagina linkata
:::

La tabella, propedeutica all'utilizzo del modulo, prevede la codifica delle tipologie di flusso di cash flow che l'azienda intende abilitare per le simulazioni. 

Si consiglia di codificate comunque tutte le tipologie previste: la procedura di *generazione automatica cashflow* consente di definire, volta per volta, quali di queste considerare e quali no.

La codifica del tipo flusso è libera nel codice e descrizione, a piacere, e va poi ricondotta tramite i flag corrispondenti, ai dati che possono essere gestiti.



Sono previste le seguenti origini dati:

**Codice**: codice del tipi flusso;

**Descrizione**: descrizione del tipi flusso;

**Partite**: l'origine dati sono le partite aperte di contabilità generale;

**Saldo contabile**: da questo tipo flusso si ottengono le disponibilità finanziarie iniziali, rispetto ai *tipi conti finanziari* codificati;

**Ordini clienti/ordini fornitori**: ordini clienti, delle tipologie con flag *cash flow*, stampati e confermati, non evasi;

**Fatture di acquisto/vendita**: fatture stampate/controllate ma non ancora contabilizzate (non di tipo pro-forma);

**Extracontabile**: scadenze manuali extracontabili definite nel modulo cash flow stesso tramite la form *Scadenze extracontabili*;

**Percipienti**: compensi professionisti non ancora contabilizzati (se contabilizzati rientrano nelle partite aperte);

**DDT di acquisto/vendita**: DDT delle tipologie con flag *cash flow*, stampati e confermati, non valorizzate (se valorizzate rientrano nelle fatture);

**Ordini e rientri di conto lavoro**: ordini di conto lavoro da evadere e rientri di conto lavoro non ancora fatturati;

**RDA**: richieste di acquisto;

**Ordine pianificato**: ordini di produzione con fasi esterne pianificati o ordini di produzione che prevedono una richiesta d'acquisto.

**Portafoglio effetti**: Effetti emessi (e presentati, a seconda dell'impostazione del flag *Usa in scad. nel castelletto* presente nella maschera di *Generazione automatica cashflow*)

**Anticipi**: Distinte di anticipo fattura create. L'elaborazione del cash flow, se per questo tipo è impostato il flag 'Usa in scad. nel castelletto' (nella maschera *Generazione automatica Cashflow*) va a rilevare gli importi delle distinte contabilizzate per l'importo anticipato sul conto bancario, e nei flussi alle date scadenza. Quando el fatture vengono incassate (elaborando un nuovo cashflow) i flussi in scadenza vengono eliminati e l'importo del conto bancario viene aggiornato con la quota residua non già anticipata al netto di eventuali commissioni e interessi.