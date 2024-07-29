const listClassName = document.getElementsByClassName("dropdown__list");
const valueClassName = document.getElementsByClassName("dropdown__value");
const dropdownLink = document.getElementsByClassName("dropdown__link");

const activeListFunction = function() { 
    listClassName[0].classList.toggle('dropdown__list_active');
};


function lockClick(event) {
    event.preventDefault()
}

 valueClassName[0].addEventListener('click', activeListFunction);

 Array.from(dropdownLink).forEach(a => {
    a.addEventListener('click', function chengeHeadListName () {
        valueClassName[0].textContent = a.textContent;
     });
    a.addEventListener('click', lockClick);
    a.addEventListener('click', function removeList() {
        listClassName[0].classList.remove('dropdown__list_active')
    })
  });