Per la ricerca automatica del *Piano di controllo* da associare ad ogni *articolo* presente nella riga documento selezionata, viene utilizzata questa metodologia:   

- per i documenti di produzione (*Dichiarazioni di produzione* e *Fasi ordine di produzione*) viene considerato il *Piano di controllo* indicato nella *Fase*;   
- per gli altri documenti viene considerato il conto del *Cliente* o *Fornitore* associato al *Tipo documento* e la *Data del documento*;   
con queste informazioni viene ricercato il *Piano di controllo*, valido alla data del documento e per l'*Articolo* selezionato, da associare;   
ad ogni ricerca, se non viene trovato il *Piano di controllo*, si prosegue con la successiva combinazione di valori;   
se viene trovato più di un *Piano di controllo*, il *Controllo* viene comunque inserito ma si dovrà scegliere quale *Piano di controllo* associare tra quelli trovati;   
la sequenza di ricerca è la seguente:   
    - ricerca tra i *Piani di controllo* del *Tipo piano* indicato come *Tipo piano di controllo* del *Tipo documento per l'importazione* presente nei *Parametri controlli articolo* e conto *Cliente* o *Fornitore* del documento e successivamente quelli privi di conto *Cliente* o *Fornitore*;   
    - ricerca tra i *Piani di controllo* degli altri *Tipi piano* non indicati come *Tipo piano di controllo* del *Tipo documento per l'importazione* presente nei *Parametri controlli articolo* e conto *Cliente* o *Fornitore* del documento e successivamente quelli privi di conto *Cliente* o *Fornitore*.   
    - se non trovato viene visualizzato un messaggio di avviso, il *Controllo articolo* viene comunque inserito ma privo del *Piano di controllo*, privo delle *Prove* da controllare e viene inserita un'indicazione nelle *Richieste Piani di controllo*"*.   


