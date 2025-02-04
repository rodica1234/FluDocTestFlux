---
title: Comisioane directe
sidebar_position: 4
---

Form-ul este fundamental pentru definirea criteriilor pentru identificarea procentelor comisioanelor.

Primele două câmpuri permit definirea unui **procent general** și a unei **sume fixe**: procentul general va fi utilizat doar dacă în secțiunea din dreapta, unde se inserează în ordinea priorității criteriile de valorizare, este prezent tipul ‘1 – Registru agent'.
 
Lista cu posibilele opțiuni, selecționabile în combo box, este:

**Registru agent**: pe baza procentului inserat în registrul agentului;  
**Registru client**: pe baza procentului pe care agentul îl are în registrul clientului;  
**Zonă client**: pe baza zonei asociate la client;  
**Ofertă client**: pe baza ofertelor aplicabile clienților (deci oferte generale și/sau oferte personalizate);  
**Clasă**: pe baza clasei articolului vândut;  
**Articol**: pentru fiecare articol se definește procentul agentului utilizat;  
**Ofertă-Clasă**: pe baza combinației clasei articolului în diversele oferte;  
**Ofertă-Clasă-Articol**: pe baza combinației fiecărui articol în diversele oferte;  
**Tip articol**: pe baza tipului articolului;  
Registru client-Clasă: pe baza combinației clasei articolului pentru fiecare registru client;  
**Registru client-Clasă-Articol**: pe baza combinației clasei articolului pentru fiecare client;  
**Intervale de discount**: pe baza tipului intervalului de discount (Home > Tabele > Vânzări > Intervale de discount), și anume asociind comisionul la discounturile pe care agentul le aplică clientului. La rândul lor, intervalele de discount pot depinde de clasele articolului, de oferte, de tipul articolului, de caracteristica articolului, de categoria merceologică sau poate fi o structură pe eșaloane fixe.  


Procedura pentru identificarea comisionului de aplicat, depinde deci de proprietățile asociate la tipurile pe care doriți să le utilizați: dacă ar fi, de exemplu, prezente cu prioritățile 1, 2, 3 tipurile ‘6 – articol', ‘4 – ofertă client' și ‘1 – registru agent' aplicația ar evalua, la inserarea articolului, dacă acesta este în lista articolelor pentru care agentul are un procent de comision inserat (dacă este printre aceste se preia acest % de comision), dacă nu este printre acestea va verifica dacă linia are un preț care derivă dintr-o ofertă particulară (ex. ofertă promoțională) pentru care agentul are un comision definit (dacă este printre acestea se preia acest % de comision), dacă nu este printre acestea va utiliza procentul fix al registrului agent.

Pentru câteva din aceste opțiuni este necesar să apăsați butonul **Detaliu procente selectat** cu scopul de a deschide fereastra pentru definirea combinațiilor valabile pentru agent. În aceste ferestre, care depind de tipul de setare de pornire (de ex., dacă este vorba de articole, va fi câmpul pentru definirea articolului, dacă este vorba despre oferte, va fi câmpul pentru ofertă etc.), este importantă definirea intervalului de date de valabilitate pentru această setare: pentru același articol, de exemplu, pot fi mai multe procente de comision ca interval de date de valabilitate diferite.

*Caz particular*: detaliul comisionului definit pe intervalul de discount - pentru acestea este importantă definirea intervalului de discount (cum este definit în tabel) de aplicat agentului și dacă comisioanele vor fi cele standard inserate în acesta sau un procent personalizat pentru agent pe eșaloanele de discount definite pentru acel interval; în al doilea rând, este importantă stabilirea dacă este cazul calculului discountului efectiv aplicat în raport cu prețul din registrul articolului sau pe baza relației preț brut-net din fiecare linie articol (caz în care nu va fi posibilă automatizarea comisioanelor agenți când se vor crea documente direct pe prețurile nete).

Ulterioară notă generală referitoare la oferte: sunt asociate oferte specifice, nu un tip de ofertă. Mai exact, dacă în modulul oferte de vânzare se creează o nouă ofertă a aceluiași tip precedent, dar cu o nouă dată de început valabilitate, acest este din nou asociat la registrul agentului cu procentele sale de comision.

În fereastră există un alt buton care permite inserarea setărilor unui alt agent, selectat din help agenți care se deschide în cel în uz.