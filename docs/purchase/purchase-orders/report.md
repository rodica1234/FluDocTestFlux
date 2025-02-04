---
title: Stampe
sidebar_position: 5
---

Sono disponibili diverse **Stampe** standard. Per visualizzare un'anteprima di ciascuna stampa, serve impostare i filtri desiderati e premere il pulsante *Anteprima* sulla barra degli strumenti. Questa operazione mostrerà la stampa a video senza modificare lo stato del documento. Se necessario procedere con la stampa cartacea o salvarla su file, serve invece cliccare sul pulsante *Stampa*.


### Conferma Ordine di acquisto

Questa stampa permette di stampare gli Ordini come Conferme d'Ordine da inviare direttamente al fornitore.          
La prima scelta che viene richiesta è quella tra la stampa *temporanea* e quella *definitiva*: la differenza tra le due tipologie è che quella temporanea non ha alcun effetto sullo stato dell'ordine, mentre la stampa cartacea o digitale effettuata in definitiva porta il documento allo stato *Stampato*.     
I primi filtri che ci vengono mostrati sono quelli relativi alle informazioni di testata dei documenti, quali il *tipo ordine*, il *numero documento*, il *fornitore* e il *progetto*.   
Nella groupbox *Ricerca avanzata* si possono spuntare gli stati dell'ordine su cui effettuare il filtro; per esempio, si possono stampare gli ordini evasi/non evasi, stampati, annullati, ecc.   
Nella groupbox *Articolo* è invece possibile filtrare, oltre che sul codice dell’articolo, anche su altre informazioni relative alle righe del corpo del documento, quali il *barcode*, la *descrizione articolo*, il *fornitore preferenziale* o la *commessa di produzione*.    

Con questa stampa, ogni ordine viene impaginato separatamente, ciascuno con le seguenti sezioni:
- Intestazione con Logo e informazioni aziendali
- Informazioni sull'ordine (tipologia, numero, data, ecc.)
- Informazioni sul fornitore (partita iva, condizioni di pagamento, banca, ecc.)
- Dettagli dell'ordine (codice articolo, quantità, prezzo, ecc.)
- Riepilogo dell'ordine (totale merce, spese, totale imposta, ecc.)


### Etichette da ordini fornitore

La funzione di questa stampa è quella di generare etichette fisiche per l'identificazione e la gestione dei prodotti o degli articoli che fanno parte di un ordine.      
Con i filtri messi a disposizione, analoghi a quelli della stampa precedente, è possibile filtrare i documenti per effettuare una ricerca più mirata; per esempio, posso stampare gli ordini confermati solo da una certa data, quelli non consegnati, non evasi, ecc.       

La stampa crea delle etichette con le seguenti informazioni: 
- Intestazione con Logo e informazioni aziendali
- Etichetta dell'articolo con codice a barre, unità di misura, quantità e descrizione articolo
- Informazioni sul fornitore e sull'ordine contenente l'articolo


### Lista Ordini Fornitori

Con questo report è possibile stampare un riepilogo dettagliato degli ordini fornitore inseriti a sistema, sottoforma di lista.     
Con i filtri messi a disposizione (i medesimi della stampa precedente) è possibile filtrare i documenti per effettuare una ricerca più mirata; in questa stampa è inoltre possibile impostare un ordinamento per Fornitore (default), Numero o Tipologia ordine.       
Nella stampa, sotto lo stesso fornitore/numero/tipologia ordine (in base all'ordinamento scelto) vengono elencati gli ordini con i seguenti dati: divisa, importo, articolo, iva, ecc.         

Ogni riga dell'elenco viene occupata da un articolo dell'ordine.        


### Portafoglio Ordini a Quantità

Questa stampa serve a fornire una panoramica dettagliata e aggiornata degli ordini. Riporta una lista degli ordini fornitore evidenziandone le quantità già consegnate e quelle residue, ovvero ordinate ma non ancora consegnate; è particolarmente utile per il coordinamento logistico, poiché permette di vedere in modo chiaro quali e quante unità di prodotti devono essere ancora consegnate.       
Nella form iniziale vengono mostrati alcuni filtri relativi alla testata dei documenti da estrarre, analoghi a quelli dei report già analizzati. A questi si aggiuge la possibilità di effettuare un *ordinamento* per *Numero*, *Articolo*, *Data*, *Fornitore* o *Data merce pronta*.   

Il risultato è un elenco degli ordini, con indicati eventuali documenti di evasione, se esistenti, e per ogni articolo indicate le quantità ordinate, consegnate e residue.      


### Portafoglio Ordini a Valore

Questa stampa fornisce un riepilogo degli ordini ricevuti ma non ancora totalmente evasi, in base al valore monetario di ciascun ordine. Questo documento è particolarmente utile per i reparti di vendite, finanza e gestione strategica, poiché offre una visione chiara del fatturato potenziale legato agli ordini in corso.      
Nella form iniziale vengono mostrati alcuni filtri relativi alla testata dei documenti da estrarre, analoghi a quelli dei report già analizzati. A questi si aggiuge la possibilità di effettuare un *ordinamento* per *Numero*, *Articolo*, *Data*, *Fornitore* o *Data merce pronta*.   

Il risultato è un elenco degli ordini in cui, per ogni articolo vengono indicati i valori ordinati, consegnati e residui.       


### Scadenziario ordini

Questa stampa fornisce una panoramica dettagliata delle date di scadenza e dei termini di consegna relativi agli ordini non totalmente evasi.      
Con i filtri messi a disposizione è possibile filtrare i documenti per effettuare una ricerca più mirata; è inoltre possibile impostare un ordinamento per *Data consegna* o *Fornitore*.       

Nella stampa, sotto lo stesso fornitore/data consegna (in base all'ordinamento scelto) vengono elencati per ogni articolo gli ordini con i seguenti dati: numero, data inserimento, stato evasione, quantità residua, ecc.      


Più dettagli su questo argomento negli articoli: [Anteprima e stampaguide/common/operations-with-data/reports) 