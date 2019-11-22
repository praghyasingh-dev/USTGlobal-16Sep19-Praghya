const flipkart = ['cloths','accessories','gadgets','shoe','toys']
//using for each with fuction
flipkart.forEach(function(value,index)
{
    console.log('items of flipkart =',value);
}
);


//using isArray
const checkArray = Array.isArray(flipkart)
console.log('flipkart array or not?',checkArray);

//using include
const hasShoe = flipkart.includes('shoe')
console.log(' shoe is present or not?',hasShoe);


//using push
flipkart.push('home','furniture')
console.log(' add two items',flipkart);

//using pop
flipkart.pop('toys')
console.log(' remove items',flipkart);

//using shift
flipkart.shift()
console.log(' remove first index items',flipkart);

//using unshift
flipkart.unshift('beauty','sports')
console.log(' add two in first index items',flipkart);



//using splice
flipkart.splice(1,2,'book','flights');
console.log(' remove and then add two in first index items',flipkart);


//using slice
const remove = flipkart.slice(1,2);
console.log(' remove and then add two in first index items',flipkart);
console.log('after remove and adding from slice first index',remove);

//using join
const joining = flipkart.join('-')
console.log('using separator in array',joining);


//using indexof
const indexing = flipkart.indexOf('book',0)
console.log('search element in array',indexing);

//using map
const  price=[100,200,300,400]
const price1= price.map(function(value,index)
{
    let newValue = value + 50
     return newValue
})
console.log('after mapping',price1);

//using filter
const price3 = price.filter(function(value,index)
    {
         if(value >250)
            {  return true
            }
          else { return false
               }    
    }
    )
console.log('after mapping',price3);
console.log('=================================================================')

//2 ex------------------------------------
const amazon = ['cloths','accessories','gadgets','shoe','toys']
//using for each with fuction
amazon.forEach(function(value,index)
{
    console.log('items of amazon =',value);
}
);


//using isArray
const checkArray2 = Array.isArray(amazon)
console.log('amazon array or not?',checkArray2);

//using include
const hasShoe2 = amazon.includes('shoe')
console.log(' shoe is present or not?',hasShoe2);


//using push
amazon.push('home','furniture')
console.log(' add two items',amazon);

//using pop
amazon.pop('toys')
console.log(' remove items',amazon);

//using shift
amazon.shift()
console.log(' remove first index items',amazon);

//using unshift
amazon.unshift('beauty','sports')
console.log(' add two in first index items',amazon);



//using splice
amazon.splice(1,2,'book','flights');
console.log(' remove and then add two in first index items',amazon);


//using slice
const remove2 = amazon.slice(1,2);
console.log(' remove and then add two in first index items',amazon);
console.log('after remove and adding from slice first index',remove2);

//using join
const joining2 = amazon.join('-')
console.log('using separator in array',joining);


//using indexof
const indexing2= amazon.indexOf('book',0)
console.log('search element in array',indexing2);

//using map
const  pricea=[100,200,300,400]
const pricea2= pricea.map(function(value,index)
{
    let newValue = value + 50
     return newValue
})
console.log('after mapping',pricea2);

//using filter
const pricea3 = pricea.filter(function(value,index)
{
         if(value >250)
            {  return true
            }
          else { return false
               }    
    }
    )
console.log('after mapping',pricea3);
console.log('=================================================================')

//3--------------
const myntra = ['cloths','accessories','gadgets','shoe','toys']
//using for each with fuction
myntra.forEach(function(value,index)
{
    console.log('items of myntra =',value);
}
);


//using isArray
const checkArray3 = Array.isArray(myntra)
console.log('flipkart array or not?',checkArray3);

//using include
const hasShoe3 = myntra.includes('shoe')
console.log(' shoe is present or not?',hasShoe3);


//using push
myntra.push('home','furniture')
console.log(' add two items',myntra);

//using pop
myntra.pop('toys')
console.log(' remove items',myntra);

//using shift
myntra.shift()
console.log(' remove first index items',myntra);

//using unshift
myntra.unshift('beauty','sports')
console.log(' add two in first index items',myntra);



//using splice
myntra.splice(1,2,'book','flights');
console.log(' remove and then add two in first index items',myntra);


