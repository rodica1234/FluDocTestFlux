---
title: Centri aziendali
sidebar_position: 4
---

:::note Percorso
**Tabelle > Controlling > Contabilità analitica > Centri aziendali**

Nota:
Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).

:::

---

:::tip Nota
La tabella è d'interesse solo nelle società con il flag *Controlling* attivo.
:::


La tabella consente la definizione della struttura, anche su diversi livelli, e le caratteristiche dei centri aziendali.


| **PULSANTI della RIBBON BAR** | Significato |
| --- | --- |
| Nuovo CDC | Pulsante per effettuare l'inserimento di un nuovo centro di costo. |
| Nuovo legame CDC | Pulsante per effettuare l'inserimento di un sotto-livello rispetto a quello su cui si è posizionati. |
| Cancella legame CDC | Pulsante per effettuare la cancellazione del sotto-livello del CDC. |


:::tip **Modalità di inserimento nuovi centri**
La struttura ad albero creata per organizzare i centri, ed i centri nel dettaglio, sono visibili nella griglia centrale della form, ma i nuovi centri vengono inseriti compilando i campi nella zona inferiore della maschera.
ATTENZIONE: alcuni campi sono, tuttavia, modificabili agendo direttamente sulla riga della griglia superiore dopo aver inserito il nuovo centro (es. il campo *Cost driver*) 
:::




## PRIMO TAB - Impostazioni generali

### Campi obbligatori della colonna di sinistra 
- [***DIMENSIONE***/controlling-parametrization/controlling-specific-settings/dimension) di appartenenza
- ***CODICE*** alfanumerico, possibili 15 caratteri
- ***DESCRIZIONE*** del centro
- ***CATEGORIA*** del centro

### Campi non obbligatori della colonna di sinistra
- ***SECONDA DESCRIZIONE***
- ***TIPOLOGIA DEL CENTRO*** (diretto/indiretto) scelta che non ha una qualche influenza a livello di elaborazioni

### Campi non obbligatori della colonna di destra 
- ***DATA INIZIO***/***DATA FINE VALIDITA’*** impostando queste date andremo a verificare se il centro di costo è valido alla data di registrazione (o alla data del documento), cioè il menù a tendina dei centri mostrerà solo quelli validi alla data (o con range di validità vuoto)
- FLAG ***VALORIZZABILE***: indica se il centro può essere valorizzato in contabilità o nei documenti o se è un centro di struttura logica
- FLAG ***VISIBILE IN PRODUZIONE***: questo rende visibile quel centro nella tabella [Centri di costoconfigurations/tables/production/cost-center) presente in produzione;
- ***CENTRO DI RESPONSABILITA’***. È una tabella libera dove indico chi è il responsabile di quel centro, non ha influenza nelle logiche di gestione della contabilità analitica, ma può essere utilizzato per segnalare tramite supervisor eventuali sforamenti di budget al dipendente collegato.

## SECONDO TAB - Impostazioni di controllo
- ***CONTI DA RIASSEGNARE***: solo un centro può avere questo flag impostato (nella stessa società). Andiamo ad utilizzare questo flag all’interno dei centri di comodo, in particolare in un centro generico “VALORI CON ATTRIBUZIONE NEL CONTROLLING”. 
Questo flag identifica una specie di centro di default dove la contabilità generale assegna quei costi che non sa attribuire in modo preciso. Potrebbero altresì esserci logiche di cui la contabilità non ha elementi certi per valorizzare i dati al momento della registrazione, o che richiederebbero troppo tempo per essere gestiti.

:::tip Nota
Esempio: il costo degli affitti potrebbe essere gestibile già nel piano dei conti con delle percentuali fisse, ma passando per questo centro generico abbiamo la possibilità di gestire un *cost driver* nel quale impostare magari i metri quadri dei vari centri e da qui derivare la mia percentuale. Variando il driver, andremo a valorizzare (solo nel controlling) la nuova percentuale senza dover intervenire sullo storico già movimentato in contabilità.
Oppure il consumo in kwh delle varie macchine, dati che la contabilità non sa dove reperire, per i quali quindi torna comodo parcheggiare i valori in questo centro generico e poi a fine periodo, una volta che so quanto è stato consumato, andrò a valorizzare la logica solo nel controlling demandandola ad un *cost driver*.
:::

- ***CENTRO DEFAULT PATRIMONIALE***: Identifica un centro generico al quale assegnare tutti i movimenti patrimoniali della contabilità. Normalmente tutta la gestione dell’analitica viene legata solo all’economico, ma potrebbe essere interesse dell’azienda avere una quadratura completi di dati di bilancio nell’analitica. Il centro va di pari passo con il flag di valorizzazione del patrimoniale nel Controlling disponibile all'interno della *Divisione*.

- ***CENTRO DI DEFAULT PER I PROGETTI*** identifica quello che è il centro aziendale generico che accoglie i costi/ricavi diretti di progetto/commessa. Come abbiamo spiegato a livello di tabella *Dimensioni*, abbiamo una specifica dimensione di analisi dei valori a progetto: dato che ci deve sempre essere un centro nell’analitica, quando valorizzo un costo ed un ricavo diretto di progetto/commessa potrò utilizzare il centro generico con questo FLAG oppure dovrò valorizzare più centri commessa impostando la [TABELLA ASSOCIAZIONE CENTRI/COMMESSEconfigurations/tables/controlling/analytical-accounting/projects-centers-association).


- [***MODELLO DI RICLASSIFICAZIONE***/reclassifications/create-reclassification-model): permette di abbinare al centro aziendale un modello di riclassificazione al fine di determinare il totale dei costi assegnati al centro per ottenere l’ indice di costo del centro stesso. Questo perchè alcuni centri (in genere produttivi) sono tipicamente valorizzati in termini di grandezze fisiche (es. ore di lavoro o numero di pezzi utilizzati) ed è necessario determinare la tariffa di valorizzazione per il costo della singola ora di lavoro o del singolo pezzo. Il modello di riclassificazione tipicamente determinerà i costi totali del centro che saranno suddivisi per il valore totale delle ore (ad esempio, o dei pezzi), caricati sul centro stesso.
:::tip Nota
Il modello di riclassificazione da abbinare al centro aziendale per la determinazione della tariffa può dipendere dall'impostazione teorica che si vuole dare al proprio sistema di controllo di gestione, in ogni caso, comunque, sarà un modello che tende a determinare il costo complessivo del centro anche attraverso l'attribuzione di quota parte dei costi indiretti e comuni. Nel dettaglio del modello di riclassificazione è previsto di indicare tramite apposito flag il nodo (la riga) che espone il risultato della riclassificazione e dunque il totale dei costi del centro che diventerà il numeratore del quoziente (esempio Totale cosi del centro / totale ore di lavoro del centro) al fine di determinare ad esempio il costo orario del centro. Nelle immagini si può vedere un esempio di modello specifico denominato Quadro controllo costi. Tale modello è configurato per gestire come numeratore del rapporto la riga Totale costi di Funzionamento.
:::

