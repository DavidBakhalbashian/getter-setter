

class MyDate{
   _year = 1970;
   _month = 14
   _day = 10
   _hour = 13
   _min = 30
   set year(value){
     this._year =value;
    
   };
   get  year(){
     return this._year
   }
   set month(value){
      
      this.year += Math.floor(value / 12)
     this._month  = value % 12
   }
   get month(){
      return this._month
   }
   set day(value){
      this.month += Math.floor(value / 30)
      this._day = value % 30
   }
   get day(){
      return this._day
   }
   set hour(value){
      this.day += Math.floor(value / 24)
      this._hour = value % 24
   }
   get hour(){
      return this._hour
   }
   set min(value){
      this.hour += Math.floor(value / 60)
      this._min = value % 60
   }
   get min (){
      return this._min
   }
   set sec(value){
      this.min += Math.floor(value / 60)
      this._sec = value %60
   }
   get sec(){
      return this._sec
   }
}
let b =new MyDate()

b.year = 2000
b.month = 10
b.day = 10
b.hour = 10
b.min = 30
b.sec = 70
console.log(b);




