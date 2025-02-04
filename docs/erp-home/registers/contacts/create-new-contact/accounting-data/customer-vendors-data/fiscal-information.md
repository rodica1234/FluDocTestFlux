---
title: Informazioni Fiscali
sidebar_position: 2
---

In questa tab vendono inseriti dati e parametri di tipo prevalentemente fiscale.

### Campi

**Non in Spesometro**: campo obsoleto presente per retro-compatibilità (Riferito allo spesometro pre-2017 abrogato). Il flag è comunque funzionante in quanto ancora presente la funzionalità per lo spesometro annuale (art. 21 DL 78/2010).

**Escludi da dich. black list**: campo obsoleto presente per retro-compatibilità. L'adempimento fiscale è attualmente abrogato.

**CIG**: il flag attiva il campo apposito all'interno dei documenti di vendita per indicare il codice identificativo di gara (esempio per gli appalti pubblici). Il codice deve essere poi inserito [**nell'apposita tabella**configurations/tables/finance/CIG-and-CUP) per poterlo richiamare.

Per la corretta gestione dei codici CIG e CUP nei tracciati della fattura elettronica, essendo il relativo tag un figlio dei dati ordine, vedere [**qui**/e-invoice/configuration_einvoice#codici-cig-e-cup-tag-2126-codicecup-e-2127-codicecig)

**CUP**: il flag attiva il campo apposito all'interno dei documenti di vendita per indicare il codice unico progetto (per la fatturazione ad enti pubblici) Il codice deve essere poi inserito [**nell'apposita tabella**configurations/tables/finance/CIG-and-CUP) per poterlo richiamare.

