SOURCE="${BASH_SOURCE[0]}";
echo $SOURCE;
rel=`echo $SOURCE | sed -E 's-(.+/)[a-zA-Z\.]+-\1-'`;
echo $rel"2018players.txt";

baseUrl='https://thrillworkscachefly.cachefly.net/tdl/collecttowin/2018/assets/images/cards/';
while IFS=' ', read number first last; do
	last=${last,,};
	prefix="`echo $baseUrl$number'_'${last/-/_}`";
	echo "prefix: "$prefix;
	wget $prefix"_front.jpg";
	wget $prefix"_needed.jpg";
done < $rel"2018players.txt";