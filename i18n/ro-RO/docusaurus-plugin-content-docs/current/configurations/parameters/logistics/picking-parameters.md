---
title: Parametri dispoziții de livrare
sidebar_position: 6
---

Form-ul se află în **Parameteri > Logistică > Parameteri dispoziții de livrare** și permite parametrizarea documentelor. 

*Buton specific*
> *Restaurare*: restaurează parametrii la starea lor anterioară.

## General

**Prioritate parametri dispoziție livrare**: permite selectarea unei **Gestiunii** și a unui **Șablon** care vor fi utilizate implicit la descărcarea dispoziției de livrare.  
**Control disponibilitate**: dacă este activ, în momentul descărcării va fi verificată disponibilitatea articolului.  
**Disponibilitate obligatorie**: dacă este activ, în momentul descărcării disponibilitatea articolului va fi obligatorie, şi anume cantitatea nu va putea fi superioară disponibilităţii.  
**Exclude ordine clienţi**: dacă este activ, în momentul descărcării rezervarea ordinelor clienţi nu va fi considerată la calcularea disponibilităţii articolului dispoziției.  
**Consideră disponibilitate din**:  
> **Sistem lohn**: dacă este activ, înseamnă că documentele din sistem lohn vor fi incluse în calcularea disponibilităţii articolului avizului.  
> **Achiziții**: dacă este activ, înseamnă că documentele de achiziţie vor fi incluse în calcularea disponibilităţii articolului dispoziției.  
> **Vânzări**: dacă este activ, înseamnă că documentele de vânzare  vor fi incluse în calcularea disponibilităţii articolului dispoziției.  
> **Prod. planificată**: dacă este activ, înseamnă că documentele din necesar materiale şi comanda de producţie vor fi incluse în calcularea disponibilităţii articolului dispoziției.  
> **Prod. lansată**: dacă este activ, înseamnă că ordinele de producţie vor fi incluse în calcularea disponibilităţii articolului dispoziției.  
> **Gestiune**: dacă este activ, înseamnă că înregistrările de gestiune vor fi incluse în calcularea disponibilităţii articolului dispoziției.  

Ca setări generale, puteți alege dacă în momentul *creării dispoziției* este obligatoriu să introduceți: *Codul operatorului*, dacă *Numerotarea trebuie să fie progresivă în funcție de an* sau dacă este necesar *Codul operatorului care confirmă dispoziția*.

În cazul articolelor se poate alege activarea parametrilor **Gestionare talie și culori** și/sau **Gestionare loturi si NS**. În acest din urmă caz, se poate stabili ca în timpul introducerii unei noi dispoziții de livrare să fie *obligatorie* indicarea loturilor și numerelor de serie ale articolelor.





**Marcare automată a mișcărilor**: dacă este activ, în form *Gestionare Marcaje* se descarcă automat rândul.





## WMS Mobile

În acest form puteți defini parametrii pentru funcționarea dispoziției de livrare în WMS Mobile.

**Tip cont transportator**: reprezintă transportatorul care va fi inclus în dispozițiile create de WMS Mobile.   

De asemenea, pot fi inserate șabloanele care vor fi utilizate pentru următoarele mișcări:

- *Descărcare UdI pentru confirmare transfer*;

- *Șablon propus pentru descărcare dispoziție*;

- *Descărcare după gestiune ieșire*;

- *Încărcare pe gestiune destinație*;

- *Șablon descărcare gestiune sistem lohn*.

Pentru informații generale despre form-uri consultați [Funcționalități, butoane și câmpuri comuneguide/common).
