---
title: Aliquote IVA
sidebar_position: 1
---

:::tip[FAst Start]
La tabella è interessata dalla procedura di [**Fast Start**guide/fast-start)

Nel caso in cui si intenda configurare manualmente fare riferimento alla check list della pagina linkata
:::

Questa tabella è comune a tutte le società presenti nella base dati e presenta la lista delle aliquote IVA applicabili in tutto il gestionale.

Si tratta di una tabella precaricata sulla quale l'utente abilitato può operare per modificare o aggiungere quanto fosse necessario per l'attività della società.


### **Griglia principale**:

**Codice / Descrizione**: codice e relativa descrizione per richiamare l'aliquota iva che si sta parametrizzando numerico, di identificazione dell'aliquota.

**Descrizione secondaria:** ulteriore descrizione che può essere utilizzata per report di stampa personalizzati ecc... (normalmente non necessaria)

**Percentuale**: definisce la percentuale IVA da applicare. Per i codici di esenzione, esclusione e non imponibilità occorre impostare 0.

**Cat. IVA**: richiama le tipologie di IVA fisse previste dal gestionale. La tipologia è molto importante, ad esempio, per la totalizzazione dei vari movimenti nella comunicazione trimestrale delle liquidazioni IVA e più in generale per tutti i dichiarativi IVA. Le opzioni disponibili per la localizzazione italiana sono:
    - *Aliquota*
    - *Non imponibile*
    - *Esente*
    - *Escluso*
    - *74 ter CEE*, per le agenzie viaggio
    - *74 ter FUORI CEE*, per le agenzie viaggio
    - *74 ter PARTE CEE*, per le agenzie viaggio
    - *74 ter PARTE FUORI CEE*, per le agenzie viaggio

**Perc. indetraibilità**: definisce la percentuale di indetraibilità da applicare all'imposta. Verrà riportata all'interno della registrazione contabile nella sezione IVA ai fini del calcolo effettiva della quota indetraibile, può essere modificata o forzata direttamente nella registrazione. 

**Plafond**: il flag definisce quali aliquote sono collegate alle dichiarazioni di intento: solo le aliquote che hanno questo flag attivo rendono visibile, nella griglia iva della registrazione contabile, il combo box di collegamento delle dichiarazioni di intento. 

ATTENZIONE: il flag è irrilevante per la gestione delle dichiarazioni di intento nel ciclo documentale in acquisto/vendita: qui è rilevante solo quello che viene impostato dentro il rispettivo registro delle dichiarazioni di intento emesse / ricevute.

Ai fini del calcolo del plafond generale, inoltre, questo flag identifica l’aliquota che "**consuma**" mese per mese il nostro plafond generale disponibile in qualità di esportatori abituali (dentro la procedura di gestione plafond), quindi lato acquisti.

**Vendita Estera per Plafond**: con questo flag si identificano le aliquote iva, presenti nelle registrazioni di vendita dell’anno yyyy, che **incrementano** il nostro plafond disponibile per l’anno yyyy+1 in qualità di esportatore abituale.

**In dich. IVA**: il flag imposta quali aliquote siano da gestire nella dichiarazione/comunicazione trimestrale delle liquidazioni IVA e più in generale in tutti i dichiarativi IVA. Esempio: tipicamente i codici corrispondenti alla categoria IVA *Escluso* avranno il presente flag <u>non</u> attivo, mentre le *aliquote*, gli *esenti* ed i *non imponibili* avranno il flag attivo in quanto devono essere inseriti nei dichiarativi iva. (Cfr le istruzioni ministeriali della dichiarazione iva annuale o della comunicazione trimestrale delle liquidazioni).

**Non Intra**: il flag imposta le aliquote che, pur essendo utilizzate in documenti (nei moduli fatture acquisti/vendite) o in registrazioni di tipo intra-cee, non vanno considerate tali. Viene letto nella creazione automatica dei riepiloghi Intrastat.

**Rep. San Marino**: il flag determina quali siano le aliquote utilizzate nelle operazioni con San Marino (Obsoleto, comunicazione abrogata).

