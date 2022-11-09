function DeleteBlog(index) {
    console.log(`Deleting ${index}`);
    // location.assign(`http://localhost:3000/delete/:${index}`)
    location.assign(`/delete/${index}`)

    // let x = `http://localhost:3000/delete/${index}`;
    // console.log(x);
}

// function to seach blog and show 
let searchBlog = document.querySelector('#searchBlog');

let seaching = document.querySelectorAll('.seaching');

searchBlog.addEventListener('input', () => {
    let inputVal = searchBlog.value

    console.log('input event is fired', inputVal);

    Array.from(seaching).forEach(Element => {
        let title = Element.querySelector('h1').innerHTML
        let blog = Element.querySelector('p').innerHTML;
        if((blog.includes(inputVal)) || (title.includes(inputVal))) {
            Element.style.display = 'block';
        }
        else {
            Element.style.display = 'none';
        }
    })
})