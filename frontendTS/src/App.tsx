import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { makeApiRequestGET } from './utils/api'

import example_image from './assets/lebron.webp'

import './App.css'

import DropdownInput from './components/DropdownInput'
import Post from './components/Post'



function App() {

    const [sources, setSources] = useState(null);
    const [creators, setCreators] = useState(null);
    const [tags, setTags] = useState(null);

    console.log("made App()");
    // console.log(creators);
    
    useEffect(() => {
        makeApiRequestGET('get-sources', [], (res: any) => {
            console.log("GET: response recieved!");
            setSources(res);
        });
        makeApiRequestGET('get-creators', [], (res: any) => {
            console.log("GET: response recieved!");
            setCreators(res);
        });
        makeApiRequestGET('get-tags', [], (res: any) => {
            console.log("GET: response recieved!");
            setTags(res);
        });
    }, []);
    

    /* RETURN */
    return (
        <div className="app">
            <section id='side-bar-section'>
                <h2>CandyPop Gallery</h2>
                <DropdownInput name="source" options={sources} />
                <DropdownInput name="creator" options={creators} />
                <DropdownInput name="tags" options={tags} />
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