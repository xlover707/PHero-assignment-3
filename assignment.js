// https://github.com/xlover707/PHero-assignment-3

// 1. kilometer To Meter Converting
  
    function kilometerToMeter (kilometer) {
      var meter = kilometer * 1000;
      return meter;
  }

    var kiloToMeterConvert = kilometerToMeter (2);
    console.log (kiloToMeterConvert);

  
  // 2. Budget Calculator

    function budgetCalculator(watch, phone, laptop) {
      var watchPrice = watch * 50;
      var phonePrice = phone * 100;
      var laptopPrice = laptop * 500;
      
      var budgetResult = watchPrice + phonePrice + laptopPrice;
      return budgetResult;
    }

    var budgetTotal = budgetCalculator(2, 1, 1);
    console.log (budgetTotal);


  // 2. Hotel Accounts

  
  function hotelCost (dayWiseCost) {
    var guestStayDays = 0;
    if(dayWiseCost <= 10) {
        guestStayDays = dayWiseCost * 100;
    }
    else if(dayWiseCost <= 20) {
        var firstTermStay = 10 * 100;
        var stayingDays = dayWiseCost - 10;
        var secondTermStay = stayingDays * 80;
        guestStayDays = firstTermStay + secondTermStay;
    }
    else {
        var firstTermStay = 10 * 100;
        var secondTermStay = 10 * 80;
        var stayingDays = dayWiseCost - 20;
        var thirdTermStay = stayingDays * 50;
        guestStayDays = firstTermStay + secondTermStay + thirdTermStay;
    }
    return guestStayDays;
    }
    var totalCost = hotelCost(21);
    console.log (totalCost);
  
  
  // 4. Largest Friend Name Find out by Array

    function megaFriend (largestName) {
      
      var mega = largestName [0];
      for (var i = 0; i < largestName.length; i++){
        var element = largestName [i];
      if(element > mega){
        mega = element;
      }
      
    }
    return mega;
      
    }
    
    var output= megaFriend (['Nayeem', 'Faisal', 'Sharmin']);

    console.log ('Mega Friend: ', output);