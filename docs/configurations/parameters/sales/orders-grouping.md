---
title: Parametri raggruppamento ordini
sidebar_position: 7
---

:::tip[FAst Start]
La tabella è interessata dalla procedura di [**Fast Start**guide/fast-start)

Nel caso in cui si intenda configurare manualmente fare riferimento alla check list della pagina linkata
:::

I parametri di raggruppamento consentono di definire come suddividere i documenti durante le procedure di evasione. A tal fine, è possibile utilizzare specifici flag per raggruppare i documenti in base a diverse proprietà, come ad esempio la categoria, il tipo di documento, o altre caratteristiche rilevanti.            
Questi parametri generali di raggruppamento devono essere configurati una sola volta e saranno applicati automaticamente a tutte le procedure, risultando validi per tutti i clienti e fornitori. Tuttavia, se un cliente o un fornitore richiede un comportamento diverso rispetto a quello impostato nei parametri generali, sarà necessario personalizzare i parametri di raggruppamento all'interno della loro specifica anagrafica.           
In questo modo, si garantisce una gestione flessibile e adattabile delle evasioni, permettendo di soddisfare le esigenze specifiche di ogni cliente o fornitore, pur mantenendo una configurazione centralizzata e coerente per la maggior parte delle operazioni.

In questa maschera vengono decise le regole di raggruppamento per la procedura:  
- **Creazione ordine di vendita da offerte**: nel caso di evasione di più offerte in ordine, è possibile raggruppare le offerte in base alle seguenti proprietà:
> - tipo documento: le offerte con lo stesso [Tipoconfigurations/tables/sales/sales-offer-type) creeranno un singolo ordine
> - anno: le offerte dello stesso anno creeranno un singolo ordine
> - mese: le offerte dello stesso mese creeranno un singolo ordine
> - cambio: le offerte con lo stesso cambio creeranno un singolo ordine
> - progetto: le offerte con lo stesso progetto in [Testata/new-offer/header) creeranno un singolo ordine
> - tipo e soluzione di pagamento: le offerte con le stesse condizioni di pagamento creeranno un singolo ordine
> - destinazione: le offerte con la stessa destinazione e vettore creeranno un singolo ordine
 
E' necessario flaggare le colonne che prevedono i raggruppamenti che si vogliono prevedere per questa evasione. 
Il flag **Riepilogativa** è fondamentale per creare un unico documento avendo diversi documenti di partenza. Gli altri flag invece riguardano i raggruppamenti particolari.           
La colonna **Priorità** non è utilizzata al momento. 
