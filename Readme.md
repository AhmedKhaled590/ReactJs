# React JS Course

### React Resources

- [Reactjs.org](https://reactjs.org/)
- [create-react-app](https://github.com/facebook/create-react-app)
- [reactstrap](https://reactstrap.github.io/)
- [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
- [Convert JSX using Online Babel Compiler](https://babeljs.io/repl/#?presets=react&code_lz=GYVwdgxgLglg9mABACwKYBt1wBQEpEDeAUIogE6pQhlIA8AJjAG4B8AEhlogO5xnr0AhLQD0jVgG4iAXyJA)

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

 

## React Component Life Cycle

![Untitled](https://user-images.githubusercontent.com/62337087/131851864-fdcb420b-974d-4d15-8867-b90654c6ce6b.png)

### Mounting

These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

- [constructor()](https://reactjs.org/docs/react-component.html#constructor)
- [static getDerivedStateFromProps()](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops)
- [render()](https://reactjs.org/docs/react-component.html#render)
- [componentDidMount()](https://reactjs.org/docs/react-component.html#componentdidmount) If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

### Updating

An update can be caused by changes to props or state. These methods 
are called in the following order when a component is being re-rendered:

- [static getDerivedStateFromProps()](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops)
- [shouldComponentUpdate()](https://reactjs.org/docs/react-component.html#shouldcomponentupdate)
- [render()](https://reactjs.org/docs/react-component.html#render)
- [getSnapshotBeforeUpdate()](https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate)
- [componentDidUpdate()](https://reactjs.org/docs/react-component.html#componentdidupdate)

### Unmounting

This method is called when a component is being removed from the DOM:

- [componentWillUnmount()](https://reactjs.org/docs/react-component.html#componentwillunmount)

### 

### Error Handling

These methods are called when there is an error during rendering, in a
 lifecycle method, or in the constructor of any child component.

- [static getDerivedStateFromError()](https://reactjs.org/docs/react-component.html#static-getderivedstatefromerror)
- [componentDidCatch()](https://reactjs.org/docs/react-component.html#componentdidcatch)

# Stateful VS Stateless

A simple **Stateless** button component that depends on props only:

![https://miro.medium.com/max/1400/1*s66RqkT-O7qBonbJSnbfbw.png](https://miro.medium.com/max/1400/1*s66RqkT-O7qBonbJSnbfbw.png)

And a **Stateful** counter component example (using `Button` component):

![https://miro.medium.com/max/627/1*gv0YJ8Z1QwkDlQPkraSUDw.png](https://miro.medium.com/max/627/1*gv0YJ8Z1QwkDlQPkraSUDw.png)

As you can see, the last one’s constructor holds a component state, while 
the first one is a simple component that renders a text via props. This 
separation of concerns may look simple but makes `Button` component highly reusable.

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

## What is a router in React?

[Single-page applications (SPAs)](https://en.wikipedia.org/wiki/Single-page_application) rewrite sections of a page rather than loading entire new pages from a server.

Twitter is a good example of this type of application. When you click
 on a tweet, only the tweet’s information is fetched from the server. 
The page does not fully reload:

![https://blog.logrocket.com/wp-content/uploads/2017/11/react-router-dom-twitter-example.gif](https://blog.logrocket.com/wp-content/uploads/2017/11/react-router-dom-twitter-example.gif)

These applications are easy to deploy and greatly improve the user experience. However, they also bring challenges.

The React Router API is based on three components:

- `<Router>`: The router that keeps the UI in sync with the URL.Only one child element
- `<Link>`: Renders a navigation link
- `<Route>`: Renders a UI component depending on the URL

In a web application, you have two options:

- [<BrowserRouter>](https://reacttraining.com/react-router/web/api/BrowserRouter), which uses the [HTML5 History API](https://css-tricks.com/using-the-html5-history-api/).
- [<HashRouter>](https://reacttraining.com/react-router/web/api/HashRouter), which uses the hash portion of the URL ([window.location.hash](https://www.w3schools.com/jsref/prop_loc_hash.asp))

If you’re going to target older browsers that don’t support the HTML5 History API, you should stick with `<HashRouter>`, which creates URLs with the following format:

```
http://localhost:3000/#/route/subroute
```

Otherwise, you can use `<BrowserRouter>`, which creates URLs with the following format:

```
http://localhost:3000/route/subroute
```

### if we know that only one route will be chosen, we can use a <Switch> component to render only the first route that matches the location

### In a <Switch> component, this default behavior can be implemented with a <Redirect> component

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
            <Redirect to="/"/>
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

# Using Hooks with ContextAPI via useContext in functional Component:

```jsx
import React, { useContext } from 'react';
import { themeContext } from '../contexts/ThemeContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(themeContext); //u can use it as many times as u want
  const theme = isLightTheme ? light : dark;
  return (
    <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
      <ul>
        <li style={{ background: theme.ui }}>the way of kings</li>
        <li style={{ background: theme.ui }}>the name of the wind</li>
        <li style={{ background: theme.ui }}>the final empire</li>
      </ul>
    </div>
  );
}

export default BookList;
```

# React Fragments

### It's used to avoid nesting more of nodes in the dom while using components , we can use it as <React.Fragment><\React.Fragment> or <><\> , the first one accept key property.

```jsx
<React.Fragment>
	<h1 >Reading List</h1>
</React.Fragment>
```

`React.PureComponent` implements it with a shallow prop and state comparison.

If your React component’s `render()` function renders the same result given the same props and state, you can use `React.PureComponent` for a performance boost in some cases.

### React.memo is a higher order component.It's the functional-component version pf PureComponent class.

## Uncontrolled and Controlled Forms

### With uncontrolled input values, there is no updating or changing of any states. What you submit is what you get.
![Untitled 1](https://user-images.githubusercontent.com/62337087/131851643-92ce54dc-3cac-4511-9759-9073fca30eec.png)
![Untitled 2](https://user-images.githubusercontent.com/62337087/131851631-6a85362a-23b6-4a9a-8547-00c192e45109.png)


### With controlled inputs, there is always some sort of change going on. The value of the input field will almost always be a prop of the class component (usually a state). Going along with this, there will also be a callback that is necessary to handle the changes going on with the input field.

![https://miro.medium.com/freeze/max/60/1*ls3NKZ7amKzuMfiLYmLfng.gif?q=20](https://miro.medium.com/freeze/max/60/1*ls3NKZ7amKzuMfiLYmLfng.gif?q=20)

![https://miro.medium.com/max/627/1*ls3NKZ7amKzuMfiLYmLfng.gif](https://miro.medium.com/max/627/1*ls3NKZ7amKzuMfiLYmLfng.gif)

# useRef

### used to interact with the dom nodes directly such as input tags:

```jsx
const titleRef = useRef();
...
<input ref={titleRef} required id="title" className="form-control" />
...
//we can access this node by
titleRef.current

```

# React Portals

Portals provide a first-class way to render children into a DOM node 
that exists outside the DOM hierarchy of the parent component.

`ReactDOM.createPortal(child, container)`

The first argument (`child`) is any [renderable React child](https://reactjs.org/docs/react-component.html#render), such as an element, string, or fragment. The second argument (`container`) is a DOM element.

# Higher Order Component (HOC)

### A higher-order component is a function that takes a component and returns a new component.It's used to share common functionalities among components

### **Don't forget** to pass props passed to HOC to the original component

```jsx
//HOC 
import { Component } from "react";

const withCounter = (WrappedComponent) => {
    class WithCounter extends Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0,
            }
        }

        incrementCount = () => {
            this.setState((prevState) => {
                return { count: prevState.count + 1 };
            })
        }

        render() {
            return <WrappedComponent {...this.props} incrementCount={this.incrementCount} count={this.state.count} />
        }
    }
    return (WithCounter);
}

export default withCounter;

//usage
import React, { Component } from 'react';
import withCounter from './WithCounter';
class ClickCounter extends Component {

    render() {
        const { count, incrementCount } = this.props;
        return (
            <button onClick={incrementCount} className="btn btn-primary">Clicked: {count}</button >
        );
    }
}

export default withCounter(ClickCounter);
```

## UseEffect with cleanup

### To stop useEffect function fetching data from server after navigationg to new route , we use AbortController:

```jsx
const abortCont = new AbortController();
...
fetch(url, { signal: abortCont.signal })
...
	return ()=>abortCont.abort();
```

## HTTP Response Codes	
![Untitled 3](https://user-images.githubusercontent.com/62337087/131852401-47b5a9e5-810d-4c28-9c0f-682f170d2c78.png)
