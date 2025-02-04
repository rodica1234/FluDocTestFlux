---
title: Business Areas - Tesoreria
sidebar_position: 2
---

**Creazione file Sepa** (codice FS-PR-SEPA-PaymentRequest): questo parametro permette di associare un determinato flusso Bizlink 'SEPA' per l'esportazione dei bonifici Euro. Ogni localizzazione geografica ha il suo default di generazione (attualmente il formato italiano è il 4.01), ma in caso di cambi di struttura di riferimento può essere comodo poter cambiare liberamente da una certa data li tipo di file da creare.

**SDD ( Debito Diretto Sepa)** (codice FS-PR-SEPA-SDD): come il precedente, ma per i file SDD che si possono creare dalle Distinte del Portafoglio effetti (attualmente per l'Italia la versione 1.01)

**Creazione file Sepa Estero** (codice FS-PR-SEPA-ForeignPaymentRequest): come il primo, ma per il tracciato dei bonifici in valuta

I flussi attualmente presenti sono:

- *EsteroSEPA_XML_Payment*
- *ExportSDDWorkflow*
- *ExportSDDWorkflow_1.01*
- *SEPA_XML_Payments_Export*
- *SEPA_XML_Payments_Export_4.01*
- *SEPA_XML_Payments_Export_FR*
- *SEPA_XML_Payments_Export_HR*
- *SEPA_XML_Payments_Export_RO*
- *SEPA_XML_Payments_Export_RS*
- *SEPA_XML_Payments_Export_SI*


**Dettaglio movimento** (codice FS-PR-DocFinanceNote): per le società che ricevono i movimenti bancari da DocFinance, con questo parametro si può definire come ***FluentisERP*** valorizzerà le descrizioni di dettaglio dei movimenti importati. La logica di codifica della stringa ricalca le logiche già in uso nelle Causali di contabilità, con l'aggiunta del codice (DF) ad indicare la descrizione presente direttamente nel file ricevuto da DocFinance.

:::tip Nota
ad esempio:
- impostando il parametro come "(2) FT.N. (DF) del (4) – (6)" si creerà un testo con
"Descrizione causale" + FT.N. + "Descrizione da DocFinance" del "data doc. della partita" - "Descrizione sottoconto della partita"
- impostando il parametro come "FT. (3) del (4)", cioè senza uso della stringa passata da DocFinance, avremo:
    - per le righe legate a partita, una nota tipo FT. + "Numero doc. partita" + del + "data doc. della partita"
    - per le righe non legate a partita, sarà usata di default la stringa presente nel file di DocFinance
:::