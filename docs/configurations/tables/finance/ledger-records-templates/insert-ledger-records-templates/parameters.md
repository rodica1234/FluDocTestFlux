---
title: Parametri
sidebar_position: 4
---

La prima parte dei parametri è dedicata all'impostazione dell'ordine con il quale presentare i tabulatori previsti, attraverso gli appositi pulsanti.

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/parameters/image01.png)

 

La seconda parte contiene le seguenti opzioni:

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/parameters/image02.png)

**Controllo tipo conto**: la presenza di questo flag imporrà alla procedura di verificare la corrispondenza del sottoconto intestatario della registrazione rispetto alle impostazioni dei parametri di contabilità (es. uso di un conto cliente in una causale d'acquisto da fornitore): in caso di esito negativo sarà eseguito un semplice messaggio di avvertimento.

**Blocca registrazione se il tipo conto è incompatibile**: la presenza di questo flag imporrà alla procedura di annullare l'inserimento di un sottoconto intestatario della registrazione non valido rispetto alle impostazioni dei parametri di contabilità (es. uso di un conto cliente in una causale d'acquisto da fornitore).

**Permetti registrazione contabile con sbilancio**: la presenza di questo flag consentirà all'utente di salvare registrazioni contabili non bilanciate (sconsigliato). Può essere utile ad esempio (con le necessarie cautele) per forzare una contabilizzazione automatica che restituisce un messaggio di errore al fine di meglio comprendere il risultato della registarzione e correggere i settaggi.

**Blocca cancellazione registrazioni con partite pagate**: con questo flag non sarà possibile cancellare le registrazioni che abbiano all'interno almeno una partita con un pagamento collegato.

**Blocca registrazione se il valore delle partite non è uguale al movimento contabile**: la presenza di questo flag imporrà alla procedura di bloccare il salvataggio di registrazioni per le quali il valore dei movimenti contabili non corrisponde ai valori di movimentazione dei partitari (in apertura e in chiusura partite): nel caso in cui non sia impostato, la procedura, comunque eseguirà un messaggio di avviso della presenza di una differenza. Il controllo viene eseguito su tutti i sottoconti che nel piano dei conti hanno impostato il flag 'Apertura partite'.

**Blocca registrazione se il totale documento è differente dal totale dei dati iva**: la presenza di questo flag imporrà alla procedura di bloccare il salvataggio di registrazioni per le quali il valore totale dei movimenti iva non corrisponde ai totali impostati in testata della registrazione: nel caso in cui il campo non sia impostato comunque la procedura eseguirà un messaggio di avviso.

**Aggiorna automaticamente il totale del documento al variare dei dati nella griglia dell'iva: l**a presenza di questo flag imporrà alla procedura di aggiornare, ma solo in incremento, i totali della testata della registrazione al variare della somma totale inserita nella sezione iva della registrazione.

**Aggiorna anche in decremento**: questo flag, attivo solo quando il precedente è impostato, forzerà la procedura ad aggiornare i totali della registrazione anche in decremento.

**Blocca registrazione se l'ordine di protocollo non è rispettato**: la presenza di questo flag imporrà alla procedura di bloccare il salvataggio di registrazioni per le quali l'ordine temporale di protocollazione non sia rispettato: in particolare, con questo flag la procedura recupererà numeri di protocolli solo nel caso in cui sia stata impostata una data registrazione valida per il numero stesso. Se il flag non viene inserito, comunque la procedura eseguirà un messaggio di avviso della mancanza di ordine di protocollazione: si ricorda, inoltre, che la stampa registri iva non consente, nell'impostazione di default, di stampare in definitivo registri iva che abbiano buchi nella numerazione oppure non seguano l'ordine di protocollazione corretto.

**Gestione separata Cdc/Cdp**: questo flag, attivo solo nel caso in cui la causale gestisca sia i centri di costo che di profitto, consentirà di assegnare i movimenti economici di contabilità sia ai centri di costo che ai centri di profitto. Se non è impostato, invece, il movimento può essere assegnato solo a uno delle due sezioni.

**Ricalcolo automatico CdC, CdP e commesse:** il flag in oggetto sarà riportato anche nelle registrazioni contabili basate su questa causale: il significato è quello di eseguire automaticamente o meno il ricalcolo delle sezioni analitiche dei centri di costo, profitto e delle commesse una volta entrati in modifica di una registrazione contabile già salvata. All'atto dell'inserimento di una nuova registrazione, fino al suo primo salvataggio, l'aggiornamento di queste sezioni sarà sempre automatico nel rispetto delle impostazioni di default definite.

**Blocca registrazione se il valore dei Cdc/Cdp non è uguale al movimento contabile**: la presenza di questo flag imporrà alla procedura di bloccare il salvataggio di registrazioni per le quali il valore totale dei movimenti analitici dei centri di costo e profitto non corrisponde agli importi economici movimentati nella sezione di contabilità generale: nel caso in cui il flag non sia inserito sarà comunque eseguito un messaggio di avviso della mancata corrispondenza dei valori.

**Raggruppa Iva in libro giornale:** la presenza di questo flag imporrà alla procedura di raggruppare nel libro giornale le righe Iva assegnate allo stesso sottoconto contabile (e alla stessa divisione).

**Blocca salvataggio con numero documento duplicato**: la presenza di questo flag, inserito di default, imporrà alla procedura di bloccare il salvataggio di registrazioni contabili con stesso numero documento, stesso anno, stesso tipo documento e anagrafica in testata della registrazione.

**Background colour**: impostare in questo campo il colore di sfondo per visualizzare nelle ricerche a video i movimenti basati su questa causale. L'uso dei colori può essere utile per individuare il tipo di movimento senza dover leggere descrizioni o codici delle causali.

**Foreground colour**: impostare in questo campo il colore di dei testi da visualizzare nelle ricerche a video i movimenti basati su questa causale. L'uso dei colori può essere utile per individuare il tipo di movimento senza dover leggere descrizioni o codici delle causali.

**Sample text**: il campo visualizza il risultato della combinazione di colori impostata.

**Carattere corsivo**: impostare in questo campo la visualizzazione in corsivo dei caratteri per questa causale nelle ricerche a video: può essere utile per individuare il tipo di movimento senza dover leggere descrizioni o codici delle causali.

**Carattere grassetto:** impostare in questo campo la visualizzazione in grassetto dei caratteri per questa causale nelle ricerche a video: può essere utile per individuare il tipo di movimento senza dover leggere descrizioni o codici delle causali.

:::important Vedi Anche
[**VIDEO TUTORIALS SULLE CAUSALI CONTABILI**/finance/intro.md)
:::





