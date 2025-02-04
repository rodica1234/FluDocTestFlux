---
title: Antet
sidebar_position: 2
---

Selectarea furnizorului se poate face cu ajutorul helpului conturi sau manual cu ajutorul tooltipului. În momentul selectării furnizorului sunt preluate toate datele implicite prezente în registrul său: adresa, tara, deviza, zona şi limbă, expediţie, oferta dacă în registru a fost inserată ca ofertă implicită şi nu cu priorităţi (dacă în registru, tipul ofertei este inserat cu prioritate, oferta din care este preluat preţul este inserat direct în liniile articol), note client.

**Comanda de vânzare** este inserată automat dacă ordinul furnizor provine dintr-un document care conţine comanda de vânzare (de ex. ordine planificate de achiziţie), dar poate fi inserată şi de utilizator prin intermediul helpului comenzi.

Utilizatorul poate insera referinţa noastră/voastră, notele iniţiale (care pot fi inserate şi cu ajutorul helpului note codificate), comanda de producţie (care trebuie să fie un număr comandă existent pentru anul specificat, dacă ordinul este creat din lansare ordine planificate de achiziţie comanda este propusă automat), data cerută pentru livrare şi data prevăzută pentru livrare.

**Punctul de vânzare** este gestionat doar de verticalizarea care priveşte reţelele de distribuţie. În cazul unui ordin furnizor creat din transferul mărfurilor între punctele de vânzare din aceeaşi reţea, în punctul de vânzare este vizualizat POS-ul iniţial al mărfii.

**Starea documentului** este inserată de utilizator şi este gestionată în anumite verticalizări (reţele de distribuţie sau societăţi asociate) pentru a replica documentele dintr-un POS la sistem si viceversa.

După ce a fost inserat, ordinul poate fi:

**Listat**: când este listat definitiv;

**Autorizat**: când utilizatorul îl autorizează, nu are relevanţă pentru aplicație, însă este important pentru Mobile;

**Arhivat**: când utilizatorul îl arhivează, nu are relevanţă pentru aplicație;

**Anulat**: când utilizatorul doreşte să anuleze un document în loc să-l şteargă, automat ordinul este setat ca fiind forţat executat pe toate liniile articol.

Când ordinul este executat prin intermediul avizelor sau facturilor, starea executării sale se schimbă automat din neexecutat în parţial executat sau executat. Utilizatorul poate forţa executarea unui ordin care nu a fost integral executat; când este forţată executarea este salvată şi data executării.

În plus, din registru sunt preluate plăţile, eventualele discounturi şi destinaţiile mărfurilor.

RIBBON BAR: reprezinta meniul cu butoanele de executie, pentru fiecare operatie in parte aferentă fiecarei ferestre din aria in care se lucreaza. Lista functionalitatiilor posibile cuprinde:



| Functie | Functionalitate |
| --- | --- |
| Salvează | Salvează ordinul. |
|  [Preia articole din comenzi de achiziţiepurchase/purchase-orders/insert-purchase-orders/header-procedures)  | După inserarea furnizorului ordinului, se activează preluarea articolelor din comanda de achiziţie. |
| Preia articole din oferte furnizori | După inserarea furnizorului ordinului, se activează preluarea articolelor din oferte furnizori. |
| Substituie data prevăzută pentru livrare din linii | După inserarea în antetul ordinului a datei cererii livrării şi/sau datei prevăzute pentru livrare, aceste date pot fi substituite în masă, în liniile articol deja inserate. |



| Functie | Functionalitate |
| --- | --- |
| Documente | Ordinului client îi pot fi asociate documente cu format divers. |






