
// async function getClips(folder){
//     var clipNames = fs.readdirSync(folder)
//     var clipPaths = [];
//     for (var i = 0; i < clipNames.length; i++) {
//       if (clipNames[i]!==".DS_Store" && !fs.statSync(path.join(folder, clipNames[i])).isDirectory()) {
//         clipPaths.push(path.join(folder, clipNames[i]));
//       }
//     }
//     var clips = [];
//     for (var i = 0; i < clipPaths.length; i++) {
//       var theClip = new Clip (clipPaths[i], path.basename(folder), (i));
//       if (videoRegex.test(theClip.newName)) {
//         console.log("video file: " + theClip.newName);
//         theClip.ffprobeData = await simpleFfprobe(clipPaths[i]);
//       } else if (stillRegex.test(theClip.newName)) {
//         console.log("still: " + theClip.newName);
//         theClip.exifData = await getPhotoMetadata(clipPaths[i]);
//         console.log(JSON.stringify(theClip, null, 4));
//       }
//       clips.push(theClip);
//     }
//     return clips;
//   }