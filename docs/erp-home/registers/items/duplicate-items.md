---
title: Duplica articoli
sidebar_position: 4
---

Alla procedura per la duplica articolo, si accede attraverso il percorso **Home > Articoli > Duplica articoli**.

In questa finestra si possono creare nuovi articoli, tramite la duplica partendo da articoli già esistenti. In questo modo si potranno duplicare le informazioni comuni ai due articoli.

### Area di filtro

Nell'area di  filtro, è possibile impostare una serie di filtri che permettono di ricercare all'interno del database, l'articolo o gli articoli che posseggono determinate caratteristiche in modo da poter individuare più facilmente un articolo che più si avvicina all'articolo o agli articoli che si vogliono creare e che sarà la base di partenza per la procedura di duplica.

Con l'aiuto di questi filtri si può visualizzare: un solo articolo (per es. ricercando con il codice articolo) o più articoli appartenenti alla stessa classe inserendo la classe articolo; articoli con le stesse caratteristiche, o la stessa categoria merceologica (per es. ricercando con caratteristica e categoria merceologica); articoli con lo stesso tipo articolo, o la stessa nomenclatura; tutti gli articoli aventi uno stesso fornitore preferenziale, uno stesso stato o versione; nel caso dei materiali acquistati è possibile ricercare l'articolo tramite il codice articolo del fornitore; infine è possibile ricercare gli articoli tramite il loro barcode.

Aprendo gli expander **Ricerca avanzata** e **Lotti e serial number**, si può decidere di filtrare anche in base allo stato dell'articolo (fittizio, archiviato/non archiviato, in esaurimento/non in esaurimento) oppure in base alla gestione dell'articolo (se gestito a lotti, a serial number, gestito Rfid o Rfid unico).

Una volta impostati i parametri di filtro desiderati, cliccando sul pulsante di **Ricerca** presente nella ribbon bar, il sistema andrà ad individuare l'articolo o la serie di articoli che corrispondono ai parametri selezionati e li riporterà nella griglia di risultato.

*Pulsanti specifici*:

> **Genera prototipi articolo**: pulsante che si attiverà nel momento in cui verrà selezionato l'articolo padre e verrà codificato l'articolo figlio nel primo tab della finestra detto *Articolo da duplicare*; in questo modo verrà generato il prototipo di articolo figlio che si andrà successivamente a definire e confermare;  
> **Seleziona/Deseleziona tutti**: pulsanti che permettono di selezionare o deselezionare tutti gli articoli risultanti dai filtri di ricerca impostati;  
> **Cancella prototipo articolo**: pulsante che permette di cancellare, una volta selezionato, il prototipo articolo che è stato generato prima che questo venga creato ufficialmente tramite la procedura di *Conferma generazione prototipo';  
> **Conferma generazione prototipo**: pulsante che permette di confermare il prototipo precedente creato, generando in modo ufficiale l'articolo figlio all'interno del database.  

Di seguito, verranno dettagliati i passaggi che consentono la duplica articolo.


### Articolo da duplicare

Questo tab, comprende la griglia di risultato in cui verranno visualizzati l'articolo e/o la lista di articoli corrispondenti ai criteri di filtro precedentemente impostati per l'individuazione dell'articolo di partenza.

Una volta individuato l'articolo padre da cui partire per la duplica, nella sezione sottostante verranno automaticamente compilati alcuni dati: **Società**, **Divisione**, **Classe articolo** e **Numero prototipi**.

Tutti questi dati, sono comunque modificabili poi manualmente tramite le combo oppure inserendo un diverso numero di prototipi all'interno del campo **Numero prototipi**.

Il **Codice articolo** invece, verrà creato in base alla composizione del codice articolo che si è scelto di impostare in base alla classe articolo nella tabella **Classi articolo**.

Come si può notare, selezionando la classe articolo, nella griglia sulla destra vi sono le informazioni che indicano come è stato stabilito debbano essere creati i codici degli articoli appartenenti a quella classe articolo; nel esempio riportato sopra il codice è composto in ordine da un extra data ovvero il Paese (la sigla) che comporrà sia il codice sia la descrizione; da un secondo extra data che sarà il colore e anche questo comporrà sia il codice sia la descrizione; un ulteriore extra data che in questo caso è nuovamente il paese e poi da un codice progressivo della lunghezza di 3 cifre e che verrà calcolato partendo dal valore 1, e infine da un valore fisso che in questo caso è stato stabilito essere la lettera F.

Questa tabella viene riassunta anche nel tab stesso, **Articoli da duplicare**, dove si andranno a compilare le informazioni relative ai valori riportati sopra (quindi si andrà ad indicare il paese, il colore etc in base a che tipo di extra data si sono scelti).

Una volta impostati i dati, nei campi **Codice** e **Descrizione** comparirà in automatico il codice e la descrizione del nuovo articolo.

In seguito, si possono impostare i parametri per procedere con la creazione del **Prototipo articolo**, cliccando sull'omonimo pulsante presente nella ribbon bar della form.

Il prototipo generato verrà visualizzato nel tab successivo, Prototipi articolo.

### Parametri

In questo tab, si possono selezionare i parametri che devono regolare la duplica dell'articolo in oggetto.

La schermata contiene una serie di flag, che andranno ad indicare le caratteristiche dell'articolo si vuole vengano duplicate esattamente uguali a quelle dell'articolo padre e che potranno comunque essere poi aggiornate e/o modificate nell'articolo figlio.

Le informazioni che si possono duplicare sono: costi, pesi e dimensioni, lotti e S/N, approvvigionamento, varianti, fornitori preferenziali (nel caso di articoli di acquisto), clienti (nel caso di articoli di vendita), U.M alternative, immagini, note, codici barcode, le informazioni contenute nel tab Amministrazione, extra data, confezionamento, ecc. Queste sono tutte informazioni contenute all'interno dei tab che formano l'articolo e che sono state dettagliate nei relativi articoli (vedi [Creazione articoloerp-home/registers/items/create-new-items/create-new-item) con i relativi documenti collegati).

Si può inoltre decidere di duplicare anche la [Distinta baseerp-home/registers/production/bill-of-materials/search-and-insert-assemblies) di produzione dell'articolo, il suo  [Ciclo di lavoroerp-home/registers/production/routes/new-route) e i [Parametri MRPconfigurations/parameters/production/mrp-parameters/search-mrp-parameters) dell'articolo.

Sempre all'interno di questo tab, è presente un'ulteriore sezione in cui si può andare a definire un colore di riempimento cella e colore testo per poter individuare nel momento della generazione dei prototipi: le righe contenenti un dato mancante (per es. se una delle informazioni che si desidera duplicare risulta vuota nell'articolo padre, nell'articolo figlio verrà visualizzata la riga corrispondente a quella voce evidenziata nel colore prescelto) e gli articoli che risultano essere già stati codificati in precedenza (nel caso in cui si stia procedendo con la creazione di un articolo perfettamente identico ad un articolo già esistente all'interno del database).

Una volta impostati i parametri si può procedere con la duplica dell'articolo.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).