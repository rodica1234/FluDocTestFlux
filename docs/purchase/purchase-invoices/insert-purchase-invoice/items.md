---
title: Articoli
sidebar_position: 4
---

In questo tab vengono inseriti tutti gli articoli con i relativi dati.

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

## Griglia articoli

Per inserire un nuovo articolo nella griglia basterà posizionarsi sulla riga per compilare i vari dati oppure utilizzare il pulsante *Nuovo articolo* presente nella ribbon bar.

:::note Nota
Se la fattura è stata creata mediante evasione di un ordine fornitoreo di un DDT di acquisto i seguenti dati saranno ripresi dal documento di partenza
:::

### Dati obbligatori

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Tipo riga** offre la possibilità di selezionare, dalla combo-box, articoli con caratteristiche diverse:
> - *Articolo codificato*: sono gli articoli codificati in anagrafica e possono essere contabilizzati in contabilità analitica e registrati in magazzino. <br />
> - *Articolo non-codificato*: sono articoli descrittivi che possono essere contabilizzati in contabilità analitica ma non possono essere movimentati a magazzino. <br />
> - *Articolo spese*: sono articoli codificati o non-codificati e vengono riassunti in modo distinto nei riepiloghi dei documenti, se l'articolo spesa è codificato e di interesse fiscale verrà movimentato in magazzino, se è non codificato oppure non di interesse fiscale non verranno movimentati a magazzino. <br />
> - *Articolo note*: sono note descrittive riportate nella stampa del documento; non incidono sulla contabilità e sul magazzino.
> - *Articolo omaggio*: l'articolo omaggio viene gestito come un articolo codificato o non codificato ai fini fiscali e di magazzino, ma essendo un omaggio viene conteggiato separatamente nei riepiloghi del documento e in base al flag Rivalsa iva viene calcolato l'importo dell'iva dell'omaggio a carico del soggetto oppure no.

:::note Nota
Se si parte direttamente con l'inserimento dell'articolo, la sua classe, il codice e il tipo riga (*Articolo codificato*) vengono inseriti automaticamente.
:::

- **Classe/Codice/Descrizione articolo**: si possono inserire  [manualmenteguide/common/operations-with-data/manual-entry-or-help-and-data-selection) oppure con l'ausilio dell'[help di campoguide/common/operations-with-data/manual-entry-or-help-and-data-selection) il quale proporrà tutti i dati relativi inseriti nell'*Anagrafica articolo*. 
Dopo l'inserimento dell'articolo, la sua *Descrizione* sarà ripresa automaticamente dall'anagrafica. Se l'articolo ha *Varianti*, sarà possibile selezionare la variante desiderata dal tab *Dati*.

import UM from './../../../import/fields/item-um.md'

<UM />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

- **Prezzo**: il prezzo viene proposto dal listino inserito nell'anagrafica contatto; il listino di riferimento per l'articolo stesso è visualizzato nel tab *Sconti/Listini*. Lo stesso documento potrebbe contenere articoli con prezzi presi da listini diversi, se nell'anagrafica soggetto sono associati più listini in cascata (vedi [Anagrafica contattierp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list)). Attraverso il doppio click nel campo **Listini** (tab *Sconti/Listini*) l'utente ha la possibilità di selezionare un listino diverso da quello di default, dal quale sarà ripreso il prezzo dell'articolo inserito.    
In assenza del listino, il dato proposto può essere ripreso dal *costo ultimo* di anagrafica articolo, se nei [Parametri fatture di acquistoconfigurations/parameters/purchase/purchase-orders-parameters/) il flag *Costo a zero in assenza di listini* non è attivo.

- **Importo**: viene calcolato in automatico al netto degli sconti.

- **Totale sconti**: indica l'importo totale degli sconti presenti nel tab *Sconti/Listini* per ogni riga articolo.   

- **IVA**: è prioritario il dato inserito nel campo IVA dell'*Anagrafica contatto*. Se questo non è presente, viene proposto il valore presente nell'*Anagrafica articolo*, ma l'utente ha la possibilità di inserire un dato diverso.

### Dati non obbligatori

- **Codice/Descrizione articolo fornitore**: in questa sezione si potrà aggiungere il codice e la descrizione che il fornitore utilizza per identificare l'articolo; questo dato viene proposto in automatico se nell'anagrafica dell'articolo, tab [Fornitori preferenzialierp-home/registers/items/create-new-items/item-registry/preferential-vendors) è stato associato un articolo fornitore. 

