---
title: Tipi offerte di vendita
sidebar_position: 1
---

La tabella è utilizzata per determinare le proprietà di un'offerta di vendita.

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

Per inserire nuovi record è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**. 

**Codice/Descrizione:** campi in cui viene indicato il codice e la descrizione della tipologia del documento (il codice che si inserisce deve essere univoco).

**Modifica versione**: questo flag indica le tipologie di offerta per le quali gestire le versioni.

**Prezzo Ivato**: permette al sistema di recuperare il prezzo di vendita dai listini o dall'anagrafica articolo e lo riporta con l'aggiunta dell'IVA. Se non trova il listino, nel caso, per esempio, di listino scaduto o listino in valuta non compatibile, recupera i costi o i prezzi dall'anagrafica articolo e li riporta comprensivi di IVA. I costi e i prezzi in anagrafica sono in EUR, quindi il sistema li andrà anche a convertire nella valuta del cliente.

**Numerazione**: in questo campo va inserito il codice della numerazione appropriato. Per approfondimenti sulla numerazione dei documenti si rimanda all'articolo [Numerazioni Fluentisconfigurations/tables/fluentis-numerations).

**Tipo ordine cliente**: in questo campo viene indicata la tipologia di Ordine di vendita da creare al momento della Conversione dell'offerta con l'apposita procedura.    

**Listino di vendita**: questo tipo listino, di tipo  generico, viene utilizzato per la ricerca dei prezzi nel caso in cui nel tab listini dell’anagrafica del cliente o contatto non ci sia nessuna tipologia di listino inserita. Solitamente si utilizza quando si fanno offerte a contatti CRM che non sono ancora stati acquisiti come clienti e per i quali non siano stati inseriti i tipi listini nel tab Listini dell’anagrafica.

**Stampa e numero di copie**: attraverso questi campi viene definita la stampa di default e il numero di copie da stampare; ricordiamo che per stampare la stampa di default è necessario selezionare *Stampe multiple* al momento della stampa.

**Tipo prototipo articolo**: questo campo contiene la tipologia di prototipo articolo da creare nella procedura di creazione prototipo dall'interno dell'offerta. 

**Tipo opportunità**: se nel Tipo Offerta viene collegato un Tipo opportunità, al salvataggio dell’Offerta viene creata una Nuova Opportunità se in testata Offerta non ne viene inserita una preesistente; se inserita, l’Opportunità preesistente viene aggiornata.

**Gestione cespiti e Tipo operazione**: il flag permette di gestire i cespiti per questa tipologia di documento. Nel campo successivo viene indicata la tipologia di operazione dei cespiti, che nel caso delle vendite potrà esere un’alienazione totale, parziale oppure una distruzione.      

**Tipo sconto/Descrizione**: in questa colonna è possibile associare la tipologia di sconto da proporre quando gli sconti vengono inseriti direttamente nella colonna *Sconti articolo* della griglia articoli dei documenti (per maggiori dettagli vedi l'articolo [Gestione Widget sconti semplificato-flow/discount-widget)).

