---
title: Gestione Prototipi
sidebar_position: 2
---

L’Area Prototipi rappresenta la risposta al modello ETO (Engineering To Order), tipico delle aziende del settore Manifatturiero o Impiantistico, che operano per commessa, provvedendo alla realizzazione di un prodotto “su misura” per uno specifico committente, potenzialmente sempre diverso.

*Integrazione con distinta base / cicli*

Dopo aver definito tutti i componenti necessari, a qualsiasi livello della distinta materiali dentro il prototipo, è possibile ottenere la creazione della distinta base relativa, ed analizzare rispetto a questa eventuali successive differenze. Tramite questa funzionalità è possibile evitare di dover ricostruire la struttura del prodotto nel modulo delle distinte basi, una volta che l’offerta viene confermata da parte del cliente. La medesima procedura è operativa anche nel contesto dei cicli di lavoro, dove avendo precedentemente definito le fasi di lavorazione, con la conferma dell’incarico è possibile ottenere anche il ciclo di lavorazione speculare a quanto definito all’interno della struttura del prototipo.



La form si compone di un'area con le informazioni di testata, dove è possibile inserire:

**Tipo di prototipo**: indica il tipo di prototipo da utilizzare;      
**Anno / numero / data**: indicano anno, numero e data creazione del prototipo, questi sono inseriti automaticamente;          
**Data di inizio e fine validità**: indica la data inizio e fine validità del prototipo;          
**Progetto**: indica il legame del prototipo ad un eventuale progetto;     
**Descrizione prototipo**: è un campo note libero.

:::note Nota
È possibile creare un prototipo per un articolo non codificato in anagrafica ed allo stesso modo inserire come componente un articolo non codificato.
:::

Sulla parte destra della testata vi è la possibilità di indicare le informazioni per l'articolo padre del prototipo:

- **Articolo codificato**         
Nel caso in cui si voglia creare un prototipo per un articolo codificato, indicando classe, codice e descrizione articoli, codice e descriizone variante e unità di misura;

- **Articolo non codificato**          
Nel caso in cui si voglia creare un prototipo per un articolo non codificato, indicando manualmente la descrizione dell'articolo ed eventualmente della variante, se si tratta di un articolo fittizio, l'unità di misura e il tipo di approvvigionamento.         
Questi dati saranno poi utilizzati per generare in automatico l'anagrafica del relativo articolo.       

I box relativi all'**Articolo codificato** e all'**Articolo non codificato** vengono proposti aperti nel caso in cui si stia creando un nuovo prototipo, dato che ancora non è possibile sapere se sarà utilizzato un articolo già codificato o meno; mentre, il box **Articolo codificato** viene visualizzato aperto e il box **Articolo non codificato** chiuso nel caso venga aperto un prototipo basato su un articolo codificato e viceversa se basato su un articolo non codificato.               

Al di sotto sono presenti tab specifici per:
- Prodotto    
- Componenti    
- Costi    

### Prodotto

In questo tab sono presenti una serie di informazioni, in sola lettura, relative all'articolo inserito in testata.

**Nota articolo**: venogno riportate le note inserite all'interno del tab [Noteerp-home/registers/items/create-new-items/item-registry/notes) dell'anagrafica articolo.       

**Pesi**: riporta l'unità di misura del peso ed i relativi valori di peso:lordi, netto e specifico.

**Giacenza magazzini**: riporta tutti i magazzini con le relative quantità della giacenza attuale dell'articolo.

**Costi**: riporta i valori dei costi: ultimo, medio, standard, standard anno prossimo e prezzo di vendita.

**Listini di vendita**: vengono visualizzati tutti i listini di vendita dove questo articolo compare.

