---
title: Categoria cespite
sidebar_position: 5
---

:::tip[FAst Start]
La tabella è interessata dalla procedura di [**Fast Start**guide/fast-start)

Nel caso in cui si intenda configurare manualmente fare riferimento alla check list della pagina linkata
:::

All'interno di questa tabella si codificano le categorie dei cespiti gestiti nella società. 

### **Griglia superiore**

**Categoria**: codice alfanumerico.

**Descrizione categoria**: descrizione della categoria.

**Conto**: il conto patrimoniale dell'immobilizzazione.

**Sottoconto**: il sottoconto patrimoniale dell'immobilizzazione.

**Descrizione**: descrizione del sottoconto patrimoniale dell'immobilizzazione.

**Mat/Imm.**: indicazione della tipologia Materiale o Immateriale del bene.

**Massimale amm.**: importo massimo dell'ammortamento raggiungibile per ogni cespite della categoria.

**Perc. amm.**: la percentuale massima del valore del cespite che potrà essere ammortizzata.

**Oper. incrementali**: se il flag non è impostato, così come di default, ogni riga di incremento del valore del cespite sarà gestita con un dettaglio d'ammortamento separato e autonomo Se il flag è impostato, al contrario, ogni incremento sarà attribuito alla riga d'acquisto iniziale, andando ad incrementare sempre il valore iniziale alla sua data d'origine.

**Limite amm. totale**: quota limite per l'applicazione dell'ammortamento totale al 100% nell'anno d'acquisto.

**Rivalutazioni**: flag di gestione dei dettagli delle rivalutazioni.

**Cod. bilancio**: codice di bilancio per la stampa del prospetto delle rivalutazioni.

**Gestione extra-contabile**: attiva la gestione dei dati extracontabili del cespite: questa prevede una duplicazione dei valori patrimoniali contabili al fine di applicare una logica d'ammortamento extracontabile separata

**Giorni**: Attivando questo flag il calcolo della quota di ammortamento terrà conto dei giorni esatti di possesso del bene nell'anno in corso, anzichè riferirsi alla logica standard che calcola la quota intera indipendentemente dalla data di acquisto, eventualmente dimezzandola il primo anno se il flag *Amm. Primo anno* presente nella seconda griglia è stato attivato (vedi sotto).

**Numerazione**: (Facoltativo) Permette di definire una numerazione delle schede cespite specifica per ogni singola categoria. Il campo si collega all'[**apposita tabella**configurations/tables/fluentis-numerations) dove definire il numeratore. Se non viene definito, di default, continua ad essere utilizzata la numerazione generale dei cespiti eventualmente collegata al precodice (oppure unica).

### Seconda griglia

La seconda sezione  è dedicata all'impostazione dei dettagli di ammortamento applicabili alla categoria superiore selezionata.

**Tipo amm.**: selezionare la tipologia di ammortamento fra ammortamento ordinario, ammortamento anticipato e ammortamento decelerato, quest'ultimo normalmente non utilizzato.

**Conto**: conto di costo sul quale rilevare l'ammortamento periodico.

**Sottoconto**: sottoconto di costo sul quale rilevare l'ammortamento periodico.

**Descrizione conto**: descrizione sottoconto di costo.

**Fondo conto**: conto di fondo sul quale accantonare l'ammortamento periodico.

**Fondo sottoconto**: sottoconto di fondo sul quale accantonare l'ammortamento periodico che potrebbe essere anche lo stesso valore patrimoniale attivo per stornare direttamente da questo il valore.

**Descrizione conto**: descrizione sottoconto di fondo.

**Escludi**: il flag consente di escludere dal calcolo automatico degli ammortamenti il tipo ammortamento selezionato.

**Percentuale**: la percentuale d'ammortamento da applicare per il tipo d'ammortamento impostato.

**N. anno**: si attiva solo in corrispondenza degli ammortamenti anticipati, nel quale vanno inseriti i 3 anni di applicazione. In riferimento a questo valore, va ricordato che per i cespiti usati il numero di anni d'applicazione è impostato automaticamente sul solo anno d'acquisto.

**Amm. primo anno**: viene proposto automaticamente per tutte le categorie materiali, andrà a dimezzare la percentuale d'ammortamento nell'anno di inizio attività del cespite.

**Fiscale**: potrà essere impostato per le righe di ammortamento anticipato per gestirlo come ammortamento fiscale non contabilizzabile.

**Tipo deducibilità**: consente di assegnare al tipo di ammortamento un codice di deducibilità ai fini fiscali.

**Descr. deducibilità**: descrizione del tipo di deducibilità.

---

| Bottone della Ribbon Bar | Significato |
| --- | --- |
| Cerca nella tabella superiore | Pulsante per effettuare la ricerca nella tabella superiore attraverso i campi di filtro categoria e descrizione. |
| Inserisce nella tabella superiore | Pulsante per inserire una nuova categoria cespite. |
| Inserisce nella tabella dettaglio | Pulsante per inserire il dettaglio della tabella superiore selezionata. |
| Inserisce nella tabella Cdc | Pulsante per inserire i Cdc della tabella superiore selezionata. OBSOLETO |
| Cancella righe selezionate | Pulsante per effettuare la cancellazione delle righe selezionate  (categoria cespite). |
| Cancella righe selezionate dalla tabella inferiore | Pulsante per effettuare la cancellazione delle righe selezionate di tabella inferiore ( dettaglio del tipo ammortamento). |
| Cancella righe selezionate dalla tabella Cdc | Pulsante per effettuare la cancellazione delle righe selezionate di tabella centri di costo. OBSOLETO |
| Salva | Pulsante per salvare le modifiche. |

---

### GRIGLIA DEI CENTRI DI COSTO (RIMOSSA SE ATTIVO IL MODULO CONTROLLING COMPLETO IN TABELLA SOCIETA', SENZA IL PARAMETRO DI USO CENTRI CONTABILI)

:::note NOTA
Nonostante la gestione dei centri di costo per i cespiti possa essere elaborata con delle logiche più sofisticate di gestione dell'ammortamento oggettivo, utili alle esigenze di un controllo di gestione approfondito, è comunque possibile agganciare un centro di costo specifico per il singolo cespite, **nella tab Dettaglio**, (oppure direttamente sulla categoria cespite ma in tal caso occorre disattivare il Flag Gestione controlling nell'anagrafica della società in uso) da valorizzare con la quota annuale calcolata ai fini fiscali e contabili.
:::

All'interno della scheda cespite nella griglia centri di costo della tab **Operazioni patrimoniali** è possibile assegnare, in riferimento alla **singola riga d'ammortamento**, la valorizzazione percentuale di default a centro di costo per i cespiti collegati alla categoria. Tale impostazione è secondaria rispetto all'assegnazione dei centri di costo all'interno della singola anagrafica cespite (quella della tab Dettaglio).

**CDC**: centro di costo a cui assegnare la valorizzazione dei cespiti appartenenti alla categoria.

**Descrizione**: Descrizione centro di costo.

**Percentuale**: Impostazione della percentuale di valorizzazione al centro di costo.

---

### **VIDEO TUTORIALS**
:::important Vedi Anche
[**VIDEO TUTORIALS SULLE TABELLE CESPITI**/finance/intro.md)
:::



