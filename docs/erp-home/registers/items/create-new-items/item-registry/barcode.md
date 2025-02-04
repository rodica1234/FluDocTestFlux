---
title: Codici Barcode
sidebar_position: 7
---

All'interno di questo Tab si possono andare ad inserire eventuali codici alternativi detti anche codici barcode che rappresentano l'articolo.

I codici barcode sono dei codici a barre che racchiudono alcune delle informazioni principali inerenti la codifica dell'articolo a cui vengono associati e sono utili per le operazioni di magazzino. Questi codici vengono letti attraverso delle specifiche apparecchiature dette Mobile tramite raggi laser o barre led.

I codici a barre possono essere di varie tipologie. 
Le due tipologie gestite dal database sono:
- l'EAN13 (significa che il codice a barre può avere una lunghezza massima di 13 caratteri)     
- l'EAN128 (significa che il codice a barre deve avere una lunghezza di cifre pari).

In **Fluentis ERP** non ci sono dei parametri già definiti che indicano come impostare il codice barcode in modo che questo rispetti le norme relative all'EAN13 e 128, ma possono essere applicati degli algoritmi customizzati che riprendono lo standard e che controllano il codice barcode che viene inserito verificando che rispetti le norme sopra citate.

La form è composta da una griglia all'interno della quale si va ad inserire un **Nuovo** barcode, tramite il pulsante **Inserisci** presente nella ribbon bar, oppure andando direttamente su una nuova riga.

Nel campo **Tipo barcode** si va a selezionare, tramite la relativa combo, il tipo di barcode che si vuole codificare e nel campo **Barcode** il codice barcode.

*Pulsanti specifici*:

> **Validation**: premendo questo pulsante, il sistema va a verificare che il codice corrisponda alle norme citate in precedenza riguardanti la lunghezza che il codice deve avere in base al tipo di codice che si sta inserendo;
> **Cancella codici barcode**: permette di cancellare un codice a barre precedentemente inserito.
