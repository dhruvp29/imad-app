var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
    'article-one':   
    {   title:'Article One | Dhruvil Prajapati',
        heading:'Article One',
        date:'Aug 3,2017',
        content:`<p>
                    This is demo article.I am doing course on IITM.
                </p>
                 <p>
                    I am SharePoint Developer
                 </p>`
        
    },
    'article-two': 
    {
       title:'Article One | Dhruvil Prajapati',
        heading:'Article One',
        date:'Aug 3,2017',
        content:`<p>
                    This is demo article.I am doing course on IITM.
                </p>
                 <p>
                    I am SharePoint Developer
                 </p>`
    },
    'article-three': 
    {
        title:'Article One | Dhruvil Prajapati',
        heading:'Article Three',
        date:'Aug 5,2017',
        content:`<p>
                    This is demo article.I am doing course on IITM.
                </p>
                 <p>
                    I am SharePoint Developer
                 </p>`
    }
};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;

    var htmlTemplate =`
    <html>
        <head>
            <title>
              ${title}
            </title>
            <meta name="viewport" width="device-width,initial-scale=1"/>
            <link rel="stylesheet" href=ui/style.css/>
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:articleName',function(req, res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName])); 
});

app.get('/article-two',function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html')); 
});

app.get('/article-three',function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html')); 
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
