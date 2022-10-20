// first question 1

class personAccount{
    constructor(fn ,ln ,[a ,b ,c], [d,e ,f ,g] , ti , ab){
        this.FirstName = fn;
        this.LastName = ln;
        this.Income = [a,b ,c];
        this.Expenses =[d ,e ,f ,g];
        this.TotalIncome = ti;
        this.AccountBalance = ab;
    }
}
let parsonAccount1 = new personAccount("Muhmmad Uzaif" ,"Uddin" , ["all month income not same but some is heer..", "56$" , "200$"] ,
["House Rent" ,"Children School Fee" ,"Travling" ,"And Some Thing"] , "300$" , "700$");
console.log(parsonAccount1);


// second question 2
class AutoMobile{
    constructor(cn,col,md,made,[ab ,bc ,bd ,ss] , CompN){
        this.Name =cn;
        this.Color = col;
        this.Model = md;
        this.Made = made;
        // this.Feature =[ab ,bc ,bd ,ss]
        this.CompnayName =CompN;
        this.move([ab ,bc ,bd ,ss])
    }
    move([ab ,bc ,bd ,ss] ){
        this.Feature =[ab ,bc ,bd ,ss];
    }
}
class bus extends AutoMobile{
    constructor( cn ,col,md,made,[ab ,bc ,bd ,ss] , CompN ,wheel){
        super(cn ,col,md,made,[ab ,bc ,bd ,ss] , CompN)
        this.wheels = wheel;
    }
}
class truck extends AutoMobile{
    constructor( cn ,col,md,made,[ab ,bc ,bd ,ss] , CompN ,wheel){
        super(cn ,col,md,made,[ab ,bc ,bd ,ss] , CompN)
        this.wheels = wheel;
    }
}
let truck1 = new truck("Heavy TRUCK" , "BLACK" ,"NISSAN MASTANG" ,"CHINA" ,["12 Air beg" , "15 HOURS POWER" ," Long Root Master", "Safley Drive"],
"NISSAN DISEL", 18 );
console.log(truck1)
let buss = new bus("Heavy BUS" , "WHITE" ,"MORGEN" ,"American" ,["16 Air beg" , "12 Cameras" ,"All Control Driver SEAT And Passenger ", "40 Seats"],
"Japan", 10 )
console.log(buss);
let autoCar = new AutoMobile("Trade Mark" , "Persion BLUE" ,"Model E" ,"America" ,["5 Air beg" , "5 Cameras" ,"All Control Driver SEAT", "Bullet Proved"],
"Tesla");
console.log(autoCar);