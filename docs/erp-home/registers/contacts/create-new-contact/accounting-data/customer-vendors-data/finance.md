---
title: Amministrazione
sidebar_position: 1
---

In questa form troviamo i seguenti campi:

**Divisa**: il campo, obbligatorio, viene proposto di default sulla base della divisa della società, ma può essere modificato per avere questa proposta nella creazione dei documenti e delle registrazioni contabili;

**Posizione IVA**: è l'aliquota iva da proporre nel ciclo documentale attivo/passivo e nelle registrazioni contabili. 

:::note Attenzione
La priorità di valorizzazione del campo [IVAinvoicing/items) nei documenti prevede nell'ordine:  
1. verifica delle [Dichiarazioni di intento/declarations/declarations/intent-declaration), se presenti, e sostituzione del codice iva in esse contenuto;  
2. anagrafica cliente/fornitore;  
3. anagrafica articolo.
:::

E' opportuno valutare, in base alla logica di priorità di valorizzazione, se compilare o meno questo campo nell'anagrafica cliente/fornitore.

*Esempio*: se compilo il campo nell'anagrafica di un cliente intra-UE inserendo un'aliquota iva di non imponibilità, quest'aliquota prevarrà nei documenti rispetto all'eventuale aliquota ordinaria inserita nell'anagrafica degli articoli che vanno in fattura.  Questa prevalenza potrebbe non essere opportuna in altre situazioni e va dunque tenuta presente.

**Tipo contab. IVA**: il campo consente di definire, in combinazione con l'impostazione delle causali di contabilità generale, quale sia il sottoconto iva di acquisto/vendita da utilizzare nelle registrazioni intestate al soggetto in uso. Esiste un tipo contab. iva di default all'interno dei parametri di contabilità; (utilizzato prevalentemente per fiscalità NON italiane).

**Tipo contab. articolo**: per le contabilizzazioni fatture di **Fluentis**, consente di definire la logica di valorizzazione del sottoconto di dettaglio del fatturato acquisti/vendite differenziando la contropartita (di costo/ricavo) rispetto al cliente/fornitore intestatario della fattura di acquisto o vendita.

*Esempio*:

Nel piano dei conti ho il conto 500 Vendite prodotti che ha i seguenti sottoconti:

500-001 Ricavi prodotti finiti

500-002 Ricavi intercompany prodotti finiti

500-003 Ricavi esteri prodotti finiti

L'articolo XYZ ha il fatturato vendite ‘A – Ricavi prodotti finiti' in anagrafica, che è collegato al conto contabile 500-001 Ricavi prodotti finiti.

Se il mio cliente cod. 001 è italiano l'impostazione è soddisfacente, riga vendita articolo *XYZ* con fatturato vendite ‘A' quindi registrazione del ricavo sul conto corretto.

Ma se la vendita è ad un cliente cod 002 intercompany, o ad un cliente cod. 003 estero, al fine di evitare che l'utente ogni volta debba ricordare di cambiare il fatturato vendite (in B o C) su tutte le righe del documento (fattura) per contabilizzare la riga documento sul conto opportuno, è possibile definire la corretta valorizzazione per l'anagrafica in questione, andando a prevalere sul settaggio generale.

 ![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance/image03.png)

La compilazione del campo si effettua tramite una combo-box collegata alla tabella [Tipo contab. articolo:configurations/tables/finance/articles-accounting-types) in questa tabella creeremo, ad esempio, un tipo Contabilizzazione cod. 1 ‘Intercompany' e un tipo contabilizzazione cod. 2 ‘Estero', e metteremo su entrambi il flag ‘Cliente' in modo che questi due record siano visibili nelle anagrafiche clienti. Quindi nell'anagrafica di 002 imposteremo tipo contabilizzazione cod. 1 'Intercompany' e in 003 cod. 2 ‘Estero'.

Poi sarà necessario inserire nella tabella [Fatturato vendite,configurations/tables/sales/sales-turnover) in corrispondenza della riga 'A - Ricavi prodotti finiti' (nella griglia in basso)

- una riga tipo contabilizzazione ‘intercompany' e conto 400-001 Ricavi intercompany prodotti finiti;