- **Tipo fatturato acquisti**: viene proposto il dato inserito nel tab [Generalitàerp-home/registers/items/create-new-items/item-registry/generality) dell'anagrafica articoli. Se questo non è presente, non viene proposto nessun dato e al momento della contabilizzazione della fattura, sarà considerato il valore inserito nel campo *Costo/Ricavo di contropartita predefinito* dell'anagrafica contatto.

*Pulsanti specifici*

> **Ricalcolo Conai**: se la [Gestione Conaipurchase/purchase-flow/conai) è abilitata per il documento, è possibile ricalcolare i valori con questo bottone dopo eventuali modifiche.
>
> **Gestione imballi**: permette l'apertura della gestione degli imballi a rendere usati nel documento di acquisto.   
Il pulsante diventa attivo se il documento è salvato, ma non caricato. Con clic su questo pulsante si apre la form corrispondente dove inserire la quantità, selezionare la riga ed eseguire il trasferimento dell'imballo selezionato nelle righe articolo cliccando sul pulsante **Execute**. In questa form vengono riportati gli articoli che sono stati inseriti con natura Imballo e che sono presenti nella tabella degli [Imballi a rendereconfigurations/tables/logistics/package-to-be-returned).      
>
> **Storno ricevimenti**: il pulsante è attivo solo per i [Tipi fatture di acquistoconfigurations/tables/purchase/purchase-invoices-type) che hanno la *Natura* di tipo *Nota accredito*. Nella form vengono visualizzate tutte le fatture intestate a quel fornitore. Dopo aver selezionato le righe articolo e le relative quantità da stornare sarà sufficiente premere il pulsante *Storno ricevimenti* per inserirli nella fattura.    
>
> **Aggiornamento listini**: il pulsante **Aggiorna listino corrente** permette di aggiornare i prezzi nel listino corrente per ciascuna riga articolo selezionata.    
il pulsante **Crea nuovo listino con nuova validità** invece, aprirà un pop-up in cui inserire le date di validità del nuovo listino, il quale conterrà solo le righe selezionate e sarà intestato al fornitore inserito nella fattura.   


:::important Ricorda   
Quando si crea/aggiorna un listino mediante questa procedura vengono riportati nel listino solo gli sconti che sono stati inseriti manualmente nella fattura. 
:::

## Sconti/Listini

- **Listino**: viene proposto il listino dal quale è stato ripreso il prezzo dell'articolo, con la data inizio/fine validità e con le condizioni particolari (ad es. **Tipo scaglione** di sconto) assegnate all'articolo nel listino.

- **Prezzo manuale**: si attiva automaticamente quando il prezzo dell'articolo è stato inserito o modificato manualmente.

- **Sconti**: vengono proposti tutti gli sconti associati all'articolo, ognuno con la propria base di calcolo e di assegnazione.        

## Dati

All'interno di questo tab vengono riportate/inserite ulteriori informazioni relative all'articolo.

