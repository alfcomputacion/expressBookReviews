const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
   
  return res.send(JSON.stringify(books, null, 4 ));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  let isbn = req.params.isbn
  let book = Object.values(books)[isbn]
  if(book){
    return res.status(200).send(JSON.stringify(book))
  }else{
    return res.status(400).json({message: "ISBN not found"});
  }
  // console.log(filtered)
  // let filtered = books.find(book)
  // return res.send(JSON.stringify(filtered, null, 4))
  // return res.status(300).json({message: "Yet to be implemented"});
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  let author = Object.values(books).filter(el => {
    return el.author === req.params.author
  })
  if(author.length > 0){
      return res.send(JSON.stringify(author))
  }else{
      return res.status(400).json({message: "Author not found"});

  }
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  let title = Object.values(books).filter(el => {
    return el.title === req.params.title
  })
  if(title.length > 0){
      return res.send(JSON.stringify(title))
  }else{
      return res.status(400).json({message: "Author not found"});

  }});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
