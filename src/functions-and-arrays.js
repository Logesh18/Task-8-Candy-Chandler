/////////////////////challenge-1////////////////////////////////////
function addChocolates(chocolates,color,count)
{
    for(let i=0;i<count;i++)
    {
        chocolates.splice(0,0,color);
    }
    return chocolates;  
}
/////////////////////challenge-2////////////////////////////////////

function removeChocolates(chocolates,numbers)
{
    var c1=chocolates.slice(numbers,chocolates.length);
    chocolates=c1;
    return chocolates;
}
/////////////////////challenge-3////////////////////////////////////
function dispenseChocolates(n,chocolates){
    return chocolates.slice(-n);
} 
/////////////////////challenge-4////////////////////////////////////
function dispenseChocolatesOfColor(chocolates, number, color){
    var givenColor=[]
    for(let i=chocolates.length-1;i>=0;i--)
    {
        if(chocolates[i]==color && number!=0)
        {
            givenColor.push(chocolates[i])
            chocolates.splice(i,1)
            number--;
        }
    }
    return chocolates;
}
/////////////////////challenge-5////////////////////////////////////
function noOfChocolates(chocolates)
{
    var  a1=[];
    var array=['green', 'silver', 'blue', 'crimson', 'purple', 'red', 'pink'];
    for(let i=0;i<array.length;i++)
    {
       
        var count=0;
        for(let j=0;j<chocolates.length;j++)
        {
            if(array[i]==chocolates[j])
            {
                count++;
            }
        }
        a1.push(count);
    }
    return a1;
}
/////////////////////challenge-6////////////////////////////////////
function checkCount(chocolates){
    return chocolates.reduce(function (acc, curr) { return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc}, {});
}
function sortChocolateBasedOnCount(chocolates) {
     dict=checkCount(chocolates);
     var sort_array = Object.keys(dict).map(function(key) { return [key, dict[key]];}).sort(function(first, second) {return second[1] - first[1];}).map(function(value,index) { return value[0];});
     return chocolates.sort((a, b) =>{ return sort_array.indexOf(a) - sort_array.indexOf(b);});
}
/////////////////////challenge-7////////////////////////////////////
function changeChocolateColor(chocolates,n,color,finalColor){
    for(let i=0;i<n;i++){
             chocolates[chocolates.indexOf(color)]=finalColor;
    }
    return chocolates;
}
/////////////////////////challenge-8////////////////////////////////
function changeChocolateColorAllofxCount(chocolates,finalColor,color)
{
    var count=0
    for(let i=chocolates.length-1;i>=0;i--)
    {
        if(chocolates[i]==color)
        {
            chocolates[i]=finalColor
            count++
        }
    }
    return [count,chocolates]
}