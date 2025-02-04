---
title: Unități de măsură
sidebar_position: 9
---

Form-ul se află pe calea **Tabele > Setări generale > Unități de măsură** și permite definirea unităților de măsuri prezente în sistem și a caracteristicilor lor detaliate.
 

### Unități de măsură

Permite codificarea noii unități de măsură și atribuirea principalelor caracteristici

**U.M./Descriere**: reprezintă codul și descrierea unității de măsură;  

**Reprezintă Kg**: dacă este activ, codul corespondent reprezintă KG pentru greutate (în mod normal va fi activ pe UM numită Kg/Kilograme);

**UM zecimale**: permite inserarea numărului de zecimale după virgulă pentru a reprezenta unitatea de măsură relativă. De exemplu, inserând 2 lângă UM Kilowatt se vor obține valori în documentele de tip X.00.

**UM suplimentară intrastat**: este o unitate de măsură diferită de kilogramele prevăzute în greutatea netă și trebuie indicată pentru anumite mărfuri în cazul în care tariful vamal prevede acest lucru. Dacă este setat în corespondență cu UM KG, va fi propus și utilizat în procedurile de creare Intrastat.

**UM greutăți**: marchează unitatea de măsură ca greutate (se aplică la UM relative).

**UM volum**: marchează unitatea de măsură ca volum (se aplică la UM relative).

**UM dimensiuni**: marchează unitatea de măsură ca dimensiune (se aplică la UM relative).

**Referință**: marchează unitatea de măsură implicită propusă automat.

**Timp UM**: marchează unitatea de măsură ca timp (se aplică la UM relative)

**Minute**: marchează unitatea de măsură ca timp în minute (se aplică la UM relative)

:::important IMPORTANT
**Tip de evaluare timp**: câmp utilizat în modulul Controlling pentru a defini dacă UM este de tip Flux sau Stare.
De exemplu, *ore mașină* este flux, în timp ce *metrii pătrați* este stare pentru că este valabil în fiecare lună; fluxul variază în fiecare lună.
:::

### Conversii între alte U.M.

Permite gestionarea factorilor de conversie dintre diferite unități de măsură pentru gestionarea unității de măsură duble în documente.

**UM alternativă**: reprezintă UM în care urmează să fie convertită unitatea de măsură primară selectată.

**Fact. conv.**: reprezintă factorul de conversie, de exemplu 0,5 (valoarea cu care unitatea principală va fi împărțită sau înmulțită).

**De multiplicat**: dacă nu este activ se împarte la factorul de conversie; dacă este activ se înmulțește cu factorul de conversie.

### Tip evaluare tarif

Acest tab, Împreună cu câmpul *Tip de evaluare timp*, este utilizat în modulul *Controlling*.