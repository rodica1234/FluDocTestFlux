---
title: Inserimento Extradata Semplice in Xtrareport
sidebar_position: 4
---

Per poter inserire un extradata in Xtrareport va utilizzato uno script che assegna il valore a un campo calcolato.

Per prima cosa aprire il report corretto, creare un nuovo campo calcolato, all'interno dello script di GetValue inserire il seguente script e sostituire a ciò che c'è tra parentesi quadre i valori corretti: 

```csharp
 //INIZIO SCRIPT PER EXTRADATA SEMPLICE

private void calcRange_GetValue(object sender,  DevExpress.XtraReports.UI.GetValueEventArgs e)

{

 [OggettoReport] row = (OggettoReport)e.Row;

 if (row != null)

 {

  var extraData = [OggettoReport].ExtraData.Where(x => x.ExtraDataObject != null && x.ExtraDataObject.Code == “[OggettoExtraData]”).FirstOrDefault();

  if (extraData != null)

  {

    e.Value = extraData.ExtraDataValue;

  }

 }

}

//FINE SCRIPT PER EXTRADATA SEMPLICE
'''

Lo script utilizzato per l'esempio visto durante la creazione dell'extradata “profondità” nella fattura, è il seguente:

```csharp
//INIZIO SCRIPT

private void CalcDepth_GetValue(object sender, DevExpress.XtraReports.UI.GetValueEventArgs e) {

 Fluentis.FluentisErp.Core.SD.SalesInvoices.FSSalesInvoice invoice = (Fluentis.FluentisErp.Core.SD.SalesInvoices.FSSalesInvoice)e.Row;

 if (invoice != null && invoice.ExtraData != null)

 {

  var extraData = invoice.ExtraData.Where(x => x.ExtraDataObject != null && x.ExtraDataObject.Code == "Depth").FirstOrDefault();

  if (extraData != null)

  {

    e.Value = extraData.ExtraDataValue;

  }

 }

}

//FINE SCRIPT
'''

Avvertenze: 

 - Questo script estrae un valore unico, nonostante il campo calcolato si possa trovare all'interno di detail report ecc.

- Tale script è l'unico modo per poter visualizzare gli extradata all'interno del report, quindi per ogni extradata codificato che voglio stampare dovrò scrivere tale script.