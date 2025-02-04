---
title: Stampe
sidebar_position: 6
---

Sono disponibili diverse **Stampe** standard. Per visualizzare un'anteprima di ciascuna stampa, serve impostare i filtri desiderati e premere il pulsante *Anteprima* sulla barra degli strumenti. Questa operazione mostrerà la stampa a video senza modificare lo stato del documento. Se necessario procedere con la stampa cartacea o salvarla su file, serve invece cliccare sul pulsante *Stampa*.

### Stampa Fatture di Acquisto

Questo report serve per stampare massivamente le fatture di acquisto già inserite a sistema, secondo i filtri specificati nella form iniziale. La prima scelta che viene richiesta è quella tra la stampa *Temporanea* e quella *Definitiva*: la differenza tra le due tipologie è che quella temporanea non ha alcun effetto sullo stato della fattura, mentre la stampa cartacea o digitale effettuata in definitiva porta il documento allo stato *Controllato*.   
I primi filtri che ci vengono mostrati sono quelli relativi alle informazioni di testata dei documenti, quali il *tipo fattura*, il *numero documento*, il *fornitore* e il *progetto*.   
Nella groupbox *Ricerca avanzata* si possono spuntare gli stati della fattura su cui effettuare il filtro.   
Nella groupbox *Articolo* è invece possibile filtrare, oltre che sul codice dell’articolo, anche su altre informazioni relative alle righe del corpo del documento, quali il *Bar Code*, la *descrizione articolo* o se sia presente un progetto collegato alla riga articolo.   

Con questa stampa, ogni fattura viene impaginata separatamente, ognuna con le seguenti sezioni:
- Intestazione con Logo e informazioni aziendali
- Informazioni sulla fattura (tipologia, numero, data, ecc.)
- Informazioni sul fornitore (partita iva, condizioni di pagamento, ecc.)
- Dettagli della fattura (codice articolo, quantità, prezzo, ecc.)
- Riepilogo della fattura (totale merce, spese, totale imposta, ecc.)        


### Lista Fatture di Acquisto

Con questa stampa è possibile stampare un elenco delle fatture inserite a sistema.    
I filtri presentati sono i medesimi della stampa precedente, ai quali si aggiunge la possibilità di selezionare un *Ordinamento* delle fatture mostrate, a scelta tra *fornitore*, *numero fattura* e *tipo fattura*.    

La stampa mostra il dettaglio delle singole righe delle fatture, con indicazioni relative anche alle quantità ed al valore dei vari articoli contenuti nella fattura.


### Fatturato acquisti

Il report analizza il fatturato acquisti prodotto da tutti i [Tipi fatturaconfigurations/tables/purchase/purchase-invoices-type/) con il flag *In statistica* attivo, mostrando il valore del fatturato e la percentuale di incidenza sul totale di ogni singola riga articolo stampata.        
Nella form iniziale vengono mostrati alcuni filtri relativi alla testata dei documenti da estrarre, analoghi a quelli dei report già analizzati, ma ci sono alcune possibilità proprie di questo report.   
Nella groupbox *Opzioni* sono presenti alcuni flag con i quali è possibile mostrare alcuni dati e includere o escludere alcune tipologie di righe articolo nel calcolo: spuntando la voce *Quantità* verranno mostrate nella stampa, oltre al valore, anche le quantità delle singole righe; *Solo articoli codificati* farà in modo che la stampa prenda in considerazione solo le righe di tipo Articolo codificato, mentre *Anche articoli spese* fa rientrare nei conteggi anche le righe di tipo spesa.   
La combo box *Modalità ordinamento* dà la possibilità di scegliere l’ordinamento con cui verranno mostrati i dati tra: la *descrizione* del fornitore, il *codice* fornitore o l’importo del *fatturato*.   
Infine nella griglia *Raggruppa* è possibile impostare i raggruppamenti, a scalare, con cui dovrà essere mostrata la stampa. Per popolare la tabella è sufficiente selezionare il raggruppamento desiderato nella tabella *Proprietà* e trascinarlo nella tabella dei raggruppamenti. Nel caso in cui si voglia svuotare la tabella dei raggruppamenti è sufficiente premere sul pulsante della barra degli strumenti *Rimuovi raggruppamenti*.  


### Stampe Conai

Il documento di dichiarazione CONAI (Consorzio Nazionale Imballaggi) è un modulo che le aziende italiane devono compilare per dichiarare i dati relativi agli imballaggi che immettono sul mercato. Questo documento è fondamentale per calcolare il contributo ambientale CONAI, che è un costo che le imprese devono pagare per sostenere la raccolta differenziata e il riciclo degli imballaggi.     

Questa stampa presenta a sua volta i filtri già presentati con le altre stampe, più altri di nuovi: in aggiunta è possibile filtrare per *Tipo materiale*, *Tipo partner Conai*, *Stato della fattura elettronica*; è inoltre possibile raggruppare i risultati per *Materiale*, *Fornitore* o *Articolo*.    

Il documento comprende diverse sezioni:
- Periodo di riferimento
- Dati anagrafici
- Peso degli imballaggi
- Contributo ambientale
- Esenzione


Più dettagli su questo argomento negli articoli: [Anteprima e stampaguide/common/operations-with-data/reports) 