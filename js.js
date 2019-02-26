//var id;
// function allowDrop(e){
//     e.preventDefault();   
// }

// function dragstart(e){
//     id = e.target.id;
//     console.log(this.classList)
// }

// function drop(e){
//     e.target.append(document.getElementById(id));
//     console.log(document.getElementById(id).classList)
//     document.getElementById(id).classList.add("changed");
// }



// $(function() {
//     var isDragging = false;

//     // check if click
//     $(".item")
//     .mousedown(function() {
//         isDragging = false;
//         console.log(' mousedown isDragging = false;')
//         console.log(isDragging);
//     })

//     // check if user mov
//     .mousemove(function() {
//         isDragging = true;
//         console.log(' mousemove  isDragging = true;')
//         console.log(isDragging);

//      })
//      console.log(isDragging);

//     //  check if user clicks item
//     .mouseup(function() {
//         var wasDragging = isDragging;
//         isDragging = false;
//         if (!wasDragging) {
//         console.log(' mouse up')
//         }
//     });

// });