const playlist = {
    name: 'My favorite playlist',
    rating : 5,
    trackCount: 4,
    tracks : ["track1", "track2", "track3", "track4"],
    albumId: {
        a: 123,
        b: 2323,
        c: 5411
    },
    stats: {
        likes: 365,
        sub: 1200,
        views: 1360
    }
}

 console.log(playlist);

// const {name, rating, trackCount, tracks, albumId:{a, b, c}, stats:{likes, sub, views}} = playlist;
// console.log(name);
// console.log(rating);
// console.log(trackCount);
// console.log(tracks);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(likes);
// console.log(sub);
// console.log(views);

const {name, albumId:{a, b, c}, ...elements} = playlist;

console.log(elements);