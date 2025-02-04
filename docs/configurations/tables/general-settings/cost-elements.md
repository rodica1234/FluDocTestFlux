---
title: Voci di costo
sidebar_position: 44
---

La tabella consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

**Ricerca Voci di costo**

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

**Inserimento Voci di costo**

Per poter inserire nuove codifiche è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**.

Per il nuovo record si devono inserire i seguenti campi:      
**Codice**: indica il codice della voce di costo;      
**Descrizione**: indica la descrizione della voce di costo;      
**Tipo di costo**: indica la tipologia della voce di costo tra *Costi diretti*, *Costi generali* e *Altri costi*;      
**Applicazione su**: indica dove verrà applicato questo costo: 
> *Costo materiali*: il costo viene applicato solo sul costo dei materiali (applicabile solo su voci con *Tipo costo* uguale a *Costi diretti*);    
> *Costo macchina*: il costo viene applicato solo sul costo macchina (applicabile solo su voci con *Tipo costo* uguale a *Costi diretti*);     
> *Costo manodopera*: il costo viene applicato solo sul costo della manodopera (applicabile solo su voci con *Tipo costo* uguale a *Costi diretti*);    
> *Costo lavorazioni*: il costo viene applicato solo sul costo delle lavorazioni (totale dei costi macchina e manodopera) (applicabile solo su voci con *Tipo costo* uguale a *Costi diretti*);     
> *Costo industriale*: il costo viene applicato solo sul totale del costo dei materiali e del costo delle lavorazioni (applicabile solo su voci con *Tipo costo* uguale a *Costi diretti* o *Costi generali*);    
> *Costo generale*: il costo viene applicato al totale costi generali (applicabile solo su voci con *Tipo costo* uguale a *Costi generali*);     
> *Altri costi*: il costo viene applicato al totale altri costi (applicabile solo su voci con *Tipo costo* uguale ad *Altri costi*);   

:::note Nota
Le voci di costo create con **Applicazione su** uguale a *Costo materiali*, *Costo macchina*, *Costo manodopera*, *Costo lavorazioni*o *Costo industriale* saranno tutte incluse nella sezione dedicata ai **Costi diretti**, mentre le voci di costo create con **Applicazione su** uguale a *Costo generale* o *Altri costi* verranno incluse, rispettivamente, nella sezione dedicata ai **Costi generali** o a quella dedicata a **Altri costi** all'interno della [Valorizzazione/mps-master-production-scheduling/production-job-orders/valorization).
:::

**Percentuale/Valore**: indica se la voce di costo sia di tipo: *percentuale*, a *valore fisso* o a *valore variabile* (attivo solo per le voci di costo con **Applicaizone su** = *Altri costi*). Nello specifico la *percentuale* viene calcolata sul totale del costo indicato nel campo **Applicazione su**; il *valore fisso* viene aggiunto al totale del costo indicato nel campo **Applicazione su**, mentre il *valore variabile* viene moltiplicato per la quantità presente nella gestione degli *Altri costi* in costificazione.              
**Valore**: indica il valore di default della voce di costo che verrà poi proposto in automatico.     

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).