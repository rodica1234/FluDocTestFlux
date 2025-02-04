---
title: Provvigioni dirette
sidebar_position: 4
---

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/direct-commissions/image01.png)

La finestra è fondamentale per definire quali sono i **criteri di individuazione delle percentuali provvigionali**.

## Campi generali
I primi due campi consentono di definire una **percentuale generale** e un **importo fisso**: la percentuale generale sarà utilizzata solo se nella sezione a destra, dove si definiscono in ordine di priorità i criteri di valorizzazione, è presente la tipologia ‘1 – Anagrafica agente'.

## Griglia con i criteri di calcolo

Nella griglia possono essere definiti uno o più criteri contemporaneamente (vedere poi la gestione del campo *Priorità*) e ogni criterio può essere associato ad una *Categoria provvigionale* (vedi di seguito) che funge da filtro per il criterio stesso in base a delle informazioni (proprietà dell'oggetto) liberamente configurabili.

**Tipo provvigione:** La lista delle opzioni possibili (selezionabili nella combo box) è la seguente:

***Anagrafica Agente***: secondo la percentuale inserita nell'anagrafica dell'agente stesso;

***Anagrafica Cliente***: secondo la percentuale che l'agente ha nell'anagrafica cliente;

***Zona Cliente***: secondo la zona associata al cliente;

***Listino Cliente***: secondo i listini applicabili ai clienti (quindi listini generali e/o listini personalizzati);

***Classe***: secondo la classe dell'articolo venduto;

***Articolo***: per ogni singolo articolo viene definita la percentuale dell'agente in uso;

***Listino-Classe***: secondo la combinazione della classe articolo nei vari listini;

***Listino-Classe-Articolo***: secondo la combinazione del singolo articolo nei vari listini;

***Tipo Articolo***: secondo il tipo di articolo;

***Anagr. Cliente-Classe***: secondo la combinazione della classe articolo per ogni anagrafica cliente;

***Anagr. Cliente-Classe-Articolo***: secondo la combinazione della classe articolo per ogni cliente;

***Fasce di sconto***: secondo il tipo di fascia di sconto (Configurazione > Tabelle > Vendite > Range sconto), cioè collegando la provvigione agli sconti che l'agente stesso applica al cliente. A loro volta, le fasce di sconto possono dipendere dalle classi articolo, dai listini, dal tipo articolo, dalla caratteristica articolo, dalla categoria merceologica oppure essere una struttura di scaglioni fissi.

***Categoria provv.cliente***: secondo la categoria provvigionale associata al cliente;

***Linea prodotto***: secondo la linea prodotto associata all'articolo;

***Cat.cliente e linea prodotto***: secondo la combinazione Categoria provvigionale e Linea prodotto

***Diritti d'autore***: questa tipologia è specifica per il caso di soggetti che non sono veri e propri agenti ma Designer o comunque professionisti per i quali calcolare Royalties. La percentuale delle royalties può essere legata al singolo articolo o alla linea prodotto;

:::important[Importante]
La **logica di individuazione della provvigione da applicare**, quindi, **dipende dalle priorità associate alle tipologie** che si vogliono utilizzare: se fossero, ad esempio, presenti con priorità 1, 2, 3 le tipologie ‘6 – articolo', ‘4 – listino cliente' e ‘1 – anagrafica agente' il sistema andrebbe a valutare, all'inserimento dell'articolo, se questo è nella lista degli articoli per i quali l'agente ha una percentuale di provvigione impostata (se è fra questi si prende questa % di provvigione), se non è fra questi passerebbe a valutare se la riga ha un prezzo che deriva da un listino particolare (es. listino promozionale) sul quale l'agente ha una provvigione definita (se è fra questi si prende questa % di provvigione), se non è fra questi andrebbe a utilizzare la percentuale fissa dell'anagrafica agente.
:::

:::tip[Dettaglio]
Per alcune di queste opzioni è necessario premere il pulsante **Dettaglio percentuali selezionate** al fine di aprire la maschera di definizione delle combinazioni valide per l'agente stesso. In queste maschere, che dipendono dal tipo di impostazione di partenza (es. se si parla di articoli ci sarà il campo di definizione dell'articolo, se si parla di listini ci sarà il campo per il listino, ecc.), è **importante** andare a **definire** il **range di date di validità** di questa impostazione: per lo stesso articolo, ad esempio, potrebbero esserci più percentuali di provvigione con range di date validità differenti.

:::

:::note[Nota]
Merita una spiegazione particolare il dettaglio provvigionale ***Fasce di sconto***: infatti, è importante definire quale sia il [***Range di sconto***configurations/tables/sales/discount-range) da applicare all'agente e se le provvigioni saranno quelle standard inserite in questo oppure una percentuale personalizzata per l'agente sugli scaglioni di sconto definiti per quel range; in secondo luogo, è fondamentale dire se il calcolo dello sconto effettivo applicato è definito rispetto al prezzo dell'anagrafica articolo, oppure secondo la relazione prezzo lordo-netto della singola riga articolo (nel qual caso non sarà possibile automatizzare le provvigioni agenti quando si creano documenti direttamente su prezzi netti).

Ulteriore annotazione generale in merito ai listini: vengono associati gli specifici listini, non una tipologia di listino. In sostanza, se nel modulo dei listini di vendita si crea un nuovo listino dello stesso tipo precedente ma con una nuova data inizio validità, questo va nuovamente associato all'anagrafica agente con le sue percentuali provvigionali.
:::



**Categoria Provvigionale**: ai vari criteri di lettura della provvigione è agganciata anche una possibile *Categoria provvigionale*. Le categorie si definiscono nell'apposita tabella. Il significato è quello di legare il criterio selezionato anche ad una caratteristica del documento (ad esempio il criterio è Anagrafica agente con lettura del valore di provvigione generale ma in base al tipo ordine - impostando nella tabella delle [**Categorie Provvigionali**configurations/tables/sales/commission-categories) il criterio di lettura in base all'oggetto FSSalesOrder.TypeCode, ad esempio Codice = OCIT. Ovvero la lettura della provvigione avviene solo quando l'ordine cliente è del tipo OCIT = Ordine Italia) 



Se la condizione (o le molteplici condizioni alternative) non vengono soddisfatte si passa al criterio in griglia con la priorità seguente (sempre che sia stato definito).

Nella maschera, infine, c'è un altro pulsante che consente di inserire le impostazioni di un altro agente, selezionato dall'help agenti che si apre, in quello in uso.

*Pulsanti specifici*:
> **Salva agente**: per salvare le modifiche apportate all'agente.  
> **Cancella provvigione**: per cancellare il dettaglio delle provvigioni selezionate. 
> **Copia provvigioni agenti**: consente di inserire, nell'agente corrente, le impostazioni prelevate da un altro agente che si seleziona con l'help che si apre.
