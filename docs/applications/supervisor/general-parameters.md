---
title: Parametri Globali
sidebar_label: Parametri Globali
sidebar_position: 1
---

Supervisor permette di definire dei parametri che solitamente vengono utilizzati nell'esecuzione di specifiche attività, task o eventi.
Una prima distinzione tra i diversi parametri concerne l'ambito di applicazione degli stessi, e si distingue tra:
* *parametri locali*
* *parametri globali*

I parametri locali sono operativi e visibili all'interno di specifiche attività, task o eventi in funzione di dove vengono definiti.
I parametri globali sono invece operativi e visibili all'interno di tutte le attività, task o eventi e possono essere riutilizzati ogni qualvolta sia necessario.

I parametri globali sono visibili e configurabili aprendo il menu laterale **Configurazione** > **Parametri** > **Supervisor** > **Parametri Globali**

Cliccando su parametri generali si aprirà la form di gestione dei parametri generali con cui è possibile definirli.  
Nello specifico sono presenti parametri relativi a:
* *Email*
* *Database esterno*
* *HTML*
* *Generali*

![alt text](/img/it-it/applications/supervisor/supervisor4.jpg)  

> <mark> Parametri Email</mark>  
Fanno riferimento ai parametri di autenticazione al server di posta elettronica SMTP desiderato.
* SMTPServer -> si tratta dell'indirizzo IP Pubblico del server di posta oppure del suo hostname nel caso sia stato configurato il server DNS.
* FromEmail -> si tratta dell'indirizzo completo di posta dal quale vogliamo spedire le mail che dovrà essere definito come alias all'interno del server di posta.
* UseTLS -> si tratta dell'opzione di crittografia utilizzata per lo scambio dei messaggi utilizzata nella stragrande maggioranza dei casi di comunicazione tramite mail
* AuthenticationUser e Authentication Password-> si trattano dell'utente definito nel server di posta con la relativa password.
* SMTPServerPort -> si tratta della porta utilizzata dal server SMTP per l'invio di mail (solitamente 587, 465 o 25 ).

> <mark> Parametri Db esterno </mark>:  
Fanno riferimento all possibilità di specificare una base di dati esterna a quella corrente in uso da Fluentis.
* Server -> si tratta dell'endpoint dell'istanza del motore database di SQL Server.
* Database -> si tratta del nome del database.
* User e password -> si trattano dell'utente con cui accedere all'istanza del motore database (di solito utente sa) e della relativa password.

> <mark> Parametri HTML </mark>:  
Fanno riferimento alla possibilità di specificare degli elementi di stile HTML utilizzando i fogli di stile CSS.

> <mark> Parametri Generali </mark>:  
Fanno riferimento a user e password con cui viene eseguito Supervisor.


<!-- 
:::tip Video Tutorial
A questo link potete trovare il **[video](https://youtu.be/FCcnCDgtLV8)** che illustra la sopracitata procedura.
::: -->