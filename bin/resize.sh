#!/bin/bash

# Resize your jpgs, using ImageMagick
# Usage: ./resize.sh <path to jpgs>
export DYLD_LIBRARY_PATH=$MAGICK_HOME/lib
DIRECTORY=$1

# Images are scaled down, preserving the original aspect ratio. The resize
# function takes a single argument: the maximum number of pixels of the image
# height and width.
function resize() {
  MAX_LEN=$1
  for FILENAME_W_EXTENSION in $DIRECTORY/*.jpg; do
    PATH_LENGTH=${#DIRECTORY}
    FILE=`echo $FILENAME_W_EXTENSION | cut -d'.' -f 1`
    OUTPUT_PREFIX='__'
    SHORT_FILE=${FILE:$PATH_LENGTH+1}
    # Don't resize any files that have already been resized
    if [ ${SHORT_FILE:0:2} == $OUTPUT_PREFIX ]; then
      continue
    fi
    OUTPUT_FILENAME="$DIRECTORY/$OUTPUT_PREFIX$SHORT_FILE-$MAX_LEN.jpg"	
    magick $FILENAME_W_EXTENSION -resize "$MAX_LEN\x$MAX_LEN" $OUTPUT_FILENAME
    echo "Resized ${FILENAME_W_EXTENSION} --> $OUTPUT_FILENAME"
  done
}

resize 100
resize 1000
