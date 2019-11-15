function clean_dirty_code(dirty_code) {
    var clean_code = "";
    lines_code = dirty_code.split('\n');
    var len = lines_code.length;
    for (var i = 0; i < len; ++i) {
        var temp_code = replace_code(lines_code[i]);
        if (find_useless_code(temp_code) === 0) {
            clean_code += temp_code;
            clean_code += "\n";
        }
    }
    return clean_code;
}

function replace_code(line_code) {
    return line_code.replace("window.alert","print");
}


function find_useless_code(line_code) {
    var useless_code_list = ["highlightBlock"];
    var len = useless_code_list.length;
    for (var i = 0; i < len; ++i) {
        if (line_code.indexOf(useless_code_list[i]) >= 0) {
            return 1;
        }
    }
    return 0;
}