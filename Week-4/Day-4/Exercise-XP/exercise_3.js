let allBoldItems;

function getBoldItems(){
    allBoldItems = document.getElementsByTagName('strong');
}

function highlight() {
    getBoldItems();
    for (let i = 0; i < allBoldItems.length; i++){
        allBoldItems[i].setAttribute('style', 'color: blue');
    }
}

function returnItemsToDefault(){
    getBoldItems();
    for (let i = 0; i < allBoldItems.length; i++){
        allBoldItems[i].setAttribute('style', 'color: initial');
    }
}

paragraph = document.querySelector('p');
paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault);