---
title: Tipo Contatto
sidebar_position: 1
---

È una tabella che permette di definire i **Tipi Contatto** per quanto riguarda i contatti del CRM, in modo tale da poterli categorizzare.
E' composta da una parte di filtro in cui si può ricercare attraverso il codice o la descrizione del tipo, e da una griglia in cui appunto verranno elencati tutti i tipi contatto inseriti.
Sempre all'interno di questa form è possibile aggiungere nuovi tipi contatto all'interno della griglia, cliccando sul pulsante ![](/img/neutral/common/new.png) Nuovo: in questo modo verrà aggiunta una nuova riga all'interno della griglia dove si andrà ad inserire il codice e la descrizione del nuovo tipo.
Per ogni contatto è inoltre possibile definire:
-	La tipologia, selezionando dalla griglia una voce tra Contatto, Prospect, Lead, Opportunità, Cliente, Fornitore;
-	Le tab che dovranno essere visualizzate per quel tipo di contatto tra: Attività, Riferimenti, Indirizzi, Note, Gestione Documentale, Visit reports, Categoria Commerciale, Zona, Agenti, Newsletter, Pagamento, Offerte, Ordini Cliente, DDT di vendita, Interventi, Extra data, Orario Apertura, Concorrenti, Telefonata, Campagne Marketing, Listini.

Per ogni tipologia di contatto è inoltre possibile definire 

## Tipo di contatto Ruolo
ossia per i singoli utenti Fluentis (o i gruppi di utenti definiti in base ai Ruoli) è possibile definire quali tab possano essere visualizzate. Per ogni Tipo di contatto Ruolo è necessario definire:
**Data Creazione**: è la data di creazione del tipo contatto Ruolo;
**Ruolo**: fa riferimento alla tabella dei ruoli degli utenti di Fluentis;
**Operatore**: fa riferimento alla tabella degli utenti di Fluentis.
**Tab abilitate per Ruolo/Operatore**: quali tab può visualizzare e gestire tra quelle presenti, come: Attività, Indirizzo, Agenti, Categoria commerciale, etc 

## Extra data
È inoltre possibile definire per ogni tipo contatto anche degli [Extra dataconfigurations/utility/extra-data/extradata/search-extradata/), che dovranno essere proposti per i contatti che presentano tale tipologia (per ulteriori informazioni riguardo gli Extra data fare riferimento all’apposita sezione della presente guida).

## Pipeline Contatto
Elenco degli stati disponibili per il tipo contatto, configurati dall'utente.
Se il contatto ha un workflow associato, e lo stato del workflow corrisponde ad uno degli stati disponibili per il Tipo contatto, il campo "Pipeline contatto" nell'anagrafica contatto verrà aggiornato in automatico. 
Quindi ad ogni cambio stato del workflow, se presente corrispondenza, verrà aggiornato in automatico il campo "Pipeline Contatto". In questo modo il workflow ed il campo Pipeline contatto in anagrafica contatto saranno sempre allineati. 


