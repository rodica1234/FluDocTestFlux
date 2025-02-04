---
title: Parametri portafoglio effetti
sidebar_position: 4
---



I parametri del modulo Portafoglio Effetti si trovano in **Parametri > Tesoreria**.

Nei parametri del modulo Portafoglio effetti  si possono pre-impostare gli elementi di default da proporre nelle procedure del modulo. In particolare:

*Acquisizioni effetti*:  
> **Contabilizzazione automatica**: consente di predefinire la contabilizzazione effetti direttamente al momento dell'acquisizione effetti da fatture o da partite. 
> **Acquisizione solo con scadenza oltre numero giorni**: se indicato un numero di giorni, allora ***FluentisERP*** bloccherà la creazione di un effetto con scadenza più recente non bancabili
> **Blocco creazione effetti senza abi/cab**: se impostato, ***FluentisERP*** bloccherà la creazione di effetti ai quali non è possibile assegnare codici abi/cab di appoggio
> **Raggruppa note credito per data scadenza**: se impostato, lo storno automatico delle note di credito, che si può impostare sul singolo cliente, opererà solo per data uniforme alle scadenze fatture.

*Contabilizzazione effetti*:  
> **Causale di contabilità**: consente di definire la causale contabile di default da proporre nella procedura omonima.  
> **Raggruppa per conto effetto**: consente di definire il parametro di raggruppamento effetto alle registrazioni effettuate con tale procedura.  
> **Registrazioni provvisorie**: consente di definire lo stato di registrazione provvisoria alle registrazioni effettuate con tale procedura.  

*Contabilizzazione distinte*:  
> **Causale di contabilità**: consente di definire la causale contabile di default da proporre nella procedura omonima.  
> **Contabilizza alla data di maturazione**: la prima opzione andrà a spezzare la registrazione della distinta alle varie date scadenza degli effetti con l'aggiunta dei giorni banca impostati in anagrafica banca per la causale impostata.  
> **Contabilizza in data scadenza con data valuta banca = data di maturazione**: la seconda opzione, invece, registrerà i vari effetti alle varie date scadenza ma con data valuta banca rettificata secondo i giorni banca impostati in anagrafica banca per la causale impostata. 
> **Chiusura cliente in contabilizzazione distinta**: con questa impostazione non sarà effettuata la Contabilizzazione effetti e quindi non si utilizzerà un conto di appoggio *effetti in portafoglio*, ma il cliente sarà chiuso direttamente con la *Contabilizzazione distinte* con contropartita tipicamente *effetti sbf*, cioè il conto di transito inserito in testata della distinta stessa.

*Contabilizzazione Effetti a fornitore*:
> **Contabilizzazione effetti a fornitore**: consente di predefinire la causale contabile da proporre nella procedura di Contabilizzazione effetti a fornitore, cioè il giro di titoli di credito in pagamento ai fornitori.

*Contabilizzazione accrediti*:  
> **Causale di contabilità**: consente di definire la causale contabile di default da proporre nella procedura omonima.  
> **Spese commissioni**: consente di definire il sottoconto delle spese di commissioni per le registrazioni effettuate con tale procedura.  
> **Oneri passivi**: consente di definire il sottoconto degli oneri passivi per le registrazioni effettuate con tale procedura.  

*Raggrupamento*:  
> **Raggruppa importi inferiori a**: questo campo, se non vuoto e differente da zero, determina il valore soglia delle partite da raggruppare. Se, ad esempio, viene impostato ‘1000', significa che saranno raggruppate le partite inferiori a questa cifra, quindi fino a 999,99.  
