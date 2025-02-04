---
title: Ricerca dati
sidebar_position: 2
---

Le form permettono di trovare i record inseriti precedentemente per *visualizzarli*, *modificarli* , *cancellarli*, ecc. se l'utente ha i **diritti necessari** per queste operazioni.

Certe form di questo tipo contengono il pulsante di inserimento ![](/img/neutral/common/new.png) che, una volta premuto, apre la form di inserimento per i nuovi record.

Nelle form di ricerca è possibile visualizzare: un solo record (filtro per numero documento), più record (filtro per data), i record inseriti in un anno (filtro per anno), i record inseriti per una certa anagrafica (filtro per conto/sottoconto), ecc.


Una form si suddivide in tre sezioni:

### 1. Barra di ricerca avanzata

Questa barra multifunzione permette di ricercare per parola chiave all'interno di vari campi presenti nei documento oggetto della form.

Il criterio di ricerca, nel caso si inserisca più di una parola chiave, può essere:

- OR se le parole sono separate da DUE spazi (quindi cercherà nei campi interessati una qualsiasi delle due o più parole inserite)
- AND se le parole sono separate da UNO spazio (quindi cercherà entrambe le parole assieme come chiave di ricerca nei campi interessati)
 

:::note Nota

Per conoscere su quali campi del documento viene eseguita la ricerca è possibile accedere al *Object navigator* (sulla destra) e facendo click con il tasto destro premere *Dettagli*. 

Nella maschera che si apre selezionare Nuovamente l'oggetto e facendo click con il tasto destro selezionare *Modifica oggetto standard*. Selezionare quindi il tab *Modelli di ricerca* nella griglia in basso a sinistra.

:::



### 2. Area di filtro

I filtri sono tipicamente in condizione 'AND', cioè è possibile inserire più filtri contemporaneamente.

Clic sulle freccette ![](/img/neutral/common/arrow.png) per aprire gli [expander-intro#expander) e per filtrare anche in base ai dati contenuti in essi.

Dopo l'inserimento dei filtri desiderati premere il pulsante **Ricerca** per ottenere l'elenco dei dati.


:::note Nota
L'area di filtro può essere visualizzata come già espansa all'apertura della maschera se viene tenuta "bloccata" premendo il tasto con l'icona della puntina (*Pin*)
:::

![](/img/neutral/common/pin.png)

### 3. Griglia di risultato

Rappresenta l'elenco dei dati che corrispondono ai filtri inseriti nell'area di filtro.

Nella griglia di risultato si possono selezionare una o più righe.

*Particolarità della griglia* 

La prima riga della griglia è di filtro (l'icona sul campo di intestazione di riga ha come immagine un imbuto ![](/img/neutral/common/filter.png)): una volta aperta la maschera è sufficiente eseguire una ricerca per visualizzare i record presenti nella stessa e attivare l'inserimento (se previsto) o la gestione della griglia stessa.

Il filtro nei campi testo non distingue maiuscole/minuscole. Una volta che si inizia a filtrare i record attraverso le intestazioni di colonna, apparirà alla base della maschera un pannello che mostra come sarà applicato il filtro stesso: all'estrema destra di questa sezione apparirà sia un pulsante di chiusura/annullamento del filtro stesso, che un utile pulsante ![](/img/neutral/common/pencil.png) di editing del filtro stesso, dove poter aggiungere in modo guidato filtri più complessi.

*Approfondimenti*: [Filtrare e ordinare i record nelle griglieguide/common/operations-with-data/filter-sort-and-other-operations-with-records-in-grids).