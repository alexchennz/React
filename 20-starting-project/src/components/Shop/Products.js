import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

// const DUMMY_PRODUCTS = [
//   {
//     id: "m1",
//     title: "My First Book",
//     price: 6,
//     description: "The first book I wrote"
//   },
//   {
//     id: "m2",
//     title: "My Second Book",
//     price: 8,
//     description: "The second book I wrote"
//   }
// ]



const Products = (props) => {
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    const fetchBooks = async () => {
      const response = await fetch(
        'https://react-http-4e716-default-rtdb.firebaseio.com/books.json'
      );
      if(!response.ok){
        throw new Error("Something went wrong.");
      }
      const responseData = await response.json();

      const loadedBooks = [];

      for (const key in responseData) {
        loadedBooks.push({
          id: key,
          title: responseData[key].title,
          price: responseData[key].price,
          description: responseData[key].description
        })
      }

      setBooks(loadedBooks);
    }

    fetchBooks().catch((error) => {
      console.log(error.message);
    });
  }, []);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
          {books.map(item => <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />)}
          
        
        
      </ul>
    </section>
  );
};

export default Products;
