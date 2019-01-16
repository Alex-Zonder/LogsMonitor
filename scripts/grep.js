var grep;
function Grep (data,grep) {
	var new_data = "";
	strings = data.split('\n');
	for (var x=0; x < strings.length; x++) {
		if (strings[x].indexOf(grep) + 1) {
			new_data += strings[x] + '\n';
		}
	}
	return new_data;
}
