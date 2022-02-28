function manipulateDom() {
    // 
    let quotes = document.querySelectorAll(".quote");
    quotes.forEach(q => {
        q.style.borderColor = 'blue';
        q.style.backgroundColor= 'lightblue';
        q.style.fontStyle = 'italic';
    });

};

export { manipulateDom };