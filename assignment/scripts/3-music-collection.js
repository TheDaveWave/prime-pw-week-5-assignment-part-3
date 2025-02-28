console.log('***** Music Collection *****')

const collection = [];

function addToCollection(title, artist, yearPublished, tracks) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks
    };
    collection.push(album);
    console.log('New album added:',album);
    return album;
}


//just going to add two songs of each album

addToCollection('Making a Door Less Open', 'Car Seat Headrest', 2020, ["Weightlifters: 5:40", "Can't Cool Me Down: 5:09"]);
addToCollection('In The Court of The Crimson King', 'King Crimson', 1969, ["21st Century Schizoid Man: 7:23", "I Talk to the Wind: 6:05"]);
addToCollection('CASIOPEA','Casiopea',1979, ["Time Limit: 3:07", "Tears Of The Star: 4:30"]);
addToCollection('Lonerism','Tame Impala',2012, ["Be Above It: 3:22","Endors Toi: 3:07"]);
addToCollection('InnerSpeaker','Tame Impala',2011, ["It Is Not Meant to Be: 5:22", "Desire Be Desire Go: 4:26"]);
addToCollection('Hits Back (Deluxe Edition)', 'The Clash',1979, ["I Fought the Law: 2:43","Clampdown: 3:49"]);

console.log(collection);

function showCollection(arr) {
    console.log(`Contains ${arr.length} albums.`);
    for (const album of arr) {
        console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}:`);
        for (let i = 0; i < album.tracks.length; i++) {
            console.log(`${i + 1}. ${album.tracks[i]}\n`);
        }
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

let searchCriteria = { artist: 'Car Seat Headrest', yearPublished: 2020 };

function search(searchObject) {
    let array = [];
    let count = 0;
    if(searchObject === undefined) {
        console.log(collection);
        return collection;
    } else {
        let values = Object.values(searchObject);
        for(const object of collection) {
            for (const key in object) {
                if (Object.hasOwnProperty.call(object, key)) {
                    const element1 = object[key];
                    for (const prop in searchObject) {
                        if (Object.hasOwnProperty.call(searchObject, prop)) {
                            const element2 = searchObject[prop];
                            if(Array.isArray(element1) && element1.indexOf(element2) !== -1){
                                count++;
                                array.push(object);
                            }
                            else if(prop === key && element2 === element1) {
                                count++;
                                if (count === values.filter(test = () => {return values;},element1).length) {
                                    array.push(object);
                                } else {
                                    continue;
                                }
                            }
                        }
                    }
                }
            }
        } 
    }
    console.log(array);  
    return array;
}

search(searchCriteria);
search();
searchCriteria = { artist: 'Tame Impala', yearPublished: 2012 };
search(searchCriteria);
searchCriteria = { artist: 'Ray Charles', year: 1957 };
search(searchCriteria);
console.log('Test for Tracks');
searchCriteria = {artist: 'Tame Impala', tracks: 'Endors Toi: 3:07'}
search(searchCriteria);

// function search(searchObject) {
//     let match = [];
//     for (const key in searchObject) {
//         if (Object.hasOwnProperty.call(searchObject, key)) {
//             const element1 = searchObject[key];
//             // console.log(key);
//             // console.log(element1);
//             for (const iterator of collection) {
//                 // console.log(iterator);
//                 for (const prop in iterator) {
//                     if (Object.hasOwnProperty.call(iterator, prop)) {
//                         const element2 = iterator[prop];
//                         // console.log(key);
//                         // console.log(item);
//                         console.log(element1);
//                         console.log(element2);
//                         // Causes more than one entry due to only checking one prop at time.
//                         if(key === prop && element1 === element2) {
//                             console.log(true);
//                             match.push(iterator);
//                         } else {
//                             console.log(false);
//                         }
//                     }
//                 }
//             }
//         }
            
//     }
//     console.log(match);
// }

// search(collection);

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

// function search(searchObject) {
//     let match = [];
//     let searchObjProps = Object.getOwnPropertyNames(searchObject).sort();
//     let searchObjVals = Object.values(searchObject).sort();
//     // let collProps = Object.getOwnPropertyNames(collection).sort();
//     // let collVals = Object.values(collection).sort();
//     //loop through searchObject properties and see if they are the same as collection properites.
//     for(i = 0; i < searchObjProps.length; i++) {
//         for(j = 0; j < collection[i].length; j++) {
//             console.log(true);
//         }
//     }
// }


// console.log(Object.getOwnPropertyNames(collection[0]));
// console.log(Object.getOwnPropertyNames(searchCriteria)[0]);
// console.log(Object.values(searchCriteria));
// console.log(Object.values(collection)[0]);

// console.log(collection[0].length);
// console.log(collection)
// search(searchCriteria);

// console.log(collection[1]);
// console.log(collection[1].title);


// function search(searchObject) {
//     let array = [];
//     let count = 0;
//     if(searchObject === undefined) {
//         console.log(collection);
//         return collection;
//     } else {
//         let values = Object.values(searchObject);
//         for(const object of collection) {
//             for (const key in object) {
//                 if (Object.hasOwnProperty.call(object, key)) {
//                     const element1 = object[key];
//                     for (const prop in searchObject) {
//                         if (Object.hasOwnProperty.call(searchObject, prop)) {
//                             const element2 = searchObject[prop];
//                             if(prop === key && element2 === element1) {
//                                 count++;
//                                 if (count === values.filter(test = () => {return values;},element1).length) {
//                                     array.push(object);
//                                 } else {
//                                     continue;
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         } 
//     }
//     console.log(array);  
//     return array;
// }