import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  const rederSongDetails = () => {
    return song ? (
      <div>
        <h3>Details for: </h3>
        Title: {song.title}
        <br /> Duration: {song.duration}
      </div>
    ) : (
      <div>Select a song</div>
    );
  };
  return <div> {rederSongDetails()} </div>;
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
