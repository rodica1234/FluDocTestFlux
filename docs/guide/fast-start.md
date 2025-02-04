---
title: Fluentis Fast Start - roadmap startup nuovo ambiente operativo
sidebar_position: 2
---

Il **Fast Start** è una funzionalità progettata per rendere rapida e semplice l'inizializzazione del gestionale Fluentis, eliminando la necessità di configurazioni manuali estese.  

### Configurazione con Fast Start

**Valutazione iniziale**  
- Decidi se adottare il **Fast Start** per avviare il sistema con impostazioni preconfigurate. Questa scelta condizionerà il setup iniziale.

**Funzionalità del Fast Start**  
- Popolazione automatica di parametri di base.  
- Configurazione semplificata per avviare rapidamente il sistema.  

**Vantaggi principali**  
- Efficienza nella configurazione iniziale.  
- Minore rischio di errori manuali e risparmio di tempo e risorse.  

**Lanciare la procedura**  
- Avvia il **Fast Start** per applicare le impostazioni predefinite.  
- Verifica successivamente i parametri generati per garantirne la conformità con le esigenze aziendali.


:::tip[Dove si attiva]
**Per lanciare la procedura**, accedere alla [**tabella Società**configurations/tables/general-settings/company#pulsante-impostazioni-generali), entrare nella specifica società interessata e premere il tasto *Impostazioni Generali* presente nella ribbon bar.
:::


:::note[Info]
La procedura è disponibile relativamente ad **ogni singola società** presente nella base dati, pertanto ad esempio la società 1 potrebbe essere inizializzata con la procedura di Fast Start, mentre la società 2 potrebbe essere configurata manualmente. 

Ecco perchè il **bottone** di attivazione è posto **all'interno della singola società**.
:::

:::danger[ATTENZIONE]
non deve essere già stato popolato il piano dei conti (in nessuna parte) e nemmeno altre tabelle coinvolte dalla procedura. Si consiglia di decidere subito ed eseguire come prima cosa questa procedura dopo l'installazione.

:::

---
<details>

  <summary>Fast Start (Click to expand)</summary>
  

Tabelle coinvolte (Stored Procedure Fluentis.SH_CreateNewYear_IT):
    
 - > Tipi conto
 - > Piano dei conti
 - > Parametri di contabilità generale
 - > Parametri cespiti
 - > Parametri portafoglio (attivo- effetti)
 - > Parametri insoluti
 - > Parametri MPS
 - > Causali contabili
 - > Codici IVA
 - > Registri IVA
 - > Tipi documento
 - > Tipi pagamento
 - > Soluzioni pagamento
 - > Categorie Agenti
 - > Tipi ritenuta (d'acconto)
 - > Categorie cespiti
 - > Tipi flusso finanziario
 - > Tipi anticipo
 - > Stati insoluto
 - > Stati effetti
 - > Tipi distinta di presentazione (effetti)
 - > Tipi effetti
 - > Link tra la tabella Tipi pagamento e i tipi effetto
 - > Numerazioni registrazioni contabili (definitive e provvisorie)
 - > Numerazione partite
 - > Numerazione compensazioni (partite)
 - > Numerazione pagamenti fronitori
 - > Numerazione intrastat
 - > Numerazione liquidazioni agenti
 - > Numerazione distinte di presentazione effetti
 - > Numerazione effetti
 - > [Numerazione documenti di venditaconfigurations/tables/fluentis-numerations)
 - > [Numerazione documenti di acquistoconfigurations/tables/fluentis-numerations)
 - > Tipi fattura ([acquistoconfigurations/tables/purchase/purchase-invoices-type) e [venditaconfigurations/tables/sales/invoices-type)) con collegamento alle causali contabili
 - > Tipi DDT ([acquistoconfigurations/tables/purchase/purchase-delivery-notes-type) e [venditaconfigurations/tables/sales/delivery-notes-type)) con collegamento ai tipi fattura
 - > Tipi Ordine ([acquistoconfigurations/tables/purchase/purchase-orders-type) e [venditaconfigurations/tables/sales/sales-order-types)) con collegamento ai tipi DDT
 - > [Tipi offertaconfigurations/tables/sales/sales-offer-type)
 - > [Parametri fattureconfigurations/parameters/sales/sales-invoices-parameters) e relativi [raggruppamenticonfigurations/parameters/sales/invoice-grouping) 
 - > [Parametri DDTconfigurations/parameters/sales/dn-parameters) e relativi [raggruppamenticonfigurations/parameters/sales/dn-grouping) 
 - > [Parametri ordiniconfigurations/parameters/sales/sales-orders-parameters) e relativi [raggruppamenticonfigurations/parameters/sales/orders-grouping)
 - > [Parametri offerteconfigurations/parameters/sales/offer-parameters)
 - > Tipi progetto (sales job order)
 - > Tipi intervento
 - > Numerazione progetti
 - > Numerazione interventi
 - > Tipi richiesta intervento (e relativa numerazione)
 - > Tipi interventi pianificati (e numerazione)
 - > Tipi rientro conto lavoro (e numerazione)
 - > Tipi ordini conto lavoro (e numerazione)
 - > Tipi commesse di produzione (e numerazione)
 - > Tipi ordini pianificati di acquisto (e numerazione)
 - > Tipi ordini pianificati di produzione (e numerazione)
 - > Tipi ordini pianificati di conto lavoro (e numerazione)
 - > Tipi o rdini di produzione (e numerazione)
 - > Tipi ordini di conto lavoro (e numerazione)
 - > Tipi RDA (e numerazione)
 - > (Tipi) fatturato vendite
 - > (Tipi) fatturato acquisti
 - > Tipi listino
 - > Tipi indirizzo
 - > Tipi sconto
 - > Lingue
 - > Nazioni
 - > Nazioni Black list
 - > Divise
 - > Unità di misura
 - > Porto (Incoterms - termini di resa)
 - > Spedizioni (tipi)
 - > Modelli di riclassificazione (controlling)
 - > Collegamento del modello di riclassificazione per Bilancio CEE con dettaglio piano dei conti
 - > Orari di lavoro (gest. dipendenti)
 - > Severità (ticket CRM)
 - > SLA (ticket CRM)
 - > Tipi Ticket CRM (e numerazione)
 - > Versioni distinta base
 - > Classi articolo
 - > Magazzini
 - > Causali di magazzino
 - > Dati di default per il CRM (Tipi contatto, Visit report, Opportunità, Qualità contatto, percentuali di successo ecc...)



</details>

---

**AMBIENTE CUSTOM SENZA FAST START**

Nel caso in cui non si lanci il Fast Start, è necessario popolare manualmente le seguenti tabelle.      

## TABELLE DI BASE

<details>

  <summary>NAZIONI Click to expand!</summary>
 
 ## Tabella necessaria per tutti i idocumenti e l'inserimento di anagrafiche CLI FOR

  1. Compilare codice (può essere anche interno ma si consiglia quello internazionale) e descrizione 
  2. Controllare in particolare il campo COD ISO EU che se mancante non memorizza il precodice partita IVA, attenzione a casi particolari
     * Grecia GR -> ISO = 'EL'
     * Salvo casi particolari può essere eseguito un update per compilare ISO EU = COD ISO (vecchi db pre fast start)

</details>

<details>

  <summary>DIVISE Click to expand!</summary>
 
 ## Tabella necessaria per gestire i cambi valuta e le registrazioni contabili

  1. Verificare la presenza almeno delle divise principali e soprattutto Euro
  2. Flag *scarica cambi* per abilitare l'inserimento del tasso per la divisa
  3. Altri campi
     * Decimali, si consiglia di mpistare a 2
     * Euro flaggare solo su EUR

    4. Griglia inferiore facoltativa ma utile per automatizzare la rilvazione delle diffferenze cambio impostando i relativi conti contabili 


</details>

<details>

  <summary>SOCIETA' Click to expand!</summary>
 
 ## Tabella necessaria per la fatturazione elettronica e per i dati societari nei documenti e stampe

  1. Compilare tutti i dati fiscali
  2. Dati necessari per la fatturazione elettronica
         * P. Iva e codice fiscale
         * Telefono e fax non sono obbligatori, attenzione a non inserire / o special chars per separare il prefisso
        * REA (Provincia due lettere e numero)
        * Socio unico / più soci
        * Liquidazione SI / NO
        * Capitale sottoscritto / versato - ATTENZIONE a non mettere il puntino delle meigliaia e separare i decimali col punto e NON virgola
        * Natura giuridica
        * Regime fiscale

</details>

<details>

  <summary>TIPI DOCUMENTO Click to expand!</summary>
 
 ## Tabella del gruppo generale 'Tipi documenti' da non confondere con l'omonima del gruppo amministrazione

  1. Verificare con un Fast Start i tipi minimi indispensabili
  2. **Per Fatturazione elettronica inserire una tipologia avente come codice e Decrizione FattPubb**
   
</details>

<details>

  <summary>TIPI PAGAMENTO Click to expand!</summary>
 
 ## Necessaria per le anagrafiche e i documenti (scadenze) e le registrazioni contabili (Partite)


Verificare la presenza dei dati nel campo **Codice P.A.** per il tra ciato della fattura elettronica

Attenzione al collegamento con i tipi effetto (griglia basso DX) altrimenti non ricerca le partite in creazione effetti

</details>

<details>

  <summary>SOLUZIONI DI PAGAMENTO Click to expand!</summary>
 
 ## Necessaria per i documenti (scadenze) e contabilità (Partite)

</details>

## TABELLE AMMINISTRAZIONE 

### Contabilità di base

<details>

  <summary>ALIQUOTE IVA Click to expand!</summary>
 
 ## Necessaria per la contabilità, documenti, fatturazione elettronica

  1. Attenzione a popolare il campo Codice PA sui codici di esenzione / esclusione / non imponibilità per le Fatture elettroniche
  2. Verificare il campo IN Dichiarazione IVA necessario per la comunicazione trimestrale liquidazioni IVA
  3. Verificare dove necessario il campo IVA a 0 in LG che permette righe IVA a zero
  4. Verificare dove serve il campo IVA per causali automatiche (casi di reverse charge con indetraibilità sull'acquisto)
  5. Verificare il campo Escludi da causali automatiche (casi di Reverse charge misto - parte non in reverse)
    

</details>

<details>

  <summary>REGISTRI IVA Click to expand!</summary>
 
 ## Necessaria per la contabilità e liquidazione iva

  1. Prevedere una ripartizione tra Italia, UE ed EXtra UE, consigliabile distinzione tra beni e servizi UE alla luce dei codici documento TD17 - TD18 per le autofatture da comunicare allo SDI (consigliabile ripartizione anche per exra UE)
  2. Per i registri di acquisto in reverse charge (Italia e UE) prevedere i rispettivi registri lato vendite per il giroconto, non condividere il registro di giroconto con la vendita UE (ad esempio).
  3. Consigliato prevedere un registro apposito per liquidazioni IVA (per facilitare la stampa definitiva e la ristampa in caso di sblocco solo di questo sezionale)
  4. Pianificare (e poi verificare) il corretto abbinamento tra Tipo Fattura, Numerazione del Tipo Fattura, Causale contabile e Registro IVA per evitare di creare buchi nei protocolli o conflitti. Le causali lato vendita in genere presentano l'opzione per imporre il protocollo pari al numero fattura.
  5. Verificare di aver inserito l'anno corrente ed eventuali anni precedenti se necessario, poi l'anno sarà creato in automatico dall'utility di generazione contatori nuovo anno.
    

</details>


<details>

  <summary>NUMERAZIONE REGISTRAZIONI CONTABILI Click to expand!</summary>
 
 ## Necessaria per la contabilità

  1. Prevedere almeno una numerazione per le registrazioni definitive (consigliato utilizzo de codice 1 descrizione  General ledger posting numeration)
  2. Pianificare e impostare la politica del numeratore (Giornliero o Annuale) gli altri parametri del numeratore come da istruzioni generali sui numeratori
  3. Consigliato prevedere anche un numeratore per le registrazioni provvisorie (Codice 2 descrizione General ledger posting provisory numeration)
    

</details>

<details>

  <summary>TIPI CONTO Click to expand!</summary>
 
 ## Necessaria per il Piano Conti, la contabilità e stampa bilancio

  1. Prevedere almeno le 4 tipologie Attivo Passivo Costi Ricavi per il Bilancio e la prima nota 
  2. Pianificare e impostare i tipi conto per Clienti e Fornitori (si consiglia la suddivisione Italia, UE ed Extra UE), attenzione a spuntare sia Attivo / Passico, sia Cliente / Fornitore
  3. Consigliato prevedere anche un tipo per le Banche per l'utilizzo tramite anagrafica, altrimenti non è possibile gestire alune funzioni quali il portafoglio ecc. sconsigliato far registrazioni di banca con un conto non di tipo angrafico banca.
  4. Consigliato prevedere un tipo conto per costi e ricavi da rettificare con ratei e risconti da settare con flag Servizio oltre che costo / Ricavo
  5. Necessario creare un tipo Agenti se si vuole attivare la gestione provvigioni (Flag su passivo e Agente)
  6. Facoltativo creare il tipo Conti d'ordine (con flag conti d'ordine) per gestire le scritture fuori bilancio.
    

</details>


<details>

  <summary>PIANO DEI CONTI Click to expand!</summary>
 
 ## Necessaria per la contabilità e stampa bilancio

  1. Prevedere nella griglia dei gruppi almeno le 4 tipologie Attivo Passivo Costi Ricavi
  2. Pianificare i sottogruppi (nr di sottolivelli non limitato) e compilare anche il campo Natura gruppo
  3. Definire nella griglia sotto, per ogni gruppo di ultimo livello di dettaglio i conti / sottoconti di dettaglio. ATTENZONE: per ogni gruppo deve esserci almenno un conto dove poi inserire i suoi sottooconti
  4. NON inserire conti di angrafica (Clienti Fornitori Agenti e BANCHE) da qui ma solo tramite CONTATTI
  5. Prevedere tutti i conti necessari (Bilancio di Chiusura e Apertura, Conto Economico di chiusura, Utile Perdita e Utile perdita dell'anno precedente, Ratei e Risconti - con tipo conto specifico)
  6. Facoltativo creare il gruppo Conti d'ordine per gestire le scritture fuori bilancio.
    

</details>


<details>

  <summary>PARAMETRI DI CONTABILITA' GENERALE Click to expand!</summary>
 
 ## Necessaria per la contabilità

  1. Inserire l'anno corrente ed eventuali anni precedenti se necessario, poi l'anno sarà creato in automatico dall'utility di generazione contatori nuovo anno.
  2. Compilare i tre range di date per la gestione dell'esercizio
  3. Compilare, se disponibili, anche le causali per chiusura e apertura conti, oppure riprenderle in seguito
  4. Compilare la periodicità IVA
  5. Inserire gli abbinamenti tra mastri relativi a clienti e fornitori, banche e agenti ed i relativi tipi conto
  6. Definire i conti per le procedure automatiche nel secondo tab
 

</details>

<details>

  <summary>CAUSALI DI CONTABILITA' GENERALE Click to expand!</summary>
 
 ## Necessaria per la contabilità

  1. Prevedere le causali connesse ai principali tipi di fatture acquisto e vendite e connetterle ai relativi registri iva (Necessario un template con conti generici su Cliente Fornitore e costo ricavo, sottoconto specifico per iva a credito debito) Prestare attenzione al tipo importo nelle righe.
  2. Prevedere anche le causali di giroconto per i Reverse charge e UE
  3. Prevedere causali per i pagamenti e incassi con chiusura partite (necessarie anche per distinte bonifico ecc..) prestare attenzione al template e tipo impoto nelle righe
  4. Prevedere le causali per le fasi del portafoglio attivo (emissione effetti, Presentazione e Accredito), presentazione e accredito non serve un template, mentre Emissione necessario un template Effetti in portafoglio a Cliente
  5. Predere causali per note di accredito con template invertito nei segni, per reverse charge si usa invertire la prima e condividere il giroconto che ha l'opzione per inversione segni automatica
  6. Prevedere causale per percipienti (con template) e per pagamento percipienti (non serve template)
  7. Prevedere causali aperturam chiusura , ratei e risconti, ammortamenti (non serve template)
  8. Consigliato prevedere altre causali di prima nota e una causale di prima nota generica senza template.
  9. Prevedere impostazioni per invio autofatture SDI e una causale per acquisto servizi Extra UE non iva con aggancio ad autofattura  
 
    
</details>

### Gestione cespiti

<details>

  <summary>PARAMETRI CESPITI Click to expand!</summary>
 
 ## Necessaria per la gestione cespiti

  1. Pianificare la politica di gestione della numerazione, se singola o con precodice   
    
</details>

<details>

  <summary>Tabella CATEGORIE CESPITI Click to expand!</summary>
 
 ## Necessaria per la contabilità e gestione cepiti

  1. Prevedere le categorie e l'aliquota ministeriale di ammortamento secondo il tipo attività svolta
  2. Inserire nelle categorie il limite per l'ammortamento annuale (di solito 516 Euro)
  3. Inserire il flag Ammortamento primo anno per dimezzare la quota il primo anno
  4. Pianificare la politica di ammortamento dei componenti incrementali (si sconsiglia di cambiarla in corsa)
   
</details>

<details>

  <summary>Tabella PRECODICE CESPITE Click to expand!</summary>
 
 ## Facoltativa

  1. Pianificare la politica di gestione della numerazione, se singola o con precodice 
 
    

</details>

### Gestione percipienti

<details>

  <summary>Tabella CODICE TRIBUTO Click to expand!</summary>
 
 ## Necessaria per la gestioe F24

  1. Verificare la presenza di dati e aggiungere se necessario i codici per l'iva (6001, 6002.... 6099) e per ritenute (1040, 1038....)

   
</details>

<details>

  <summary>Tabella TIPI RITENUTA Click to expand!</summary>
 
 ## Necessaria per la gestione percipienti

  1. Prevedere le tipologie necessarie per percipienti (1040) al 20% di ritenuta, per agenti e per contribuenti forfettari (0% sul 100%)
  2. Agganciare le causali per la contabilizzazione compenso 
  3. Agganciare la categoria agente nel tipo riservato agli agenti
   
</details>

---

## TABELLE TESORERIA

### Portafoglio attivo

<details>

  <summary>Tabella STATI EFFETTI Click to expand!</summary>
 
 ## Necessaria per la gestione portafoglio

  1. Prevedere almeno le tipologie fondamentali Emesso, Presentato SBF, Rit. Accr (Accreditato) e Rit. Ins (insoluto) da bbinare al rispettivo flag
   
</details>

<details>

  <summary>Tabella STATI INSOLUTI Click to expand!</summary>
 
 ## Necessaria per la gestione insoluti legata al portafoglio

  1. Prevedere almeno la tipologia "Insoluto" collegata al relativo flag
  2. Si consiglia di codificare tutte le tipologie specularmente ai flg presenti 
  
   
</details>

<details>

  <summary>Tabella TIPI EFFETTI Click to expand!</summary>
 
 ## Necessaria per la gestione portafoglio

  1. Prevedere almeno la tipologia "Ricevuta bancaria"
  2. Collegare la numerazione di cui al punto successivo
  3. Collegare un conto dal piano dei conti (es. Effetti attivi in portafoglio) per contabilizzare l'emissione

   
</details>

<details>

  <summary> NUMERAZIONE EFFETTI Click to expand!</summary>
 
 ## Necessaria per la gestione portafoglio

  1. Prevedere la tipologia "Bills numeration"
  2. Configurare il dettaglio come gli altri numeratori standard
  3. Consigliata la cadenza annuale

   
</details>

<details>

  <summary> NUMERAZIONE DISTINTE DI PRESENTAZIONE Click to expand!</summary>
 
 ## Necessaria per la gestione portafoglio

  1. Prevedere la tipologia "Bills list numeration"
  2. Configurare il dettaglio come gli altri numeratori standard
  3. Consigliata la cadenza annuale

   
</details>

<details>

  <summary> Tabella TIPI PRESENTAZIONE DISTINTE EFFETTI  Click to expand!</summary>
 
 ## Necessaria per la gestione portafoglio

  1. Prevedere almeno una tipologia di default con numerazione collegata
  2. Si consiglia di prevedere varie tipologie a seconda della banca di presentazione collegando i conti d'appoggio per la presentazione ed i conti correnti ordinari per l'accredito specifici
  

   
</details>

### Bonifici fornitori

<details>

  <summary> NUMERAZIONE PAGAMENTI FORNITORI Click to expand!</summary>
 
 ## Necessaria per la gestione distinte di bonifico

  1. Prevedere la tipologia "Bills list numeration"
  2. Configurare il dettaglio come gli altri numeratori standard
  3. Consigliata la cadenza annuale

   
</details>

<details>

  <summary> Tabella TIPI PAGAMENTO Click to expand!</summary>
 
 ## Verifica: già gestita nelle tabelle genralio

  1. Verificare se presente una tipologia adatta (es "Bonifico") che sarà richiamata

   
</details>

### Anticipo fatture

<details>

  <summary> Tabella TIPI ANTICIPO  Click to expand!</summary>
 
 ## Necessaria per la gestione anticipi

  1. Prevedere una tipologia per ogni banca collegata
  2. Agganciare la numerazione di cui al punt successivo
  
  
</details>

<details>

  <summary> NUMERAZIONE DISTINTE ANTICIPO FATTURE Click to expand!</summary>
 
 ## Necessaria per la gestione distinte di anticipo

  1. Prevedere la tipologia "Default"
  2. Configurare il dettaglio come gli altri numeratori standard
  3. Consigliata la cadenza annuale

   
</details>

### Cashflow

<details>

  <summary> Tabella TIPI FLUSSO  Click to expand!</summary>
 
 ## Necessaria per la gestione cashflow

  1. Prevedere una tipologia per ogni tipo flusso finanziario con relativo flag abbinato
  2. Consigliato abilitarli tutti, tanto si selezionano quelli di interesse al lancio del calcolo e resta memorizzata la scelta
  
  
</details>

<details>

  <summary> Tabella TIPI CONTO FINANZIARIO  Click to expand!</summary>
 
 ## Necessaria per la gestione cashflow

  1. Inserire i conti correnti ordinari
  2. Non è necessario inserire i conti di appoggio per SBF se si abilita il parametro di lettura in fase di lancio del calcolo
  
  
</details>

<details>

  <summary> Tabella TIPI SCADENZA  Click to expand!</summary>
 
 ## Facoltativa per la gestione scadenze extracontabili nel cashflow

  1. Inserire le tipologie di interesse (es. Stipendi)
  
  
</details>

Verifcare nelle varie tabelle dei documenti (Ordini, DDT, RDA ecc..) quali tipologie si vogliono leggere nel calcolo cashflow

## TABELLE VENDITA

### Offerte

<details>

  <summary> PARAMETRI  Click to expand!</summary>

  Definire i [parametriconfigurations/parameters/sales/offer-parameters) generali da utilizzare nelle offerte. 

</details>

### Ordini

<details>

  <summary> Tabella TIPI ORDINE  Click to expand!</summary>

  Inserire le [tipologie di ordineconfigurations/tables/sales/sales-order-types) utilizzate; i dati obbligatori sono: *Tipo*, *Descrizione* e *[Numerazioneconfigurations/tables/fluentis-numerations)*.     
  I criteri di creazione delle varie tipologie possono essere diversi, per esempio:      
  - creazione tipologia ORDINE CLIENTI ITALIA, ORDINE CLIENTE UE, ORDINE CLIENTE EXTRA UE.       
  - creazione tipologia in base al [Tipo DDTconfigurations/tables/sales/delivery-notes-type) o al [Tipo fatturaconfigurations/tables/sales/invoices-type) da creare.     
  - creazione tipologia in base al Magazzino da movimentare

</details>

<details>

  <summary> PARAMETRI  Click to expand!</summary>

  Definire i [parametriconfigurations/parameters/sales/sales-orders-parameters) generali da utilizzare negli ordini cliente. 

</details>

### DDT di vendita

<details>

  <summary> Tabella TIPI DDT  Click to expand!</summary>

  Inserire le [tipologie di DDTconfigurations/tables/sales/delivery-notes-type) utilizzate; i dati obbligatori sono: *Tipo*, *Descrizione* e *[Numerazioneconfigurations/tables/fluentis-numerations)*.     
  I criteri di creazione delle varie tipologie possono essere diversi, per esempio:      
  - creazione tipologia DDT CLIENTI ITALIA, DDT CLIENTE UE, DDT CLIENTE EXTRA UE.       
  - creazione tipologia in base al [Tipo fatturaconfigurations/tables/sales/invoices-type) da creare.     
  - creazione tipologia in base al Magazzino da movimentare
  
</details>

<details>

  <summary> PARAMETRI  Click to expand!</summary>

  Definire i [parametriconfigurations/parameters/sales/dn-parameters) generali da utilizzare nei DDT cliente. 
  
</details>

### Fatture di vendita

<details>

  <summary> Tabella TIPI FATTURA  Click to expand!</summary>

  Inserire le [tipologie di fatturaconfigurations/tables/sales/invoices-type) utilizzate; i dati obbligatori sono: *Tipo*, *Descrizione* e *[Numerazioneconfigurations/tables/fluentis-numerations)*.     
  I criteri di creazione delle varie tipologie possono essere diversi, per esempio:      
  - creazione tipologia FATTURA CLIENTI ITALIA, FATTURA CLIENTE UE, FATTURA CLIENTE EXTRA UE.     
  - creazione tipologia in base alla Natura fattura (fattura, nota di credito, ecc.)  
  - creazione tipologia in base al Magazzino da movimentare.
  
</details>

<details>

  <summary> PARAMETRI  Click to expand!</summary>

  Definire i [parametriconfigurations/parameters/sales/sales-invoices-parameters) generali da utilizzare nelle fatture cliente. 

</details>
  

## TABELLE ACQUISTI

### Ordini

<details>

  <summary> Tabella TIPI ORDINE  Click to expand!</summary>

  Inserire le [tipologie di ordineconfigurations/tables/purchase/purchase-orders-type) utilizzate; i dati obbligatori sono: *Tipo*, *Descrizione* e *[Numerazioneconfigurations/tables/fluentis-numerations)*.     
  I criteri di creazione delle varie tipologie possono essere diversi, per esempio:      
  - creazione tipologia ORDINE FORNITORE ITALIA, ORDINE FORNITORE UE, ORDINE FORNITORE EXTRA UE.       
  - creazione tipologia in base al [Tipo DDTconfigurations/tables/purchase/purchase-delivery-notes-type) o al [Tipo fatturaconfigurations/tables/purchase/purchase-invoices-type) da creare.     
  - creazione tipologia in base al Magazzino da movimentare

</details>

<details>

  <summary> PARAMETRI  Click to expand!</summary>

  Definire i [parametriconfigurations/parameters/purchase/purchase-orders-parameters) generali da utilizzare negli ordini fornitore. 

</details>

### DDT di acquisto

<details>

  <summary> Tabella TIPI DDT  Click to expand!</summary>

  Inserire le [tipologie di DDTconfigurations/tables/purchase/purchase-delivery-notes-type) utilizzate; i dati obbligatori sono: *Tipo*, *Descrizione* e *[Numerazioneconfigurations/tables/fluentis-numerations)*.     
  I criteri di creazione delle varie tipologie possono essere diversi, per esempio:      
  - creazione tipologia DDT FORNITORE ITALIA, DDT FORNITORE UE, DDT FORNITORE EXTRA UE.       
  - creazione tipologia in base al [Tipo fatturaconfigurations/tables/purchase/purchase-invoices-type) da creare.     
  - creazione tipologia in base al Magazzino da movimentare
  
</details>

<details>

  <summary> PARAMETRI  Click to expand!</summary>

  Definire i [parametriconfigurations/parameters/purchase/purchase-delivery-note-parameters) generali da utilizzare nei DDT di acquisto. 
  
</details>

### Fatture di acquisto

<details>

  <summary> Tabella TIPI FATTURA  Click to expand!</summary>

  Inserire le [tipologie di fatturaconfigurations/tables/purchase/purchase-invoices-type) utilizzate; i dati obbligatori sono: *Tipo*, *Descrizione* e *[Numerazioneconfigurations/tables/fluentis-numerations)*.     
  I criteri di creazione delle varie tipologie possono essere diversi, per esempio:      
  - creazione tipologia FATTURA FORNITORE ITALIA, FATTURA FORNITORE UE, FATTURA FORNITORE EXTRA UE.     
  - creazione tipologia in base alla Natura fattura (fattura, nota di debito, ecc.)  
  - creazione tipologia in base al Magazzino da movimentare.
  
</details>

<details>

  <summary> PARAMETRI  Click to expand!</summary>

  Definire i [parametriconfigurations/parameters/purchase/purchase-invoices-parameters) generali da utilizzare nelle fatture di acquisto. 

</details>
  


