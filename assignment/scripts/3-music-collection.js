console.log('***** Music Collection *****')

const collection = [];

function addToCollection(title, artist, yearPublished) {
    let album = {};
    album.title = title;
    album.artist = artist;
    album.yearPublished = yearPublished;
    collection.push(album);
    console.log('New album added:',album);
    return album;
}

addToCollection('Making a Door Less Open', 'Car Seat Headrest', 2020);
addToCollection('In The Court of The Crimson King', 'King Crimson', 1969);
addToCollection('CASIOPEA','Casiopea',1979);
addToCollection('Lonerism','Tame Impala',2012);
addToCollection('InnerSpeaker','Tame Impala',2011);
addToCollection('Hits Back (Deluxe Edition)', 'The Clash',1979);

console.log(collection);

function showCollection(arr) {
    console.log(`Contains ${arr.length} albums.`);
    for (const album of arr) {
        console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
    }
}

showCollection(collection);

function findByArtist(artist) {
    let result = [];
    for (const album of collection) {
        if(album.artist === artist) {
            result.push(album.title);
        }
    }
    return result;
}

console.log('findByArtist should return CASIOPEA',findByArtist('Casiopea'));
console.log('findByArtist should return Lonerism and InnerSpeaker',findByArtist('Tame Impala'));
console.log('findByArtist should return []',findByArtist('Rush'));

let searchCriteria = { artist: 'Ray Charles', year: 1957 };

function search(searchObject) {
    let match = [];
    let searchObjProps = Object.getOwnPropertyNames(searchObject).sort();
    let searchObjVals = Object.values(searchObject).sort();
    let collProps = Object.getOwnPropertyNames(collection).sort();
    let collVals = Object.values(collection).sort();
    //loop through searchObject properties and see if they are the same as collection properites.
    for(i = 0; i < searchObjProps.length; i++) {
        for(j = 0; j < collProps.length; j++) {
            console.log(searchObjProps[i],collProps[i]);
            console.log(searchObjVals[i],collVals[i]);
            if(searchObjProps[i] === collProps[j]) {
                console.log(true);
            }
        }
    }
}

console.log(Object.getOwnPropertyNames(collection[0])[0]);
console.log(Object.getOwnPropertyNames(searchCriteria)[0]);
console.log(Object.values(searchCriteria));
console.log(Object.values(collection)[0]);

search(searchCriteria);