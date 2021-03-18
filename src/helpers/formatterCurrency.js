const formatterCurrency = (value) => {

   const formatterPeso = new Intl.NumberFormat('es-CO', {
       style: 'currency',
       currency: 'COP',
       minimumFractionDigits: 0
   });
   
   return formatterPeso.format(value);
}