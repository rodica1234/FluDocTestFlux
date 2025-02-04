---
title: Associazione centri / commesse
sidebar_position: 1
---

:::note Percorso
**Tabelle > Controlling > Contabilità analitica > Associazione centri / commesse**

Nota:
Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).

:::

---

:::tip Nota
Questa tabella è ad uso esclusivo delle società che hanno impostato il *Controlling*
:::

Quando l'aziendale produce su progetto/commessa, l'interesse dell'analisi consuntiva potrebbe essere di due tipi:
- un interesse puntuale, sul singolo progetto/commessa, in particolar modo quando questi non hanno fra loro caratteristiche comuni;
- un interesse su un gruppo di progetti/commesse prodotti in un certo periodo di tempo, quando questi progetti/commesse hanno delle caratteristiche che consentono di generalizzarne la tipologia.

In questo secondo caso diventa essenziale questa tabella, che consente di collegare i centri aziendali della *dimensione* Progetti/Commesse ad una caratteristica di questi, al fine di poter valutare i dati totali secondo questi *centri progetto/commessa* senza entrare nel dettaglio di ogni singolo lavoro.

:::tip Nota
se l'azienda non è interessata ad una analisi di tipo macro, si può saltare la configurazione di questa tabella ed utilizzare un unico *centro progetto/commessa* identificandolo con il flag *Centro di default per i progetti*, dettagli in tabella [***CENTRO DI COSTO***/controlling-parametrization/controlling-specific-settings/cost-centers)
:::

I campi di configurazione disponibili sono i seguenti:
- il ***CODICE*** dell'associazione

:::tip Nota
***FluentisERP*** valuterà le associazioni in ordine di Codice: quando si selezionerà il progetto X, quindi, si valuterà se la prima associazione consente di determinare il centro da assegnare alla riga, se non viene individuato si andrà a verificare la seconda associazione e via di seguito, fino alla prima occorrenza valida
:::

- la ***DESCRIZIONE*** dell'associazione

- il ***TIPO*** di associazione, cioè l'oggetto all'interno del quale trovare l'elemento distintivo
- la ***PROPRIETA'*** da considerare, che dipende dalla selezione effettuata nel campo precedente. Le opzioni sono

Per questi ultimi due campi le opzioni sono:
    - *Progetto*
        - *Tipo progetto*
        - *Anno progetto*
        - *Zona progetto*
        - *Nazione progetto*
    - *Cliente*
        - *Tipo conto*
        - *Conto cliente*
        - *Zona cliente*
        - *Nazione cliente*
        - *Categoria amministrativa*
        - *Categoria commerciale*
        - *Voce spesa*
    - *Articolo*
        - *Classe*
        - *Categoria merceologica*
        - *Unità di Misura*
        - *Categoria fiscale*
        - *Caratteristica*
        - *Tipo Articolo*

A seconda dell'impostazione, quindi, nella griglia in basso si abiliterà l'associazione del Centro all'elemento corrispondente impostato.

:::danger ATTENZIONE
La definizione di una associazione legata agli *Articoli* richiederà chiaramente che
    - all'interno di ogni progetto ci sia almeno una riga articolo codificato
    - l'assegnazione di una riga d'acquisto o vendita, o in generale di una riga dell'analitica in contabilità, come costo/ricavo diretto di progetto/commessa, dovrà necessariamente essere assegnata ad una riga articolo codificato interna al progetto, altrimenti ***FluentisERP*** non avrà nessun modo di valorizzare questa associazione e cercherà una associazione successiva

Se ad esempio ogni progetto fosse caratterizzato da un prodotto finito di vendita di *classe* differente, probabilmente è più semplice gestire *Tipi progetto* differenti a seconda di ogni classe piuttosto che richiedere la valorizzazione di un articolo dentro il singolo progetto e selezionarlo in ogni documento a valle.
:::
