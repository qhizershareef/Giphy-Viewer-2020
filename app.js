const form=document.querySelector('.giffform');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    clear();
    console.log(form.search.value);
    const input=form.search.value;
    get(input);
    form.reset();   
});

function get(input){
const Api_key= 'rl2RN5uVa0ejjQEghwzCPrItkAfzttY2';
const q= input;
const url= `http://api.giphy.com/v1/gifs/search?q=${q}&api_key=`;
const base = url + Api_key + '&limit=20';
const limit=20;

var GiphyReq= new XMLHttpRequest();
GiphyReq.open('GET',base);
GiphyReq.send();
GiphyReq.addEventListener('load',(e)=>{
    display(e.target.response);
})
}

const results= document.querySelector('.results');
results.innerHTML=`<h1>Your Result...</h1>`
function display(data){
    const jsondata= JSON.parse(data);
    jsondata.data.forEach((img,index)=>{
        const url=img.images.fixed_height.url;
        results.innerHTML+=`<a href="${url}" target="_blank">
        	<img class="img" src="${url}"></img>
        <a/>`;
    })    
}
function clear(){
    results.innerHTML='';
}