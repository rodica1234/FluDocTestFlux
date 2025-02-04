---
title: Livelli autorizzativi
sidebar_position: 23
---

Questa tabella consente di estendere la gestione del blocco partite passive secondo una logica più articolata.

Ipotizzando che ci sia
- un controllo amministrativo della fattura  
- un controllo successivo da parte dell’ ufficio acquisti della fattura  
- un' autorizzazione finale da parte del titolare  

si potrebbe ipotizzare una codifica dei livelli autorizzativi come segue:

![](/img/it-it/configurations/tables/finance/authorization-levels.png)

Il livello *00 – Blocco iniziale* va preimpostato in ogni **anagrafica fornitore**, nel tab [**Pagamenti**erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/), per fare in modo che le sue partite siano create bloccate con questo livello di partenza.

![](/img/it-it/configurations/tables/finance/authorization-levels-combo.png)

La partita può essere poi portata al livello *01* dagli utenti del ruolo *Amministrazione* (nell’ immagine *Fluentis Users* Cfr. gestione utenti e ruoli utente nella sezione ARM): questo perché ha *livello padre* 0, e lo porta a livello 1

Poi la partita può essere portata a livello *02* dagli utenti del ruolo *Acquisti* (nell’immagine è *Fluentis Admins*): questo perché ha *livello padre* 1 e lo porta a livello 2

Poi ancora la partita può arrivare al livello finale *03* solo ad opera dell’utente XXXXXXX (il titolare), che darà effettivamente l’autorizzazione al pagamento (e quindi solo a questo punto verrà rimosso il blocco nella partita, che diventerà pagabile)

Ogni step può richiedere l’inserimento di una nota di autorizzazione, se è impostato il flag al livello

Questi cambi stati possono essere eseguiti dalla maschera [**Gestione Liquidità**/maturity-values/procedures/cash-management/), tramite il pulsante *Autorizza partita*. 

Dopo il rilascio dell'autorizzazione sempre dalla maschera *Gestione liquidità* è possibile anche preparare direttamente le distinte di pagamento del modulo *Pagamenti fornitori*, per le partite autorizzate (o comunque quelle non bloccate) in alternativa alla classica procedura di creazione della distinta di pagamento e, da dentro la distinta, ricerca delle partite passive da inserire.