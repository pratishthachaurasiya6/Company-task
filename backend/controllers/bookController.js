const Book = require("../models/bookSchema");

// GET ALL BOOKS
const getAllBooks = async (req, res) => {
  let book;
  try {
    book = await Book.find();
  } catch (e) {
    console.log(e);
  }

  if (!book) {
    res.status(400).json({ message: "no book found" });
  } else {
    res.status(200).json(book);
  }
};

// GET BOOK BY ID

const getBookById = async (req, res) => {
  let book;
  try {
    const _id = req.params.id;
    book = await Book.findById(_id);
  } catch (e) {
    console.log(e);
  }

  if (!book) {
    return res.status(404).json({ message: "book not found" });
  } else {
    return res.status(200).json(book);
  }
};

// post

const addBook = async (req, res) => {
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = await Book({
      name,
      author,
      description,
      price,
      available,
      image,
    });
    book = await book.save();
  } catch (e) {
    console.log(e);
  }

  if (!book) {
    return res.status(400).json({ message: " book not added" });
  } else {
    return res.status(201).json({ book });
  }
};

// Update Book by Id
const updateBook = async (req, res) => {
  const _id = req.params.id;
  const { name, author, description, price, available, image } = req.body;

  let book;
  try {
    book = await Book.findByIdAndUpdate(
     _id,
      {
        name,
        author,
        description,
        price,
        available,
        image,
      },
    
    );

    book = await book.save();
  } catch (e) {
    console.log(e);
  }

  if (!book) {
    return res.status(404).json({ message: "error to update book" });
  } else {
    return res.status(200).json({ book });
  }
};


// DELETE A BOOK

const deleteBook = async(req, res)=>{
    const _id = req.params.id
    let book
    
     try{

     book = await Book.findByIdAndDelete(_id)
     book = await book.save()

     }catch(e){
        console.log(e)
     }

    if(!book){
        res.status(404).json({message: "book not found"})
    }
    else{
        res.status(200).json({book})
    }

}

exports.getAllBooks = getAllBooks;
exports.getBookById = getBookById;
exports.addBook = addBook;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;