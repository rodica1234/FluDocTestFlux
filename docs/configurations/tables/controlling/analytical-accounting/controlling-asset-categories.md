---
title: Categorie cespiti per il controllo
sidebar_position: 2
---

:::note Percorso
**Tabelle > Controlling > Contabilità analitica > Categorie cespiti per il controllo**

Nota:
Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).

:::

---

:::tip Nota
Questa tabella è dedicata alle società che hanno attivato la gestione del *Controlling*, ma non è obbligatoria nel caso in cui si vogliano applicare logiche contabili di valorizzazione degli ammortamenti nel controllo di gestione
:::

In questa tabella andiamo ad identificare le varie tipoligie di calcolo che vogliamo utilizzare nelle elaborazioni degli ammortamenti tecnici per il controlling: le logiche del controllo di gestione, relativamente ai cespiti, si discostano da quelle contabili al fine di utilizzare delle logiche legate, ad esempio, alle quantità prodotte da un determinato macchinario, piuttosto che ad un valore di riacquisto. Facendo questo si evitano le distorsioni legate, ad esempio, ai criteri di ammortamento contabili che sono fortemente influenzati dalle logiche fiscali. 

Campi tabella

- ***CODICE*** della categoria

- ***DESCRIZIONE*** della categoria

- ***SOTTOCONTO DI COSTO*** e ***SOTTOCONTO DEL FONDO*** da utilizzare: potrebbero essere gli stessi sottoconti associati alle categorie cespiti contabili, al fine di operare a fine anno i conguagli tra le due logiche di calcolo, piuttosto che sottoconti specifici del controlling che non sono utilizzati in contabilità.

:::tip nota
Nel caso in cui si vogliano utilizzare nel controlling, in determinati casi, degli specifici sottoconti separati da quelli di contabilità generale, si consiglia di definire un *Tipo conto* specifico con il flag *Controlling* impostato, in quanto questi sottoconti non potranno essere utilizzati neanche erroneamente nelle registrazioni di contabilità generale
:::


- ***BASE DI CALCOLO*** possiamo scegliere tra
    - *Valore patrimoniale*, cioè lo stesso di contabilità
    - *Valore oggettivo*, dato extracontabile
    - *Valore di riacquisto*, campo specifico per il controlling

- ***TIPO DI CALCOLO*** può essere di 5 tipologie differenti: 
    - *Percentuale*: secondo la percentuale per il controlling impostata nel singolo cespite
    - *Percentuale perpetua*: come la precedente ma senza verifiche sul residuo da ammortizzare
    - *Quantità*: per i cespiti che hanno una vita utile legata ad una quantità teorica prodotta (es. uno stampo che può fare tot battute)
    - *Quantità perpetua*: come la precedente, ma senza verificare se la quantità totale teorica è stata raggiunta
    - *Totale nell’anno*: per ammortizzare il cespite totalmente nell’anno di acquisto.

- ***PERCENTUALE*** possiamo impostare la percentuale di questa categoria, che sarà riportato sul singolo cespite, oppure lasciare in bianco il campo per inserirla di volta in volta all’interno del cespite

- ***USA ATTUALIZZAZIONE PERCENTUALE*** Il flag, riportato anche nella corrispondente tab *Ammortamento per controlling* presente nella scheda cespite, se attivato, fa si che il valore del cespite venga incrementato di anno in anno in base al valore impostato nel campo *Fattore di attualizzazione* nei ** [*Parametri di contabilità* configurations/parameters/finance/accounting-parameters) **.

- ***RICREARE I VALORI DI CONTROLLO*** serve tipicamente nel caso in cui non si sia certi dei criteri extracontabili da applicare al calcolo degli ammmortamenti tecnici. Dato che l'elaborazione degli ammortamenti partirà da un anno YYYY, ***FluentisERP*** dovrà calcolare innanzi tutto i residui a fine anno YYYY-1. Nel caso in cui si cambino percentuali o logiche, quindi, può essere necessario resettare questi dati di partenza per ripartire da capo nelle elaborazioni.

:::danger ATTENZIONE
Attenzione alle modifiche apportate a queste categorie: se ad esempio impostiamo un flag e salviamo la riga per confermare, ***FluentisERP*** ci chiederà se vogliamo aggiornare i cespiti di questa categoria. Dobbiamo fare attenzione che se confermiamo l’operazione e siamo in una categoria con calcolo percentuale ma *senza la percentuale impostata*, il sistema andrà a resettare anche le percentuali nei cespiti
:::

---

:::tip Nota

Le categorie inserite in questa tabella, con i relativi settaggi, saranno poi richiamate all'interno delle [**schede cespite**/fixed-assets/fixed-assets-management) nella tab *Ammortamento per controlling*, per associare il singolo cespite alla categoria.

:::