![Immagine](/img/it-it/configurations/tables/controlling/analytical-accounting/corporate-centers/corporate-center-model-connection.png)

![Immagine](/img/it-it/configurations/tables/controlling/analytical-accounting/corporate-centers/QCC-model.png)

- ***TIPO MISURAZIONE***: possiamo misurare con tre metodologie
    - *in dimensione fisica*
    - *in percentuale*
    - *in percentuale e grandezza fisica*.

Se selezioniamo quest’ultima in modo da visualizzare tutte le opzioni disponibili, avremo

- ***FILTRO VALORI DENOMINATORE***: con questo campo, per calcoli a percentuale, andiamo a definire con che logica calcolare il denominatore per il calcolo indici percentuale. Le opzioni disponibili sono
    - *02 Totale dare*
    - *03 Totale avere*
    - *04 Margini*
    - *05 Su sottoconto selezionato*
    - *06 Su conto selezionato*
    - *07 Ad esclusione dei sottoconti selezionati*
    - *08 Ad esclusione dei conti selezionati*

Selezionando il codice 02 Totale dare, ad esempio, andremo a sommare solo il dare dei centri indicati nella griglia in basso a sinistra, con il codice 03 l’avere, 04 i margini cioè la differenza dare-avere, le opzioni successive abiliteranno anche la griglia di destra per filtrare in modo opportuno i dati dei centri.

- [***UNITA' DI MISURA 1*** /controlling-parametrization/controlling-specific-settings/measure-units), [***UNITA' DI MISURA 2***], ***PARTE FISSA*** e ***PARTE VARIABILE***. Sono 4 campi legati al tipo di calcolo a quantità, dove andare a definire qual è l’unità di misura da ricercare per ottenere il totale della quantità da mettere a denominatore dell’indice fisico: possiamo quindi indicare due unità di misura (UM1 e UM2) per il calcolo di un doppio indice, mentre è chiaramente la stessa unità di misura che si usa per la quota fissa e la quota variabile del primo o secondo indice.

:::tip Nota
Il calcolo su grandezza fisica, tipico dei centri produttivi, consentirà di ottenere le tariffe di costo dei centri come € per ora macchina o ore uomo, al fine di poter calcolare e verificare i costi standard utilizzati nel Costo prodotto per creare le stime di costo in distinta base piuttosto che un preventivo.
:::

- ***RIFERIMENTO DI MISURAZIONE DEL CENTRO***: possiamo indicare quali campi dello storico movimenti fisici andare a filtrare per identificare le quantità del nostro centro: potrà essere in particolare il centro di origine, il centro di destinazione, oppure in via prioritaria la destinazione altrimenti l’origine.

## TERZO TAB - Localizzazioni
In caso di installazione con localizzazioni geografiche differenziate, è possibile sfruttare la sezione Localizzazioni al fine di gestire descrizioni in lingua alternativa, che sarà possibile sfruttare per esempio nella stampa dell’Analisi centri di costo.
