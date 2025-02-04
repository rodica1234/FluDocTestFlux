---
title: Dettaglio
sidebar_position: 2
---

L'anagrafica di tipo **Agente** è necessaria al fine di gestire le diverse impostazioni ed **automatismi** relativi a questa tipologia di soggetti e permettere il **calcolo delle provvigioni** oltre alla gestione degli **aspetti fiscali** quali i contributi ENASARCO e la ritenuta d'acconto.

Dopo aver inserito i dati anagrafici generali del soggetto si procederà quindi alla scelta del [tipo contoconfigurations/tables/finance/account-types) **Agenti** nella griglia *Sottoconti assegnati* della tab [*Dati contabili*erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro)

:::important[Importante]
Si consiglia di compilare in modo completo tutti i campi necessari alla gestione dell'agente, organizzati nella presente e nelle successive tab.
:::

Questa finestra contiene elementi generali dell'agente stesso:

**Utilizzo a partite aperte**: attiva la gestione delle partite aperte per l'anagrafica in uso (si consiglia di abilitarla sempre per ottenere nello scadenziario anche le partite aperte nei confronti dell'agente, ad esempio per pagamento provvigioni spettanti);

**Categoria agente**: è l'elemento fondamentale per il calcolo dell'**Enasarco** e del **FIRR**, così come definito nella tabella [Categorie Agenticonfigurations/tables/sales/agent-category); la scelta si effettua tramite la combobox collegata alla tabella

**Caratteristica agente**: elemento statistico libero utile, ad esempio, per creare dei raggruppamenti. La combobox è collegata alla tabella [Caratteristiche Agenticonfigurations/tables/sales/agent-characteristics)

**IVA**: Aliquota iva di default da proporre nella creazione del compenso agente, sia manualmente, sia dalla procedura di calcolo dalla liquidazione provvigioni.

**Divisa**: divisa nella quale è denominato il conto contabile ed i documenti intestati all'agente

**Data inizio/fine rapporto**: sulla base di questa data parte il calcolo dell'indennità suppletiva di clientela (stampa a disposizione per il modulo Agenti/Percipienti);

**Costo di/contropartita**: il sottoconto di contabilità generale da proporre all'inserimento del compenso nel modulo Percipienti (o da utilizzare nella sua creazione automatica dalla liquidazione agenti) al fine di accogliere il costo delle provvigioni;

**Conto di contropartita costo fisso**: è possibile valorizzare il fisso su un conto contabile specifico tramite questo campo;

**Conto di fatturazione**: questo sottoconto viene utilizzato, nella creazione automatica del compenso percipiente dalla liquidazione agenti, per intestare il compenso ad un codice contabile differente (di tipo fornitore, al fine di unificare i dati contabili per soggetti che sono sia agente che fornitore);

**Annotazioni**: note libere dell'anagrafica agente;

**Operatore**: collegamento all'utente di **Fluentis**, serve per le restrizioni di visibilità dei dati quando all'agente è stato abilitato un accesso a ***Fluentis***

**Visibilità del documento**: è collegato al campo precedente, consente di definire se l'agente vede *Tutti i documenti* o *Propri documenti*

**Enasarco**: numero di iscrizione all'ente;

**CCIAA**: numero di iscrizione alla camera di commercio;

**Capo area**: permette di collegare l'anagrafica di un agente che è capo area rispetto a quello in uso; non vi sono automatismi relativi al calcolo delle provvigioni.

**Regime fiscale**: il regime del soggetto

**Intra e Cod.serv.**: per agenti intracomunitari da riportare nelle sezioni quater e quinquies della dichiarazione intrastat;

**Società di capitali**: obsoleto, presente per retrocompatibilità

**Obbligo provvigioni su riga ordine**: con questo flag si obbliga l'utente a impostare una provvigione per l'agente nell'ordine cliente.

I campi legati alla fatturazione elettronica non sono attualmente in uso.