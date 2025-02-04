---
title: Consegne/resi D.P.I.
sidebar_position: 1
---

La gestione si trova sul percorso **Home > Dipendenti > Consegne/resi D.P.I. > Consegne/resi D.P.I.**   


:::important A cosa serve
Questa procedura permette di registrare le consegne e resi dei *D.P.I.* ai *Dipendenti*.   

La form si compone di un'area di filtro, di un'area di proposta dati e da una di risultato.   
Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca consegne** o **Ricerca resi** per visualizzare i risultati all'interno della griglia di risultato.   
:::


## Pulsanti specifici   


### ![](/img/neutral/common/search.png) Ricerca consegne   
La ricerca dei *D.P.I.* da consegnare si basa sui *D.P.I.* attivi previsti per *Mansione* e i *Dipendenti* che ricoprono la stessa *Mansione*.   
Sulla base del filtro impostato si visualizzano i risultati all'interno della griglia di risultato. La *Data prevista*:   
- non viene visualizzata in caso di consegne di *D.P.I.* mai effettuate per il *Dipendente*;   
- viene visualizzata con un carattere *rosso* se la consegna prevista del *D.P.I.* è in ritardo rispetto alla data odierna;   
- viene calcolata sulla base della data dell'ultima consegna effettuata sommata ai *Mesi validità* indicati nella *Mansione* ricoperta dal *Dipendente*.
- se il *Dipendente* ricopre più *Mansioni* e per più *Mansioni* è necessario l'utilizzo dello stesso *D.P.I.* con *Mesi validità* diversi, i *Mesi validità* considerati per il calcolo della *Data prevista* saranno quelli inferiori.


### Proponi consegne   
Pulsante abilitato solamente se precedentemente si è effettuata la **Ricerca consegne**.   
Propone la *Quantità consegnata* a 1 (uno) in tutte le righe visualizzate nell'*Area risultato*.   


### Elimina consegne   
Pulsante abilitato solamente se precedentemente si è effettuata la **Ricerca consegne**.   
Propone la *Quantità consegnata* a 0 (zero) in tutte le righe visualizzate nell'*Area risultato*.   


### Ricerca resi   
La ricerca dei *D.P.I.* da rendere si basa sui *D.P.I.* consegnati ai *Dipendenti*.   
Sulla base del filtro impostato si visualizzano i risultati all'interno della griglia di risultato.   
La *Data prevista* viene visualizzata con un carattere *rosso* se il reso previsto del *D.P.I.* è in ritardo rispetto alla data odierna.   
Non vengono effettuati controlli che la *Quantità resa** sia coerente con le *Quantità consegnate* in precedenza.  


### Proponi resi   
Pulsante abilitato solamente se precedentemente si è effettuata la **Ricerca resi**.   
Propone la *Quantità resa* a 1 (uno) in tutte le righe visualizzate nell'*Area risultato*.   


### Elimina resi   
Pulsante abilitato solamente se precedentemente si è effettuata la **Ricerca resi**.   
Propone la *Quantità resa* a 0 (zero) in tutte le righe visualizzate nell'*Area risultato*.   


### ![](/img/neutral/common/save.png) Salva   
Tutte le righe presenti nell'*Area risultato* con *Quantità consegnata* o *Quantità resa* maggiore di *zero* verranno inserite nello *Storico consegne/resi D.P.I.*, alla data *Consegnato/Reso in data* presenti nell'area *Dati proposti per le consegne/resi*.   


## Aree di gestione


### Filtro   
Il filtro dati è composto dalle seguenti informazioni:   
> **Consegne/Resi per il Dipendente**: è il *Dipendente* per cui si desidera ricercare dei *D.P.I.* da consegnare/ricevere.   
> **Consegne/Resi per il D.P.I.**: è il *D.P.I.* che si desidera consegnare/ricevere.   


### Dati proposti per le consegne/resi   
Le informazioni contenute in questo expander sono obbligatorie per la registrazione delle *consegne/resi*.   
L'expander è composto dalle seguenti informazioni:   
> **Consegnato da/Reso a**: è la *persona* che consegna i *D.P.I.* ai *Dipendenti* / riceve i *D.P.I.* dai *Dipendenti*.   
> **Consegnato/Reso in data**: è la data consegna/reso dei *D.P.I.* ai *Dipendenti*.   


### Risultato   
L'elenco si compone delle seguenti informazioni:   
> **Data prevista**: è la data prevista di consegna/reso del *D.P.I.* al *Dipendenti*.   
>
> **Dipendente**
>> **Codice**: è il codice del *Dipendente* destinatario.   
>> **Cognome**: è il cognome del *Dipendente* destinatario.   
>> **Nome**: è il nome del *Dipendente* destinatario.   
>
> **D.P.I.**
>> **Codice**: è il codice del *D.P.I.* da consegnare/rendere.   
>> **Descrizione**: è la descrizione del *D.P.I.* da consegnare/rendere.   
>
> **Quantità**
>> **Consegnata**: è la *Quantità consegnata* del *D.P.I.* al *Dipendente*.   
>> **Resa**: è la *Quantità resa* del *D.P.I.* dal *Dipendente*.   
>
> **Firmato**: indica se il *Dipendente* ha firmato la *Scheda consegna/reso*, per accettazione.   
> **Uso**: annotazioni libere sull'argomento; viene proposta dall'elenco dei *D.P.I.* previsti per la *Mansione* ricoperta dal *Dipendente*.   
> **Prescrizioni**: annotazioni libere sull'argomento; viene proposta dall'elenco dei *D.P.I.* previsti per la *Mansione* ricoperta dal *Dipendente*.   
> **Note**: annotazioni libere.   


Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).