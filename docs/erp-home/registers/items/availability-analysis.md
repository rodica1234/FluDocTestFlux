---
title: Analisi disponibilità
sidebar_position: 6
---

:::important A cosa serve
L'analisi disponibilità di Fluentis è uno strumento potente e versatile che consente agli utenti di monitorare e gestire in tempo reale le disponibilità degli articoli all'interno del magazzino. Attraverso un’interfaccia intuitiva, l'analisi è in grado di elaborare rapidamente i dati relativi a un articolo specifico, richiedendo semplicemente l'inserimento del codice articolo. Inoltre, l'analisi si estende anche ai componenti della distinta base, offrendo una visione completa delle disponibilità.

Nel pannello principale dell'analisi, vengono presentate informazioni dettagliate sulla disponibilità dell'articolo padre e dei suoi componenti, inclusi i dati sulle giacenze, eventuali giacenze non disponibili, e le quantità in ritardo. È possibile visualizzare anche i dettagli dei documenti che impegnano o rendono disponibili quantità all'interno del sistema, permettendo un'analisi approfondita delle operazioni in corso.

Grazie a questa funzionalità, gli utenti possono prendere decisioni informate riguardo agli approvvigionamenti e alla gestione delle scorte, riducendo il rischio di mancanze e ottimizzando l'efficienza operativa. L'analisi disponibilità riveste un ruolo cruciale nel garantire che le aziende possano rispondere efficacemente alle richieste del mercato e mantenere livelli ottimali di servizio.
:::

La finestra per la stampa dell'analisi disponibilità si apre tramite il percorso **Home > Articoli > Analisi disponibilità**, ed è composta da tre sezioni: l'area di filtro, la griglia di risultato per magazzino, la griglia di dettaglio.

### Area di filtro

Attraverso i filtri per **Articolo**, si può andare a definire per quale articolo o per quale serie di articoli si ha necessità di verificare la disponibilità prodotto a magazzino.

**Quantità cumulativa**

Questo flag serve per decidere se si vuole vedere la quantità disponibile per quell'articolo cumulativa, oppure se si vuole vedere la disponibilità per ogni singolo documento; sempre in questa sezione si può decidere se si vuole che venga presa in considerazione anche la giacenza che non è ancora disponibile nel periodo che si sta prendendo in esame oppure se visualizzare anche la giacenza che sarà disponibile a partire dalla data in cui si sta effettuando la ricerca se questa non è in ritardo.

**Considera le disponibilità provenienti da**

In questa sezione si può decidere di considerare le disponibilità provenienti da tutte o alcune delle categorie proposte quali: conto lavoro, produzione pianificata, acquisti, produzione rilasciata, vendite e magazzino.

**Periodo di verifica**

In questa sezione si può indicare il periodo per il quale si vuole verificare la disponibilità, che può essere: **Mensile** (in questo caso si indica il numero dei mesi che si vuole prendere in esame), **Settimanale**, **Giornaliero** oppure si può indicare una data precisa in cui effettuare la verifica.

**Visualizza righe senza disponibilità**

- *Visualizza righe senza disponibilità*: se attivo, questo flag indica che si vogliono visualizzare anche le righe senza nessun valore in ognuno dei campi della disponibilità in quel momento; se invece l'articolo ha carichi e scarichi con  somma pari a zero, questo viene visualizzato anche senza flag; 

- *Solo in ritardo*: quindi le righe la cui quantità alla data presa in esame dovrebbe essere già prodotta, ma a causa di ritardi produttivi ancora non lo è;

- *Solo con giacenza negativa*: quindi quantità che devono essere prodotte, che sono già pianificate ma per le quali la giacenza non basta a coprirne la produzione (probabilmente a sistema si troverà inserito un ordine fornitore a copertura della quantità mancante);

- *Riepilogativa*: la riepilogativa di queste due opzioni sopra citate;

- *Dettaglio distinta base*: decidendo di considerare il dettaglio distinta, si decide di vedere la disponibilità di tutti i singoli componenti della distinta base dell'articolo oggetto della ricerca (vengono visualizzati anche i componenti con disponibilità uguale a zero); in questo caso, nella visualizzazione dell'analisi disponibilità, vengono aggiunte le colonne *livello*, *priorità* (si riferisce alla priorità indicata in distinta base per quel componente), *codice e variante articolo padre* relative appunto all'articolo padre. Inoltre, la lista degli articoli sarà ordinata per *livello + codice padre + variante padre + Priorità + codice articolo + variante articolo*. 

**Punti vendita**

Nel caso del retail si può decidere di visualizzare la disponibilità filtrando per punto vendita.

**Per i documenti privi di date necessarie**

In questo caso si può scegliere se non considerare gli articoli privi di una data di ricevimento merce o privi di una data merce pronta, oppure se considerali lo stesso attribuendogli una data che viene stabilita al momento della ricerca e che si va ad indicare nel campo apposito;


**Disponibilità magazzini**

In questa sezione si possono scegliere quali magazzini considerare per verificare la giacenza.

Dopo aver impostato i vari filtri e flag, si andrà a cliccare sul pulsante **Ricerca** collocato nella ribbon Bar.

### Disponibilità prodotto

Nelle griglie di risultato per magazzino si vedranno le varie righe di disponibilità in base ai documenti oppure la riga cumulativa in base ai magazzini. Quindi si potranno vedere le disponibilità generali in base agli impegni di tutti i magazzini (Totale) oppure le disponibilità per singolo magazzino (tutti i vari tab con i nomi dei magazzini codificati nel database).

### Dettagli

Nella griglia di dettaglio si vedranno invece, cliccando sulla riga d'interesse nella griglia di magazzino, tutti i documenti collegati a quella singola riga. Quindi l'ordine cliente a cui fa riferimento, l'ordine di produzione e la commessa di riferimento ed eventuali documenti di vendita se presenti (come DDT, fatture).

*In ritardo*: rappresenta la somma algebrica di tutti i documenti in ritardo (con data consegna antecedente ad oggi) presenti nella disponibilità, quindi è dato dalla somma dei valori nella colonna domanda meno la somma dei valori della colonna offerta ma solo per i documenti in ritardo.

Tramite un doppio click del tasto sx del mouse sulla riga seleziona è possibile aprire il relativo documento.     

:::note Nota
La disponibilità dell'articolo da produrre è data solamente dall'ultima fase con i flag **produttiva** e **movimentabile** attivi presente nel [Ciclo di lavoroerp-home/registers/production/routes/new-route).
:::

Per quanto riguarda la descrizione delle funzionalità comuni a tutti le form, presenti nella ribbon bar, si rimanda all'articolo relativo ai [Pulsanti Comuniguide/common/common-buttons), in particolare per le funzionalità delle stampe si rimanda anche all'articolo [Anteprima e Stampaguide/common/operations-with-data/reports).

*Pulsante specifico*:
> **Espandi/riduci griglia articoli**: pulsante che permette di espandere o ridurre le griglie di risultato. 

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).
