---
title: Contabilizzazione fatture da ricevere
sidebar_position: 2
---

La procedura si apre tramite il percorso **Acquisti > Fatture di acquisto > Procedure > Contabilizzazione fatture da ricevere**

Con questa procedura è possibile effettuare la contabilizzazione delle fatture da ricevere, leggendo i documenti di entrata merce.

### Fatture da ricevere da movimenti

La contabilizzazione fatture da ricevere prevede, come origini dati, uno dei tre elementi:

- DDT di acquisto,

- ricevimento merci,

- rientro di conto lavoro.

A seconda del documento scelto, i campi successivi filtreranno sui record relativi.

In sostanza, **la registrazione delle fatture di fine anno da ricevere si può effettuare sui documenti presenti a sistema che non siano già stati fatturati**. Quindi, è una procedura da eseguire subito ad inizio anno sui documenti aperti, prima che si proceda con il flusso documentale a chiuderli.

Quando poi si andranno a creare le fatture di acquisto da uno di questi documenti contabilizzati, all'atto della contabilizzazione della fattura, il sistema andrà a registrare la fattura normalmente, per poi aggiungere in coda una nuova registrazione di segno opposto al movimento creato dal documento di entrata merce.

Alla base della maschera sono presenti alcuni parametri di gestione della contabilizzazione:

**Data registrazione**: è la data registrazione da assegnare alla registrazione stessa, tipicamente il 31/12 dell'anno;

**Data competenza**: è la data competenza da assegnare alla registrazione, tipicamente il 31/12 dell'anno;

**Causale**: è la causale contabile da utilizzare. Si tratta di una causale generica, non legata all'IVA.

*Pulsante specifico*: 

> **Contabilizzazione**: permette di  eseguire la registrazione contabile dei documenti selezionati.

 

### Precedenti

La form presenta la lista delle operazioni di contabilizzazione eseguite, al fine di visualizzarle ed eventualmente annullarle attraverso gli appositi pulsanti. Con un doppio click nella griglia delle registrazioni create è possibile visualizzare la registrazione contabile.

**Contabilizzazione fatture da ricevere**: griglia con i dettagli delle operazioni eseguite. Viene popolata dopo la procedura di ricerca e possono essere selezionate le operazioni sulle quale applicare le funzioni del ribbon.

I dati nelle griglie in basso, **Movimenti contabilizzati** e **Registrazione contabile** corrispondono all'operazione selezionata nella griglia superiore. Un doppio click nella sezione dei movimenti/delle registrazioni consentirà di visualizzare il movimento/la registrazione contabile relativa.

*Pulsanti specifici*:
> **Rollback contabilizzazione**: per cancellare la contabilizzazione selezionata.  
> **Ripristina fattura**: per cancellare l'intera operazione selezionata nella prima griglia, con tutti i suoi dettagli visualizzati nelle due griglie sottostanti.