---
title: Distribuzione periodi
sidebar_position: 1
---

:::note Percorso
**Tabelle > Controlling > Contabilità gestionale > Distribuzione periodi**

Nota:
Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).

:::

---

:::tip Nota
Questa tabella è ad uso esclusivo delle società che hanno impostato il *Controlling*
:::

Nella distribuzione periodi possiamo indicare, area per area e di anno in anno, come suddividere i nostri mesi. I campi disponibili sono i seguenti:

- il ***CODICE***
- la ***DESCRIZIONE***
- il flag ***PREDEFINITO***

:::danger ATTENZIONE
è obbligatorio aver inserito in questa tabella un record con questo flag, altrimenti l'elaborazione periodi del controlling lo richiederà
:::

Al di sotto avremo la lista dei record di ogni codice inserito, dove avremo
- l'[***AREA***/controlling-parametrization/controlling-specific-settings/area-types-areas) di riferimento
- l'***ANNO*** 
- il ***PERIODO***
- Il ***VALORE***, cioè il peso del singolo periodo all'interno dell'anno

:::tip Esempi
Potremmo dividere l’anno in dodicesimi, oppure in undicesimi pesando opportunamente agosto/dicembre e gennaio, piuttosto che assegnare di anno in anno i giorni effettivi di produzione previsti nel singolo nel mese
:::

La *Distribuzione periodi* viene associata in due punti:
- Nel [*Piano dei conti*erp-home/registers/accounting/analytic-chart-of-accounts): posso dire che il sottoconto X, per il quale si valorizza un range di date competenza, venga ripartito tramite una determinata distribuzione periodi invece che sui giorni esatti del range di date impostato, che è la logica di default quando la distribuzione periodi non è impostata.
- Nella *Prima nota movimenti fisici*, obbligatoriamente per le *Unità di misura* che sono definite di *Flusso* e non di *Stato*


:::tip Nota
Nella maschera è presente un pulsante di duplicazione della distribuzione selezionata, opzione comoda ad inizio anno per preparare la nuova lista valida per ogni nuovo esercizio
:::