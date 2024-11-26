function squareroot(){
    let element1=document.getElementById("input1").value;
    let total1=document.getElementById("output1");
    total1.value=Math.sqrt(element1);
}
function cuberoot(){
    let element2=document.getElementById("input2").value;
    let total2=document.getElementById("output2");
    total2.value=Math.cbrt(element2);
}
function power(){
    let value1=document.getElementById("base").value;
    let value2=document.getElementById("exponent").value;
    let total3=document.getElementById("output3");
    total3.value=Math.pow(value1,value2);
}
function log(){
    let element4=document.getElementById("input4").value;
    let total4=document.getElementById("output4");
    total4.value=Math.log(element4);
}
function factorial(){
    let element5=document.getElementById("input5").value;
    let total5=document.getElementById("output5");
    total5.value=factvalue(element5);
}
function factvalue(element){
    let res=1;
    for(i=element;i>=1;i--){
        res*=i;
    }
    return res;
}
function sign(){
    let element6=document.getElementById("input6").value;
    let total6=document.getElementById("output6");
    total6.value=signvalue(element6);
}
function signvalue(element){
    if(element>0){
        return "Positive";
    }
    else if(element<0){
        return "Negative";
    }
    else{
        return 0;
    }
}
function square(){
    let element7=document.getElementById("input7").value;
    let total7=document.getElementById("output7");
    total7.value=element7*element7;
}
function cube(){
    let element8=document.getElementById("input8").value;
    let total8=document.getElementById("output8");
    total8.value=element8*element8*element8;
}
function evenodd(){
    let element9=document.getElementById("input9").value;
    let total9=document.getElementById("output9");
    total9.value=isevenodd(element9);
}
function isevenodd(element){
    if(element%2==0)
        return "Even Number";
    else if(element%2==1)
        return "Odd Number";
}
function prime(){
    let element10=document.getElementById("input10").value;
    let total10=document.getElementById("output10");
    total10.value=isprime(element10);
}
function isprime(element){
    if(element<=1)
        return "Not a Prime Number";
    for(i=2;i<element;i++){
        if(element%i===0)
          return "Not a Prime Number";
    }
    return "Prime Number";
}
function fibonacci(){
    let element11=document.getElementById("input11").value;
    let total11=document.getElementById("output11");
    total11.value=isfibonacci(element11);
}
function isfibonacci(n){
    let n1=0;
    let n2=1;
    let sum;
    if(n==1)
        return n1;
    else if(n==2)
        return n2;
    else{
        for(i=3;i<=n;i++){
            sum=n1+n2;
            n1=n2;
            n2=sum;
        }
        return n2;
    }
}
function palindrome(){
    let element12=document.getElementById("input12").value;
    let total12=document.getElementById("output12");
    total12.value=ispalindrome(element12);
}
function ispalindrome(num){
    let numtostr=num.toString();
    let res=numtostr.split('').reverse().join('');
    if(numtostr===res)
        return "Palindrome";
    else
        return "Not a Palindrome";
}