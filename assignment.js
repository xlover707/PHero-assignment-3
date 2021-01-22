// https://github.com/xlover707/PHero-assignment-3

// kilometer To Meter Converting
  
    function kilometerToMeter(kilometer) {
    var meter =kilometer*1000;
    return meter;
  }

    var kiloToMeterConvert= kilometerToMeter(2);
    console.log(kiloToMeterConvert);

  // Budget Calculator

    function budgetCalculator(budgetTotal){
      var watch=50;
      var phone=100;
      var laptop=500;
    }

  
  
    // Mega Friend Find out by Array

  function megaFriend(largestName){
    var mega =largestName[0];
    for (var i=0; i < largestName.length; i++){
      var element =largestName[i];
    if(element>mega){
      mega=element;
    }
    
  }
  return mega;
    
  }
  
  var output= megaFriend(['Nayeem', 'Faisal', 'Sharmin']);
  console.log('Mega Friend: ', output);