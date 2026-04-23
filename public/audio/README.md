# Audio Files

Place your soundtrack files (MP3, WAV, OGG, etc.) in this folder.

## How to Add a New Soundtrack

1. Copy your audio file to this folder (e.g., `my-song.mp3`)

2. Open `src/soundtracks.js` and add a new entry:

```javascript
{
  id: 'unique-id',           // A unique identifier for the track
  name: 'Display Name',      // The name shown on the button
  file: '/audio/my-song.mp3', // Path to the file (relative to public folder)
  restartPoint: 0            // Where to restart when looping (in seconds)
}
```

## Restart Point Feature

The `restartPoint` property lets you skip intro sections when a song loops:
- Set to `0` to restart from the beginning
- Set to `10` to restart 10 seconds into the song (skipping an intro)
- Set to `30` to start from the 30-second mark when looping

## Supported Formats

- MP3 (recommended, best compatibility)
- WAV
- OGG
- AAC/M4A

## Example Configuration

```javascript
{
  id: 'attack-on-titan-op1',
  name: 'AoT - Guren no Yumiya',
  file: '/audio/aot-guren.mp3',
  restartPoint: 15  // Skip the 15-second intro when looping
}
```
