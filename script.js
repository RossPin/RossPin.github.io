document.addEventListener('DOMContentLoaded', start)

function start () {
  populateNav()
}

function populateNav (){
  var folder = ''
  if (document.getElementsByTagName('nav')[0].classList.contains('indexPage')){
    folder = 'blog/'
  }
  var cultural = document.getElementById('culturalBlogList')
  var technical = document.getElementById('technicalBlogList')
  addListItem(folder + 'c1-reflection-blog.html', 'Reflection', cultural)
  addListItem(folder + 'c1-time-and-habits-blog.html', 'Time and Habits', cultural)
  addListItem(folder + 'c2-emotional-intelligence.html', 'Emotional Intelligence', cultural)
  addListItem(folder + 'c3-meditation-process.html', 'Meditation Process', cultural)
  addListItem(folder + 'c4-daily-mindfulness.html', 'Daily Mindfulnes', cultural)
  addListItem(folder + 't2-html-css-dom-p1.html', 'HTML, CSS and DOM Part 1', technical)
  addListItem(folder + 't2-html-css-dom-p2.html', 'HTML, CSS and DOM Part Part 2', technical)
  addListItem(folder + 't3-design-to-web-blog.html', 'Design to Web', technical)
  addListItem(folder + 't4-javascript-basics.html', 'Technical Blog: JavaScript Basics', technical)
}

function addListItem (src, title, list) {
  list.innerHTML += '<li><a href="' + src + '">' + title + '</a></li>'

}