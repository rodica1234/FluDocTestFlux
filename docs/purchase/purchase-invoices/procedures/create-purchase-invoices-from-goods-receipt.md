---
title: Creazione fatture di acquisto da ricevimento merci
sidebar_position: 2
---

La procedura si apre tramite il percorso **Acquisti > Fatture di acquisto > Procedure > Creazione fatture da ricevimento merci**

### Filtro

Offre la possibilità di inserire filtri per cercare i ricevimenti, selezionarli e creare la fattura. È possibile filtrare per: numero documento, data, conto, tipo documento, articolo e progetto.

- **Numero e data fattura**: permettono di specificare il numero interno e la data relativa alla fattura che verrà generata con la procedura. Se non valorizzati il campo *numero interno* della fattura sarà vuoto e la procedura utilizzerà la data corrente.

*Pulsante specifico*:
> **Creazione fatture d'acquisto da ricevimento merci**: dopo aver impostato i parametri e selezionato le righe da valorizzare, la fattura può essere creata mediante l'utilizzo di questo pulsante.

### Parametri

In questo tab l'utente ha la possibilità di configurare i parametri per la creazione della fattura.

*Dati obbligatori*:

- **Tipo fattura acquisto**: indica il tipo documento da usare per la creazione della fattura.
- **IVA**: indica l'[Aliquota IVAconfigurations/tables/finance/vat-rates) da inserire sulle righe articolo della fattura.
- **Tipo fatturato acquisti**: da impostare sulle righe articolo della fattura.

*Dati opzionali*:
> **Ricalcola centri di costo/ricavo**: permette di scegliere se si vuole ricalcolare i centri di costo/ricavo al momento della creazione della fattura.

### Rollback

Offre la possibilità di cercare, visualizzare e annullare le operazioni effettuate.

Per annullare un'operazione è sufficiente selezionare la riga corrispondente alla fattura da cancellare nella griglia superiore e cliccare sul pulsante **Rollback** posto nella ribbon bar.

Ad ogni riga della griglia superiore (che contiene numero, data e utente che ha creato la fattura) corrispondono una o più righe nelle griglie inferiori **Fatture** e **Ricevimenti**. In queste due griglie, mediante doppio click sulla riga interessata, l'utente può apire e visualizzare la fattura appena creata oppure il ricevimento.
