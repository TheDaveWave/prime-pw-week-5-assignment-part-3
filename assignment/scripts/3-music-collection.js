console.log('***** Music Collection *****')

const collection = [];

function addToCollection(title, artist, yearPublished) {
    let album = {};
    album.title = title;
    album.artist = artist;
    album.yearPublished = yearPublished;
    collection.push(album);
    console.log('New albumb added:',album);
    return album;
}

addToCollection('Making a Door Less Open', 'Car Seat Headrest', 2020);
addToCollection('In The Court of The Crimson King', 'King Crimson', 1969);
addToCollection('CASIOPEA','Casiopea',1979);
addToCollection('Lonerism','Tame Impala',2012);
addToCollection('InnerSpeaker','Tame Impala',2011);
addToCollection('Hits Back (Deluxe Edition)', 'The Clash',1979);

console.log(collection);
