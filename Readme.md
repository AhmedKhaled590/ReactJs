# React JS Course

# Creating React App

```bash
npx create-react-app myapp
cd myapp
npm start
```

### JSX enables you to write dynamic HTML page with Javascript

# Using variables in html page

```jsx
function App() {
  const firstName = "Ahmed";
  const lastName = "khaled";
  const age = 21;
  const job = "Student";
  const detailsInput = 
  <input placeholder = "Enter your details">
  </input>;
  return (
    <div className="App"> <!--must be wrapped in one enclosing tag-->
      <h3>Full Name: {firstName} { lastName}</h3>
      <h3>Age: { age}</h3>
      <h3>Job: {job} </h3>
      {detailsInput}
    </div>
  );
}
```

# Adding CSS Styles

```jsx
import "./App.css" //if we want external CSS file
function App() {
  const blog = {
    title: "Blog Title 1",
    description:"Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor"
  }

//styles Object
//CSS Properties are written in camelCase
//This is the inline style method
  const styles = {
    margin: "16px",
    borderRadius: "5px",
    padding: "16px",
    boxShadow: "0 2px 5px #ccc",
    boxSizing:"border-box"
  }

  return (
    <div className="App">
      <div style={styles}>
        <h3>{blog.title}</h3>
       <h3>{blog.description}</h3>
      </div>
      <hr></hr>

      <div style={styles}>
        <h3>{blog.title}</h3>
       <h3>{blog.description}</h3>
      </div>
      <hr></hr>

      <div style={styles}>
        <h3>{blog.title}</h3>
       <h3>{blog.description}</h3>
      </div>
    </div>
  );
}
```

# Generate Dynamic Elements

```jsx
function App() {
  

  const styles = {
    margin: "16px",
    borderRadius: "5px",
    padding: "16px",
    boxShadow: "0 2px 5px #ccc",
    boxSizing:"border-box"
  }

  const blogArr = [
    { 
      id:1,
      title: "Blog Title 1",
      description:"Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor"
    },
    {
      id:2,
      title: "Blog Title 1",
      description: "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor"
    },
    {
      id:3,
      title: "Blog Title 1",
      description: "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor"
    }
  ];

  const blogCards = blogArr.map((item) => {
    return (
      <div style={styles} key={item.id}>
        <h3>{item.title}</h3>
        <h3>{item.description}</h3>
      </div>
    )
    
  })
  return (
    <div className="App">
    {blogCards}
    </div>
  );
}
```

# Create your first Component

### Firstly, Create a new file BlogCard.js

```jsx
import React from "react"
const BlogCard = (props) => {
    return (
        <div style={props.style}>
            <h3>{props.title}</h3>
            <h3>{props.description}</h3>
        </div>
    )
}

export default BlogCard;

## In Default export you can import the item with any name, 
but in named export — export {BlogCard} — you must import it with the same name
but you can use alises using "as" —import {BlogCard as Blog item } from "./BlogCard.js"
```

### Inside app.js

```jsx
import BlogCard from './BlogCard';
function App(){
...
const blogCards = blogArr.map((item,pos) => {
    return (
      <BlogCard id={item.id} title={item.title} description={item.description} style={ styles} />
    )
    
  })
  return (
    <div className="App">
    {blogCards}
    </div>
  );
}
```

# CSS Module

### Create file BlogCard.module.css

```css
.blogCard {
  margin: 16px;
  border-radius: 5px;
  padding: 16px;
  box-shadow: 0 2px 5px #ccc;
  box-sizing: border-box;
}
```

### inside BlogCard.js

```jsx
import React from "react"
import classes from "./BlogCard.module.css" //
const BlogCard = (props) => {
    return (
        <div className={classes.blogCard}> //
            <h3>{props.title}</h3>
            <h3>{props.description}</h3>
        </div>
    )
}

export default BlogCard;
```

 

# Stateful and Class Based Compenet

```jsx
class App extends React.Component { //class based Component
  state = { //state of component
    showBlogs: true,
  }
   styles = {
    margin: "16px",
    borderRadius: "5px",
    padding: "16px",
    boxShadow: "0 2px 5px #ccc",
    boxSizing:"border-box"
  }    
  
   blogArr = [
    { 
      id:1,
      title: "Blog Title 1",
      description:"Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor"
    },
    {
      id:2,
      title: "Blog Title 2",
      description: "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor"
    },
    {
      id:3,
      title: "Blog Title 3",
      description: "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor"
    }
  ];
  blogCards = this.blogArr.map((item,pos) => {
    return (
      <BlogCard id={item.id} title={item.title} description={item.description} style={ this.styles}/>
    )
  })
  
  onHideBtnClick = () => {
    this.setState((prevState, prevProps) => {
      return (
        {showBlogs:!prevState.showBlogs}
      );
    })
  }

  render()
  {
    return(
      <div className="App">
        <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? "Hide" : "Show"}</button>
        <br></br>
        {
          this.state.showBlogs ? this.blogCards : null
        }
        
      </div>
    );
  }
}
```

