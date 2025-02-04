---
title: Tip solicitare nou
sidebar_position: 3
---

*Câmpuri specifice*:  
**Cod** și **Descriere**: reprezintă codul și descrierea tipului solicitării.  
**Tip dobândă**: este aplicat la întârzierea plății, pentru a obține un calcul la data emiterii solicitării.  

După salvarea tipului solicitării, i se pot crea diverse nivele cu ajutorul butonului **Nou**.  

*Câmpuri specifice*:  
**Prioritate**: reprezintă prioritatea de creare de la 1 la N nivele.  
**Zile întârziere**: reprezintă zilele de întârziere care trebuie să treacă înainte de a solicita angajamentul.  
**Zile**: reprezintă numărul de zile pentru scadența solicitării și dacă aceastea trebuie să fie calculate din data creării sau din data scadenței solicitării precedente.  
**De la data mișcării precedente**: data de referință pentru nivelele succesive primului.  
**De la data creării**: data de referință utilizată doar pentru primul nivel.  

:::note Notă
Valorile câmpurilor**Zile întârziere** și **Zile**, în special pentru solicitările ulterioare primei, se adună și, prin urmare, în cazul celei de-a doua, a treia solicitări etc. în general, nu este necesar să adăugați o valoare în parametrul *zile întârziere*, în schimb se poate face referire la timpul suplimentar scurs de la data primei solicitări folosind parametrul *zile*.
:::

Pentru fiecare număr de solicitare se va putea, după salvarea sa, insera texte în limba; primul care se inserează va fi cel utilizat implicit când registrul clientului nu are limba atribuită.

Textele sunt împărțite în 4 secțiuni: subiect, antet, concluzie și secțiunea referințelor (activă doar pentru solicitările pe grupuri de angajamente). În secțiunea referințe, în particular, se poate insera un text utilizând codurile prevăzute în partea inferioară a ferestrei: de ex. “Ref. (3) nr. (4) din(5), (9) al (8) (10) cu scadența (6)”.