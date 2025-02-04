---
title: Tipi spese
sidebar_position: 11
---

In questa tabella vengono definite delle tipologie di spesa finale da aggiungere ai documenti (in particolare del ciclo attivo) per l'addebito automatico.

Possono essere aggiunte poi direttamente nel documento , oppure nell'anagrafica del cliente per l'automazione dell'inserimento della spesa.

### Campi di aggancio articolo e IVA

**Tipo / Descrizione:** Codice e descrizione della spesa per richiamarla

**Classe / Codice / Descrizione articolo:** campo per effettuare l'associazione tra il tipo spesa ed un codice articolo di riferimento

**Conto / Sottoconto / Descrizione:** necessario per associare un conto contabile sul quale contabilizzare automaticamente il riaddebito della spesa in oggetto

**IVA / Descrizione:** necessario per specificare il codice iva (aliquota o codice di esenzione) al quale sarà fatturato il riaddebito della spesa

**Tipo IVA:** Tipo iva per gestire il riaddebito (Salvo casi o regimi iva particolari indicare Generico)


### Flag di aggancio alle logiche

**Varie:** identifica una spesa varia ad addebito semplice. Le spese Varie presenti nei documenti vengono tutte riportate nel documento riepilogativo che evade i documenti stessi.

**Incasso:** apponendo questo flag la spesa sarà calcolata in automatico una per ogni rata di ricevuta bancaria definita nelle condizioni di pagamento (funziona pertanto soltanto con questa tipologia di pagamento). Le spese di Incasso sono assoggettate automaticamente all’iva principale del documento.

**Trasporto:** apponendo questo flag la spesa sarà calcolata in fattura una per ogni ddt che ha contribuito a generare la fattura; nel caso invece di evasione di più ordini in un ddt, verrà riportata una sola spesa di incasso.      

**Imballo:**

**Spedizione:**

**Viaggio:** se abilitato il tipo spesa verrà proposto nell'elenco delle spese selezionabili negli interventi dell'area Progetti. 

**Tipo spesa viaggio**: abilitato solo se il flag "Viaggio" è abilitato, indentifica la tipologia di spesa Viaggio: necessario per abilitare appositi campi nelle spese degli interventi (es. nel caso di Distanza verranno abilitati i campi di km e costo km, etc)

**Bollo / Valore Bollo:** utilizzando questa tipologia con il relativo valore indicato nel campo adiacente si attiva la logica del bollo in fattura nel caso di esenzione iva e documento superiore ai 77euro (vedere norme attualmente in vigore per dettagli), oltre alla valorizzazione del tag corrispondente nella fattura elettronica.

:::note[Info]
La logica, in dettaglio prevede che, se il cliente ha delle spese bollo nella sua anagrafica, venga eseguita la somma del valore imponibile per le righe documento aventi il codice iva compreso nelle seguenti categorie: 

Non Imponibile
Esente
Escluso

Se il totale ( convertito  nella divisa della societa’con il cambio della testata fattura) e’ maggiore del **Tetto minimo  spese** della sezione **Spese Bollo** in tabella società, viene aggiunto come spesa bollo.

I codici IVA delle tipologie di cui sopra devono anche avere il flag *Base per conteggio bollo* settato.
:::

**Val. stat. intra:** con questa logica la spesa finale inserita in fattura sarà ripartita sulle righe del documento ai fini della creazione dei modelli intrastat dalla procedura di creazione automatica (dalle fatture)

**Ripartito:** il flag fa in modo che la registrazione di magazzino abbia la spesa ripartita nelle varie righe della registrazione della fattura; questo flag non implica che la spesa venga ripartita nelle registrazioni dei documenti collegati.     

**RAEE:**

**IVA obbl.**


### Altri campi

**Categoria merceologica:**

**Codici / Descrizione Paghe:** codice utilizzato per inserire nel riquadro "Valori" del Riepilogo per cedolini dei dipendenti le spese presenti negli interventi e nelle dichiarazioni attività.

**Tipo attività**: valido soltanto per le spese di tipo "Viaggio" - Ore di Viaggio". Il tipo attività viene utilizzato per generare in automatico la dichiarazione attività in base alle ore di viaggio dichiarate nelle spese sostenute dell'intervento nell'area Progetti. 

**Categoria attività**: valido soltanto per le spese di tipo "Viaggio" - Ore di Viaggio". La categoria attività viene utilizzata nella dichiarazione attività generata in automatico in base alle ore di viaggio dichiarate nelle spese sostenute dell'intervento nell'area Progetti. 

### Ritenuta d'acconto e cassa previdenza

**Cassa previdenza / Soggetto Ritenuta / Codice P.A.:** campi per consentire di gestire nel file xml delle fatture elettroniche di vendita la *Cassa previdenza* che si può applicare nella fattura di un professionista.

Se l'anagrafica cliente della fattura ha il flag [**ritenuta d’acconto**erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) attivo, infatti, un percipiente che utilizza Fluentis potrebbe creare una fattura di vendita e spedirla allo Sdi: se ha un riaddebito spesa Cassa previdenza (il 4% tipicamente) codifica questo tipo spesa nella presente tabella, poi imposta se è soggetta a ritenuta o meno (con il secondo flag) e inserisce nel terzo campo il codice che lo Sdi prevede:


:::note Esempio di codifica

TC01	Cassa nazionale previdenza e assistenza avvocati e procuratori legali 

TC02	Cassa previdenza dottori commercialisti

TC03	Cassa previdenza e assistenza geometri

TC04	Cassa nazionale previdenza e assistenza ingegneri e architetti liberi professionisti

TC05	Cassa nazionale del notariato

TC06	Cassa nazionale previdenza e assistenza ragionieri e periti commerciali

TC07	Ente nazionale assistenza agenti e rappresentanti di commercio (ENASARCO)

TC08	Ente nazionale previdenza e assistenza consulenti del lavoro (ENPACL)

TC09	Ente nazionale previdenza e assistenza medici (ENPAM)

TC10	Ente nazionale previdenza e assistenza farmacisti (ENPAF)

TC11	Ente nazionale previdenza e assistenza veterinari (ENPAV)

TC12	Ente nazionale previdenza e assistenza impiegati dell'agricoltura (ENPAIA)

TC13	Fondo previdenza impiegati imprese di spedizione e agenzie marittime

TC14	Istituto nazionale previdenza giornalisti italiani (INPGI)

TC15	Opera nazionale assistenza orfani sanitari italiani (ONAOSI)

TC16	Cassa autonoma assistenza integrativa giornalisti italiani (CASAGIT)

TC17	Ente previdenza periti industriali e periti industriali laureati (EPPI)

TC18	Ente previdenza e assistenza pluricategoriale (EPAP)

TC19	Ente nazionale previdenza e assistenza biologi (ENPAB)

TC20	Ente nazionale previdenza e assistenza professione infermieristica (ENPAPI)

TC21	Ente nazionale previdenza e assistenza psicologi (ENPAP)

TC22	INPS

:::

---

**Lingue**

Per ogni tipo di pagamento selezionato nella griglia superiore, è possibile definire delle descrizioni in lingua: utilizzabile per stampe personalizzate.
