---
title: Oferte
sidebar_position: 6
---

Modul de valorizare al documentelor a fost inserat în această secțiune dedicată ofertelor valabile pentru client/furnizor.

**Caută prețul după prioritate**: acest flag activează coloana priorităților în gridul articolelor. Cu ajutorul acestei opțiuni, utilizatorul va putea asocia clientului mai multe oferte (atât generale, cât și personalizate) care vor fi considerate în cascadă, de la prioritatea 1 la prioritatea N;

**Calculează oferta folosind cel mai bun preţ**: cu această opțiune sunt evaluate toate ofertele care pot fi aplicate clientului pentru a o selecta pe cea care garantează cel mai bun preț.

**Gestionare preţuri din oferta furnizorului pref. al articolului**: acest flag, vizibil doar pentru registre clienți, activează gestiunea prețurilor din oferta de achiziții a furnizorului preferat pentru articol.

**Gestionare preţuri din oferta furnizor**: acest flag, vizibil doar pentru registre furnizori, activează gestiunea prețurilor bazându-se pe prețurile furnizorului preferat.

### Oferte

Gridul oferă posibilitatea de a insera ofertele care se pot aplica clientului/furnizorului, pe baza priorităților și a datelor de valabilitate.

Pentru clienți se pot selecta ofertele generale, în timp ce pentru furnizori este prezentă doar lista cu ofertele furnizor personalizate.

**Dată valabilitate** va fi utilizată pentru a identifica ofertele care au, la rândul lor, data început valabilitate superioară acesteia; deoarce pot fi mai multe oferte pentru același tip cu date de valabilitate diferite, va fi identificat prețul articolului din oferta cea mai recentă (fără a fi necesar să se insereze o dată pentru sfârșitul valabilității în oferta însăși). Deci, de fiecare dată când se va crea o ofertă nouă pentru acel client, nu va fi necesară substituirea ei și în registru pentru că, datorită datei valabilității, va fi considerată direct cea mai recentă.

*Observație*: pentru a putea asocia oferta la client, va trebui să creați întâi oferta generală sau personalizată pentru client cu ajutorul procedurii Creare oferte de vânzare și ulterior să o selectați în acest grid Oferte.

### Discounturi oferte

Pentru fiecare ofertă client/furnizor se poate asocia o structură de discounturi suplimentară. De exemplu, Clientul1 poate avea oferta generală (care prevede deja discountul de 10% pentru anumite articole) și, în plus, un discount la casă de 2% (care va fi aplicat în plus, deci vor fi articole cu 10%+2% și altele doar cu 2%) și un Client2 cu oferta generală + 3% (care va avea deci 10%+3% și 3%).

La oferta furnizorului se poate asocia o listă cu ofertele de vânzare care se actualizează automat în momentul modificării ofertei furnizorului însuși, pe baza unui criteriu de majorare (procentuală) și de rotunjire.