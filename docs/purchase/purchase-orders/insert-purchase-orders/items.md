---
title: Articoli
sidebar_position: 3
---

In questo tab vengono inseriti tutti gli articoli con i relativi dati.

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

## Griglia articoli

Per inserire un nuovo articolo nella griglia basterà posizionarsi sulla riga per compilare i vari dati oppure utilizzare il pulsante *Nuovo articolo* presente nella ribbon bar.

### Dati obbligatori

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Tipo riga** offre la possibilità di selezionare, dalla combo-box, articoli con caratteristiche diverse:
> - *Articolo codificato*: sono gli articoli codificati in anagrafica e possono essere contabilizzati in contabilità analitica e registrati in magazzino. <br />
> - *Articolo non-codificato*: sono articoli descrittivi che possono essere contabilizzati in contabilità analitica ma non possono essere movimentati a magazzino. <br />
> - *Articolo spese*: sono articoli codificati o non-codificati e vengono riassunti in modo distinto nei riepiloghi dei documenti, se l'articolo spesa è codificato e di interesse fiscale verrà movimentato in magazzino, se è non codificato oppure non di interesse fiscale non verranno movimentati a magazzino. <br />
> - *Articolo note*: sono note descrittive riportate nella stampa del documento; non incidono sulla contabilità e sul magazzino.

:::note Nota
Se si parte direttamente con l'inserimento dell'articolo, la sua classe, il codice e il tipo riga (*Articolo codificato*) vengono inseriti automaticamente.
:::

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import UM from './../../../import/fields/item-um.md'

<UM />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

import Price from './../../../import/fields/item-price.md'

<Price />

    In assenza del listino, il dato proposto può essere ripreso dal *costo ultimo* di anagrafica articolo, se nei [Parametri ordini fornitoriconfigurations/parameters/purchase/purchase-orders-parameters) il flag *Costo a zero in assenza di listini* non è attivo.

import Vat from './../../../import/fields/item-vat.md'

<Vat />

- **Importo**: viene calcolato in automatico al netto degli sconti.

- **Totale sconti**: indica l'importo totale degli sconti presenti nel tab *Sconti/Listini* per ogni riga articolo.    

### Dati non obbligatori

- **Codice/Descrizione articolo fornitore**: in questa sezione si potrà aggiungere il codice e la descrizione che il fornitore utilizza per identificare l'articolo; questo dato viene proposto in automatico se nell'anagrafica dell'articolo, tab [Fornitori preferenzialierp-home/registers/items/create-new-items/item-registry/preferential-vendors) è stato associato un articolo fornitore. 

- **Tipo fatturato acquisti**: viene proposto il dato inserito nel tab [Generalitàerp-home/registers/items/create-new-items/item-registry/generality) dell'anagrafica articoli. Se questo non è presente, non viene proposto nessun dato e al momento della contabilizzazione della fattura, sarà considerato il valore inserito nel campo *Costo/Ricavo di contropartita predefinito* dell'anagrafica contatto.

- **Data richiesta consegna** e **Data consegna**: indicano la data richiesta e prevista per la consegna. Possono essere proposte le date inserite nel tab testata oppure si possono modificare manualmente.

*Pulsanti specifici*

> **Suddividi la quantità in più date consegna**: utilizzato per suddividere la riga ordine in più righe a seconda della consegna richiesta. Questa procedura aprirà una nuova form in cui si dovrà inserire la nuova *data richiesta consegna* e le quantità previste per ciascuna data.   
> **Confezionamento**: si abilita dopo il salvataggio dell'ordine e permette di creare una UDC a partire dalla riga selezionata. La riga deve essere un articolo codificato e salvato nel documento. L'utente deve avere i diritti all'interno dei [Parametri di carico/scaricoconfigurations/parameters/logistics/load-unload-parameters/load-unload-parameters-intro/) per il caricamento del pallet. Inoltre l'articolo deve essere gestito a UDC ed in base alle impostazione del Tipo UDC inserite in anagrafica articolo, tab [Confezionamentoerp-home/registers/items/create-new-items/item-registry/packaging) verrà creato l'UDC rispettando i criteri.  
> **Aggiornamento listini**: il pulsante *Aggiorna listino corrente* permette di aggiornare i prezzi nel listino corrente per ciascuna riga articolo selezionata;    
il pulsante *Crea nuovo listino con nuova validità* invece, aprirà un pop-up in cui inserire le date di validità del nuovo listino, il quale conterrà solo le righe selezionate e sarà intestato al fornitore inserito nell'ordine.

