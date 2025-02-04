---
title: Nou Pipeline Flux
sidebar_position: 3
---

Inserarea unui nou Pipeline Flux necesită următoarele informații:

**Cod** și **Descriere**: reprezintă codul și descrierea pentru pipeline flux;

**Culoare dreptunghi**: reprezintă culoarea de fundal a activităților legate la pipeline de flux;

**Culoare text**: reprezintă culoarea textului activităților legate de pipeline de flux;

**Flux de lucru**: reprezintă fluxul de lucru care trebuie să fie asociat la pipeline;

**Data expirării**: reprezintă data de expirare a pipeline.

În partea inferioară a ferestrei, se definește microstructura pipeline-ului.  
Cu ajutorul butonului ![](/img/neutral/common/new.png) **Stadiu nou** se poate insera un nou stadiu pentru pipeline.

### Fază Pipeline

În această tab sunt definite următoarele proprietăți ale fiecărui stadiu:

**Ordine flux**: acest câmp trebuie să indice poziția în care ar trebui să fie amplasată etapa în cadrul conductei;

**Cod**: reprezintă codul etapei conductei;

**Descriere**: reprezintă descrierea etapei conductei, care apare și în interiorul dreptunghiului unic care reprezintă grafic etapa conductei;

**Dată scadenţă**: reprezintă data de expirare a stadiului;

**Stare Workflow**: în acest câmp puteți indica starea fluxului de lucru la care se referă etapa de conducte (un flux de lucru trebuie să fi fost indicat anterior în partea de sus a formularului);

**Culoare dreptunghi**: reprezintă culoarea de fundal a stadiului pipeline;

**Culoare text**: reprezintă culoarea textului stadiului pipeline;

**Activează tranziţie stadiu**: dacă este activ, permite trecerea la un stadiu succesiv atunci când sunteți poziționat pe acest stadiu al pipeline;

**Tranziție automată**: dacă este activ, Fluentis trece automat la următorul stadiu, fără a solicita confirmarea de la utilizator.

![](/img/it-it/configurations/tables/crm/pipeline-phase.png)

### Activități

Permite asocierea [Activitățilorconfigurations/tables/crm/activity/activity-type) cu starea pipeline.

! [](/img/it-it/configurations/tables/crm/pipeline-activity.png)

Tabelul din stânga afișează activitățile care se pot asocia:

! [](/img/it-it/configurations/tables/crm/pipeline-activities.png)

Pentru a asocia o activitate la starea pipeline, trebuie să glisați activitatea în tabelul din dreapta (**Pipeline activity map**) utilizând drag&drop.

![](/img/it-it/configurations/tables/crm/pipeline-activity-map.png)

Fiecărei activități i se pot defini următorii parametri:

**Tip activitate succesivă**: reprezintă activitatea care este propusă automat ca activitate ulterioară după inserarea activități;

**Expira peste**: reprezintă zilele după care expiră activitatea;

**Obligatoriu**: dacă este activ, înseamnă că activitatea trebuie considerată obligatorie;

**În evidenţă**: dacă este activ, înseamnă că activitatea trebuie evidențiată în comparație cu alte activități legate la stadiu;

**Culoare fundal**: reprezintă culoarea de fundal a dreptunghiului în care este afișată fiecare activitate din pipeline;

**Culoare text**: reprezintă culoarea textului cu care este afișată fiecare activitate din pipeline.