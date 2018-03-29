
---
layout: post
title: Markdown preview
date: 2028-03-28
---

### Markdown Preview

On freeCodeCamp, I was asked to build a markdown preview following the user's stories, Use whichever libraries or APIs you need and Give it my own personal style. I went through markdown on the internet and I found that Markdown is a lightweight markup language with plain text formatting syntax. It is designed so that it can be converted to HTML and many other formatted using a tool by the same name. in Markdown is any line which is prefixed with a # symbol. The number of hashes indicates the level of the heading. One hash is converted to an h1, two hashes to an h2 and so on. There are a total of 6 levels which you can make use of.


### User's Stories

1. As a user, I can type Github flavored markdown into a text area.

2. As a user, I can see a preview of the output of my markdown that is updated as I type.


### My Approach

Firstly, I have installed React which is a JavaScript library for building user interfaces. It uses an XML-like syntax called JSX. JSX is not required to use React, but it makes the code more readable and writing it feels like writing HTML. A simple transform is included with React that allows converting JSX into native JavaScript for browsers to digest. And that react comes with it

I  created a class called markdown in react component and inside it, I have the constructor which is called before is mounted and inside the constructor, i have this.state where data can be stored and have a source which is an empty string. 
    constructor(props) {
      super(props);
      this.state = {s
        source: ''
      };
      
      this.handleChange = this.handleChange.bind(this);
    
    } 

Have created a handle change function which will receive a javascript event and I also used set state which will update the parent state.and also e.target will receive the unchanged value setup.

handleChange(e) {
      this.setState({source: e.target.value});
    }

Have a render function where it takes the input data and returns what to display. I have a text area where the user can input data or anything and I also used react markdown that will translate text into a readable or understandable text.

render() {
      return ( 

      <div>
        <h1 >Markdown Preview</h1>
            <textarea  id="Markdown" class="Markdown" onChange={this.handleChange}></textarea>
           
            <ReactMarkdown source={this.state.source} />
            
      </div>
      )
    }
  }

Lastly, I have used react-react dom which reacts and the whole document, react-dom will update the do to match the react elements.

ReactDOM.render(<Markdown />,document.getElementById('root'))

Markdown allows you to write using an easy-to-read, easy-to-write plain text format. Also, I did enjoy to build this markdown Preview.
