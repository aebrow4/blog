## Aspect ratios and resolutions
This blog renders photos in three separate aspect ratios: 4:3 (landscape or portrait orientation), 1:1, or 25:9 (landscape).
All photos are resized to both a 1:1 version (used for thumbnails) and a rectangle version (4:3 or 25:9) that is close or identical to the original dimensions of the photo.
For each aspect ratio, multiple resolutions of the photo may exists so that an appropriate file is served based on the user's device and internet connection.
## File organization and naming convention
Full-resolution files in both square and rectangle aspect ratios are stored in `/img-orig/<album name>`. Due to their size these files are never served to the user, but are used to make duplicate files with the same aspect ratio but lower resolution.
Files in `/img-orig` are named with an integer prefix and an aspect ratio suffix, e.g. `1_4-3.jpg` or `15_1-1.jpg`.
Scaled down images that are served by the app are stored in `/src/assets/img/<album name>/<aspect ratio>`. The file name is simply an integer.
## Image processing pipeline
* Initial images are transformed into two versions: the rectangular aspect ratio (4:3 or 25:9) and square manually in Gimp or a similar editor.
* The transformed images are exported with the appropriate file name (e.g. `1_4-3.jpg` and `1_1-1.jpg` and placed in `/img-orig/<album name>`).
* The images are scaled down with automator. Separate automator scripts exist to transform each aspect ratio into sizes that are served to the user. For instance the full size, `1_4-3.jpg` will be scaled down by an automator job called `convert 4-3.jpg to 900x675px`. The automator script should be configured to export the output file into the appropriate directory; this may require manual configuration.
