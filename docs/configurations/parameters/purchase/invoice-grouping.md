---
title: Parametri raggruppamento Fatture di acquisto
sidebar_position: 7
---

I parametri di raggruppamento consentono di definire come suddividere i documenti durante le procedure di evasione. A tal fine, è possibile utilizzare specifici flag per raggruppare i documenti in base a diverse proprietà, come ad esempio la categoria, il tipo di documento, o altre caratteristiche rilevanti.            
Questi parametri generali di raggruppamento devono essere configurati una sola volta e saranno applicati automaticamente a tutte le procedure, risultando validi per tutti i clienti e fornitori. Tuttavia, se un cliente o un fornitore richiede un comportamento diverso rispetto a quello impostato nei parametri generali, sarà necessario personalizzare i parametri di raggruppamento all'interno della loro specifica anagrafica.           
In questo modo, si garantisce una gestione flessibile e adattabile delle evasioni, permettendo di soddisfare le esigenze specifiche di ogni cliente o fornitore, pur mantenendo una configurazione centralizzata e coerente per la maggior parte delle operazioni.

In questa maschera vengono decise le regole di raggruppamento per le procedure:   
-  [**Valorizzazione DDT di acquisto**purchase/purchase-invoices/procedures/purchase-delivery-note-valorization);  
-  [**Valorizzazione DDT di rientro**purchase/purchase-invoices/procedures/return-delivery-notes-valorization).   

E' necessario flaggare le colonne che prevedono i raggruppamenti che si vogliono prevedere per queste evasioni. 

:::note Nota
Se nell'anagrafica del fornitore, nel tab *Parametri raggruppamento per cliente/fornitore*, sono state inserite delle condizioni di raggruppamento differenti, queste avranno priorità rispetto ai parametri generali.
:::

Quando la fattura viene creata a partire da un unico DDT vengono riportati tutti i dati di testata presenti nel documento di partenza. Per le fatture create da più DDT invece, vengono riportati i dati dell'anagrafica fornitore.    

*Campi specifici*:

> **Riepilogativa**: se attivo, al momento della valorizzazione di più DDT sarà creata un'unica fattura per fornitore. Se non è attivo sarà sempre creata una fattura per ciascun DDT valorizzato. Il raggruppamento funziona solo per i *Tipi DDT* (di Acquisto o di Vendita, a seconda dell'operazione selezionata) che hanno codificato lo stesso *Tipo fattura* da creare. Tutti i flag successivi devono essere utilizzati in concomitanta con questo flag.    
>
> **Raggruppamento per tipo documento**: se attivo, saranno raggruppati in un'unica fattura tutti i documenti che hanno lo stesso *Tipo DDT*.     
>
> **Raggruppamento per anno**: attivando questo flag sarà effettuato un raggruppamento per anno di creazione dei DDT.   
>
> **Raggruppamento per mese**: per poter effettuare un raggruppamento per mese di creazione dei DDT è necessario attivare anche il flag precedente.    
>
> **Raggruppamento per cambio**: se attivo, i documenti con la stessa divisa e stesso cambio sranno raggruppati in un'unica fattura.    
>
> **Raggruppamento per ordine**: questo flag viene utilizzato solo per la *Creazione DDT e fatture di vendita da Picking* (vedi [Parametri raggruppamento DDTconfigurations/parameters/sales/dn-grouping) e [fattureconfigurations/parameters/sales/invoice-grouping)).    
>
> **Raggruppamento per progetto**: attivando questo flag sarà effettuato un raggruppamento per progetto. Il raggruppamento funziona anche per i progetti inseriti a livello di riga articolo; se alcune delle righe articolo non hanno un progetto associato sarà creata una fattura diversa per tutti gli articoli che non lo contengono. Quando il progetto è stato inserito nella testata dei documenti di origine esso sarà riportato anche nella testata dei documenti di destinazione, in alternativa sarà mantenuto solo sulle righe articolo.    
>
> **Raggruppamento per tipo e soluzione di pagamento**: attivando questo flag sarà effettuato un raggruppamento sulla base del tipo e della soluzione di pagamento inserito nel DDT; tale dato sarà riportato nella testata della fattura creata.   
>
> **Raggruppamento per destinazione**: attivando questo flag sarà effettuato un raggruppamento sulla base della destinazione inserita all'interno dei DDT nel tab *Trasporto*; tale dato sarà riportato nella testata della fattura creata, nel tab *Spedizione*.     