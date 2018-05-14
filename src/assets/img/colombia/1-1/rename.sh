num=0
for i in `find -name "*_1-1.png"`; do
    TRIMMED=`echo $i | cut -d '_' -f 1` 
    mv $i $TRIMMED.png
done
