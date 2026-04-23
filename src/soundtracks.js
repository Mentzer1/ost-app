/**
 * Soundtracks Configuration
 * 
 * Add your soundtracks here. Each soundtrack should have:
 * - id: unique identifier
 * - name: display name (shown on the button)
 * - file: path to the audio file in the public/audio folder
 *         Use: import.meta.env.BASE_URL + 'audio/filename.mp3'
 * - restartPoint: time in seconds where the song should restart from when looping
 *                 (set to 0 to restart from the beginning)
 * - endPoint: (optional) time in seconds where the song should end and loop back
 *             (omit or set to null to play until the actual end)
 * 
 * Example:
 * {
 *   id: 'attack-on-titan-intro',
 *   name: 'Attack on Titan - Guren no Yumiya',
 *   file: import.meta.env.BASE_URL + 'audio/aot-intro.mp3',
 *   restartPoint: 15,  // Restarts from 15 seconds into the song
 *   endPoint: 180      // Ends at 3 minutes (skips outro)
 * }
 */

const soundtracks = [
  {
    id: 'excalibur',
    name: 'EXCALIBUR',
    file: import.meta.env.BASE_URL + 'audio/SOUL EATER Excalibur Song.mp3',
    restartPoint: 3,  // Restarts from 3 seconds into the song
    endPoint: 45    // Plays until the 45 second mark
  },
//   {
//     id: 'sample-2',
//     name: 'Sample Track 2',
//     file: '/audio/sample2.mp3',
//     restartPoint: 10, // Restarts from 10 seconds
//     endPoint: 60      // Ends at 60 seconds
//   },
  // Add more soundtracks below:
  // {
  //   id: 'your-track-id',
  //   name: 'Your Track Name',
  //   file: '/audio/your-file.mp3',
  //   restartPoint: 5,
  //   endPoint: 120
  // },
];

export default soundtracks;