Per la corretta gestione dei codici CIG e CUP nei tracciati della fattura elettronica, essendo il relativo tag un figlio dei dati ordine, vedere [**qui**/e-invoice/configuration_einvoice#codici-cig-e-cup-tag-2126-codicecup-e-2127-codicecig)

**Ritenuta d'acconto**: il flag, da associare al successivo campo Tipo ritenuta, attiva, per l'anagrafica di tipo fornitore in uso, la gestione della ritenuta d'acconto sul compenso percipiente. Con questo tipo di gestione attiva lato fornitore, l'inserimento dei documenti e la contabilizzazione della fattura ricevuta e del pagamento effettuato avverrà dal modulo  [**Percipienti**/professional-men/general-overview)  al fine di poter gestire correttamente ed in modo automatico la ritenuta d'acconto e valorizzare le CU.

**Tipo ritenuta**: il campo (menu a discesa) è collegato alla tabella  [**Tipi ritenuta**configurations/tables/finance/withholding-tax-types)  all'interno della quale vengono definite le tipologie di ritenuta a titolo d'acconto (o a titolo d'imposta) da utilizzare. Per ogni riga, corripondente ad un tipo ritenuta, devono essere compilati i campi che permettono la gestione automatica del calcolo e della contabilizzazione da parte del  [**modulo Percipienti.**/professional-men/general-overview) 

***UTILIZZO DEI CAMPI Ritenuta e Tipo Ritenuta NELLE FATTURE ATTIVE***
E' possibile attivare il flag per le ritenute d'acconto e la relativa tipologia anche ai fini dell'emissione di fattura attiva nel caso in cui sia l'azienda emittente ad essere sottoposta alla ritenuta d'acconto (ritenute d'acconto subite). **Vedere anche** [**qui**/e-invoice/configuration_einvoice#ritenuta-dacconto-e-enasarco-tag-2115-datiritenuta)


:::tip Vedi anche...
Per la gestione nella fattura elettronica della ritenuta d'acconto ed in particolare anche del contributo **ENASARCO** vedere [**qui**/e-invoice/configuration_einvoice#ritenuta-dacconto-e-enasarco-tag-2115-datiritenuta)
:::

### Pubblica amministrazione / Fatturazione elettronica

Il Flag **Fatturazione elettronica** determina l'adattamento dei campi di dettaglio della griglia sottostante al fine di riferirsi alla casistica della fattura elettronica P.A. oppure di fatturazione elettronica con i privati.

**Codice Ufficio / Codice destinatario**: codice *IPA* dell'ufficio pubblico destinatario della fattura oppure (flag *Fatturazione elettronica* attivo) codice *SDI* del destinatario della fattura

**Nome ufficio / Descrizione destinatario**: descrizione del campo codice ufficio / codice destinatario da compilare con il nome dell'ufficio pubblico o del soggetto privato

**Ragione sociale**: in questo campo è possibile collegare un'anagrafica già codificata in Fluentis e riferita, ad esempio, all'uffico pubblico che dipende dall'anagrafica principale che stiamo utilizzando (esempio: ufficio lavori pubblici del comune di ..., oppure Azienda sanitaria ....... che dipende dall'anagrafica principale "Comune di ....") Tale anagrafica collegata **dovrà** essere impostata come **destinazione** per l'anagrafica principale nel tab  [**consegna**erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), in questo modo la destinazione (esempio ufficio lavori pubblici ....) sarà riportata nel tracciato del file .xml completa di codice ufficio e degli altri dati quale indirizzo ecc...

:::danger[ATTENZIONE: campo Ragione sociale, anagrafica semplice con singolo codice]
Per la corretta gestione di **più codici** ufficio / codici SDI (e quindi più soggetti) riferiti alla stessa anagrafica principale è quindi **necessario** compilare anche questo campo. 

**ATTENZIONE:**  nel caso di **singolo codice** ufficio / codice SDI direttamente legato all'anagrafica in questione (senza la presenza di destinazioni collegate e riferite a specifici codici ufficio / codici SDI) **il campo NON DEVE essere compilato**. 
Diversamente verrà restituito un messaggio di errore in fase di generazione del file xml. (Messaggio: la fattura... non può essere generata perchè... il codice destinatario non è stato valorizzato, oppure la data inizio servizio....) da interpretare come "non è stato valorizzato *correttamente*".
:::



**Data inizio servizio**: definisce la data di inserimento della riga o comunque la data dalla quale è attivo il rapporto di fornitura con la pubblica amministrazione in questione.


<a id="codice_articolo_fornitore_cliente" style={{ textDecoration: 'none' , color: 'inherit' }}></a>


**Data fine servizio**: definisce la data di fine del rapporto di fornitura con la pubblica amministrazione e rende non più utilizzabile questa posizione per la generazione del file telematico per la fattura elettronica.


**Email:** spazio riservato all'indirizzo pPEC nel caso sia attiva la modalità PEC destinatario nel campo *Tipo codice*

**Regime fiscale**: campo necessario per la gestione delle fatture elettroniche (in particolare delle autofatture a fronte di acquisti UE o reverse charge): il dato è inserito nei tracciati telematici .xml generati da Fluentis. La combo box è collegata ad una tabella fissa contenete i possibili regimi fiscali da selezionare.

**Tipo codice articolo fornitore /cliente:** nei presenti due campi, rispettivamente, è possibile inserire un codice accompagnatorio al codice articolo da utilizzare nella fatturazione passiva o attiva ai fini del tracciato xml. La funzionalità risulta utile in vari casi quali ad esempio la creazione automatica della fattura d'acquisto a partire dal file xml ricevuto permettendo il riconoscimento del codice articolo utilizzato dal fornitore in relazione alle impostazioni dell'anagrafica articolo nella sezione dei fornitori preferenziali.  

**Prezzo netto senza sconti**: con questa impostazione, la fattura elettronica sarà creata per il valore netto di riga, senza evidenziare il dettaglio del lordo - sconti.

**Fatturazione elettronica firmata**: gestione della firma digitale per la creazione di file Sdi verso il soggetto. Il flag può essere impostato, non impostato o 'non definitivo', in quest'ultimo caso varrà la logica di default definita nella *Configurazione documenti elettronici*

**Fatturazione elettronica con pdf allegato**: gestione dell'allegato di cortesia nel file Sdi. Il flag può essere impostato, non impostato o 'non definitivo', in quest'ultimo caso varrà la logica di default definita nella *Configurazione documenti elettronici*. Nel campo della **Trasformazione Arm per creazione file Pdf fattura** si indicherà il processo di creazione del pdf da utilizzare.

**Gruppo IVA / Anagrafica:** campo necessario per la gestione del gruppo iva al quale faccia parte il cliente o il fornitore che stiamo codificando. In questo campo sarà richiamata l'anagrafica (da creare in precedenza) del soggetto capogruppo al fine di inserire la partita iva di quest'ultimo nel tracciato xml in luogo di quella del soggetto aderente al gruppo, come previsto dalla normativa. 

:::tip Info: il gruppo iva
Con l’introduzione di tale norma, è stata prevista la possibilità, per le imprese collegate da interessi finanziari, economici ed organizzativi, di creare un gruppo unico, considerato come un solo contribuente (ai soli fini Iva) nei confronti del fisco. Esso sarà, pertanto, dotato di un unico numero di Partita Iva. Le imprese che fanno parte del gruppo fattureranno le operazioni verso terzi con una partita Iva comune, la partita Iva di gruppo. Invece le cessioni di beni e le prestazioni di servizi scambiati tra le aziende interne al gruppo non rileveranno ai fini dell’imponibile Iva. In conseguenza di ciò, tutte le operazioni effettuate da uno dei soggetti del gruppo sono considerate come effettuate dall’intero gruppo. La fattura e gli altri documenti sono emessi dal rappresentante del Gruppo o dai partecipanti indicando sugli stessi oltre al numero di partita Iva del Gruppo anche il codice fiscale del soggetto partecipante che ha realizzato l’operazione.
:::

### Limite scadenze merci deperibili

**Art. 62**: flag che gestisce l'attivazione della gestione delle scadenze di pagamento massime nel settore alimentare per beni deperibili e non deperibili ai sensi dell'art 62 D.Lgs. n. 192/2012; in particolare in fase di inserimento degli articoli in fattura controlla la scadenza di pagamento rispetto a quelle obbligatorie per questa tipologia di prodotti. Si gestisce con i due flag successivi:

> **Sol. inf. 30 gg**: impone una soluzione di pagamento a 30 giorni bypassando le altre impostazioni (anche quelle relativa all' art. 62, ad esempio la soluzione a 60 giorni).  
> **Sol. inf. 60 gg**: NON GESTITO / DISATTIVATO

Vi sono altre impostazioni riguardanti la **gestione merci deperibili**:  
> **GG Pag. merce deperibile** all'interno dell'[Anagrafica articolo > tab Generalierp-home/registers/items/create-new-items/item-registry/generality) dove viene definita la scadenza da applicare;  
> **GG ricev. fattura** in *Anagrafica cliente/fornitore > tab Generale > tab Indirizzi alternativi* utile per ottemperare alla data certa di ricevimento della fattura (affinché si abiliti il campo, il tipo indirizzo collegato all'indirizzo alternativo utilizzato e definito nella tabella [Tipi indirizziconfigurations/tables/general-settings/address-types) deve avere il flag *Email Fatt.C.* settato)
> **Giorni trasporto** nella tabella *Zone*, campo che può essere inserita nell'*Anagrafica cliente/fornitore > tab [Consegna*erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery) 

### Logica di calcolo della scadenza di pagamento

La scadenza di pagamento viene proposta a partire dalla data  decorrenza della fattura. 

 La data decorrenza viene calcolata automaticamente nel seguente modo:

 - inizialmente uguale alla maggiore tra data inserimento e  data fattura , 

 - poi se nel tipo indirizzo dell'email di fatturazione sono impostati dei gg di ricevimento fattura, alla data fattura vengono sommati i gg di ricevimento fattura, la data decorrenza diventa la maggiore tra data decorrenza e data fattura + gg di ricevimento fattura

 - se nel tipo indirizzo dell'email di fatturazione non sono impostati dei gg di ricevimento fattura allora viene cercato se ci sono i giorni di trasporto nel codice zona associato al cliente e alla data fattura vengono sommati i gg di trasporto, la data decorrenza diventa la maggiore tra la data decorrenza e data fattura + gg di trasporto

 - se per la zona del cliente non sono impostati dei gg di trasporto, la data decorrenza corrisponde alla maggiore tra la data inserimento fattura e la data fattura

L'utente può in ogni caso cambiare la data decorrenza e mettere la data voluta, resterà traccia nella fattura che la data decorrenza è stata cambiata manualmente

**Per proporre  correttamente la data scadenza devono essere codificate 2 nuove soluzioni di pagamento con il flag “DL Art.62” settato, entrambe con il flag fine mese settato e il flag commerciale settato, una con giorni 30  e l'altra con giorni 60**

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image04.png)

Se la soluzione pagamento dell'anagrafica cliente è migliorativa rispetto a quella calcolata per gli articoli agricoli o agroalimentari, tale soluzione viene mantenuta.

Inserendo le fatture manualmente (anche evadendo le righe dell'ordine cliente) è possibile inserire, per il cliente che ha il flag Art62 settato, solo articoli che abbiano la stessa tipologia di pagamento, perciò tutti articoli a 30 gg o a 60 gg oppure senza gg pagamento. Un messaggio impedirà l'inserimento di articoli misti e avvertirà che la soluzione di pagamento verrà modificata automaticamente con la soluzione calcolata in base ai gg di pagamento degli articoli.

Creando la fattura da altri documenti (es. da DDT),  i documenti verranno suddivisi per i gg di pagamento presente nell'articolo e verranno create più fatture se in uno stesso documento ci saranno articoli con giorni di pagamento diversi.

### Campi riferiti alla gestione distinte SDD (Sepa Direct Debit – Addebiti diretti SEPA)**

L'Addebito Diretto Sepa, che va a sostituire il precedente RID nazionale, è uno strumento di incasso pre-autorizzato a fronte di un mandato all'addebito rilasciato dal Debitore a favore del suo Creditore.

E' basato su un accordo preventivo (mandato) tra Debitore e Creditore che consente a quest'ultimo di richiedere l'attivazione di una procedura interbancaria per addebitare il conto del Debitore in modo automatico.

**Codice scopo mandato**: in questo campo va riportato il ‘Purpose code' (solitamente viene impostato il codice “GDSV” [PurchaseSaleOfGoodsAndServices])

**Codice cliente/mandato**: in questo campo va inserito il codice identificativo assegnato al mandato sottoscritto dal debitore. Corrisponde in Rulebook (document tecnico ufficiale) ad AT-01 Unique Mandate Reference.

 Il campo non è case-sensitive. Ad es. gli identificativi 123AAa45678, 123aaA45678, 123aaa45678 e 123AAA45678 devono essere considerati identici.

 Non può essere valorizzato con soli spazi e deve contenere solo caratteri appartenenti al set latino di base

*Esempio*: IT05394480900

**Mandato modificato**: Flag attualmente non gestito e da lasciare de-selezionato

**Data firma mandato**: in questo campo va inserita la data di firma del mandato.

**Data prima esecuzione / Data ultima esecuzione**: essendo l'addebito sdd (così come il "veccchio" sistema RID) di per se un'esecuzione periodica, questo range di date controlla l'inizio e la fine validità dell'esecuzione.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image05.png)

Per la gestione dell'SDD bisogna inoltre compilare i campi

- **Codice unico cliente**

- **Identificatore creditore**: esempio IT95ZZZ0000007333890900

Nella tabella **Società**

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image06.png)

### ALTRO

**Gestione cointestatari**: il flag attiva la gestione della fattura di vendita cointestata.

Questa casistica è frequente, ad esempio, nella vendita ai privati di beni che possono essere oggetto di detrazione fiscale dalle imposte sui redditi, se la spesa è sostenuta da più persone, la fattura deve essere intestata ad entrambi per poter operare la detrazione.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image07.png)

Con il flag attivo, all'interno delle fatture intestate all'anagrafica in questione verrà visualizzato un ulteriore tab dove inserire i cointestatari.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image08.png)

Per richiamare i cointestatari, all'interno dell'anagrafica in questione, è necessario codificarli preventivamente nella sezione **Indirizzi alternativi** della sezione Dati generali.

A tal fine è necessario, preventivamente, definire un tipo indirizzo con flag **Cointestatari** attivo all'interno della tabella **Tipi indirizzi** alla quale è collegata la combo box del campo **Tipo indirizzo**

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image09.png)

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image10.png)

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image11.png)

Quindi si procederà ad inserirli nella fattura indicando anche la percentuale di ripartizione della spesa.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image12.png)