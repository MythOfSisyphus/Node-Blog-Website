function DeleteBlog(index) {
    console.log(`Deleting ${index}`);
    // location.assign(`http://localhost:3000/delete/:${index}`)
    location.assign(`/delete/${index}`)

    // let x = `http://localhost:3000/delete/${index}`;
    // console.log(x);
}