- **Articolo**: riporta classe, codice e descrizione dell'articolo selezionato nella griglia.   
- **Variante**: in questo campo è possibile selezionare una variante dell'articolo tra quelle precedentemente codificate nel tab [Variantierp-home/registers/items/create-new-items/item-registry/variants) dell'anagrafica articolo. Se nel listino sono stati inseriti prezzi e/o sconti diversi per ciascuna variante essi saranno aggiornati quando si sleziona una variante diversa dell'articolo.     
- **Note**: sono le note relative alla riga articolo, possono essere inserite anche tramite l'help note codificate. Saranno riportate in tutti i documenti generati da questo.   
- **Magazzino e causale**: vengono proposti il magazzino e la causale di riferimento che compariranno in automatico al momento del carico degli articoli relativi in magazzino. I dati sono ripresi dai [Tipi fatture di acquistoconfigurations/tables/purchase/purchase-invoices-type) oppure dall'ordine fornitore o dal DDT, se la fattura deriva da evasione di un ordine o da valorizzazione DDT. Possono essere modificati manualmente per ciascuna riga articolo.   
- **Ubicazione**: viene proposta in automatico se alla causale utilizzata è stata associata un'ubicazione nella tabella delle [Causali di magazzinoconfigurations/tables/logistics/warehouse-templates) oppure se l'articolo è stato inserito nella [Mappa ubicazioni per articolowarehouse/location/item-location-map/). Può essere inserita o modificata manualmente.  
- **Unità di misura/Quantità alternativa**: se nell'[anagrafica dell'articoloerp-home/registers/items/create-new-items/item-registry/alternative-um) è stata codificata un'unità di misura alternativa con il flag *Predefinito* e nei Parametri ordini fornitore è stato attivato il flag *Proposta automatica U.M. alternativa*, questi valori saranno proposti in automatico al momento dell'inserimento dell'articolo, altrimenti è possibile selezionare una tra le unità di misura alternative codificate per l'articolo.   
- **Prezzo unità di misura alternativa**: se attivo indica che il prezzo inserito sulla riga articolo è riferito all'unità di misura alternativa e non a quella principale.    
Questo flag assieme ai campi *Unità di misura alternativa* e *Quantità alternativa* sono visibili solo se nei [Parametri fatture di acquistoconfigurations/parameters/purchase/purchase-invoices-parameters) è stato attivato il flag *Gestione doppia unità di misura*.
- **Progetto**: rappresenta il progetto da associare al documento. Se nella testata del documento è stato inserito un progetto, esso sarà riportato su tutte le righe articolo; in alternativa può essere selezionato tramite l'apposito help progetti.   
- **Rivalsa IVA**: se settata, l'IVA dell'omaggio viene considerata per il totale fattura.
- **Marca**: rappresenta la marca dell'articolo, ripresa dalla sua anagrafica oppure dal listino dell'articolo.
- **Riferimento ordine**: nel caso in cui la fattura sia generata da un ordine, il riferimento all'ordine sarà riportato automaticamente in questo campo.
- **Dettaglio dichiarazioni**: viene riportata la [Dichiarazione d'intento/declarations/declarations/intent-declaration) usata per proporre l'iva dell'articolo; dalla combo box è possibile cambiare la dichiarazione d'intento di riferimento, se presenti più dichiarazioni valide.

## Lotti e Serial number

Nelle due griglie possono essere inseriti i lotti e numeri seriali che devono essere caricati nel magazzino.   
Se l'articolo non prevede la gestione dei [Lotti e Serial Numbererp-home/registers/items/create-new-items/item-registry/lots-and-serial-number), questo tab sarà disabilitato.

:::tip Ricorda
Se nei [Parametri fatture di acquistoconfigurations/parameters/purchase/purchase-invoices-parameters) il flag *Lotti e S.N. obbligatori* è disabilitato sarà possibile salvare il documento senza inserire i lotti/serial number. Inoltre, se la *Tipologia di prelievo* del lotto codificata nell'[anagrafica articoloerp-home/registers/items/create-new-items/item-registry/lots-and-serial-number) è *FIFO* o *Data scadenza* al momento del carico a magazzino della fattura i lotti saranno proposti in automatico, se non sono già stati inseriti in precedenza.
:::


## Analitica

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />


## Extra data

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

## Documenti allegati

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

## Materiale Conai per l'articolo

Questo tab è visibile se per la società attiva è stata attivata la gestione Conai.

Questa sezione riporterà i materiali d’imballaggio che compongono l’articolo, con la relativa unità di misura, peso unitario (abbattuto dell’eventuale percentuale d’esenzione dell’anagrafica cliente) e il totale del peso ottenuto dalla moltiplicazione tra numero di articoli venduti per il peso unitario.    
Al salvataggio del documento, o alla pressione del pulsante **Ricalcolo Conai**, Fluentis inserirà una o più righe spese recuperando l’articolo dei materiali, con quantità uguale alla somma delle quantità e prezzo uguale al costo conai per quel materiale.

Per maggiori informazioni sulla [Gestione Conaipurchase/purchase-flow/conai) in Fluentis vedere la pagina allegata.


## Costi da ricevere 

I tab **Costi da ricevere** e **Spese** non sono gestiti nella versione corrente di Fluentis.


## Sezione valori

La sezione in basso, a destra, presenta il riassunto dei costi che concorrono alla formazione del prezzo finale di ciascun articolo selezionato nella griglia degli articoli. I campi presenti sono: 

- **Prezzo unitario**: il valore del campo *Prezzo*; 
- **Quantità**: il valore del campo *Quantità* o *Quantità alternativa*, a seconda del flag *Prezzo unità di misura alternativa*;
- **Importo di riga**: Prezzo articolo * Quantità articolo; 
- **Totale sconti**: la somma degli sconti dell'articolo, inclusi anche gli sconti finali;
- **Importo**: Importo di riga - Totale sconti;
- **Imposta**: Importo * aliquota IVA dell'articolo; 
- **Totale**: Importo + Imposta.

