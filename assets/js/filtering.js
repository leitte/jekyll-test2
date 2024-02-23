
/** Make the tag buttons interactive.
 */
var toggler = document.getElementsByClassName('button');
var i;

for (i=0; i < toggler.length; i++) {
    toggler[i].addEventListener('click', onButtonClicked)
}

/** Make the tag lists expandable. */
var toggler = document.getElementsByClassName('list-toggle');
var i;

for (i=0; i < toggler.length; i++) {
    toggler[i].addEventListener('click', onListToggleClicked)
}

function activeCategories() {
    const activeButtons = document.querySelectorAll('button.active');
    let buttonTexts = [];
    activeButtons.forEach(button => {
        // Add the button's text content to the array
        buttonTexts.push(button.dataset.label);
    });
    return buttonTexts
}

function activeTags() {
    return ''
}

function hideNonMatchingPosts() {
    const activeCats = activeCategories();
    const divOfClassA = document.querySelector('div.articles');
    if (divOfClassA) {
        // Find all li elements of class 'B' within this div
        const liElements = divOfClassA.querySelectorAll('li.post-item');
    
        liElements.forEach(li => {
            li.style.display = "none";
            const label_elem = li.querySelectorAll('a.post-category,a.post-tag');
            const labels = Array.from(label_elem).map(element => element.dataset.label)

            /* Check if all of them are contained. */
            const res = activeCats.every(a => labels.includes(a));
            if (res) {
                li.style.display = "";
            }
                

            /* Check if any of the selected elements is contained.
            labels.forEach(link => {
                if (activeCats.includes(link.dataset.label)) {
                    li.style.display = "";
                } 
            });
            */
        });
    }
}

function isVisible(elem) {
    if (!elem) return false;
    const style = getComputedStyle(elem);
    if (style.display === 'none' || style.visibility === 'hidden') return false;
    return true;
}

function countPosts(category) {        
    const liElements = document.querySelectorAll('li.post-item a.post-tag');
    let count = 0;
    liElements.forEach(a => {
        if (a.dataset.label === category) {
            const li = a.closest('li'); // Get the closest li ancestor of the <a> element
            if (li && isVisible(li)) {
                count++;
            }
        }
    });
    return count;
}

function updateCounts(label) {
    const categoryButtons = document.querySelectorAll(`button.${label}`);
    categoryButtons.forEach((button) => {
        const category = button.dataset.label;
        const count = countPosts(category);
        let cntVar = button.querySelector(`.${label}-cnt`);
        if (cntVar) {
            cntVar.innerText = count;
        }
        if ( ((count === 0) && !button.classList.contains('empty')) || ((count > 0) && button.classList.contains('empty'))) {
            button.classList.toggle('empty')
        }
    });
}

function onButtonClicked() {
    this.classList.toggle('active');
    hideNonMatchingPosts();
    updateCounts('category');
    updateCounts('tag');
}

function onListToggleClicked() {
    this.classList.toggle('expand');
    const header = this.closest('li');
    this.closest("ul").querySelectorAll('button:not(.active)').forEach(b => {
        const li = b.parentNode;
        if (li != header) {
            if (li.style.display === "none") {
                li.style.display = "";
            } else {
                li.style.display = "none";
            }
        }
    });
}