- una riga tipo contabilizzazione ‘estero' e conto 400-002 Ricavi esteri prodotti finiti.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance/image04.png)

In questo modo l'utente dovrà poi impostare soltanto l'anagrafica e le impostazioni faranno valorizzare il sottoconto opportuno; la contabilizzazione verificherà per ogni fatturato vendite inserito in fattura se esiste un dettaglio con un conto particolare per il tipo inserito nel cliente.

Specularmente il settaggio opera sulla parte fornitori, mettendo il flag *Fornitori* nella tabella [Tipo contab. articoloconfigurations/tables/finance/articles-accounting-types) ed aggiornando la tabella **Fatturato acquisti**.


**Sottoconto fatture da ricevere**: indicare in questo campo il sottoconto patrimoniale (prioritario rispetto al default inserito nei parametri di contabilità) da utilizzare nella procedura dell'area acquisti **Contabilizzazione fatture da ricevere**, ma anche nelle procedure di calcolo degli assestamenti di bilancio o delle simulazioni di bilancio infrannuale nel caso in cui tutto il costo sia da inserire nel bilancio di periodo.


**Sottoconto di fatturazione**: il campo, gestito esclusivamente per le anagrafiche clienti, consente di definire per il sottoconto di anagrafica in uso, quale sia il sottoconto sul quale intestare la fattura nel corso della creazione delle fatture da DDT;

*Esempio*: si pensi alla grande distribuzione.

Cliente X negozio filiale con sede a Sacile, che ha nella sua anagrafica compilato il sottoconto di fatturazione = cliente Y (la casa madre) con sede a Milano.

La nostra società consegna con DDT al negozio X di Sacile, poi, quando emette fattura, questa va intestata alla casa madre cliente Y di Milano.

Un metodo alternativo (consigliato) consiste nel gestire sempre l'anagrafica del cliente Y casa madre di Milano e nella sua anagrafica codificare la ** [destinazione merceerp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery) ** = cliente X negozio di Sacile. In questo modo ddt e fatture sono intestate allo stesso soggetto con maggior chiarezza.

**Sottoconto Capogruppo**: nell'analisi dei rischio cliente, consente di unire clienti che appartengono allo stesso gruppo aziendale; 

**Sottoconto di pag. (Pag.Forn.)**: questo sottoconto viene associato alle partite contabili create, al fine di poter verificare la canalizzazione dei pagamenti/incassi nelle stampe degli scadenziari e nelle simulazioni di cash flow;


**Costo/Ricavo di contropartite predef**.: è il sottoconto di contabilità generale da proporre di default nelle registrazioni contabili IVA; in caso di contabilizzazione di documenti dagli acquisti/vendite, questo sottoconto è il valore di default da utilizzare nel caso in cui non sia stato inserito un fatturato acquisti/vendite nelle righe articolo;


*Priorità di valorizzazione* dei campi conto, sottoconto, descrizione nella sezione **Estremi IVA** del documento della **Registrazione contabile**:  
1. Valorizzazione del [Fatturato Venditeconfigurations/tables/sales/sales-turnover)/ **Fatturato Acquisti** presente nella fattura che viene contabilizzata e codice di conto, sottoconto e descrizione collegato ad ogni tipologia  nelle tabelle Fatturato acquisti  / Fatturato vendite.   
2. Anagrafica Cliente/Fornitore  

**Costo/Ricavo di contropartita alternativo**: questa griglia consente di predefinire la lista dei sottoconti e la relativa aliquota iva da proporre nelle registrazioni iva intestate al soggetto; per utilizzare l'opzione è necessario che sia impostata una ‘Posizione IVA‘ di default e non sia inserito nessun costo/ricavo di contropartita predefinito;


**Conto Anticipi:** è possibile definire un sottoconto anticipi associato all’anagrafica cliente stessa (ad esempio un sottoconto legato al tipo conto specifico '*CA*' per Anticipi Clienti con relativo mastro) e collegarlo al conto principale del cliente (quello classico con tipo conto '*CIT*' legato ad esempio al mastro Clienti Italia) tramite il presente campo.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance/image05.png)

Questo sottoconto sarà utilizzato per valorizzare le righe tipo 6 ‘fattura d’acconto’ e 7 ‘storno acconti’ presenti nelle fatture di vendita.