# Passing functions as props

```jsx
<BlogCard
          id={item.id}
          title={item.title}
          description={item.description}
          style={this.styles}
          likeCount={item.likeCount}
          onLikeBtnClick={() => { this.onLikeBtnClick(pos) }} //here
        />
```

# Use State

### same as setState() in class-based component

```jsx
const Home = () => {
const [name,setName] = useState("Ahmed");

const handleClick = ()=>{
setName("Khaled");
}
...
}
```

# useEffect()

### React hook called each time the DOM is rendered,but if we want to trigger it for the first time only or when changing a certain state, it's time for dependencies.

```jsx
const [name, setName] = useState("Ahmed");

  useEffect(() => {
    console.log("useEffect ran");

  }, [name]);

  return (
    <div className="home">
      <p>{name}</p>
      <button onClick={() => setName("Khaled")}>Change Name</button>
    </div>
  );
}
```

# Using useEffect to fetch data from JSON Server

## Creating json Server

```bash
npm install -g json-server
npx json-server --watch data/db.json --port 8000
```

## Fetching data from json-server using useEffect()

```jsx
useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(blogs => blogs.json())
      .then(data => setBlogs(data));
  },[])
```

# Loading Spinner until fetching data

```jsx
import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  // const handleDelete = (id) => {
  //   fetch('http://localhost:8000/blogs/' + id, { method: 'DELETE' })
  // }

  useEffect(() => {

setTimeout(()=>{ fetch('http://localhost:8000/blogs')
.then(blog => blog.json())
.then(data => {
  setBlogs(data)
  setIsPending(false);
})},1000)
  }, [])
  return (
    <div className="home">
      {isPending&&<div className="spinner-border text-danger" role="status">
  <span className="sr-only">Loading...</span>
</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"  />}
    </div>
  );
}

export default Home;
```

# Handling Fetching Errors

```jsx
useEffect(() => {

    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
      .then(blog => {
        if (!blog.ok) {
          throw Error("Couldn't fetch data from server");
        }
        return blog.json()
      })
      .then(data => {
        setBlogs(data)
        setIsPending(false);
        setError(false);
      }
      )
      .catch(err => {
        setIsPending(false);
        setError(err.message);
      })
}, 1000)
  }, [])
```

# Create Custom Hook

### Create a new file useFetch.js and import useFetch() wherever you want to use

```jsx
import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {

        setTimeout(() => {
            fetch(url)
                .then(blog => {
                    if (!blog.ok) {
                        throw Error("Couldn't fetch data from server");
                    }
                    return blog.json()
                })
                .then(data => {
                    setData(data)
                    setIsPending(false);
                    setError(false);
                }
                )
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                })
        }, 1000)
    }, [])
    return { data, isPending, error };
}
export default useFetch;
```

# Multi Page using React-router

 

### Firstly,install React-router

```bash
npm install react-router-dom@5
```

```jsx
...
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router> {/*Surround all page with Router tag*/}
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch> {/*Inside switch is the part we want to change when turning into new router */}
            <Route exact path="/">{/*exact : to match exactly '/' , path:is the route */}
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
```

## To prevent browser from sending requests to server while navigating to new route , we use component <Link> instead of <a>:

```jsx
<Link to="/">Home</Link> 
{/*instead of <a href="/">Home</a> */}
```

### To stop useEffect function fetching data from server after navigationg to new route , we use AbortController:

```jsx
const abortCont = new AbortController();
...
fetch(url, { signal: abortCont.signal })
...
	return ()=>abortCont.abort();
```

# Dynamically Changed Routes

```jsx
<Route path="/blogs/:id">
	<BlogDetails />
</Route>
```

### To access id in other files use hook useParams from react-router-dom to use it in fetching appropriate data

```jsx
const { id } = useParams();
```

# Programmatic redirects

```jsx
const history = useHistory();
history.push('/'); //redirects to home route
```

# POST Request to json-server

```jsx
fetch(url,{
method:'POST',
'Content-Type':'application/json',
body:blog}).then(()=>{console.log("....")});
```

# Simple Context App

```jsx
//Firstly in ThemeContext.js
import React, { createContext, Component } from 'react';
export const themeContext = createContext();
class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
    }
    render() {
        return (
            <themeContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </themeContext.Provider>
        );
    }
}

export default ThemeContextProvider;

//inside component wanting to access this context
import React, { Component } from 'react';
import { themeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
  static contextType = themeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;

//another approache
import React, { Component } from 'react';
import { themeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
  render() {
    return (
      <themeContext.Consumer>{(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;
        return (
          <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>Context App</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        );
      }}
      </themeContext.Consumer>
    )
  };
}

export default Navbar;
```