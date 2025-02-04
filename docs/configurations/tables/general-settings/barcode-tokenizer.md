---
title: Barcode tokenizer
sidebar_position: 48
---

Gran parte delle operazioni che possono essere effettuate in Fluentis WMS, possono essere agevolate e velocizzate grazie all’utilizzo del campo *Codice barcode*, che se opportunamente configurato, rielabora in maniera intelligente i dati acquisiti tramite la lettura del barcode e autonomamente va ad inserire i valori nei campi corrispondenti.
Questo da un grande vantaggio all’operatore sia in termini di velocità di inserimento che di efficienza, dato che dovrà leggere i dati sempre nello stesso campo *Codice barcode* senza avere il problema di dover cambiare il focus. 

Nella tabella di testata i campi da inserire sono: 

> **Codice**: indica il prefisso del barcode tokenizer;        
> **Descrizione**: indica la descrizione del barcode tokenizer;        
> **Separatore**: indica il carattere separatore del barcode tokenizer.

Nella tabella di dettaglio vanno definiti gli oggetti e le proprietà che andremo a leggere nel barcode.

Il barcode deve essere creato utilizzando **CodiceBarcode** + **Separatore** + **OggettoBusiness.Proprietà** [ + **Separatore** + **OggettoBusiness.Proprietà** ]  

L’ultima parte **OggettoBusiness.Proprietà** può essere ripetuta più volte, sarà la Lunghezza o il **Separatore** definito in tabella che permetterà di individuare i valori corretti.       
 
Di norma, in un barcode tokenizer, è presente un solo **Oggetto principale**, il quale può essere composto a sua volta da più **Oggetti business**.      
Questi **Oggetti business** posso essere proprietà dirette dell'**Oggetto principale** (in questo caso l'**Oggetto business** sarà uguale all'**Oggetto principale**) oppure possono essere proprietà appartenenti ad altri **Oggetti business**, ma comunque referenziati nell'**Oggetto principale**.          
Possiamo dire che l'**Oggetto principale** che viene restituito dalla lettura del barcode è costituito dalla composizione di tutte le proprietà degli **Oggetti business** inseriti.     

:::note Nota
Ovviamente a seconda del set di dati su cui viene utilizzato, bisogna assicurarsi che la configurazione individui un unico risultato.
:::

Di seguito alcuni esempi di costruzione del Barcode Tokenizer:

Esempio: Item-MOB-ART

| Codice | Descrizione | Separatore | Oggetto business | Proprietà | Lunghezza | Separatore | Sequenza | Oggetto principale |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| Item | Item Barcode | - | FSItemClass | Code | 3 | - | 10 | FSItem |
| Item | Item Barcode | - | FSItem | Code | 50 | - | 20 | FSItem |

Esempio: Loc-01-L1

| Codice | Descrizione | Separatore | Oggetto business | Proprietà | Lunghezza | Separatore | Sequenza | Oggetto principale |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| Loc | Location Barcode | - | FSWarehouse | Code | 10 | - | 10 | FSLocation |
| Loc | Location Barcode | - | FSLocation | CodeLocation | 100 | - | 20 | FSLocation |

Esempio: UDC-2023-5-21

| Codice | Descrizione | Separatore | Oggetto business | Proprietà | Lunghezza | Separatore | Sequenza | Oggetto principale |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| UDC | UDC Barcode | - | FSLoadingUnit | Year | 4 | - | 10 | FSLoadingUnit |
| UDC | UDC Barcode | - | FSLoadingUnit | Group | 4 | - | 20 | FSLoadingUnit |
| UDC | UDC Barcode | - | FSLoadingUnit | Number | 4 | - | 30 | FSLoadingUnit |

Esempio: Lot-MOB-ART-123

| Codice | Descrizione | Separatore | Oggetto business | Proprietà | Lunghezza | Separatore | Sequenza | Oggetto principale |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| Lot | Lotto | - | FSItemClass | Code | 3 | - | 10 | FSBatchRegister |
| Lot | Lotto | - | FSItem | Code | 50 | - | 20 | FSBatchRegister |
| Lot | Lotto | - | FSLotRegister | Code | 05 | - | 30 | FSBatchRegister |

Esempio: MesPop-10824

| Codice | Descrizione | Separatore | Oggetto business | Proprietà | Lunghezza | Separatore | Sequenza | Oggetto principale |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| MesPop | Production Order Phase | - | FSProductionOrderPhase | Id |  | - | 10 | FSProductionOrderPhase |

Esempio: Qta-50

| Codice | Descrizione | Separatore | Oggetto business | Proprietà | Lunghezza | Separatore | Sequenza | Oggetto principale |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| Qta | Quantity | - |  |  | 100 | - | 10 |  |

Esempio: ItemQta-MOB-ART-35

| Codice | Descrizione | Separatore | Oggetto business | Proprietà | Lunghezza | Separatore | Sequenza | Oggetto principale |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| ItemQta | Item Quantity | - | FSItemClass | Code | 3 | - | 10 | FSItem |
| ItemQta | Item Quantity | - | FSItem | Code | 50 | - | 20 | FSItem |
| ItemQta | Item Quantity | - |  |  | 100 | - | 30 |  |

Gli ultimi esempi non rientrano nella logica descritta per il barcode tokenizer, questo perché si voleva avere un modo per mappare nel barcode anche la quantità che però non è attribuibile a nessun Oggetto/Proprietà nel momento della lettura.
Ovviamente questa logica va implementata nelle singole form.


