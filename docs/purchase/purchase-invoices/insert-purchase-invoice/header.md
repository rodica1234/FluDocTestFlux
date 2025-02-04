---
title: Testata
sidebar_position: 2
---

Dopo aver selezionato i dati obbligatori nella sezione superiore, l'utente può continuare l'inserimento dei seguenti dati manualmente oppure con il [help di campoguide/common/operations-with-data/manual-entry-or-help-and-data-selection) oppure, in base alle procedure che sceglie, l'applicazione compila i campi *automaticamente*.

:::note Ricorda
Se il documento viene *creato automaticamente*, ad esempio mediante **Evasione da ordine fornitore** o **Evasione da DDT** questi dati vengono ripresi dal *documento d'origine* da cui è stata generata la fattura.
:::

Inserendo il **Fornitore** vengono *proposti* in automatico tutti i dati specifici del tab **Testata**, secondo i dati impostati in precedenza nell'[anagrafica fornitoreerp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) nei campi corrispondenti al suo indirizzo e nelle *sezioni*:  

- **Divisa**: sezione contenente i dati [Divisaconfigurations/tables/general-settings/currencies), [Cambio-intro#currency-exchange), [Data valuta-intro#currency-date).   
- **Nazione**: sezione contenente i dati [*Nazione*-intro#country), [Lingua-intro#language), [Zona-intro#zone).   
- **Spedizione**: sezione contenente i dati [*Spedizioni*erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Porto-intro#carriage), [Imballo-intro#packing), [Listinoerp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list#listini) predefinito e il suo [intervallo di validità-intro#validity-date).

Tutti questi campi possono essere cancellati oppure modificati manualmente dall'utente.

*Campi facoltativi*:

- **Stato fatture**: quando la fattura viene creata non ha nessun flag attivo. La sezione comprende i campi:

    > **Controllata**: il flag attivo permette la contabilizzazione della fattura;  
    > **Contabilizzata**: il flag è automaticamente attivato quando la fattura supporta la procedura di [Contabilizzazionepurchase/purchase-invoices/accounting/purchase-invoices-accounting);  
    > **Caricata**: il flag diventa attivo quando la fattura supporta la procedura di [Carico nel magazzinopurchase/purchase-invoices/insert-purchase-invoice/header-procedures/automatic-loading-on-warehouse). Nel caso di fattura creata da documento di trasporto già caricato, è presente il parametro generale VE-PurchaseInvoices_VerifyLoadStatusDDT che blocca il flag Caricata anche nella fattura.
    > **Storicizzata**: attivando questo flag il documento non sarà più visibile per la procedure successive.   
    > **Annullata**: il flag attivo permette di annullare la fattura.

:::note
I flag possono essere tolti mediante le procedure di ripristino operazione.
:::

- **Data di arrivo**: in questo campo si può inserire la data di arrivo della merce.

- **Data carico**: questo campo viene compilato automaticamente con la data corrente al momento del carico oppure con la data usata per la registrazione di magazzino, a seconda della procedura utilizzata.   

- **Annotazioni fornitore**: questo campo viene ripreso dall'anagrafica fornitore, mentre nel caso di creazione da un solo ordine/DDT verranno ripresi gli stessi dati contenuti nell'omonimo campo del documento di partenza. Può essere inserito anche manualmente. 

- **Nostro/Vostro riferimento**: in questi campi solitamente viene indicato un riferimento interno ed un riferimento fornitore per il documento.    
Se presente, viene ripreso dall'anagrafica fornitore altrimenti può essere inserito manualmente.
Nel caso in cui l'ordine viene completato con la procedura [Evasione da ordinepurchase/purchase-invoices/insert-purchase-invoice/header-procedures/execution-from-purchase-order) o mediante [Valorizzazione DDT di acquistopurchase/purchase-invoices/procedures/purchase-delivery-note-valorization), nei campi *Annotazioni fornitore* e *Nostro/Vostro riferimento* viene proposta l'informazione presente nei campi omonimi del documento di partenza (questo trasferimento è valido solo nel caso di fattura creata tramite il prelievo dei dati da un solo documento di partenza).

- **Note iniziali**: nel caso di evasione verranno riproposte le informazioni presenti nell'ordine. In alternativa, si possono selezionare le note che sono state inserite in precedenza nella tabella omonima che si trova nel percorso *Configurazione > Utilità > Gestione note codificate*; per questo l'utente deve effettuare doppio click sul campo per aprire l'Help e selezionare i dati; altrimenti può inserirle manualmente.

- **Progetto**: usando l'help di campo si può collegare il documento a un progetto. Questa associazione funziona solo al livello della testata dell'articolo. Il progetto viene inserito automaticamente se il DDT è stato creato mediante evasione di un ordine che lo contiene.

- **CUP/CIG**: se nelle informazioni fiscali dell'[anagrafica fornitoreerp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) esso è abilitato alla gestione di CIG e CUP, sarà possibile compilare questi dati nel documento. I campi sono posizionati sottola voce *Annotazioni fornitore*.

- **Rif. FA**: posizionato sotto la voce *Nazione*. Viene usato dopo la creazione dello [stornopurchase/purchase-invoices/search-purchase-invoices) di una fattura per collegare manualmente le due fatture inserendo nella fattura di storno *numero*, *tipo* e *data* della fattura di origine.

- **Reg. cont.**: osizionato sotto la voce *Nazione*. Riporta numero, data e protocollo della registrazione contabile derivata dalla contabilizzazione della fattura. 

*Pulsanti specifici*

> [Evasione da ordinipurchase/purchase-delivery-note/insert-purchase-delivery-note/header-procedures/execution-from-purchase-order): richiama la procedura per creare una fattura da un ordine fornitore. Si attiva con l'inserimento del fornitore e del tipo fattura. L'ordine da evadere dovrà aver impostato il flag *Stampato* e la *Data conferma ordine* valorizzata.    
> [Evasione DDTpurchase/purchase-invoices/insert-purchase-invoice/header-procedures/execution-from-purchase-delivery-note): richiama la procedura per creare una fattura da un DDT. Si attiva con l'inserimento del fornitore e del tipo fattura. Il DDT da evadere dovrà aver impostato il flag *Controllata*.    
> [Carico automatico nel magazzinopurchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse): utilizzato per caricare automaticamente il magazzino con gli articoli selezionati. Questo campo sarà editabile solo una volta attivato il campo *Controllata* e inserito il *Numero documento*.

## Pagamenti

Le **Soluzioni di pagamento** sono riportate in automatico dall'*Anagrafica fornitore > tab Pagamenti* e possono essere modificate/cancellate dall'utente.

Se al **Tipo pagamento** è associato uno sconto finanziario, l'importo dello sconto viene considerato solo ai fini contabili cioè nelle scadenze del documento e non nel totale fattura.

*Pulsante specifico*

> **Cancella pagamenti**: utilizzato per cancellare le righe di pagamento selezionate.

## Sconti

Vengono proposti solo gli sconti predefiniti ripresi dall'*Anagrafica fornitore > tab Sconti* e possono essere modificate/cancellate dall'utente.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

## Spedizione

Qui viene proposta l'informazione inserita nell'anagrafica fornitore, tab [Consegnaerp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), solo se esistono dati di default.

Il combo box propone tutti i *Destinatari* e le *Destinazioni* inserite nell'anagrafica fornitore.

Gli indirizzi di spedizione (destinatario/destinazione e vettore) possono essere inseriti anche solo descrittivi senza essere precedentemente inseriti tra i contatti. 


## Vettore

In questo campo è possibile inserire il Vettore che effettuerà la spedizione. Se questo è stato inserito nell'anagrafica fornitore, tab [Consegnaerp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery) sarà possibile selezionarlo dal menù a tendina della seconda colonna, in alternativa sarà sufficiente fare doppio click sulla terza colonna (*Vettore*) per selezionare uno dei contatti della società.

Opzionalmente si possono aggiungere i dettagli della *Targa* del vettore e la *Data/Ora trasporto*.

## Extra Data

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />
