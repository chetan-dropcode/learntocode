
// console.log('hello world')

// let mybtn = document.getElementById('myBtn');

// let content = document.getElementsByClassName("content");

// function getData(){
//     console.log("starting getdata")
//     url = "api.txt";
//     fetch(url).then((Response)=>{
//         console.log("inside first then")
//         return Response.text();
//     }).then((data)=>{
//         // console.log("inside second then")
//         console.log(data);
//         console.log("inside second then")
        
//     })
// }

// function getData(){
//     console.log("starting getdata")
//     url = "https://api.github.com/users";
//     fetch(url).then((Response)=>{
//         console.log("inside first then")
//         return Response.json();
//     }).then((data)=>{
//         console.log("inside second then")
//         console.log(data);
//         // console.log("inside second then")
        
//     })
// }


// function postData(){
   
//     url = "http://dummy.restapiexample.com/api/v1/create ";
//     data = '	{"name":"shadow","salary":"123","age":"23"} '
//     params = {
//         method:'post',
//         headers:{
//             'content-Type':'application/json'
//         },
//         body:data
//     }
//     fetch(url,params).then((Response)=>{
//         console.log("inside first then")
//         return Response.json();
//     }).then((data)=>{
//         console.log("inside second then")
//         console.log(data);
     
        
//     })
// }

// console.log("before get data");
// getData()
// console.log("after get data");

// postData()


function addImageTODom(){
    const container = document.querySelector('.scrolling');

    // add a div element to the dom
    const imageDiv = document.createElement('div');
    imageDiv.className = 'playlist';

    // div element will contain the image elemment , with our image
    const imgElement = document.createElement('iframe');
    imgElement.src = 'goku.mp4';

    console.log(imgElement);

    imageDiv.append(imgElement);
    container.append(imageDiv);
}

function addImage(num){
    for(var i=0; i<num ; i++){
        addImageTODom();
    }
}

addImage(4);

window.addEventListener('scroll', function(){
    if(window.scrollY + window.innerHeight + 100 >= document.documentElement.scrollHeight){
        addImage(1);
    }
})