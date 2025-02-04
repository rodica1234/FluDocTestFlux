---
title: Esempio
sidebar_position: 6
---

## Creazione di un Extra Data "Colore" Attivato in Anagrafica articolo e Ordine fornitore, ma non negli altri documenti

La creazione di un **Extra Data** inizia dalla testata in cui è necessario inserire:                
**Codice**: identificativo;            
**Tipo contenuto**: a scelta tra [Oggettoconfigurations/utility/extra-data/extradata/new-extradata-object), [Sempliceconfigurations/utility/extra-data/extradata/new-extradata-simple) o Data source;       
**Tipo Widget**: si può scegliere tra un widget a combo box, oppure con codice o descrizione a completamento automatico;        
**Nome**: inseriamo "Colore chiaro", che è presente a dizionario;            
**Descrizione**: inseriamo "Colore chiaro";                        
**Oggetto business**: quindi inseriamo FSColor perchè da qui prendiamo i vari colori.         
E' possibile inserire dei **Diritti** di visualizzazione e/o modifica e delle **Date di validità**.       

![](/img/it-it/configurations/utility/extradata/example/header.png) 

Nella griglia **Attivazioni** inseriamo:            
**Oggetto padre**: vogliamo che l'Extra Data si attivi in FSPurchaseOrderItem ed in FSItem;           
**Proprietà**: ExtraData.        

![](/img/it-it/configurations/utility/extradata/example/active.png) 

Nella griglia **Propagazione**, selezionando l'Oggetto padre FSPurchaseOrderItem inseriamo:          
**Percorso proprietà**: Item, perchè l'ordine fornitore prende l'Extra Data dall'articolo;      
**Proprietà collezione**: ExtraData.

![](/img/it-it/configurations/utility/extradata/example/prop.png) 

Possiamo salvare e chiudere l'Extra Data.
Passiamo all'**Anagrafica articolo** nella quale inserire l'Extra Data nel tab **Extra Data**. 
Per aggiunere l'Extra data posizionarsi sulla griglia > tasto destro > Aggiungi Extra Data.

![](/img/it-it/configurations/utility/extradata/example/item.png) 

A questo punto passiamo alla creazione di una **Richiesta di acquisto** nella quale inseriamo l'articolo.   
Apriamo poi la procedura di **Creazione automatica ordini**, selezioniamo la RDA e creiamo da essa un Ordine fornitore.
Apriamo l'Ordine fornitore creato.
Nel tab **Articoli** > **Extra Data** è visibile l'Extra Data creato.   

![](/img/it-it/configurations/utility/extradata/example/order.png) 
