console.log('***** Music Collection *****')

const collection = [];

function addToCollection(title, artist, yearPublished) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };
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

let searchCriteria = { artist: 'Tame Impala', year: 2011 };

// function search(searchObject) {
//     let match = [];
//     let searchObjProps = Object.getOwnPropertyNames(searchObject).sort();
//     let searchObjVals = Object.values(searchObject).sort();
//     // let collProps = Object.getOwnPropertyNames(collection).sort();
//     // let collVals = Object.values(collection).sort();
//     //loop through searchObject properties and see if they are the same as collection properites.
//     for(i = 0; i < searchObjProps.length; i++) {
//         for(j = 0; j < collection.length; j++) {
//             let collProps = Object.getOwnPropertyNames(collection[j]);
//             let collVals = Object.values(collection[j]);
//             console.log(searchObjProps[i],collProps[j]);
//             console.log(searchObjVals[i],collVals[j]);
//             if(searchObjProps[i] === collProps[j] && searchObjVals[i] === collVals[j]) {
//                 console.log(true);
//             }
//         }
//     }
// }

function search(searchObject) {
    let match = [];
    let searchObjProps = Object.getOwnPropertyNames(searchObject).sort();
    let searchObjVals = Object.values(searchObject).sort();
    // let collProps = Object.getOwnPropertyNames(collection).sort();
    // let collVals = Object.values(collection).sort();
    //loop through searchObject properties and see if they are the same as collection properites.
    for(i = 0; i < searchObjProps.length; i++) {
        for(j = 0; j < collection[i].length; j++) {
            console.log(true);
        }
    }
}


// console.log(Object.getOwnPropertyNames(collection[0]));
// console.log(Object.getOwnPropertyNames(searchCriteria)[0]);
// console.log(Object.values(searchCriteria));
// console.log(Object.values(collection)[0]);

console.log(collection[0].length);
// console.log(collection)
search(searchCriteria);