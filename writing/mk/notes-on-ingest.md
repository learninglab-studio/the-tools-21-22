# ingest notes

let's 

- first parse everything and
    - create shoot
    - get directories in the shoot directory
        - should we create cards? or no?
        - should we try to match this angle to something existing in airtable?
    - get files in the directories
    - get each file's ffprobe data
    - get filename and construct new filename
    - create all the objects
        - shoot
        - folders
        - clips
- optionally, rename
- send data to airtable


the idea is to run all of this WITHOUT the rename function for all folders going backwards in time.

Also to have a version of this that can JUST rename based on already-existing information.

Let's keep almost everything in a single file other than the models for Shoot, VideoClip, Still, etc.

Q => how many of these should we do? MediaFiles with a `.type`? or more 
