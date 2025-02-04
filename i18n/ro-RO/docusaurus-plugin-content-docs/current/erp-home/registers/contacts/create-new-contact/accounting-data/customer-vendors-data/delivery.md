---
title: Livrări
---

Acest form permite definirea listei cu destinațiile mărfurilor și caracteristicile standard ale condițiilor comerciale relative.

**Listă destinatari**: în grid se pot insera diferiți destinatari printre care unul va fi implicit pentru a fi propus în documente. Dacă sediul indicat în Date comune din registru este sediul pentru expedierea mărfurilor, nu este necesar să inserați nimic în secțiunile destinatari/destinații.

Pentru fiecare destinatar se poate asocia **Zona** și **Zona livrării** de referință.

**Listă destinații**: în grid se inserează N posibile destinații pentru acel destinatar, care, la rândul lor, pot avea o valoare implicită de propus, o mașină implicită, un UdI (unitate de încărcare) și o zonă de livrare. Deci se poate crea o triangulație: vând la titularul registrului și livrez la un anumit depozit al unui destinatar terț.

În secțiunea inferioară se pot insera: **Tipul expediției** (via terra/mare/tir etc.), tipul ambalajului și modalitatea de transport (toate aceste câmpuri, cu eventualele note care vor fi preluate în documente).

Urmează secțiunea **Zonă livrare** cu elemente implicite, valabile pentru client:

- **Zona de livrare:**se specifică zona de livrare generală și adresa;

- **Exclude ziua/Zi livrare**: se inserează ziua de livrare implicită pentru acea zonă. Dacă flag-ul Exclude ziua este activ, pentru ziua și zona inserate nu pot fi făcute livrări.

- **Exclude ora/Oră livrare**: se inserează intervalul orar în care trebuie să fie efectuată livrarea. Dacă flag-ul Exclude ora este activ, pentru intervalul orar inserat nu pot fi făcute livrări.

- **Numărul de angjați** necesari pentru livrare;

- **Mașina** dedicată livrării;

- **Tipul paletului** implicit.

Se poate specifica dacă transportul este de obicei sarcina:**Expeditorului**, **Destinatarului** sau al **Transportatorului**.

În gridul **Listă transportatori** puteți să inserați transportatorii autorizați, indicând unul cre să fie implicit.

*Butoane specifice*:

**Salvează**: permite salvarea modificărilor registrului deschis.  
**Nou**: permite crearea unui nou registru necontabil care va fi asociat automat la registrul deschis, ca destinatar, ca destinație sau ambele (dacă este selectat un destinatar, va fi propusă crearea unei destinații; în alte cazuri va fi propusă crearea unui nou destinatar). Fereastra care se deschide permite stabilirea modului de asociere al registrului care se creează la cel activ, precum și definirea tuturor caracteristicilor noului contact. Operația de creare poate fi salvată și se poate continua cu inserarea noilor destinatari/destinații sau se poate salva cu închiderea ferestrei pentru a reveni la registrul deschis.  
**Șterge destinatar**: permite ștergerea destinatarului selectat.  
**Șterge destinația**: permite ștergerea destinației selectate.  
**Șterge transportator**: permite ștergerea transportatorului selectat. 