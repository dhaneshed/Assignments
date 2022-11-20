function myFunction(){
  var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];
  
 for(var i=0;i<library.length;i++)
 {
  if(library[i].readingStatus==false)
  {
    console.log("You need to  read "+library[i].title+" by "+library[i].author)
  }
  else if (library[i].readingStatus==true)
  {
    console.log("Already read "+library[i].title+" by  "+library[i].author);
  }
 }

}