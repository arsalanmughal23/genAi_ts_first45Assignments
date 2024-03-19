type TYPE_ALBUM = {
    artist_name: string,
    album_title: string,
    tracks?: number
}
function make_album(artist_name:string, album_title:string, tracks?:number):TYPE_ALBUM{
    let album:TYPE_ALBUM = { artist_name, album_title };
    tracks && (album['tracks'] = tracks);
    return album;
}

console.log(make_album('Artist 1', 'Album 1'));
console.log(make_album('Artist 2', 'Album 2'));
console.log(make_album('Junaid Jamshed', 'Illahi Teri Chowkhat Par...', 50));