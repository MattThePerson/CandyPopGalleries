import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { makeApiRequestGET } from './utils/api'

import example_image from './assets/lebron.webp'

import './App.css'

import DropdownInput from './components/DropdownInput'
import Post from './components/Post'



function App() {

    const [creators, setCreators] = useState(null);

    console.log("made App()");
    // console.log(creators);
    
    useEffect(() => {
        makeApiRequestGET('get-creators', [], (res: any) => {
            console.log("GET: response recieved!");
            // console.log(res);
            setCreators(res);
        });
    }, []);
    

    /* RETURN */
    return (
        <div className="app">
            <section id='side-bar-section'>
                <h2>CandyPop Gallery</h2>
                <DropdownInput name="source" options={creators} />
                <DropdownInput name="creator" options={creators} />
                <DropdownInput name="tags" options={creators} />
            </section>

            <section id='main-section'>
                <div id='control-bar'></div>
                <div id='content-container'>
                    <div id="feed-container">
                        <div className="feed">
                            <Post image={example_image} />
                        </div>
                    </div>
                    <div id="feed-date-nav"></div>
                </div>

            </section>
        </div>
    )
}

export default App