import React from 'react';

export default function About(props) {
  const { ASSET_HOST } = window.app.config;
  return (
    <div>
      <h3>About</h3>
      <div>
        <img
          alt="andy"
          src={`${ASSET_HOST}assets/icon/andy.jpg`}
          style={{height: "150px", width: "150px", borderRadius: "75px", float: "right"}}
        />
      </div>
      <div className="pt2">
        <p>Hi, I'm Andy. I'm a software engineer in San Francisco, CA.</p>
      </div>
      <div>
        <p>
          This is a place for me to record experiences, share opinions, and generally spew unsolicited updates at whoever cares to read them. YMMV.
        </p>
        <p>Momentary liberation refers to the feeling of peace that comes from disappearing into, or returning from the mountains. Many have described versions of this feeling, but I'm particularly fond of the great Voytek Kurtyka's description: 'The man coming back from a hard mountain trip is a wiser being, calmer and radiating inside. I’d say, momentarily liberated.'</p>
      </div>
    </div>
  );
}
