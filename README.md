# Online Library / Book Management System (React & Redux)

**Short Description:**  
This project is an **Online Library** system built using React.js and Redux, created during **Internshala Training** as **Task-6**. Users can **add, browse, and view book details**, with state management handled via Redux and routing via React Router DOM. Tailwind CSS is used for styling and responsive design.

## Features

- **Add New Books** with title, author, category, description, and rating  
- **Browse Books** by category or search by title/author  
- **View Book Details** on a separate page  
- **Popular Books** highlighted on Home page  
- **Client-side routing** using `react-router-dom`  
- **State management** using Redux  
- Responsive design with Tailwind CSS

## Project Structure

- **pages/**  
  - `AddBook.js` → Form to add new books  
  - `BookDetails.js` → View details of a specific book  
  - `BrowseBooks.js` → Browse all books or by category  
  - `Home.js` → Home page with categories and popular books  
  - `Navbar.js` → Navigation bar  
  - `NotFound.js` → 404 page  

- **components/**  
  - `BookCard.js` → Card component to display book info  

- **redux/**  
  - `booksSlice.js` → Redux slice to manage books state  

## Technologies Used

- React.js  
- Redux Toolkit  
- React Router DOM  
- Tailwind CSS  
- JavaScript (ES6+)  

## Live Demo

The project is deployed on Vercel:  
🔗 [Live Online Library Project](https://online-library-amber.vercel.app/)  

## How to Run Locally

1. Clone the repository:  
   ```bash
   git clone <your-repo-url>
