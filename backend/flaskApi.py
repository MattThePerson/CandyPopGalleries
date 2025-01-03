from flask import Flask, request, jsonify
from flask_cors import CORS
import argparse
import os


creators = [
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

""" TEMP """
def get_posts():
    import json
    
    posts_file = os.path.join( os.path.dirname(__file__), 'posts.json' )
    with open(posts_file, 'r') as f:
        return json.load(f)

def add_to_dict(dct, item, key):
    items = dct.get(key, [])
    items.append(item)
    dct[key] = items
    return dct

def get_tag_post_map(posts):
    mp = {}
    for post in posts:
        id_, src, cre, tags = post['id'], post['source'], post['creator'], post['tags']
        mp = add_to_dict(mp, id_, 'source--' + src)
        mp = add_to_dict(mp, id_, 'creator--' + cre)
        for tag in tags:
            mp = add_to_dict(mp, id_, tag)
    return mp

def get_general_tags(mp):
    tags = []
    for tag, lst in mp.items():
        if '--' not in tag:
            item = {
                'name': tag,
                'amount': int(len(lst))
            }
            tags.append(item)
    return tags

def get_source_tags(mp):
    tags = []
    for tag, lst in mp.items():
        if tag.startswith('source--'):
            item = {
                'name': tag.replace('source--', ''),
                'amount': int(len(lst))
            }
            tags.append(item)
    return tags

def get_creator_tags(mp):
    tags = []
    for tag, lst in mp.items():
        if tag.startswith('creator--'):
            item = {
                'name': tag.replace('creator--', ''),
                'amount': int(len(lst))
            }
            tags.append(item)
    return tags


posts = get_posts()
tag_post_map = get_tag_post_map(posts)

app = Flask(__name__)
CORS(app)

def generateReponse(main=None, time_taken=None):
    r = {}
    #r['favourites_ids'] = jsonHandlerApp.getValue('favourites')
    # r['collections'] = metadataHandler.getValue('collections', [])
    r['main'] = main
    r['time_taken'] = time_taken
    return r

@app.route("/")
def home():
    print("Blank request recieved")
    return jsonify({'message': 'Hello, CORS enabled!'}), 200


@app.route("/get-sources")
def get_sources():
    source_tags = get_source_tags(tag_post_map)
    return generateReponse(source_tags), 200

@app.route("/get-creators")
def get_creators():
    creator_tags = get_creator_tags(tag_post_map)
    return generateReponse(creator_tags), 200

@app.route("/get-tags")
def get_tags():
    tags = get_general_tags(tag_post_map)
    return generateReponse(tags), 200


# MAIN
def main(args):
    print('In CandyPopMedia flasApi.py main() ...')

    app.run(port=args.port, debug=False, use_reloader=True)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--port', help='Port to start flask api on', type=int)
    parser.add_argument('-um', '--update_mode', action='store_true', help='Update loaded media when change occurs in media dirs')
    args = parser.parse_args()
    main(args)