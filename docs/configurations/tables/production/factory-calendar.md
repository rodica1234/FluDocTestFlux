---
title: Calendario di fabbrica
sidebar_position: 4
---

Attraverso questa finestra è possibile generare e/o modificare il *Calendario di fabbrica* dell'azienda, elemento fondamentale che viene tenuto in considerazione dalle procedure di **Pianificazione generale**, **Schedulazione a capacità finita** ed **MRP**.

La finestra si presenta come una tabella all'interno della quale vengono visualizzate tante caselle quanti sono i giorni del mese selezionato in alto a destra.  
Nel primo campo si troverà il **Mese** e l'**Anno** di riferimento, che potranno essere selezionati tramite la combo e il campo editabile a lato o cliccando sui pulsanti **Anno precedente/Successivo** e **Mese precedente/successivo**.

In ogni casella è presente un flag, che, se attivato, indica che il giorno in questione è *Festivo*.  
Il fatto che un determinato giorno sia designato come *Festivo* consente all'utente di fare in modo che quando esegua la generazione del [Calendario delle capacità produttiveconfigurations/tables/production/productive-capacity-calendar)  l'applicazione generi in automatico una disponibilità della *Risorse produttiva* solo per i giorni che nel *Calendario di fabbrica* sono identificati appunto come non festivi.  
Inoltre, l'indicazione relativa alla festività è importante anche quando si definiscono i *Tempi di approvvigionamento dei fornitori preferenziali*, che devono essere quindi indicati considerando il *Calendario di fabbrica*.  
*Esempio*:
Se vengono considerati festivi il sabato e la domenica, impostando un valore di 10 giorni come tempo di approvvigionamento si sottintende un tempo complessivo di circa 2 settimane, considerato il fatto che la settimana lavorativa è in questo caso composta di soli 5 giorni di calendario.

Una volta settati i vari campi, basterà cliccare il pulsante **Salva**.

I flag che indicano la festività possono essere impostati:
- **manualmente** dall'utente  
oppure, come di solito avviene,   
- utilizzando il pulsante della ribbon chiamato **Generazione calendario di fabbrica**. Alla pressione di questo tasto si apre una finestra di pop up chiamata **Generazione calendario**.

In questa finestra pop up l'utente può decidere di generare automaticamente il calendario di fabbrica per un determinato anno, che può impostare nell'apposito campo **Generazione calendario per l'anno**.  
Dopo aver deciso quali dovranno essere i giorni festivi della settimana e se considerare o meno le impostazioni eseguite nella tabella *Festività annuali*, si può cliccare sul pulsante **OK** per eseguire in automatico la creazione del calendario di fabbrica per l'anno indicato.

Una volta generato il calendario, l'utente dovrà cliccare di nuovo sul pulsante Salva e chiudere la finestra relativa al calendario di fabbrica.

*Pulsante specifico*:  
> **Generazione calendario di fabbrica**: permette di aprire la finestra pop up per la generazione automatica del calendario di fabbrica per l'intero anno.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuniguide/common).