La fattura di acconto sarà sempre intestata al cliente reale e avrà la riga tipo 6 ‘Fattura d’acconto’ e il fatturato vendite rileverà il debito generico ad esempio il conto Clienti c/anticipi (come di consueto quando non viene utilizzato il campo in questione).

Il risultato in contabilizzazione della fattura di acconto sarà il seguente:

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance/image06.png)


Sarà intestata al cliente effettivo e avrà una riga di storno del suo valore per riassegnarlo al conto anticipi dedicato.

Nella fattura di vendita finale sarà presente la riga di storno acconti per il valore già fatturato come di consueto.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance/image07.png)


Il risultato della contabilizzazione della fattura a saldo sarà il seguente:

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance/image08.png)

Vi sarà quindi la chiusura del debito generico del conto clienti c/anticipi come di consueto, inoltre vi saranno le due righe di storno della contabilizzazione fattura precedente.
Dal saldo (dare) di ogni conto anticipi cliente, quindi, si potrà capire l’importo degli anticipi aperti per ogni cliente.

ATTENZIONE: gestione delle partite aperte: in entrambe le contabilizzazioni ci sono squadrature tra movimenti contabili e movimenti dei partitari, per cui le causali **non** devono prevedere la quadratura obbligatoria dei partitari.

---


**No fatture accompagnatorie**: flag per non consentire la creazione di fatture di vendita di tipo accompagnatorio in capo al soggetto in uso.

**Non raggr.per destinazione**: indica che per il soggetto in uso non si vuole raggruppare mai i documenti per destinazione nel corso della creazione dei documenti; questo flag viene considerato nelle procedure presenti nella barra degli strumenti di Ricerca Ordini clienti, Ricerca Ordini Fornitori, Ricerca Ordini di Conto lavoro.     

**Raggruppa per commesse di vendita**: per il soggetto i DDT di trasporto vanno raggruppate per commessa per creare le fatture di vendita;

**Crea Fatture da DDT per OC**: per il soggetto i DDT di trasporto vanno raggruppate per **ordine cliente** per creare le fatture di vendita;

**Gest. EDI**: abilita la gestione dei file EDI (funzionalità attualmente disabilitata);

**Intrastat/Cod. Serv**: flag che abilita la gestione della dichiarazione intrastat per i documenti/registrazioni intestati al soggetto in uso, se anche il tipo documento è di tipo intracomunitario; in caso di soggetto con flag ‘Intrastat', è possibile indicare il codice servizio di default per le sezioni quater e quinquies della dichiarazione intrastat;

**Perc. spese Intra/Segno**: indica la percentuale media delle spese da aggiungere/togliere al valore merce per il calcolo del valore statistico in dichiarazione intrastat; il segno che definisce se le spese vanno sommate o detratte per ottenere il valore statistico della merce nelle dichiarazioni intrastat;

**Categoria amministrativa**: dato statistico della categoria amministrativa associata al soggetto;

**Categoria commerciale**: dato statistico ma anche di configurazione degli sconti secondo i criteri di associazione definiti nei listini dell'area vendite;

**Categoria fatturazione**: criterio di filtro per la procedura di creazione fatture di vendita da DDT;

**Categoria provvigionale cliente**: dato che può servire per l'attribuzione delle percentuali provvigionali agli agenti legati a questo cliente, secondo le priorità definite nella loro anagrafica;

**Responsabile**: per le analisi del rischio cliente, soggetto interno responsabile commerciale del soggetto.

**Filiale aziendale di riferimento**: in questo campo è possibile associare il cliente/fornitore ad una filiale e, tramite questa, ad una *divisione* aziendale differente. Nella contabilizzazione delle fatture di vendita è presente un parametro con il quale assegnare la registrazione contabile a questa divisione, pur mantenendo tutti i documenti in quella principale operativa.


*Pulsante specifico*:
> **Calcolo sconti**: per assegnare, all'anagrafica cliente in uso, una configurazione sconti (definita nel modulo area *Vendite > Listini di vendita*). Il pulsante è **attivo** **solo** all'interno di un'anagrafica cliente.