//using slice
const remove3 = myntra.slice(1,2);
console.log(' remove and then add two in first index items',myntra);
console.log('after remove and adding from slice first index',remove3);

//using join
const joining3 = myntra.join('-')
console.log('using separator in array',joining3);


//using indexof
const indexing3 = myntra.indexOf('book',0)
console.log('search element in array',indexing3);

//using map
const  priceb3=[100,200,300,400]
const priceb4= priceb3.map(function(value,index)
{
    let newValue = value + 50
     return newValue
})
console.log('after mapping',priceb4);

//using filter
const priceb5 = priceb3.filter(function(value,index)
    {
         if(value >250)
            {  return true
            }
          else { return false
               }    
    }
    )
console.log('after mapping',priceb5);
console.log('=================================================================')

//4---------------------------------------------------------------------------
const trends = ['cloths','accessories','gadgets','shoe','toys']
//using for each with fuction
trends.forEach(function(value,index)
{
    console.log('items of trends =',value);
}
);


//using isArray
const checkArray4 = Array.isArray(trends)
console.log('trends array or not?',checkArray4);

//using include
const hasShoe4 = trends.includes('shoe')
console.log(' shoe is present or not?',hasShoe4);


//using push
trends.push('home','furniture')
console.log(' add two items',trends);

//using pop
trends.pop('toys')
console.log(' remove items',trends);

//using shift
trends.shift()
console.log(' remove first index items',trends);

//using unshift
trends.unshift('beauty','sports')
console.log(' add two in first index items',trends);



//using splice
trends.splice(1,2,'book','flights');
console.log(' remove and then add two in first index items',trends);


//using slice
const remove4 =trends.slice(1,2);
console.log(' remove and then add two in first index items',trends);
console.log('after remove and adding from slice first index',remove4);

//using join
const joining4 = trends.join('-')
console.log('using separator in array',joining4);


//using indexof
const indexing4 = trends.indexOf('book',0)
console.log('search element in array',indexing4);

//using map
const  pricec1=[100,200,300,400]
const pricec2= pricec1.map(function(value,index)
{
    let newValue = value + 50
     return newValue
})
console.log('after mapping',pricec2);

//using filter
const pricec3 = pricec1.filter(function(value,index)
    {
         if(value >250)
            {  return true
            }
          else { return false
               }    
    }
    )
console.log('after mapping',pricec3);
console.log('=================================================================')

//5------------------------------------------------------------------------------
const snapdeal = ['cloths','accessories','gadgets','shoe','toys']
//using for each with fuction
snapdeal.forEach(function(value,index)
{
    console.log('items of snapdeal =',value);
}
);


//using isArray
const checkArray5 = Array.isArray(snapdeal)
console.log('snapdeal array or not?',checkArray5);

//using include
const hasShoe5 = snapdeal.includes('shoe')
console.log(' shoe is present or not?',hasShoe5);


//using push
snapdeal.push('home','furniture')
console.log(' add two items',snapdeal);

//using pop
snapdeal.pop('toys')
console.log(' remove items',snapdeal);

//using shift
snapdeal.shift()
console.log(' remove first index items',snapdeal);

//using unshift
snapdeal.unshift('beauty','sports')
console.log(' add two in first index items',snapdeal);



//using splice
snapdeal.splice(1,2,'book','flights');
console.log(' remove and then add two in first index items',snapdeal);


//using slice
const remove5 = snapdeal.slice(1,2);
console.log(' remove and then add two in first index items',snapdeal);
console.log('after remove and adding from slice first index',remove5);

//using join
const joining5 = snapdeal.join('-')
console.log('using separator in array',joining5);


//using indexof
const indexing5 = snapdeal.indexOf('book',0)
console.log('search element in array',indexing5);

//using map
const  priced1=[100,200,300,400]
const priced2= priced1.map(function(value,index)
{
    let newValue = value + 50
     return newValue
})
console.log('after mapping',price1);

//using filter
const priced3 = priced1.filter(function(value,index)
    {
         if(value >250)
            {  return true
            }
          else { return false
               }    
    }
    )
console.log('after mapping',priced3);
console.log('=================================================================')

