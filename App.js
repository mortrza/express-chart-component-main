const chart=document.querySelector('#btn');

async function chartdata(){
    const fechdata=await fetch('./data.json');
    const data=await fechdata.json();
    const amountArray=data.map(x=>parseInt(x.amount));
    const dayArray=data.map(x=>x.day);
    let maximum=Math.max(...amountArray);
    let ratio=maximum/50;
    
       if(ratio>1)
       {
        chart.innerHTML=data.map(x=>generatechart(x,ratio)).join('');
       }
       else{
        ratio=1;
        chart.innerHTML=data.map(x=>generatechart(x,ratio)).join('');
        
       }


    
}


function currentday(item)
{
const today=new Date().getDay();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const compareWeekDay=weekday.map(x=>x.substring(0,3).toLocaleLowerCase());
const changeTypeToday=compareWeekDay[today];
if(changeTypeToday==item)
return true;
}
let usDollar = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
 });
function generatechart(item,value)
{

 
     


console.log(item.amount)

    const dataa={
        dayname:item.day,
        dayamount:item.amount,
        dayhight:(item.amount)/value,
    };
return `
<div class=" relative flex-1  grid " >
<button class="  peer grid gap-3 " >
<div class=" ${currentday(dataa.dayname) ? "bg-primary2": "bg-primary1"} w-full  rounded-xs  mb-3" style="height: ${dataa.dayhight*3}px;"></div>
</button>
<p class="  text-center text-xs  text-Neutral2">${dataa.dayname}</p>
<p  class=" bg-Neutral1 text-Neutral3 left-4 -top-8 -translate-x-1/2    p-1 rounded-sm  text-xs absolute transition-opacity opacity-0 duration-300  peer-focus:opacity-100 peer-hover:opacity-100" aria-hidden="true">
${usDollar.format(dataa.dayamount) }
 </p>
</div> ` ;
 

}

chartdata();