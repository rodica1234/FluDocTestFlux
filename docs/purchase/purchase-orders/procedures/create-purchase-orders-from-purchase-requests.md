---
title: Creazione automatica ordini
sidebar_position: 2
showLastUpdateTime: true
---

La procedura si trova sul percorso *Acquisti > Ordini Fornitori > Procedure* e permette di creare ordini fornitori partendo da **Richieste di acquisto** oppure da **Ordini clienti**.

## Filtro Da

In questa tab vengono scelti i documenti di origine dai quali creare l'ordine fornitore. E' necessario quindi procedere nel seguente modo:     

**1**.  Filtrare la *Richiesta di acquisto* oppure l'*Ordine cliente* dal quale verrà generato l'*Ordine fornitore* e selezionare i dati dalle griglie: quella superiore contiene la richiesta/l'ordine e quella inferiore gli articoli corrispondenti.   

**2**.  Premere il pulsante **Genera prototipi ordine** per passare al tab successivo.
 

## Scelta fornitore

Dopo aver generato il *Prototipo ordine* è possibile confermarlo in base ai *Fornitori preferenziali* degli articoli o ai *Listini fornitori*. In questa tab, quindi, è necessario scegliere il fornitore dal quale ordinare. 

**3**.  Selezionare il fornitore per ciascun articolo. Viene proposto in automatico sulla base del parametro selezionato nella sezione superiore (per il funzionamento di ciascun flag vedere il tab [Parametripurchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests#parametri)).

Le righe articolo senza fornitore possono essere selezionate con il tasto destro del mouse per essere spostate, sempre con il mouse, sotto il fornitore desiderato che abbia già almeno una riga articolo abbinata. In alternativa è possibile utilizzare il pulsante *Scegli fornitore* nella ribbon bar.   

**4**.  Selezionare nella griglia superiore i prototipi o solo una parte dei loro articoli e confermare i prototipi selezionati con il pulsante **Conferma i prototipi d'ordine selezionati** per generare i pre-ordini fornitori. Le griglie secondarie, *Articoli* e *Analitica*, visualizzeranno i dettagli della riga selezionata nella prima griglia.

*Pulsanti specifici*:

> **Esplodi**: permette di esplodere tutte le righe della griglia con i documenti.   
> **Cancella il prototipo di ordine selezionato**: permette di cancellare il prototipo di ordine per gli articoli selezionati nella griglia superiore.   
> **Scegli il fornitore**: permette di aprire l'help contatti per scegliere il fornitore; diventa attivo se è stato selezionato almeno un prototipo/articolo.   
> **Conferma i prototipi di ordine selezionati**: permette di generare gli ordini fornitori in base ai prototipi selezionati.   


## Prototipi ordine

Vengono visualizzati i pre-ordini per la creazione degli ordini fornitore.

La griglia superiore contiene il dettaglio degli ordini fornitore che si stanno creando; contiene il *Tipo ordine fornitore* (proposto dai *Parametri* ma modificabile), il numero dell'ordine, la data di creazione e il fornitore.

La griglia inferiore mostra i dettagli degli articoli contenuti in ciascun ordine. I dati modificabili in questa griglia sono: *Quantità confermata*, *IVA*, *Tipo fatturato acquisti*.
    
> **Quantità originale**: indica la quantità inserita nel documento di origine (quindi nella RDA o nell'ordine cliente).    
> **Quantità disponibile**: indica la disponibilità dell'articolo su tutti i magazzini considerati nel *Calcolo disponibilità* alla data odierna, considerando le disponibilità provenienti dalle aree selezionate nei *Parametri*.   
> **Quantità confermata**: se la *Quantità disponibile* è minore della *Quantità originale* viene proposta in automatico quest'ultima. In alternativa sarà proposta quantità nulla e per proseguire sarà necessario valorizzare questo campo.    


**5**.  L'ultimo passo è la generazione degli ordini mediante il pulsante **Genera ordini fornitore**. In alternativa è possibile aggiungere le righe a ordini già esistenti con il pulsante **Ordini**.        


## Parametri

#### Scegli il fornitore a cui ordinare in base a

- **Fornitore e listino prezzi da richiesta di acquisto**: questo flag propone il fornitore e il listino di acquisto presenti nella RDA;      
- **Fornitore e listino prezzi da fornitore preferenziale di default**: questo flag propone il [fornitore preferenzialeerp-home/registers/items/create-new-items/item-registry/preferential-vendors) di default dell'articolo;      
- **Fornitore e prezzi da ultimo acquisto fatturato/ricevuto/ordinato**: questo flag ricerca il fornitore e i prezzi dell'articolo nell'ultima fattura di acquisto ricevuta; se non vengono gestite le fatture di acquisto, si cercherà nei documenti di trasporto, altrimenti negli ordini;     
- **Fornitore con migliore prezzo di acquisto**: il flag attivo permette di selezionare il fornitore con il prezzo di acqusito minore;    
- **Fornitore con minore tempo di approvvigionamento**: il flag attivo permette di selezionare il fornitore con il minor tempo di approvvigionamento tra quelli inseriti nel tab *Fornitori preferenziali* dell'anagrafica articoli;   
- **Fornitore con migliore condizione di pagamento**: il flag attivo permette di selezionare il fornitore con la soluzione di pagamento con la scadenza massima.

#### Parametri di creazione

- **Tipo ordine fornitore da richieste di acquisto**: indica il *Tipo ordine fornitore* da creare a partire dalle RDA; può essere modificato nei *Prototipi ordine*.    
- **Tipo ordine fornitore da richieste di acquisto**: indica il *Tipo ordine fornitore* da creare a partire dagli ordini clienti; può essere modificato nei *Prototipi ordine*.    
- **Raggruppa per articolo**

#### Dati da utilizzare se non ci sono codificati per ogni articolo

- **Tipo fatturato acquisti**: se nella riga articolo manca il tipo fatturato acquisti;    
- **Aliquota IVA**: se nella riga articolo manca il codice IVA;    
- **UM**: se si vogliono creare gli ordini anche con l'unità di misura alternativa;    
- **Tempo di approvvigionamento**: per determinare le date di consegna.   

#### Considera la disponibilità

Attivando questo flag nel tab *Prototipi ordine* sarà visibile la colonna *Quantità disponibile*. 

A seconda dei flag selezionati nella sezione sottostante saranno considerate le disponibilità proveniente dalle seguenti aree: conto lavoro, acquisti, vendite, pianificazione, produzione, magazzino.

## Operazioni

In base al tipo di documento di origine (*Richiesta di acquisto* oppure *Ordine cliente*), riporta lo storico di tutte le creazioni eseguite, con il dettaglio dell'operatore, gli Ordini fornitori creati e i loro dettagli.

Gli ordini fornitore possono essere visualizzati con doppio clic sulle righe dei tab **Operazioni**/**Dettagli**.

*Pulsante specifico*:

> **Ripristino operazioni selezionate**: permette di annullare l'ordine fornitore creato e di ripristinare la richiesta di acquisto.