//6
const shopperstop = ['cloths','accessories','gadgets','shoe','toys']
//using for each with fuction
shopperstop.forEach(function(value,index)
{
    console.log('items of shopperstop =',value);
}
);


//using isArray
const checkArray6 = Array.isArray(shopperstop)
console.log('shopperstop array or not?',checkArray6);

//using include
const hasShoe6 = shopperstop.includes('shoe')
console.log(' shoe is present or not?',hasShoe6);


//using push
shopperstop.push('home','furniture')
console.log(' add two items',shopperstop);

//using pop
shopperstop.pop('toys')
console.log(' remove items',shopperstop);

//using shift
shopperstop.shift()
console.log(' remove first index items',shopperstop);

//using unshift
shopperstop.unshift('beauty','sports')
console.log(' add two in first index items',shopperstop);



//using splice
shopperstop.splice(1,2,'book','flights');
console.log(' remove and then add two in first index items',shopperstop);


//using slice
const remove6 = shopperstop.slice(1,2);
console.log(' remove and then add two in first index items',shopperstop);
console.log('after remove and adding from slice first index',remove6);

//using join
const joining6 = shopperstop.join('-')
console.log('using separator in array',joining6);


//using indexof
const indexing6 = shopperstop.indexOf('book',0)
console.log('search element in array',indexing6);

//using map
const  pricee1=[100,200,300,400]
const pricee2= pricee1.map(function(value,index)
{
    let newValue = value + 50
     return newValue
})
console.log('after mapping',price1);

//using filter
const pricee3 = pricee1.filter(function(value,index)
    {
         if(value >250)
            {  return true
            }
          else { return false
               }    
    }
    )
console.log('after mapping',pricee3);
console.log('=================================================================')

//7
const clubfactory = ['cloths','accessories','gadgets','shoe','toys']
//using for each with fuction
clubfactory.forEach(function(value,index)
{
    console.log('items of clubfactory =',value);
}
);


//using isArray
const checkArray7 = Array.isArray(clubfactory)
console.log('clubfactory array or not?',checkArray7);

//using include
const hasShoe7 = clubfactory.includes('shoe')
console.log(' shoe is present or not?',hasShoe7);


//using push
clubfactory.push('home','furniture')
console.log(' add two items',clubfactory);

//using pop
clubfactory.pop('toys')
console.log(' remove items',clubfactory);

//using shift
clubfactory.shift()
console.log(' remove first index items',clubfactory);

//using unshift
clubfactory.unshift('beauty','sports')
console.log(' add two in first index items',clubfactory);



//using splice
clubfactory.splice(1,2,'book','flights');
console.log(' remove and then add two in first index items',clubfactory);


//using slice
const remove7 = clubfactory.slice(1,2);
console.log(' remove and then add two in first index items',flipkart);
console.log('after remove and adding from slice first index',remove7);

//using join
const joining7 = clubfactory.join('-')
console.log('using separator in array',joining7);


//using indexof
const indexing7 = clubfactory.indexOf('book',0)
console.log('search element in array',indexing7);

//using map
const  pricef1=[100,200,300,400]
const pricef2= pricef1.map(function(value,index)
{
    let newValue = value + 50
     return newValue
})
console.log('after mapping',pricef2);

//using filter
const pricef3 = pricef1.filter(function(value,index)
    {
         if(value >250)
            {  return true
            }
          else { return false
               }    
    }
    )
console.log('after mapping',pricef3);
console.log('=================================================================')

//8
const shopclues= ['cloths','accessories','gadgets','shoe','toys']
//using for each with fuction
shopclues.forEach(function(value,index)
{
    console.log('items of shopclues =',value);
}
);


//using isArray
const checkArray8 = Array.isArray(shopclues)
console.log('shopclues array or not?',checkArray8);

//using include
const hasShoe8 = shopclues.includes('shoe')
console.log(' shoe is present or not?',hasShoe8);


//using push
shopclues.push('home','furniture')
console.log(' add two items',shopclues);

//using pop
shopclues.pop('toys')
console.log(' remove items',shopclues);

//using shift
shopclues.shift()
console.log(' remove first index items',shopclues);

//using unshift
shopclues.unshift('beauty','sports')
console.log(' add two in first index items',shopclues);



//using splice
shopclues.splice(1,2,'book','flights');
console.log(' remove and then add two in first index items',shopclues);


