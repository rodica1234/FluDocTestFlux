---
title: Dati Contabili
sidebar_position: 1
---
In questo tab si definiscono le informazioni **specifiche** relative all'anagrafica in uso.

Di seguito è illustrata la procedura di abbinamento di un'anagrafica generica, definita *Contatto*, con un sottoconto contabile. Procedura che attiva in quel momento tutti i dettagli dell'anagrafica.

Le anagrafiche di dettaglio sono suddivise in tre categorie: **Clienti/Fornitori**, **Banche**, **Agenti**.

Ogni categoria ha dei campi di dettaglio differenti a fronte di scopi differenti, pertanto viene affrontata in dettaglio (link alle sezioni specifiche)


### [Anagrafica clienti/fornitorierp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance)

### [Anagrafica bancheerp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/references)

### [Anagrafica agentierp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/detail)


---



## Sottoconti assegnati

Nella griglia vengono visualizzati i **Sottoconti** assegnati al soggetto che determinano poi la visualizzazione di una serie di *tab specifici* in cui si andranno ad inserire le informazioni legate alle diverse aree del sistema.

### Abbinamento sottoconti
:::tip[Procedura]
**Per assegnare un sottoconto contabile all'anagrafica** in uso è sufficiente posizionarsi nella prima colonna **Tipo conto** e selezionare una tipologia *compatibile* con la gestione anagrafiche (anche se il menu a discesa visualizza tutti i tipi conto).
:::


:::note Nota
Le tipologie compatibili sono: *Clienti/Fornitori*, *Agenti* e *Banche*. I *Percipienti* sono classificati come fornitori ed all'interno dei dati di dettaglio si attivano impostazioni specifiche per la gestione delle ritenute d'acconto.
:::

Una volta selezionato il tipo conto, premendo il tasto tab per spostarsi ai campi successivi, noteremo che **Fluentis** assegna automaticamente un conto ed un sottoconto. Al salvataggio verranno inoltre caricati i tab con le informazioni di dettaglio.

L'associazione tra il tipo conto (esempio clienti, oppure, in caso di diversa impostazione del piano conti, clienti Italia) ed il conto contabile del piano conti è definita dai [**Parametri di contabilità**configurations/parameters/finance/accounting-parameters). L'associazione avviene quando l'anno dei *Parametri contabili* coincide con l'anno di creazione del contatto.

Il sottoconto viene attribuito automaticamente in modo progressivo.

:::note Nota
Prestare attenzione al fatto che il numeratore progressivo NON recupera eventuali buchi nella progressione (è sempre possibile comunque imporre manualmente un determinato sottoconto purché non già utilizzato).

Si consiglia pertanto di non interferire manualmente con la numerazione ad esempi lasciando dei buchi per evitare che, raggiunto il limite di numerazione determinato anche dall'impostazione del piano conti (ad esempio codice sottoconto a due cifre, tre cifre ecc...) non sia più possibile aggiungere sottoconti senza modificare la struttura del piano conti od intervenire continuamente in modo manuale.

E' preferibile lasciare a **Fluentis** la gestione dell'assegnazione sottoconto. Inoltre si eviti di intervenire sulla numerazione dei sottoconti riferiti alle anagrafiche direttamente dal piano conti.
:::

:::danger[Attenzione]
Se una volta selezionato il *Tipo Conto* dalla prima colonna della griglia *Sottoconti Assegnati* non viene compilato automaticamente un codice di Conto e sottoconto (e si è certi di aver richiamato un Tipo conto compatibile con le anagrafiche), questo indica che probabilmente non sono stati inizializzati (o non sono compilati correttamente) i [**Parametri di contabilità**configurations/parameters/finance/accounting-parameters) nella sezione che definisce il corretto abbinamento dei tipi conti relativi alle anagrafiche con il piano dei conti.
L'errata configurazione potrebbe anche risiedere, più a monte, nella [**Tabella Tipi Conto**configurations/tables/finance/account-types)
:::

:::tip
Per ogni anagrafica è possibile **assegnare contemporaneamente diversi sottoconti**. I casi più frequenti nella pratica sono quelli di un fornitore che sia anche cliente oppure un cliente che sia contemporaneamente anche agente. In questi casi, in base alla riga selezionata, cambiano anche i tab di dettaglio.

Questo possibile abbinamento multiplo ottimizza e razionalizza la gestione dei dati generali del *Contatto*
:::


---

## VIDEO TUTORIALS SULLE ANAGRAFICHE

:::important Vedi Anche
[**VIDEO TUTORIALS SULLE ANAGRAFICHE**/finance/intro.md)
:::
 



