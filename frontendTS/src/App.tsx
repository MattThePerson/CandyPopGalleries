// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import example_image from './assets/lebron.webp'

import './App.css'

import DropdownInput from './components/DropdownInput'
import Post from './components/Post'

const creators = [
    { "name": "PixelCrafter", "amount": 85 },
    { "name": "CodeExplorer", "amount": 67 },
    { "name": "TechSavvy101", "amount": 94 },
    { "name": "ArtfulDodger", "amount": 75 },
    { "name": "GadgetGuru", "amount": 50 },
    { "name": "QuantumQuill", "amount": 88 },
    { "name": "EpicGamer88", "amount": 60 },
    { "name": "CryptoNerd", "amount": 73 },
    { "name": "SpaceCadet9", "amount": 91 },
    { "name": "FitnessFiend", "amount": 78 },
    { "name": "ChefInTheMaking", "amount": 69 },
    { "name": "DigitalNomad", "amount": 85 },
    { "name": "MovieBuff42", "amount": 72 },
    { "name": "TriviaTitan", "amount": 62 },
    { "name": "CodeNinjaDev", "amount": 81 },
    { "name": "NatureWalker", "amount": 74 },
    { "name": "CatLadyExtra", "amount": 68 },
    { "name": "DoggoLover", "amount": 90 },
    { "name": "TravelBug99", "amount": 84 },
    { "name": "WriterlyVibes", "amount": 70 },
    { "name": "AIWhiz", "amount": 88 },
    { "name": "HistoryBuff", "amount": 66 },
    { "name": "TheGamingMonk", "amount": 77 },
    { "name": "MusicMuse", "amount": 80 },
    { "name": "StartupSensei", "amount": 95 },
    { "name": "SportsGuru", "amount": 79 },
    { "name": "EcoWarrior", "amount": 87 },
    { "name": "PuzzlerBrain", "amount": 65 },
    { "name": "TechWizard7", "amount": 92 },
    { "name": "CulinaryKing", "amount": 71 },
    { "name": "BookwormBae", "amount": 74 },
    { "name": "DreamyDoodler", "amount": 69 },
    { "name": "AstroLover", "amount": 83 },
    { "name": "CodingChamp", "amount": 76 },
    { "name": "LyricalSoul", "amount": 64 },
    { "name": "FilmFanatic", "amount": 81 },
    { "name": "InnovatorGuy", "amount": 90 },
    { "name": "HealthHustler", "amount": 86 },
    { "name": "MindfulMaven", "amount": 72 },
    { "name": "OceanAdventurer", "amount": 94 },
    { "name": "ChessMaster47", "amount": 68 },
    { "name": "SocialGuru", "amount": 89 },
    { "name": "AIProph", "amount": 82 },
    { "name": "DesignDrip", "amount": 67 },
    { "name": "GamerGeek25", "amount": 60 },
    { "name": "PoetryPonder", "amount": 85 },
    { "name": "HackyHacker", "amount": 80 },
    { "name": "EpicExplorer", "amount": 91 },
    { "name": "TechTrendz", "amount": 73 },
    { "name": "CryptoSage", "amount": 88 },
    { "name": "PhotoNerd", "amount": 66 },
    { "name": "ArtsySoul", "amount": 77 },
    { "name": "MusicManiac", "amount": 84 },
    { "name": "EcoThinker", "amount": 78 },
    { "name": "MathMindset", "amount": 64 },
    { "name": "StartupAddict", "amount": 96 },
    { "name": "AstroTrekker", "amount": 82 },
    { "name": "DevOpsDude", "amount": 90 },
    { "name": "VirtualNomad", "amount": 75 },
    { "name": "FilmCraze", "amount": 72 },
    { "name": "FitnessJourney", "amount": 87 },
    { "name": "PixelPainter", "amount": 69 },
    { "name": "CodeSamurai", "amount": 88 },
    { "name": "GameGlitcher", "amount": 61 },
    { "name": "TechieTrends", "amount": 93 },
    { "name": "AIExplorer", "amount": 81 },
    { "name": "NatureLover", "amount": 76 },
    { "name": "CryptoSeer", "amount": 79 },
    { "name": "TravelDreams", "amount": 85 },
    { "name": "ZenLifeCoach", "amount": 70 },
    { "name": "FoodieFun", "amount": 67 },
    { "name": "HistoryHound", "amount": 64 },
    { "name": "SpaceSeeker", "amount": 92 },
    { "name": "CodePioneer", "amount": 89 },
    { "name": "MindBliss", "amount": 80 },
    { "name": "DataWhizKid", "amount": 73 },
    { "name": "WordyGenius", "amount": 87 },
    { "name": "AdventureAnon", "amount": 78 },
    { "name": "MusicWhiz", "amount": 95 },
    { "name": "CoolCoder77", "amount": 74 },
    { "name": "HealthyGuru", "amount": 82 },
    { "name": "EcoExplorer", "amount": 90 },
    { "name": "TechSavants", "amount": 85 },
    { "name": "QuizChampion", "amount": 68 },
    { "name": "FilmLover4", "amount": 63 },
    { "name": "PoetWisdom", "amount": 72 },
    { "name": "AstroHunter", "amount": 89 },
    { "name": "VirtualGuru", "amount": 91 },
    { "name": "ChessFanatic", "amount": 65 },
    { "name": "GamerVibes", "amount": 78 },
    { "name": "DevTrendz", "amount": 84 },
    { "name": "DigitalWanderer", "amount": 96 },
    { "name": "CodingGenius", "amount": 88 },
    { "name": "ArtisticSoul", "amount": 75 },
]




function App() {

    return (
        <div className="app">
            <section id='side-bar-section'>
                <h2>CandyPop Gallery</h2>
                {/* <div className="tag">TESTING</div> */}
                <DropdownInput name="source" full_options={creators} />
                <DropdownInput name="creator" full_options={creators} />
                <DropdownInput name="tags" full_options={creators} />
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