//using slice
const remove8 =shopclues.slice(1,2);
console.log(' remove and then add two in first index items',shopclues);
console.log('after remove and adding from slice first index',remove8);

//using join
const joining8 = shopclues.join('-')
console.log('using separator in array',joining8);


//using indexof
const indexing8 = shopclues.indexOf('book',0)
console.log('search element in array',indexing8);

//using map
const  priceg1=[100,200,300,400]
const priceg2= priceg1.map(function(value,index)
{
    let newValue = value + 50
     return newValue
})
console.log('after mapping',priceg1);

//using filter
const priceg3 = priceg1.filter(function(value,index)
    {
         if(value >250)
            {  return true
            }
          else { return false
               }    
    }
    )
console.log('after mapping',priceg3);
console.log('=================================================================')

//9--------------
const groffers = ['cloths','accessories','gadgets','shoe','toys']
//using for each with fuction
groffers.forEach(function(value,index)
{
    console.log('items of flipkart =',value);
}
);


//using isArray
const checkArray9 = Array.isArray(groffers)
console.log('groffers array or not?',checkArray9);

//using include
const hasShoe9 = groffers.includes('shoe')
console.log(' shoe is present or not?',hasShoe9);


//using push
groffers.push('home','furniture')
console.log(' add two items',groffers);

//using pop
groffers.pop('toys')
console.log(' remove items',groffers);

//using shift
groffers.shift()
console.log(' remove first index items',groffers);

//using unshift
groffers.unshift('beauty','sports')
console.log(' add two in first index items',groffers);



//using splice
groffers.splice(1,2,'book','flights');
console.log(' remove and then add two in first index items',groffers);


//using slice
const remove9 = groffers.slice(1,2);
console.log(' remove and then add two in first index items',groffers);
console.log('after remove and adding from slice first index',remove9);

//using join
const joining9 = groffers.join('-')
console.log('using separator in array',joining9);


//using indexof
const indexing9 = groffers.indexOf('book',0)
console.log('search element in array',indexing9);

//using map
const  priceh1=[100,200,300,400]
const priceh2= priceh1.map(function(value,index)
{
    let newValue = value + 50
     return newValue
})
console.log('after mapping',priceh2);

//using filter
const priceh3 = priceh1.filter(function(value,index)
    {
         if(value >250)
            {  return true
            }
          else { return false
               }    
    }
    )
console.log('after mapping',priceh3);
console.log('=================================================================')
//10-----------------


const crazendemand = ['cloths','accessories','gadgets','shoe','toys']
//using for each with fuction
crazendemand.forEach(function(value,index)
{
    console.log('items of crazendemand =',value);
}
);


//using isArray
const checkArray10 = Array.isArray(crazendemand)
console.log('flipkart array or not?',checkArray10);

//using include
const hasShoe10 = crazendemand.includes('shoe')
console.log(' shoe is present or not?',hasShoe10);


//using push
crazendemand.push('home','furniture')
console.log(' add two items',crazendemand);

//using pop
crazendemand.pop('toys')
console.log(' remove items',crazendemand);

//using shift
crazendemand.shift()
console.log(' remove first index items',crazendemand);

//using unshift
crazendemand.unshift('beauty','sports')
console.log(' add two in first index items',crazendemand);



//using splice
crazendemand.splice(1,2,'book','flights');
console.log(' remove and then add two in first index items',crazendemand);


//using slice
const remove10 = crazendemand.slice(1,2);
console.log(' remove and then add two in first index items',crazendemand);
console.log('after remove and adding from slice first index',remove10);

//using join
const joining10 = crazendemand.join('-')
console.log('using separator in array',joining10);


//using indexof
const indexing10 = crazendemand.indexOf('book',0)
console.log('search element in array',indexing10);

//using map
const  pricei1=[100,200,300,400]
const pricei2= pricei1.map(function(value,index)
{
    let newValue = value + 50
     return newValue
})
console.log('after mapping',price1);

//using filter
const pricei3 = pricei1.filter(function(value,index)
    {
         if(value >250)
            {  return true
            }
          else { return false
               }    
    }
    )
console.log('after mapping',pricei3);
console.log('=================================================================')






























































































