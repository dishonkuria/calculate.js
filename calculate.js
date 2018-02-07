function calculateYears(principal, interest, tax, desired) {

   // create an endless loop that will increment the number of years
   for ( var year = 0;; year++ ) {

     // check if the principal has reached the desired amount
     if ( principal >= desired ) {
       return year;
     }

     // calculate the interest for this year
     var currentYearInterest = interest * principal;

     // calculate the tax on the interest for this year
     var currentYearTax = currentYearInterest * tax;

     // adjust the principal to add the interest and minus the tax
     principal = principal + currentYearInterest - currentYearTax;

   }

}