**% IVA Agr. Detr.**: il campo imposta la percentuale di indetraibilità compensativa fissa dell'aliquota in caso di movimento in regime agricolo.

**Consenti IVA 0 in LG**: il flag impone la registrazione di righe IVA con importo 0 sia dare che avere nel Libro giornale. La [**causale contabile**configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail) causale contabile d'utilizzo, comunque, deve prevedere lo stesso tipo di autorizzazione delle righe a 0.

**Import oro argento**: il flag consente di impostare quali aliquote vadano riepilogate nei campi previsti nella Comunicazione IVA annuale. (Da considerare attualmente obsoleto)

**Import rottami**: il flag consente di impostare quali aliquote vadano riepilogate nei campi previsti nella Comunicazione IVA annuale. (Da considerare attualmente obsoleto)

**Non in spesometro**: il flag consente di escludere dallo *spesometro* i movimenti IVA collegati a questa aliquota. (Da considerare attualmente obsoleto)

**Codice PA:** In questo campo va inserito il codice previsto per la fatturazione elettronica tra privati e verso la pubblica amministrazione nei casi in cui non sia presente l'iva (esenzione, esclusione, non imponibilità). Per il dettaglio dei codici previsti Cfr. alle specifiche tecniche della fattura elettronica pubblicate sul sito dell'Agenzia delle Entrate.

**Escludi da Dichiarazione di intento:** flag attualmente non utilizzato in concreto da alcuna procedura. Sviluppato per impostare, eventualmente, che l'aliquota iva corrispondente, con flag attivo, non possa essere sovrascritta dal codice iva impostato nel registro dichiarazioni di intento come codice da utilizzare per le operazioni in esenzione a fronte di dichiarazione di intento.

**Escludi da causale automatica:** attivando questo flag il codice iva corrispondente non viene riportato all'interno di scritture contabili generate in automatico in quanto collegate alla causale contabile principale tramite il campo *Causale automatica*.

:::note  Nota
L'utilizzo del flag diventa **fondamentale** in un caso in particolare: si pensi al ricevimento di una **fattura d'acquisto "mista"**, in cui il fornitore ha fatturato parte **in reverse charge** e parte in regime ordinario. Pertanto sulla parte ordinaria si avrà la detrazione dell'iva sull'acquisto, mentre la quota parte in reverse charge risulterà neutra in quanto registrata sia sul registro acquisti, sia sul registro vendite. Differenziando opportunamente i codici iva utilizzati, ad esempio creando un codice "Reverse charge misto quota detraibile" ed attivando il presente flag su detto codice, se nella registrazione principale lato acquisto saranno imputate le somme corrispondenti ai due codici (es. 22 per la quota in reverse charge e "Reverse charge misto....") nel giroconto creato automaticamente soltanto il codice 22 sarà riportato, generando in automatico la detrazione soltanto sulla quota esclusa dal meccanismo di reverse charge.
:::

**IVA per causali automatiche:** questo campo serve per forzare un particolare codice iva nella registrazione contabile generata automaticamente (es un giroconto per reverse charge) rispetto a quello usato nella registrazione principale (es. quella lato acquisto nel reverse charge).

:::note Nota
L'utilizzo del campo diventa **fondamentale** in un caso in particolare: si pensi al ricevimento di una **fattura di acquisto in reverse charge con iva parzialmente o totalmente indetraibile**. Di default il software imposterebbe lo stesso codice iva anche nel giroconto lato vendita e la percentuale di indetraibilità determina di fatto una "non imponibilità" per pari quota. Dunque di fatto l'effetto sarebbe sempre neutro. Per esercitare la detrazione limitata occorre invece che tutta l'iva lato vendite sia imponibile, rimanendo così un costo la quota indetraibile sul lato acquisti. Per evitare di entrare manualmente nella registrazione di giroconto generata automaticamente a correggere il codice iva (ad esempio il 2250 che presenta una detrazione limitata al 50%) rimettendo un codice 22, è possibile impostare il presente campo che in automatico provvederà alla correzione.
:::

