var id;
var emptyPlate = true;
var time = 1500;

const holder = document.getElementById('dropZone');
// console.log(holder)
const items = document.querySelectorAll('.item');
// console.log(items)
const elm = document.querySelectorAll('.elm');
// console.log(elm)


function checkParent(){

    items.forEach(function(el){
        
        // console.log(el.parentElement.classList.value);
        if(el.parentElement.classList.value !== 'dropZone'){
            // console.log('false')    
            var cls = el.classList[1];

        //    console.log(document.getElementsByClassName(`${cls}`)[0])
            setTimeout(()=>$(`.${cls}`).animate({
                top:'47%',
                left:'50%'
            },800),time+=1500)

        }else{
            // console.log(el)
            // console.log('true')

        }

    })
}

setInterval(checkParent,5000)    
// console.log(emptyPlate)
clearInterval(checkParent,120000)

holder.addEventListener('dragover', dragOver);
holder.addEventListener('dragenter', dragEnter);
holder.addEventListener('dragleave', dragLeave);
holder.addEventListener('drop', dragDrop);

items.forEach(function(item){
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
})

function dragStart(e){
    id = e.target.id;
    this.classList += ' hold';
    setTimeout(()=> this.classList += ' invisiable',0)
}

function dragEnd(){
    this.classList.remove('hold')
    this.classList.remove('invisiable')
}

function dragOver(e){
    e.preventDefault();
    // console.log('over')
}

function dragEnter(e){
    e.preventDefault();
    // console.log('enter')  
}

function dragLeave(){
    // console.log('leave') 
}

function dragDrop(e){
   var parentDiv = document.getElementById(id).parentNode;
   e.target.append(document.getElementById(id));  
//    console.log(parentDiv);
//    document.getElementById(id).classList.remove('itemStart'); 
   document.getElementById(id).classList += ' center'; 
//    parentDiv.classList += ' invisiable';
} 

function checkPlate(){
    emptyPlate = $('#dropZone').is(':empty');
    if(emptyPlate){
        // console.log('plate is empty? let"s start animation');
            holder.removeEventListener('drop', dragDrop);
            $('.itemStart1').animate({
                top:'47%',
                left:'50%'
            },800,
            );
            setTimeout(()=>$('.itemStart2').animate({
                top:'47%',
                left:'50%'
            },800),1200);
            setTimeout(()=>$('.itemStart3').animate({
                top:'47%',
                left:'50%'
            },800),3600);
            setTimeout(()=>$('.itemStart4').animate({
                top:'47%',
                left:'50%'
            },800),6000);
    }
    // console.log(emptyPlate)
}
// setTimeout(checkPlate,12000)