:::note Ricorda   
Quando si crea/aggiorna un listino mediante questa procedura vengono riportati nel listino solo gli sconti che sono stati inseriti manualmente nell'ordine. 
:::


## Sconti/Listini 

- **Listino**: viene proposto il listino dal quale è stato ripreso il prezzo dell'articolo, con la data inizio/fine validità e con le condizioni particolari (ad es. **Tipo scaglione** di sconto) assegnate all'articolo nel listino.

- **Prezzo manuale**: si attiva automaticamente quando il prezzo dell'articolo è stato inserito o modificato manualmente.

- **Listini da aggiornare**: se tale flag è attivo, il prezzo dell'articolo si aggiorna automaticamente nel relativo listino di acquisto in fase di salvataggio. 

- **Sconti**: vengono proposti tutti gli sconti associati all'articolo, ognuno con la propria base di calcolo e di assegnazione.        

*Pulsante specifico*

> **Cancella sconti**: permette di cancellare lo sconto selezionato dalla griglia corrispondente. 

## Dati articolo 

All'interno di questo tab vengono riportate/inserite ulteriori informazioni relative all'articolo.

- **Variante**: in questo campo è possibile selezionare una variante dell'articolo tra quelle precedentemente codificate nel tab [Variantierp-home/registers/items/create-new-items/item-registry/variants) dell'anagrafica articolo. Se nel listino sono stati inseriti prezzi e/o sconti diversi per ciascuna variante essi saranno aggiornati quando si sleziona una variante diversa dell'articolo.   

- **Progetto**: rappresenta il progetto da associare al documento. Se nella testata del documento è stato inserito un progetto, esso sarà riportato su tutte le righe articolo; in alternativa può essere selezionato tramite l'apposito help progetti.

- **Note**: sono le note relative alla riga articolo, possono essere inserite anche tramite l'help note codificate. Saranno riportate in tutti i documenti generati da questo.

- **Marca**: rappresenta la marca dell'articolo, ripresa dalla sua anagrafica oppure dal listino dell'articolo.

- **Articoli commessa di produzione**: se l'ordine fornitore è collegato ad una commessa di produzione (mediante il rilascio di un ordine pianificato di acquisto e creazione di ordine fornitore da richiesta di acquisto) in questo campo viene riportato l'articolo padre contenuto nella commessa. 

- **Richiesta di offerta**: se l'ordine è stato creato da una richiesta di offerta mediante la procedura [Creazione Ordine fornitore da Offerta fornitore/procedures/order-creation) in questo campo viene riportata la richiesta di riferimento.

- **Magazzino e causale**: vengono proposti il magazzino e la causale di riferimento che compariranno in automatico al momento del carico degli articoli relativi in magazzino. I dati sono ripresi dai [Tipi ordineconfigurations/tables/purchase/purchase-orders-type) ma possono essere modificati manualmente per ciascuna riga articolo.

- **Commesse di produzione**: se l'ordine fornitore è stato creato dalla pianificazione di produzione viene riportata la commessa di produzione di riferimento (vedi *Creazione automatica ordini*).  

- **Prezzo unità di misura alternativa**: se attivo indica che il prezzo inserito sulla riga articolo è riferito all'unità di misura alternativa e non a quella principale. Questo flag assieme ai campi *Unità di misura alternativa* e *Quantità alternativa* sono visibili solo se nei [Parametri ordini fornitoriconfigurations/parameters/purchase/purchase-orders-parameters/) è stato attivato il flag *Gestione doppia unità di misura*.

- **Unità di misura/Quantità alternativa**: se nell'[anagrafica dell'articoloerp-home/registers/items/create-new-items/item-registry/alternative-um) è stata codificata un'unità di misura alternativa con il flag *Predefinito* e nei Parametri ordini fornitore è stato attivato il flag *Proposta automatica U.M. alternativa*, questi valori saranno proposti in automatico al momento dell'inserimento dell'articolo.

## Analitica

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

## Extra data

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

## Documenti allegati

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

## Sezione valori

import SalesValuesSection from './../../../import/sections/item-values-section.md'

<SalesValuesSection />