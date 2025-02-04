---
title: Parametri grupare facturi de achiziție
sidebar_position: 7
---

Cu acești parametri se stabilesc regulile de grupare pentru procedurile:  
-  [**Valorizare avize de achiziție**purchase/purchase-invoices/procedures/purchase-delivery-note-valorization);  
-  [**Valorizare avize reintrate**purchase/purchase-invoices/procedures/return-delivery-notes-valorization). 

Este necesar să activați coloanele care prevăd grupările pe care doriți să le includeți în aceste operațiuni.  

:::note Notă
Dacă în registrul furnizorului, în tab *Parametri de grupare pw client/furnizor*, au fost introduse condiții de grupare diferite, acestea vor avea prioritate față de parametrii generali.
:::

Când factura este creată dintr-un singur aviz, sunt prelute toate datele din antetul avizului. Pentru facturile create din mai multe avize, sunt preluate datele din registrul furnizorului.

*Câmpuri specifice*:

**Rezumat**: dacă este activ, în momentul valorizării mai multor avize va fi creată o singură factură pentru furnizor. Dacă nu este activ, va fi creată întotdeauna o factură pentru fiecare aviz evaluat. Gruparea funcționează doar pentru *Tipuri de aviz* (de Achiziție sau de Vânzare, în funcție de operațiunea selectată) care au codificat același *Tip de factură* de creat. Următorii parametrii trebuie utilizați simultan cu acest parametru.

**Grupare pe tip document**: dacă este activ, vor fi grupate într-o singură factură toate documentele care au același *Tip de aviz*.

**Grupare pe an**: dacă este activ, va fi realizată o grupare pe anul de creare al avizelor.

**Grupare pe lună**: pentru a putea efectua o grupare pe luna de creare a avizelor, este necesar să fie activat și parametru-ul precedent.

**Grupare pe schimb valutar**: dacă este activ, documentele cu aceeași monedă și același schimb valutar vor fi grupate într-o singură factură.

**Grupare pe ordin**: acest parametru este utilizat doar pentru *Crearea avizelor și facturilor de vânzare din dispoziția de livrare* (vezi [Parametri de grupare avizconfigurations/parameters/sales/dn-grouping) și [facturiconfigurations/parameters/sales/invoice-grouping)).

**Grupare pe proiect**: dacă este activ, va fi realizată o grupare pe proiect. Gruparea funcționează și pentru proiectele introduse la nivelul rândului articolului. Dacă există rânduri de articol fără un proiect asociat, va fi creată o factură diferită pentru toate articolele care nu îl conțin.

**Grupare pe tip și soluție de plată**: dacă este activ, va fi realizată o grupare pe baza tipului și soluției de plată introduse în aviz; aceste date vor fi preluate în antetul facturii create.

**Grupare pe destinație**: dacă este activ, va fi realizată o grupare pe baza destinației introduse în avize în tab *Transport*. Aceste date vor fi preluate în antetul facturii create, în tab *Transport*.