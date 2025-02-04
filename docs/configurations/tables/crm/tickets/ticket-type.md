---
title: Tipo Ticket
sidebar_position: 1
---

La tabella permette di definire le tipologie di ticket che potranno essere utilizzate in fase di inserimento di un nuovo ticket, andando a definire a priori alcune caratteristiche dei ticket che verranno registrati con tale tipologia.
E' composta da una parte di filtro in cui si può ricercare attraverso il codice o la descrizione della tipologia e da una griglia in cui appunto verranno elencati tutte le tipologie inserite.

Sempre all'interno di questa form è possibile aggiungere nuove tipologie all'interno della griglia, cliccando sul pulsante ![](/img/neutral/common/new.png) Nuovo: in questo modo verrà aggiunta una nuova riga all'interno della griglia dove si andranno a definire i seguenti parametri:

**Codice**: è il codice del tipo ticket;

**Descrizione**: è la descrizione del tipo ticket;

**Numerazione**: è la numerazione del tipo ticket e fa riferimento alla tabella *Numerazione Tipo*;

**Tipo offerta**: contiene il [Tipo offertaconfigurations/tables/sales/sales-offer-type) da creare con la procedura di *Creazione offerta da ticket*;

**Classe e Codice Articolo**: 

**Template ticket**: contiene il [Templateconfigurations/tables/crm/tickets/template-ticket) da proporre per questo Tipo ticket;   


Flag per rendere i campi obbligatori

**Cliente**: se abilitato, indica l'obbligatorietà di valorizzare il campo Cliente nel ticket

**Soggetto**: 

**Soggetto di Riferimento**: se abilitato, indica l'obbligatorietà di valorizzare il campo soggetto di riferimento nel ticket

**Email soggetto di Riferimento**: se abilitato, indica l'obbligatorietà di valorizzare il campo Email soggetto di riferimento nel ticket

**Progetto**: se abilitato, indica l'obbligatorietà di valorizzare il campo Progetto nel ticket
 
**Livello di servizio**: se abilitato, indica l'obbligatorietà di valorizzare il campo Livello di servizio nel ticket

**Severità**: se abilitato, indica l'obbligatorietà di valorizzare il campo Severità nel ticket

**Primo utente assegnato**: utente proposto di default 

Per ogni tipologia è possibile indicare uno o più **Stato Ticket** nella griglia sottostante. Questi stati possono essere diversi per ogni tipologia di Ticket e verranno proposti come Stati possibili nella creazione di un Nuovo ticket con questa tipologia.   

Per ogni stato ticket è possibile definire i seguenti parametri:

**Codice**: è il codice dello stato ticket;

**Descrizione**: è la descrizione dello stato ticket;

**Data fine**: è la data fine dello stato ticket;

**Nota**: in questo campo è possibile aggiungere delle note aggiuntive al ticket.


Per ogni tipologia è possibile indicare uno o più **Utenti** nella griglia sottostante. Questa configurazione è obbligatoria se si vuole abilitare tutte le tab gestibili nel ticket. Può essere configurata per singolo utente oppure per ruolo. 

**Ruolo**: indica il ruolo per cui è valida la configurazione impostata

**Utente** indicare in alternativa al ruolo, indica l'utente per cui è valida la configurazione impostata

**Dettaglio ticket**: abilitare per rendere visibile la sezione/tab Dettaglio ticket nel ticket

**Utenti** abilitare per rendere visibile la sezione/tab Utenti nel ticket

**Stima/Sforzo** abilitare per rendere visibile la sezione/tab Stima/Sforzo nel ticket

**Stima Commerciale** abilitare per rendere visibile la sezione/tab Stima Commerciale nel ticket

**Informazione chiusura** abilitare per rendere visibile la sezione/tab Informazione chiusura nel ticket

**Ticket collegati** abilitare per rendere visibile la sezione/tab Ticket collegati nel ticket

**Nota** abilitare per rendere visibile la sezione/tab Nota nel ticket

**Prodotto** abilitare per rendere visibile la sezione/tab Prodotto nel ticket

**Extra data** abilitare per rendere visibile la sezione/tab Extra data nel ticket
 
**Gestione documentale** abilitare per rendere visibile la sezione/tab Gestione documentale nel ticket

**Offerte** abilitare per rendere visibile la sezione/tab Offerte nel ticket