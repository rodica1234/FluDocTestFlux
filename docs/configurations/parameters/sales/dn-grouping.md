---
title: Parametri raggruppamento DDT
sidebar_position: 8
---

:::tip[FAst Start]
La tabella è interessata dalla procedura di [**Fast Start**guide/fast-start)

Nel caso in cui si intenda configurare manualmente fare riferimento alla check list della pagina linkata
:::

I parametri di raggruppamento consentono di definire come suddividere i documenti durante le procedure di evasione. A tal fine, è possibile utilizzare specifici flag per raggruppare i documenti in base a diverse proprietà, come ad esempio la categoria, il tipo di documento, o altre caratteristiche rilevanti.            
Questi parametri generali di raggruppamento devono essere configurati una sola volta e saranno applicati automaticamente a tutte le procedure, risultando validi per tutti i clienti e fornitori. Tuttavia, se un cliente o un fornitore richiede un comportamento diverso rispetto a quello impostato nei parametri generali, sarà necessario personalizzare i parametri di raggruppamento all'interno della loro specifica anagrafica.           
In questo modo, si garantisce una gestione flessibile e adattabile delle evasioni, permettendo di soddisfare le esigenze specifiche di ogni cliente o fornitore, pur mantenendo una configurazione centralizzata e coerente per la maggior parte delle operazioni.

In questa maschera vengono decise le regole di raggruppamento per le procedure:  
-  **Creazione DDT di vendita da Picking**;  
-  **Creazione DDT di vendita da Liste di prelievo UDC**;  
-  **Creazione DDT di vendita da Liste Trasferimento UDC**;  
-  **Creazione DDT di vendita da Pos**;
- **Creazione DDT di vendita da ordine cliente**.      

Nel caso di evasione di più documenti, è possibile raggrupparli in base alle seguenti proprietà, inserendo i relativi flag:
> - tipo documento: i documenti di origine con lo stesso [Tipoconfigurations/tables/sales/sales-order-types) creeranno un singolo DDT
> - anno: i documenti di origine dello stesso anno creeranno un singolo DDT
> - mese: i documenti di origine dello stesso mese creeranno un singolo DDT
> - cambio: i documenti di origine con lo stesso cambio creeranno un singolo DDT
> - progetto: i documenti di origine con lo stesso progetto in [Testata-orders/create-new-sales-orders/header) creeranno un singolo DDT
> - tipo e soluzione di pagamento: i documenti di origine con le stesse condizioni di pagamento creeranno un singolo DDT
> - destinazione: i documenti di origine con la stessa destinazione e vettore creeranno un singolo DDT  
> - cointestatari: i documenti di origine con lo stesso tipo operazione per la gestione dei cespiti creeranno un singolo DDT

E' necessario flaggare le colonne che prevedono i raggruppamenti che si vogliono prevedere per queste evasioni.      
Il flag **Riepilogativa** è fondamentale per creare un unico documento avendo diversi documenti di partenza. Gli altri flag invece riguardano i raggruppamenti particolari.     
La colonna **Priorità** non è utilizzata al momento. 