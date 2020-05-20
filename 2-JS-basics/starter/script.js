/*
Coding Challenge #4
*/
//var john = {
//    fullName: 'John Smith',
//    mass: 77.11,
//    height: 1.854,
//    calcBMI: function(){
//        this.BMI = this.mass / (this.height * this.height);
//        return this.BMI;
//    }
//    
//}
//var mark = {
//    fullName: 'Mark Jackson',
//    mass: 79.34,
//    height: 1.82,
//    calcBMI: function(){
//        this.BMI = this.mass / (this.height * this.height);
//    }
//}
//
//
//if(john.calcBMI() > mark.calcBMI()){
//   console.log(john.fullName + ' has a BMI of ' +  john.BMI + ' which is higher than '+ mark.fullName);
//}else if(mark.BMI > john.BMI){
//    console.log(mark.fullName + ' has a BMI of ' +  mark.BMI + ' which is higher than '+ john.fullName);
//}else{
//    console('We got ourselves a tie!');
//}
//

///////////////////////////////////////
//Loops
///////////////////////////////////////
//
//for (var i = 0; i < 10 ; i++){
//    console.log(i);
//}
//
//var john = ['John', 'Johnson', 1996, 'teacher'];
//for(var x in john){
//    console.log(john[x]);
//}
//
//

///////////////////////////////////
//  Coding Challenge 5
///////////////////////////////////

//var john = {
//    billValues: [124 , 48, 268, 180 , 42],
//    tipValues : [],
//    amountPaid : [],
//    calcTip: function(){
//        for(var i = 0; i < this.billValues.length; i++){
//            if(this.billValues[i] < 50){
//                this.tipValues[i] = this.billValues[i] * 0.2;
//                this.amountPaid[i] = this.billValues[i] + this.tipValues[i];
//            } else if(this.billValues[i] >= 50 && this.billValues[i] >= 200){
//                this.tipValues[i] = this.billValues[i] * 0.15;     
//                this.amountPaid[i] = this.billValues[i] + this.tipValues[i];
//            } else{
//                this.tipValues[i] = this.billValues[i] * 0.1;
//                this.amountPaid[i] = this.billValues[i] + this.tipValues[i];
//            }
//        }
//    }
//}
//    
//john.calcTip();
//console.log(john);
//
//
//var mark = {
//    billValues: [77 , 375, 110, 45],
//    tipValues : [],
//    amountPaid : [],
//    calcTip: function(){
//        for(var i = 0; i < this.billValues.length; i++){
//            if(this.billValues[i] < 100){
//                this.tipValues[i] = this.billValues[i] * 0.2;
//                this.amountPaid[i] = this.billValues[i] + this.tipValues[i];
//            } else if(this.billValues[i] >= 100 && this.billValues[i] >= 300){
//                this.tipValues[i] = this.billValues[i] * 0.1;     
//                this.amountPaid[i] = this.billValues[i] + this.tipValues[i];
//            } else{
//                this.tipValues[i] = this.billValues[i] * 0.25;
//                this.amountPaid[i] = this.billValues[i] + this.tipValues[i];
//            }
//        }
//    }
//}
//    
//mark.calcTip();
//console.log(mark);
//
//function calcAverageTips(tips){
//    var total = 0;
//    for(var i =0; i < tips.length; i++){
//        total += tips[i];
//    }
//    return total / tips.length ;
//}
//
//if(calcAverageTips(mark.tipValues) > calcAverageTips(john.tipValues)){
//    console.log('Mark has the higher average tip value!');
//} else if(calcAverageTips(john.tipValues) > calcAverageTips(mark.tipValues)){
//    console.log('John has the higher average tip value!');      
//}else{
//    console.log('We got ourselves a tie!');
//}






























































