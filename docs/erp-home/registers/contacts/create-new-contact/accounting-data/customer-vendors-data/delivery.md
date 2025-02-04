---
title: Consegna
sidebar_position: 4
---

Questa form consente di definire la lista delle destinazioni merce e le caratteristiche standard delle clausole commerciali relative.

**Elenco destinatari**: nella griglia si possono indicare differenti destinatari merce, tra i quali uno di default da proporre nei documenti. Se la sede indicata nei ‘Dati comuni' dell'anagrafica è la sede di spedizione merce, non è necessario indicare nulla in queste sezioni di destinatari/destinazioni.

Per ogni destinatario si può collegare la **Zona** e la **Zona consegna** di riferimento.

**Elenco destinazioni**:  nella griglia si inseriscono le N possibili destinazioni in capo a quel destinatario, che a loro volta possono avere un valore di *default* da proporre, un *automezzo* di default, un *tipo di UDC* (unità di carico), una *zona consegna* e un *vettore*. Si può quindi creare una *triangolazione*: vendo al soggetto dell'anagrafica e consegno ad un magazzino particolare di un destinatario terzo.

Nella sezione inferiore si possono definire il **Tipo di spedizione** (via terra/mare/tir ecc.) ed eventuali note, il tipo di *imballaggio* ed eventuali *note*, e le condizioni di resa nel campo *porto* ed eventuali *note* (tutti i campi note se compilati verranno riportati nei documenti di spedizione);

Nella sezione **Zone Consegna**  ci sono elementi di default validi per il cliente quali:

- **Zona consegna generale**: in cui si indica la zona di consegna generale e l'indirizzo;

- **Esclusione Giorno/Giorno di consegna**: in questo caso si va ad indicare il giorno di consegna di default per quella zona; nel caso sia attivo il flag Esclusione giorno il giorno indicato sarà invece l'unico giorno in cui non si dovranno effettuare mai consegne in quella zona;

- **Esclusione ora/Ora di consegna**: in questo campo si va ad indicare il range orario entro cui deve essere effettuata la consegna; nel caso in cui sia attivo il flag esclusione Ora di consegna il range orario indicato sarà invece il range in cui non saranno accettare consegne.

- **Numero addetti** necessari per la consegna;

- **Automezzo** dedicato alla consegna;

- **Tipo di UDC** (pallet, europallet etc.);

Si può anche specificare se il trasporto è normalmente a cura del **Mittente**, **Destinatario** o del **Vettore**.

Nella griglia accanto invece sarà possibile indicare una **Lista di vettori** autorizzati per quel soggetto, indicandone uno di default.

*Pulsanti specifici*:
> **Salva**: per salvare le modifiche all'anagrafica in uso.  
> **Nuovo Destinatario/Nuova Destinazione**: per gestire la creazione di una nuova anagrafica non contabile da associare automaticamente all'anagrafica in uso come destinatario, come destinazione o entrambe (se è selezionata un destinatario, sarà proposta la creazione di una destinazione; negli altri casi, sarà proposta la creazione di un nuovo destinatario). La maschera che si apre consente, oltre che a definire come associare l'anagrafica che si sta creando a quella attiva, di definire tutte le caratteristiche di un nuovo contatto. È possibile salvare la creazione e continuare l'inserimento di nuovi destinatari/destinazioni, oppure premere sul salvataggio con chiusura della maschera per ritornare all'anagrafica in uso.  
> **Cancella destinatario**: per cancellare il destinatario selezionato.  
> **Cancella destinazione**: per cancellare la destinazione selezionata.  
> **Cancella vettore**: per cancellare il vettore selezionato.  
