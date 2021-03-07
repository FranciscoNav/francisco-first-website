
/*This code below is to add content to the “about” paragraph*/
const p1 = document.createElement('p1');
p1.textContent = 'The primary purpose of this website is to give myself (Francisco) a sand box to practice JavaScript, CSS, and HTML. I may also add some personal information about myself too, but do not expect anything too fancy yet. I will continue to add to this web page as I learn more about coding. ';
document.querySelector('body').appendChild(p1);
p1.id = "javaContent"


/*The code below reveals a secreact fact , by using a click alert....Currently, not working and IDK why */
const input = document.getElementById('hiddenFact');
input.addEventListener('click', function() {
  alert('I was clicked!');
}); 
