// init project
const express = require('express');
const app = express();
const PORT = 3500;
const DB = require('./public_html/DB/DB');
// http://expressjs.com/en/starter/basic-routing.html
/*app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});*/

//set EJS Engineclear
app.set('view engine','ejs'); // tells Node.js what engine to use. 
app.set('views', 'public_html/views'); //tell Node.js what the source of our templates is. Now, Node.js knows where to look for our EJS templates.
app.use(express.static('public_html')); //tells Node.js that we store the static assets in a directory named public.
app.use(express.urlencoded({extended:true}))

app.get('/',function(req,res){
  const id = req.query.s;
  const allPosts = DB.getAllposts(id);
  res.render('pages/index',{allPosts});
});

app.get('/post/:id', function(req,res){
  const id = +req.params.id;
  const data = DB.getSinglePost(id);
  res.render('pages/post',{data:data,title:'how to render?'})
});

app.get('/addPost', function(req,res){
  res.render('pages/addPost');
});

app.post('/savePost', function(req,res){
  const data = req.body;
  DB.addPost(data);
  res.redirect('/');
}); 
app.post('/post/:id/delete', function(req,res){
  const id = +req.params.id;
  DB.deletePost(id);
  res.redirect('/');
})

// listen for requests :)
app.listen(PORT, function() {
  console.log('Your app is listening on port ' + PORT);
});