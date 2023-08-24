const express = require('express');
const app = express();
const PORT = 5000;
const path = require('path');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/views'));

app.use(express.static('src/assets'));

app.use(express.urlencoded({ extended:false }));

app.get('/', home);
app.get('/project', project);
app.get('/contact-me', contactMe);
app.get('/project-detail/:id', projectDetail);
app.get('/project', formProject);
app.post('/project', addProject);

app.listen(PORT,()=>{
    console.log(`server runnning on port ${PORT}`);
});

function home(req, res) {
    res.render('index')
}
function project(req, res) {
    res.render('project')
}
function formProject(req, res) {
    res.render('project')
}
function addProject(req, res) {
    const {title, content } = req.body

    console.log(title)
    console.log(content)

    res.redirect('/project')
}

function contactMe(req, res) {
    res.render('contact-me')
}

function projectDetail(req, res) {
    const { id } = req.params

    const data = {
        id,
        title:"Update Invoker",
        content:"Reworked Captains Mode Draft Order Alternative Cast Abilities ITEM UPDATES",
    }

    res.render('project-detail', {data})
}