**Nata prototipo**: permette di inserire una nota libera legata al prototipo (questo è l'unico campo editabile di questo tab).

### Componenti

Nel tab **Componenti** è possibile creare, modificare e visualizzare l'albero della distinta base del prototipo.
Tramite i pulsanti specifici, presenti nella ribbon bar, è possibile aggiungere o eliminare i singoli componenti dell'albero, in alternativa è anche possibile farlo tramite le opzioni attivabili con il tasto destro del mouse sopra sul componente dell'albero. Un'ulteriore possibilità, è quella di utilizzare il drag and drop per spostare un componente all'interno dell'albero.
Inoltre, è anche possibile, tramite il pulsante **Importa**, importare una distinta base già presente, quindi al componente che ho selezionato viene riportata sotto la distinta base importata.     
Nel tab **Generale** viene riportato l'articolo padre selezionato con classe, codice e descrizione; nei *Dati articolo padre* è possibile indicare la variante, la versione, la quantità del padre, l'unità di misura e se è un articolo fittizio.     
Infine vi è la possibilità di indicare il valore di *Esportazione BOM* tra *Mantieni distinta base* e *Nuova distinta base* sia sull'articolo padre che sui singoli componenti; questi vengono considerati quando esportiamo la distinta base appena creata nel prototipo e rispettivamente, permettono di mantenere il componente esistente (selezionando *Mantieni distinta base*) oppure sovrascriverlo a quello esistente (selezionando *Nuova distinta base*).      

È possibile gestire componenti codificati e non codificati all'interno del rispettivo box:

- **Articolo codificato**        
Nel caso in cui si voglia inserire nel prototipo un articolo codificato, indicando classe, codice e descrizione articoli, codice e descriizone variante e unità di misura;

- **Articolo non codificato**         
Nel caso in cui si voglia inserire nel prototipo  un articolo non codificato, indicando manualmente la descrizione dell'articolo ed eventualmente della variante, se si tratta di un articolo fittizio, l'unità di misura e il tipo di approvvigionamento.         
Questi dati saranno poi utilizzati per generare in automatico l'anagrafica del relativo articolo.   

All'interno dei box relativo ai **Dati componente**, è possibile indicare:          
> **Quantità**: indica la quantità del componente utilizzata per produrre la relativa *Quantità padre*;           
> **Unità di misura alternativa**: indica l'unità di misura alternativa del componente;              
> **Tipo costo materiale**: di default viene proposto il *Tipo costo materiale* che c'è nei [Parametri prototipazioneconfigurations/parameters/logistics/item-prototypes-parameters/), ovviamente può essere variato manualmente per ciascun componente. Nel caso in cui sia inserito un fornitore, la procedura per determinare il costo del componente, va in primo luogo a vedere se esiste un listino per quel fornitore ed inserisce il valore trovato indipendetemente dal *Tipo costo materiale* inserito. Quindi nel calcolo del costo del componente il valore de listino per il fornitore inserito ha sempre la priorità.           
> **Fornitore**: indica il fornitore del componente. In automatico viene riportato quello indicato come default nei fornitore preferenzile dell'articolo, ma può essere variato manualmente; se il componente è un articolo non codificato, il fornitore inserito, in fase di creazione dell'articolo, verrà utilizzato come fornitore di default nei fornitori preferenziali.       
> **Costo materiale**: indica il costo del materiale del componente in base al **Tipo costo materiale** inserito;         
> **Costo lavorazione**: indica il costo di lavorazione del componente dato dalla somma del costo manodopera e macchina;        
> **Costo componente**: indica il costo totale del componente dato dalla somma del costo materiale e lavorazione;             
> **Note**: permette di inserire una nota libera legata al componente.      

Se l'elemento seleziona nell'albero è un semilavorato nel tab **Componenti** è possibile visualizzare i componenti di primo livello da cui è costituito.

Nei tab **Dati extra - modello** e **Dati extra - componente** è possibile inserire rispettivamente gli extra data relativi all'articolo padre e al componente; per una descrizione approfondita sugli extra data si rimanda all'articolo [Extra dataconfigurations/utility/extra-data/extradata/new-extradata-simple).     

Nella parte inferiore della form, all'interno del tab **Ciclo** è possibile inserire le fasi delle lavorazioni relative ai singoli elementi dell'albero con i relativi tempi e costi di attrezzaggio e lavorazione; è anche possibile inserire un costo manualmente nel campo **Costo fase manuale** che avrà un priorità più alta nella fase di calcolo dei costi, sovrascrivendo il costo calcolato in base ai tempi delle fasi e ai centri di costo.    
Il tab **Ciclo** viene abilitato per gli articoli con **Tipo approvvigionamento** *Produzione* o *Conto lavoro* nei [Parametri MRPconfigurations/parameters/production/mrp-parameters/mrp-parameters-intro).       
Inoltre, nel tab **Fasi di scarico** viene indicata la fase in cui il relativo elemento deve essere scaricato dal magazzino.

*L'esportazione dei cicli è in fase di sviluppo.*

*Pulsanti specifici*:

> **Parametri prototipazione**: permette di aprire i parametri di prototipazione, nello specifico consultare Parametri prototipazione;    
> **Ricalcolo costi**: permette di ricalcolare i costi di quel prototipo basandosi sui costi che lo compongono;    
> **Anagrafica articoli**: permette di aprire l'anagrafica articoli relativa all'elemento selezionato;    
> **Parametri MRP**: permette di aprire i parametri MRP relativi all'elemento selezionato;    
> **Codifica articoli**: permette di codificare gli articoli non codificati;          
> **Distinta base**: permette di aprire la distinta base relativa all'elemento selezionato;    
> **Ciclo di lavoro**: permette di aprire il ciclo di lavoro relativo all'elemento selezionato;   
> **Analizza**: permette di confrontare i componenti presenti nel tab *Componenti* con quelli presenti nella distinta base presente in anagrafica, evidenziando i componenti che sono presenti in entrambe;        
> **Importa**: selezionando dall'albero un componente abbiamo la possibilità di poter agganciare a quel componente una distinta base già predefinita e da li poterla modificare;      
> **Esporta**: memorizza o sovrascrive la distinta base creata nei prototipi, funziona insieme al flag *Esportazione BOM* nel tabulatore *Generale* sezione *Componente*;    
> **Inserisci componente**: permette di aggiungere un componente all'elemento selezionato;    
> **Elimina componente**: permette di eliminare un componente dall'elemento selezionato;    
> **Espandere tutto**: permette di aprire l'intero albero della distinta base;    
> **Copia**: permette di copiare un elemento dell'albero della distinta base;     
> **Taglia**: permette di tagliare un elemento dell'albero della distinta base;     
> **Incolla**: permette di incollare un elemento dell'albero della distinta base appena copiato o tagliato;        

### Costi

Nel tab **Costi** vengono riportati i prezzi del prototipo in generale (di utilizzo interno), per specifico cliente, oppure anche per specifico cliente ma legato ad una offerta. Quindi è possibile avere più valorizzazioni di uno stesso prototipo. Le singolo valorizzazioni, hanno in comune tra loro solamente i dati contenuti nel tab *Componenti*, mentre possono differenziarsi per le condizioni che incidono sul valore dal costo industriale in poi.          
Un prototipo può essere associato ad un'offerta cliente direttamente dal documento stesso, quindi posso creare un nuovo prototipo o associarne uno già esistente attraverso gli appossiti pulsanti *Crea nuovo prototipo* e *Associa prototipo*.

Inoltre è possibile inserire eventuali *Costi diretti*, *Costi generali* e/o *Altri costi* che verranno presi in considerazione nel calcolo totale.      
Tutti i costi delle seguenti categorie: **Costi diretti**, **Costi generali** e **Altri costi** sono gestiti all'interno della tabella [Voci costoconfigurations/tables/general-settings/cost-elements/) dove tramite il campo *Tipo costo* è possibile definire in quale categoria sarà contenuto.

Nello specifico i campi presi in considerazione sono i seguenti:

**Costo orario manuale**: permette di inserire un costo orario manualmente, il quale avrà un impatto solo su quei componenti cha hanno associate delle fasi;    
**Costo materiale**: totale costo materiale calcolato dall'albero della distinta;    
**Costo manodopera**: totale costo manodopera calcolato dall'albero della distinta;    
**Costo macchina**: totale costo macchina calcolato dall'albero della distinta;    
**Costo manuale**: non gestito;        

**Costo industriale**: totale dei *Costi materiale*, *Costo manodopera* e *Costo macchina*;     
**Totale costi diretti**: totale dei costi inseriti nella sezione *Costi diretti*;    
**Costo industriale + costi diretti**: totale del *Costo industriale* e *Costi diretti*;    
**Ricarico**: permette di indicare il ricarico a percentuale o a valore; questo valore va ad incrementare il *Costo industriale* o il *Totale costi generali*, rispettivamente se nei [Parametri prototipazioneconfigurations/parameters/logistics/item-prototypes-parameters/) alla voce *Calcolo p. vendita con ricarico su:* sia indicato *Costi diretti* o *Costi totali*;      
**Totale costo ricaricato**: totale del *Costo industriale + costi diretti* e del ricarico;     
**Totale costi generali**: totale dei costi inseriti nella sezione *Costi generali*;    
**Totale altri costi**: totale dei costi inseriti nella sezione *Altri costi*;    
**Correzione**: permette di inserire un valore per correggere il nuovo prezzo di vendita;      
**Arrotondamento**: permette di decidere se arrotondare per eccesso o difetto e l'ordine di grandezza;      
**Prezzo di vendita**: totale del *Costo industriale + costi diretti*, *Costi generali*, *Totale altri costi*, *Correzione* e *Arrotondamento*; se nei [Parametri prototipazioneconfigurations/parameters/logistics/item-prototypes-parameters/) è attivo il flag *Nuovo prezzo di vendita* questo campo è calcolato automaticamente e non modificabile manualmente, mentre se è disabilitato il campo è editabile anche manualmente;         
**Lotto di produzione**: permette di indicare il valore del lotto di produzione, il quale determina un aumento o una diminuzione dei costi manodopera e macchina, inoltre incide sul costo unitario di attrezzaggio;    
**Totale lotto di produzione**: totale del *Prezzo di vendita* calcolato per il *Lotto di produzione* indicato;     
**Scostamento da listino**: indica lo scostamente rispetto al listino di vendita;            
**Tipo listino di vendita**: indica il tipo di listino;                
**Da data validità**: indica la data di validità del listino;           
**A data validità**: indica la data di validità del listino.                

**Tipo dettaglio grafico analisi**

Permette di visualizzare tramite un diagramma a torta, in maniera sintetica o analitica, le compozione dei costi del prototipo. 

*Pulsanti specifici*:

> **Aggiornamento listini di vendita**: permette di aggiornare il prezzo dell'articolo sul listino di vendita corrispondente;         
> **Aggiorna offerte**: variando il valore del *Prezzo di vendita* di un prototipo legato ad un'offerta, tramite questo pulsante è possibile aggiornare il prezzo indicato nell'offerta stessa;     
> **Aggiorna cliente**: permette di creare una nuova riga di valorizzazione per il prototipo associata al cliente selezionato.         

**Modalità di calcolo costi**

I costi riportati per ogni componente sono costi unitari, nella struttura della distinta del prototipi vengono invece riportati i costi unitari e totali del materiale e delle lavorazioni riferiti alle quantità del padre di ogni componente.

- Per gli articoli di acquisto non vengono calcolati costi lavorazione e i costi materiale vengono ripresi in base ai parametri dei prototipi (costi di magazzino, costi di listino e miglior prezzo di listino).
Il costo viene ricercato nel listino in base alla data validità del prototipo, se la data validità del prototipo non inserita i costi vengono ricercati per data del giorno.
Per la ricerca del costo nei listini viene utilizzata la UM Utilizzo anche come UM Alternativa dell’articolo e se viene trovato un prezzo con una UM diversa da quella di Utilizzo viene applicato il fattore di conversione della UM Alternativa dell’articolo per calcolare il costo materiale.
Il costo materiale del componente può essere inserito manualmente e viene ricalcolato il costo materiale del prototipo in base al nuovo costo, ma lanciando un ricalcolo costi da Ribbon viene ricercato il costo in base alle regole dei parametri. 

- Per gli articoli di conto lavoro i costi materiale vengono ripresi dai componenti mentre i costi lavorazione vengono ripresi dalle fasi se presenti altrimenti vengono ripresi dai listini di conto lavoro.    

- Per gli articoli di produzione i costi materiale vengono ripresi dai componenti mentre i costi lavorazione vengono ripresi dalle fasi.
Il calcolo dei costi lavorazione considerano come prioritario il costo manuale espresso nella fase, se non c’è verifica se presente il costo orario manuale presente nel tab costi, se non presente ricerca il costo nel centro di costo dei gruppi manodopera e delle macchine.
Per l’attrezzaggio, se viene inserito il tempo attrezzaggio viene considerato omnicomprensivo di manodopera e macchine e viene calcolato tutto come manodopera utilizzando il costo in base alle priorità sopra descritte, se invece si vuole suddividere il costo di attrezzaggio della macchina da costo attrezzaggio della manodopera devono essere inseriti il gruppo manodopera per la ricerca del costo del suo centro di costo e l’attrezzaggio macchine, cioè la macchina, per la ricerca del costo del suo centro di costo, in mancanza di questi dati anche se inseriti i tempi di attrezzaggio uomo e attrezzaggio macchina non vengono considerati per il calcolo dei costi.
Ogni componente della distinta del prototipo comprende nel suo costo materiale e lavorazione anche il costo dei suoi componenti, lo stesso perciò anche nel prototipo.
L’indicazione del lotto di produzione nel tab costi compete solo al calcolo del costo unitario di attrezzaggio da sommare al costo industriale del prototipo, variando il lotto produzione aumentano o diminuiscono il costo manodopera e il costo macchina del tab costi.
La procedura di ricalcolo costi ricalcola tutti i costi riprendendo i dati dai parametri per gli acquisti (costi di magazzino, costi di listino e miglior prezzo di listino) e dalle fasi per le lavorazioni.   


