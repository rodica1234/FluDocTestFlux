---
title: Distinta Base
sidebar_position: 2
---

**Introduzione**: [Distinta baseerp-home/registers/production/bill-of-materials/bom-intro) 

Come accennato già, dalla form [Assiemierp-home/registers/production/bill-of-materials/search-and-insert-assemblies), selezionando la distinta base che si vuole visualizzare e facendo doppio click, si entra nel dettaglio della distinta stessa in modifica e si visualizza la sua rappresentazione grafica ad albero.

La distinta base è una struttura multilivello, ad albero in cui si ha un legame di tipo padre-figlio. Il [figlio-intro#a) può essere a sua volta padre e così via per un indeterminato di livelli fino ad arrivare all'ultimo livello dove si trovano i materiali.

La schermata si presenta suddivisa in due parti: nella parte sinistra si trova la rappresentazione ad albero della distinta base, mentre nella parte destra si vedranno nel dettaglio le informazioni relative ai vari componenti dell'albero.


## Struttura della distinta base

Per visualizzare l'albero, basterà cliccare con il mouse sul **+** accanto al codice dell'articolo oppure cliccare il pulsante **Esplodi** pe visualizzarlo tutto.  In questo modo si apriranno a cascata i vari livelli della distinta base ed ogni livello sarà rappresentato da icone che andranno ad identificare la categoria di appartenenza di ogni articolo o meglio il tipo di approvvigionamento dell'articolo:

![](/img/it-it/erp-home/registers/production/bill-of-materials/assemblies/structure-management/image02.png) : rappresenta gli articoli di produzione;

![](/img/it-it/erp-home/registers/production/bill-of-materials/assemblies/structure-management/image03.png) : rappresenta gli articoli di acquisto;

![](/img/it-it/erp-home/registers/production/bill-of-materials/assemblies/structure-management/image04.png) : rappresenta gli articoli di conto lavoro.

Il tipo di approvvigionamento dell'articolo viene indicato all’interno dei [Parametri MRPconfigurations/parameters/production/mrp-parameters/search-mrp-parameters) dell’articolo stesso.

La distinta può essere costruita e modificata molto semplicemente utilizzando gli appositi pulsanti: **inserisci**, **cancella componente** o **copia**, **taglia** ed **incolla componente**.        
Ad esempio, posizionandosi su un elemento dell’albero e premendo il pulsante **inserisci componente**, si ha la possibilità di inserire un articolo che diventerà figlio dell’articolo selezionato inizialmente; mentre, premendo il pulsante cancella componente, questo verrà rimosso dalla distinta.            
I pulsanti **copia**, **taglia** ed **incolla componente**, permettono di copiare, tagliare o incollare l’articolo selezionato all’interno dell’albero della distinta base.            
Inoltre, è possibile spostare l’articolo nel livello e nella posizione desiderata all’interno dell’albero tramite l’utilizzo del *Drag and Drop* in maniera semplice e veloce.       

Dopo aver esploso il menù a cascata, si ha la possibilità, per l'articolo selezionato, di utilizzare i seguenti **pulsanti specifici**:

> **Inserisci componente**: permette di inserire un nuovo sottolivello di distinta;  
> **Cancella componenti**: permette di cancellare il componente selezionato;    
> **Esplodi**: permette di esplodere completamente l'albero della distinta base;     
> **Copia componente**: permette di copiare il componente selezionato;     
> **Taglia componente**: permette di tagliare il componente selezionato;     
> **Incolla componente**: permette di incollare il componente selezionato;     
> **Parametri MRP**: permette di aprire i [Parametri MRPconfigurations/parameters/production/mrp-parameters/search-mrp-parameters) del componente selezionato;     
> **Ciclo di lavoro**: permette di aprire il  [Ciclo di lavoroerp-home/registers/production/routes/new-route) del componente selezionato;       
> **Aggiorna struttura**: permette di aggiornare tutte le informazioni della distinta base (per esempio se è stata modificata la descrizione di un articolo della distinta, usando questa funzione l'applicazione mostra la descrizione aggiornata di quell'articolo). 

Selezionando uno dei componenti della distinta si visualizza nella parte destra della finestra la lista di informazioni relative al livello superiore rispetto al componente selezionato (nella parte superiore destra della finestra chiamata **Assieme**) e al componente stesso (nella parte inferiore destra della finestra denominata **Componente**).

**Assieme**: vengono visualizzati la versione della distinta base, classe, codice, descrizione e variante del livello superiore, la quantità del livello superiore alla quale si riferisce la quantità del componente e la sua unità di misura; riguardo alla quantità si può definire se si tratta di una quantità fissa o variabile ovvero se con quella distinta si andrà sempre a produrre una determinata quantità oppure se potrà essere diversa di produzione in produzione; si potrà poi definire se questo assieme è un **Assieme fittizio** ovvero un assieme che nell'elaborazione della schedulazione o dell'MRP venga non considerato; vi è poi un campo **Note** in cui è possibile inserire eventuali note relative al padre e vi sono i campi relativi alle date di validità dell'assieme, alla data in cui è stato inserito l'assieme e la data in cui è stato è stato modificato l'ultima volta.

:::note Nota
**Data validità**: la data di validità dell'assieme permette di verificare alla data inserita la composizione della distinta base; questo permette di mantenere uno storico di tutte le modifiche effettuate su quella distinta. Ad esempio, cancellando la data di validità, vengono mostrati tutti i componenti usati per quella distinta dal momento in cui è stata creata, evidenziando in rosso i componenti che non sono più validi ad oggi. 
:::

**Componente**: vengono visualizzati classe, codice, descrizione e variante del componente selezionato nell'albero, l'informazione riguardo al fatto che il componente sia fittizio o no (ereditata dall’anagrafica articolo), e l'unità di misura del componente. 

Esiste inoltre il flag *Livello fittizio*, che permette di decidere se limitatamente a quella distinta base il componente selezionato debba essere considerato fittizio. 

Nel caso di *articolo fittizio* o di *livello fittizio*, la procedura di *Schedulazione Generale* e l'*MRP* nel corso dell'esplosione dei fabbisogni “saltano” il componente designato come fittizio o come livello fittizio, leggendo il fabbisogno dei suoi eventuali componenti.

Legati al componente sono anche tutti i seguenti tab:

### Dati generali  

**Quantità**: rappresenta la quantità di componente prevista per produrre la quantità di riferimento del suo livello superiore;  
**Unità di misura di utilizzo**: potrebbe essere diversa dalla UM gestionale del componente stesso; 
**Fissa** indica che per produrre il livello superiore si utilizzerà sempre la stessa quantità di componente;      
**Variabile** indica che la quantità di componente per produrre il figlio cambierà di volta in volta (per esempio al variare della quantità del padre potrà variare anche la quantità del figlio utilizzata);    
**Percentuale di scarto** preimpostata per il componente, che permette di fare in modo che l'esplosione dei fabbisogni aumenti di quella percentuale la quantità da utilizzare del componente stesso;      
**Percentuale di scostamento sulla quantità negativa e positiva**: indica la percentuale per l'utilizzo del componente in più o in meno si può utilizzare rispetto alla quantità indicata per restare nella tolleranza stabilita;  
**Inizio validità** e **Fine validità**: permettono di decidere che un componente sia valido da una certa data o fino ad una certa data;      
**Priorità**: indica l'ordinamento con il quale deve essere visualizzato il componente nell'albero della distinta;        
**Movimentabile**: permette di decidere se il componente debba o non debba essere movimentato a magazzino. Questo flag influirà su tutti i movimenti di magazzino, perchè nella creazione dei movimenti vengono presi in considerazione solamente gli articoli che hanno il flag attivo, mentre gli altri non verranno movimentati;      
**Critico**: se il flag è attivo serve per indicare la criticità di quel componente (per ora è utilizzato solo per la [Schedulazione a capacità finita/ms-master-scheduling/finite-capacityscheduling));          
**Livello fittizio**: permette di decidere se, limitatamente a quella distinta base, il componente selezionato debba essere considerato fittizio o meno; inoltre, fa si che la procedura di *Pianificazione Generale* e l'*MRP* saltino quel componente nel corso dell'esplosione dei fabbisogni;  
**Riferimento schema**: permette di inserire una nota libera relativa al componente (ad esempio il riferimento schema del disegno tecnico);              
**Note**: permette di inserire una nota libera relativa al componente.           

### Alternative

In questo tab possono essere impostate in ordine di priorità le alternative al componente della distinta base nel caso in cui il componente non sia disponibile al momento della produzione di quella distinta.

Queste alternative, vengono considerate nelle registrazioni di magazzino se viene usata una causale che ha i flag **Alternative** e o **Alternative miste** attivi.   
Mentre le procedure di Pianificazione e MRP prenderanno in considerazione le alternative in conseguenza dell'attivazione o meno di appositi flag: per la schedulazione il flag da attivare sarà **Considera anche le alternative dei materiali** che andrà impostato nella schermata di [Pianificazione generale/ms-master-scheduling/general-schedule#parametri-di-schedulazione-generale), nel tab *Parametri*; per la procedura MRP il flag da impostare sarà **Considera anche le alternative dei materiali** che andrà impostato nella finestra *Parametri* della procedura [MRP/ms-master-scheduling/mrp/). 

In tutti i casi precedentemente elencati, deve essere anche attivato il flag **Considera anche le alternative dei materiali** presente nella finestra [Parametri MRPconfigurations/parameters/production/mrp-parameters/search-mrp-parameters) dell'articolo.

### Fasi di scarico

In questo tab può essere impostata la fase durante la quale deve essere scaricato il componente.

Ci sono tre tipi di scarico materiale ovvero **Automatico**, **Con lista** e **Manuale** che vengono impostati nei [Parametri MRPconfigurations/parameters/production/mrp-parameters/search-mrp-parameters).

Nel caso in cui si opti per lo scarico manuale, **Fluentis** considera in automatico che lo scarico del materiale (non assegnato ad un fase) venga fatto, nel caso si abbiano più fasi per quel prodotto, in corrispondenza dell'ultima fase che ha i flag *Movimentabile* e *Produttiva* abilitati. 

### Ciclo

In questo tab si visualizza la lista delle [fasiconfigurations/tables/production/standard-phases) che compongono il [ciclo di lavorazioneerp-home/registers/production/routes/new-route) dell'articolo selezionato.

### Componenti

In questo tab vengono visualizzati gli eventuali componenti dell'articolo selezionato. È possibile anche inserire nuovi componenti e modificare quelli esistenti da questo tab oltre che attraverso i pulsanti presenti nella ribbon bar (Inserisci/Copia/Incolla/Taglia e Cancella componenti).

### Note

In questo tab si possono inserire eventuali note e caricare file o immagini che devono essere considerate in fase di produzione.

### Extra data - Distinta base

In questo tab è possibile visualizzare ed eventualmente modificare gli extra data relativi alla distinta base del componente selezionato. Questo tab è attivo solo se il componente ha una distinta base.       

### Extra data - Componenti

In questo tab è possibile visualizzare ed eventualmente modificare gli extra data relativi al componente selezionato.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).