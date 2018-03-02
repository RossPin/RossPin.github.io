document.addEventListener('DOMContentLoaded', start)

function start () {
  populateNav()
}

function populateNav (){
  var folder = ''
  if (document.getElementsByTagName('nav')[0].classList.contains('indexPage')){
    folder = 'blog/'
  }
  var navList = document.getElementById('navlist') 
  populateCultural(folder, navList)
  populateTech(folder, navList)
}

function populateCultural(folder, list) {  
  list.innerHTML += '<li>Cultural Blogs<ul id="culturalBlogList"></ul></li>';
  var culturalList = document.getElementById('culturalBlogList')
  addListItem(folder, 'c1-reflection-blog.html', 'Reflection', culturalList);
  addListItem(folder, 'c1-time-and-habits-blog.html', 'Time and Habits', culturalList);
  addListItem(folder, 'c2-emotional-intelligence.html', 'Emotional Intelligence', culturalList);
  addListItem(folder, 'c3-meditation-process.html', 'Meditation Process', culturalList);
  addListItem(folder, 'c4-daily-mindfulness.html', 'Daily Mindfulnes', culturalList);  
}

function populateTech(folder, list) {  
  list.innerHTML += '<li>Technical Blogs<ul id="technicalBlogList"></ul></li>' 
  var technicalList = document.getElementById('technicalBlogList')
  addListItem(folder, 't2-html-css-dom-p1.html', 'HTML, CSS and DOM Part 1', technicalList)
  addListItem(folder, 't2-html-css-dom-p2.html', 'HTML, CSS and DOM Part Part 2', technicalList)
  addListItem(folder, 't3-design-to-web-blog.html', 'Design to Web', technicalList)
  addListItem(folder, 't4-javascript-basics.html', 'Technical Blog: JavaScript Basics', technicalList)  
}

function addListItem (folder, file, title, list) {
  if (file == location.href.split("/").slice(-1)){
    list.innerHTML += '<li class="selected">' + title + '</li>'
  }
  else {
    list.innerHTML += '<li><a href="' + folder + file + '">' + title + '</a></li>'
  }
}