async function fn() {
    var res= await fetch('https://meme-api.herokuapp.com/gimme');
    var data= await res.json();
    document.getElementById('post').innerText=data.postLink;
    document.getElementById('sub').innerText=data.subreddit;
    document.getElementById('title').innerText=data.title;
    document.getElementById('url').innerText=data.url;
    document.getElementById('sp').innerText=data.spoiler;
    document.getElementById('author').innerText=data.author;
    document.getElementById('pre').src=data.preview[0];
    
  
  }