**Data fine validità:** il codice non sarà più utilizzabile dopo la data che viene impostata, utile per bloccare l'utilizzo di codici non più in vigore.

**Base per conteggio bollo:** poiché il bollo in fattura viene inserito in automatico solo quando si è in presenza di codici iva esenti, esclusi o non imponibili (viene rilevata la *Categoria IVA* del codice stesso) e la fattura supera un certo importo (impostato nella tabella dell'anagrafica della società) il significato di questo flag è di andare a gestire alcune casistiche che, seppur esenti o non imponibili o escluse, fanno eccezione e non prevedono l'applicazione del bollo. In questi casi pertanto il flag dovrà essere disattivato.

NOTA: in caso di errata attivazione del flag su codici di tipo Aliquota prevale comunque la lettura della categoria IVA e pertanto il bollo NON viene inserito.

**Reverse charge:** vedere [**qui**/particular-cases/mixed-reverse-charge)

**Iva del margine / Iva del margine di riferimento:** vedere [**qui**/particular-cases/VAT_regime-del-maine.md)

---

### **Tab Tipo contab IVA**:
in questa sezione è possibile definire per ogni aliquota IVA uno o più sottoconti per l'IVA acquisti/vendite (necessità tipicamente connessa a localizzazioni non italiane, ad esempio dei paesi dell'est Europa, dove vi è l'obbligo di rilevare contabilmente su sottoconti separati l'applicazione di iva ridotta, piuttosto che normale o maggiorata).
E' inoltre possibile abbinare detti conti ad un *Tipo contabilizzazione IVA* da codificare nell'apposita  [**tabella**configurations/tables/finance/vat-accounting-types) , attribuito al cliente/fornitore all'interno dell'anagrafica, o previsto di default nei [**parametri generali di contabilità**configurations/parameters/finance/accounting-parameters)

**Tipo / Descr. contab. IVA: **codice /descrizione del tipo di contabilizzazione IVA (campo non obbligatorio).


**Conto acquisti:** il conto di acquisto da proporre per questo tipo di contabilizzazione IVA.

**Sottoconto acquisti:** il sottoconto di acquisto da proporre per questo tipo di contabilizzazione IVA.

**Descrizione**: descrizione del sottoconto di acquisto da proporre per questo tipo di contabilizzazione IVA.

**Conto vendite:** il conto di vendita da proporre per questo tipo di contabilizzazione IVA.

**Sottoconto vendite:** il sottoconto di vendita da proporre per questo tipo di contabilizzazione IVA.

**Descrizione:** descrizione del sottoconto di vendita da proporre per questo tipo di contabilizzazione IVA.

---

### **Tab Note**

**Codice**: codice, numerico, di identificazione dell'aliquota.

**Note**: eventuali note da aggiungere.

---

### **Tab Specifiche per Dichiarazione**

In questa sezione è possibile parametrizzare i vari codici iva, utilizzati nelle registrazioni contabili, in modo tale da ottenere un report di stampa (da creare al bisogno tramite il report designer integrato in Fluentis) che rappresenti un fac-simile di Dichiarazione annuale iva.
Il report aggregherà i vari codici iva utilizzati durante l'anno in modo da esporre i vari totali da riportare nei righi della dichiarazione fiscale.
Occorre pertanto abbinare ad ogni codice iva il corretto rigo della dichiarazione dove dovrà essere inserito, riferendosi alle istruzioni ministeriali ed alle logiche specifiche del dichiarativo in oggetto, alle quali si rinvia.

**Operazioni:** Richiamare tramite la combo box il tipo di operazione: Attiva, passiva o Reverse charge al fine di distinguere la quota parte di operazioni iva inserite con il codice corrispondente da inserire nei righi del dichiarativo riferiti agli acquisti, vendite oppure reverse charge.

**Riga dichiarazione fiscale / Descrizione** Richiamare tramite la combo box il rigo (codice e descrizione) della dichiarazione iva da associare (l'elenco è precaricato e non modificabile dall'utente).

---

### VIDEO TUTORIALS

:::important Vedi Anche
[**VIDEO TUTORIALS ALIQUOTE IVA**/finance/intro.md)
:::
 
