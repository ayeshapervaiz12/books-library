import React from 'react'
import './section.css'; 
import secondimages from './images/2.png';
import thirdimages from './images/2.png';
import VIDEO from './images/video.mp4';
const Section = () => {
    return (
        <div>
            <section id="section">
                <div class="react">
                    <h1>REACT</h1>
                    <p>A JavaScript library for building user interfaces</p>
                    <button>Get started</button>
                    <a href=""> take the toturials</a>
                </div>
 </section>
 <div class="cards">
  <div class="card">
   <h2> Declarative</h2>
<h3>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</h3>
    
 </div>
<div class="card">
  <h2>Component-Based</h2>
 <h3>Build encapsulated components that manage their own state, then compose them to make complex UIs.</h3>

 </div>
 <div class="card">
<h2>Learn Once, Write Anywhere</h2>
<h3>We dont make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.</h3>

 </div>
 </div>
</div>
    )
}

export default Section
