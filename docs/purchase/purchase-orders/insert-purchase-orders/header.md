---
title: Testata
sidebar_position: 2
---

Dopo aver selezionato i dati obbligatori nella sezione superiore, l'utente può continuare l'inserimento dei seguenti dati [manualmenteguide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-manuale) oppure con l'[help di campoguide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-con-il-help-di-campo).

:::note Ricorda
Se il documento viene *creato automaticamente*, ad esempio dal filtro di ricerca degli [**Ordini clienti**-orders/search-sales-orders), dalla procedura di [**Creazione automatica ordini**purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) o dalla procedura di [**Creazione ordine fornitore da offerta fornitore**/procedures/order-creation), questi dati vengono ripresi dal *documento d'origine* da cui è stato generato.
:::

Inserendo il **Fornitore** vengono proposti in automatico tutti i dati specifici del tab **Testata**, secondo i dati impostati in precedenza nell'[anagrafica fornitoreerp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) nei campi corrispondenti al suo indirizzo e nelle sezioni: 

- **Divisa**: sezione contenente i dati [Divisaconfigurations/tables/general-settings/currencies), [Cambio-intro#currency-exchange), [Data valuta-intro#currency-date).   
- **Nazione**: sezione contenente i dati [*Nazione*-intro#country), [Lingua-intro#language), [Zona-intro#zone).   
- **Spedizione**: sezione contenente i dati [*Spedizioni*erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Porto-intro#carriage), [Imballo-intro#packing), [Listinoerp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list#listini) predefinito e il suo [intervallo di validità-intro#validity-date).
- **Pagamenti**: sezione contenente i dati [*Pagamenti*erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments), *Sconti*, *Destinazione* e *Vettore*.    

Tutti questi campi possono essere cancellati oppure modificati manualmente dall'utente.

*Campi facoltativi*:

> **Data richiesta consegna** e **Data consegna**: se impostate prima di inserire gli articoli all'interno dell'ordine esse saranno riportate anche sulle singole righe articolo. In alternativa sarà sufficiente premere il pulsante *Sostituisci data prevista consegna nelle righe* nella ribbon bar per aggiornare le date sulle righe articolo.   
> **Data conferma ordine**: per i *Tipi ordine* che hanno il flag [Conferma ordine automaticaconfigurations/tables/purchase/purchase-orders-type) viene inserita in automatico la data corrente al momento di creazione dell'ordine. Per poter effettuare l'evasione di un ordine fornitore è necessario inserire una *Data conferma*.   
> **Decorrenza**: è la data di decorrenza per il calcolo delle scadenze di pagamento.   

I seguenti flag indicano lo stato dell'ordine:
- **Stampato**: questo flag viene attivato in automatico al momento di lancio della *Stampa* definitiva mediante il pulsante posto nella ribbon bar. In alternativa può essere attivato manualmente per poter effettuare l'evasione dell'ordine in un DDT o in una fattura;  
- **Annullato**: quando l'utente vuole annullare un documento invece di cancellarlo, automaticamente l'ordine viene messo forzatamente evaso in tutte le sue righe articolo;   
- **Storicizzato**: quando l'utente lo storicizza.

> **Annotazioni fornitore**: questo campo viene ripreso dall'[anagrafica fornitoreerp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), ma può essere inserito anche manualmente.   
> **Nostro/Vostro riferimento**: in questi campi solitamente viene indicato un riferimento interno ed un riferimento fornitore per il documento. Se presente, viene ripreso dall'anagrafica fornitore alrimenti può essere inserito manualmente.    
Nel caso in cui l'ordine viene completato con la procedura *Evasione da progetto*, nei campi *Annotazioni fornitore* e *Nostro/Vostro riferimento* viene proposta l'informazione presente nei campi omonimi della commessa d'acquisto. Questo trasferimento è valido solo nel caso di ordine fornitore creato tramite il prelievo dei dati da un solo documento d'origine.   
> **Note iniziali ordine**: si possono selezionare le note che sono state inserite in precedenza nella tabella che si trova nel percorso *Configurazione > Utilità > Gestione note codificate*. Per questo l'utente deve effettuare doppio click sul campo *Note iniziale* per aprire Help note codificate e selezionare i dati.   
> **Progetto:** usando l'help di campo si può collegare il documento a un [progetto/projects/search-projects-intro). Questa associazione funziona solo al livello della testata dell'articolo. Il progetto viene inserito automaticamente se l'ordine fornitore nasce a fronte di un documento che lo contiene (ad esempio da ordini pianificati di acquisto).  
> **Commessa di produzione**: usando l'help di campo si può collegare il documento ad una [commessa di produzione/mps-master-production-scheduling/production-job-orders/job-orders). Se l'ordine viene creato dal rilascio degli ordini pianificati di acquisto la commessa viene proposta automaticamente.  

> **Nazione**, *Lingua*, *Zona* sono ripresi dall'anagrafica del fornitore, se presenti, altrimenti possono essere inseriti manualmente.   
> **Operatore**: permette di inserire l'utente che crea il documento. Se nei Parametri ordini fornitore il flag [Codice operatore obbligatorioconfigurations/parameters/purchase/purchase-orders-parameters) è attivo sarà obbligatorio inserire il dipendente in questo campo per poter salvare l'ordine. I [dipendenti/registers/employee/new-employee) devono essere inseriti in precedenza nella tabella *Dipendenti*.   

> **Stato evasione**: quando l'ordine viene evaso tramite un DDT o una fattura il suo *Stato evasione* cambia automaticamente da *Non evaso* a *Parzialmente evaso* o *Evaso*. L'utente può forzare l'evasione di un ordine non totalmente evaso e quando questo succede, viene salvata anche la data evasione nel campo *In data*.  

> **Spedizioni**, *Porto* e *Imballo* sono ripresi dall'anagrafica del fornitore, se presenti, altrimenti possono essere inseriti manualmente.   
> **Listino**: se nell'anagrafica del fornitore c'è un listino con flag *Predefinito* esso sarà proposto in questo campo congiuntamente alle sue date di validità.   
> **Listini di aggiornare**: se tale flag è attivo, il relativo listino di acquisto si aggiorna automaticamente in fase di salvataggio con le informazioni dell'articolo. Questo flag è modificabile anche a livello di riga articolo.   
> **Punti vendita**: si trova sotto il menù della voce *Spedizioni* e viene gestito solo dalla verticalizzazione riguardante le catene di distribuzione. Nel caso di un ordine fornitore creato da trasferimento di merci tra punti vendita di una stessa catena in questo campo viene visualizzato il punto vendita di origine della merce.

*Pulsanti specifici*

> **Evasione da progetto**: richiama la [procedurapurchase/purchase-orders/insert-purchase-orders/header-procedures) per creare un ordine fornitore da una commessa di acquisto. Si attiva con l'inserimento del fornitore e del tipo ordine fornitore. Per poter evadere la commessa di acquisto è necessario che sia stampata e confermata.     
> **Sostituisci data prev. consegna nelle righe**: dopo aver specificato la *Data richiesta consegna* e/o la *Data consegna* in testata ordine è possibile sostituire in massa tali date nelle righe articolo già inserite.
 
### Pagamenti

Le [Soluzioni di pagamentoconfigurations/tables/general-settings/payment-terms) sono riportate in automatico dall'*Anagrafica fornitore > tab Pagamenti* e possono essere modificate/cancellate dall'utente.

Se al [Tipo pagamentoconfigurations/tables/general-settings/payment-types) è associato uno sconto finanziario, l'importo dello sconto viene considerato solo ai fini contabili cioè nelle scadenze del documento e non nel totale DDT.

Se il documento nasce da una commessa o da un'offerta fornitore il tipo pagamento viene ripreso dal documento di origine.

*Pulsante specifico*

> **Cancella pagamenti**: utilizzato per cancellare le righe di pagamento selezionate.


### Sconti 

Vengono proposti solo gli sconti predefiniti ripresi dall'*Anagrafica fornitore > tab Sconti*. Possono essere modificati/cancellati dall'utente.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### Destinazione

Qui viene proposta l'informazione inserita nell'*Anagrafica fornitore > tab Consegne*, solo se esistono dati di default. Il combo box propone tutti i destinatari, le destinazioni e i vettori inseriti nell'anagrafica fornitore.

Gli indirizzi di spedizione (destinatario/destinazione e vettore) possono essere inseriti anche solo descrittivi senza essere precedentemente inseriti tra i contatti. 

### Vettore

In questo campo è possibile inserire il *Vettore* che effettuerà la spedizione dell'ordine. Se questo è stato inserito nell'*Anagrafica fornitore > tab Consegne* sarà possibile selezionarlo dal menù a tendina della seconda colonna, in alternativa sarà sufficiente fare doppio click sulla terza colonna (*Vettore*) per selezionare uno dei contatti della società. 

Opzionalmente si possono aggiungere i dettagli della *Targa* del vettore e la *Data/Ora trasporto*.

### Extra Data

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />