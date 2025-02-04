---
title: Tabelle modulo Rischio cliente
sidebar_position: 7
---

Non sono presenti tabelle specifiche del modulo in oggetto, ma va segnalato che vari tipi documento in acquisto e vendita presentano impostazioni collegate al rischio cliente.

Il fido cliente preleva i dati dai seguenti documenti dell'area vendita:

**[Tipo ordine clienteconfigurations/tables/sales/sales-order-types)**: il ‘flag fido' indica che se il documento (stampato e confermato) viene considerato nel calcolo del fido cliente o meno. Il flag ‘Escludi blocco' esclude questo tipo documento dal blocco cliente;

**Tipi DDT**: il ‘flag fido' indica che se il documento (stampato, non valorizzato in fattura) viene considerato nel calcolo del fido cliente o meno. Il flag ‘Escludi blocco' esclude questo tipo documento dal blocco cliente;

**[Tipi fatturaconfigurations/tables/purchase/purchase-invoices-type)**: il ‘flag fido' indica che se il documento (stampato, non contabilizzato) viene considerato nel calcolo del fido cliente o meno. Il flag ‘Escludi blocco' esclude questo tipo documento dal blocco cliente.

Infine, ogni anagrafica cliente presenta due impostazioni collegate al modulo in oggetto:

**Il tipo controllo fido:** 

**Blocco doc. e monitor fido**: il documento dell'area vendita che va a sforare il fido sarà bloccato e quindi ci sarà la necessità di autorizzarlo per procedere alle fasi successivo del flusso documentale;

**Monitor fido**: sarà semplicemente effettuato un controllo del fido con eventuale messaggio all'utente dell'avvenuto sforamento;

**Blocco di gruppo**: come per il primo, ma il calcolo è cumulativo per tutte le società del database facenti capo alla stessa anagrafica cliente;

**Monitor di gruppo**: come per il secondo, ma il calcolo è cumulativo per tutte le società del database facenti capo alla stessa anagrafica cliente.

La seconda impostazione è il check ‘controllo esposizione', che rende visibile il cliente nella maschera dell'esposizione clienti.






