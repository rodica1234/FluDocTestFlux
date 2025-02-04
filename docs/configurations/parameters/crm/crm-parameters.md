---
title: Parametri CRM
sidebar_position: 1
---

I parametri del CRM si trovano nel percorso **Parametri > CRM > Parametri CRM**, e attraverso il setup di questi parametri si vanno a definire alcune funzionalità del modulo, in particolare in relazione al cambio stato automatico della attività in seguito ad alcune operazioni specifiche.

**Probabilità successo vinto**: il campo fa riferimento alla tabella [Probabilità di successoconfigurations/tables/crm/opportunities/probability-progress) e permette di definire la % di probabilità di successo che Fluentis dovrà impostare sull’opportunità nel caso in si sposti l’opportunità nella sezione delle opportunità vinte nella form Opportunity Progress Kan Ban board;

**Probabilità successo perso**: il campo fa riferimento alla tabella [Probabilità di successoconfigurations/tables/crm/opportunities/probability-progress) e permette di definire la % di probabilità di successo che Fluentis dovrà impostare sull’opportunità nel caso in si sposti l’opportunità nella sezione delle opportunità perse nella form Opportunity Progress Kan Ban board;

**Numero massimo di email**: in questo campo deve essere definito il numero massimo di email che Fluentis può inviare in caso di invio di una Newsletter;

**Intervallo invio posta elettronica (secondi)**: in questo campo devono essere impostati i secondi che Fluentis dovrà far passare tra l’invio di una mail e l’altro in caso di invio di una Newsletter.     

**Unità di misura giorni**: è necessario indicare l'unità di misura che Fluentis deve utilizzare per le giornate.     

**Unità di misura ore**: è necessario indicare l'unità di misura di default che Fluentis deve utilizzare per le ore.     

**Riferimenti ticket**: in questo campo è possibile indicare la codifica da utilizzare per il Riferimento ticket da riportare nell'Offerta collegata al ticket e creata attraverso la procedura di *Creazione offerte da ticket* (presente nel modulo Tickets).

**Ricerca contatto CRM anche come contatto padre**: se abilitato, abilita di default lo stesso flag in tutte le videate di ricerca, dove previsto: [Ricerca offerte/search-offers), [Ricerca contatti CRMhome-crm/contacts/search-contacts), [Ricerca visit reporthome-crm/my-crm-area/visit-report/search-visit-report), tab [offertehome-crm/contacts/new-contact/contact-offers) e [visit reporthome-crm/contacts/new-contact/contact-visit-reports) nell'anagrafica Contatto CRM. Questo flag imposta le ricerche anche per il *Contatto padre* inserito nella [testatahome-crm/contacts/new-contact/header) del Contatto CRM.

**Crea contatto CRM da nuova anagrafica cliente**: se abilitato, all'inserimento di un nuovo conto Cliente all'interno di un contatto, genera in automatico un nuovo contatto CRM se non già presente. 
