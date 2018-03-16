var playlist =
{
  joeG: 'blues comin',
  ericC: 'my Heart goes on'
}

function updatePlaylist(playlistA, name, song)
{
  playlistA.name = song;
  return playlistA;
}

function removeFromPlaylist(playlistA, artistName)
{
  delete playlistA.artistName;
  return playlistA;
}

