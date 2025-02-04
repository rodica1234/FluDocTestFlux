---
title: Parametri grupare ordine furnizori
sidebar_position: 8
---

Cu acești parametri se stabilesc regulile de grupare pentru procedurile: 
-  [**Creare ordine furnizori**-orders/search-sales-orders/) din form *Caută ordine clienți*.

Pentru crearea *Ordinelor furnizori* din *Ordine clienți*, recomandăm utilizarea procedurii [Creare automată ordinepurchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) cu *Parametrii* aferenți. 

:::note Notă
Dacă în registrul furnizorului, în tab *Parametri de grupare pw client/furnizor*, au fost introduse condiții de grupare diferite, acestea vor avea prioritate față de parametrii generali.
:::

Când ordinul furnizor este creat dintr-un singur ordin client, sunt prelute toate datele din antetul ordinului client. Pentru OF create din mai multe OC, sunt preluate datele din registrul furnizorului.

*Câmpuri specifice*:

**Rezumat**: dacă este activ, în momentul creării ordinului furnizor din mai multe ordine clienți, va fi creat un singur document pe furnizor. Dacă nu este activ, va fi creat întotdeauna un document pentru fiecare ordin client. Gruparea funcționează doar pentru [Tipurile de ordine clientconfigurations/tables/sales/sales-order-types/) care au codificat același *Tip de ordin furnizor* de creat. Următorii parametrii trebuie utilizați simultan cu acest parametru.

**Grupare pe tip document**: dacă este activ, vor fi grupate într-un singur ordin toate documentele care au același *Tip de ordin client*.

**Grupare pe an**: dacă este activ, va fi realizată o grupare pe anul de inserare al ordinului client.

**Grupare pe lună**: pentru a putea efectua o grupare pe luna de creare a ordinelor, este necesar să fie activat și parametru-ul precedent.

**Grupare pe schimb valutar**: dacă este activ, documentele cu aceeași monedă și același schimb valutar vor fi grupate într-un singur ordin furnizor.

**Grupare pe ordin**: acest parametru este utilizat doar pentru *Crearea avizelor și facturilor de vânzare din dispoziția de livrare* (vezi [Parametri de grupare avizconfigurations/parameters/sales/dn-grouping) și [facturiconfigurations/parameters/sales/invoice-grouping)).

**Grupare pe proiect**: dacă este activ, va fi realizată o grupare pe proiect. Gruparea funcționează și pentru proiectele introduse la nivelul rândului articolului. Dacă există rânduri de articol fără un proiect asociat, va fi creat un ordin diferit pentru toate articolele care nu îl conțin.

**Grupare pe tip și soluție de plată**: dacă este activ, va fi realizată o grupare pe baza tipului și soluției de plată introduse în ordinul client; aceste date vor fi preluate în antetul ordinului furnizor creat.

**Grupare pe destinație**: dacă este activ, va fi realizată o grupare pe baza destinației introduse în ordinul client în tab *Destinație*. Aceste date vor fi preluate în antetul ordinului furnizor creat.