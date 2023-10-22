function solution(new_id) {
    let str = /[^a-z0-9-_.]/g;
    new_id = new_id.toLowerCase().replace(str, "");
    let id = '';
    for (let i = 0; i < new_id.length; i++) {
        if(new_id[i] == '.') {
            if (new_id[i+1] == '.') {
                continue
            }
            id += new_id[i];
        }
        else id += new_id[i];
    }

    if (id[0] == '.') id = id.slice(1);
    if (id.length == 0) id += 'a';
    if (id.length > 15) {
        id = id.slice(0, 15);
    }
    if (id[id.length-1] == '.') id = id.slice(0, id.length-1);
    if (id.length < 3) {
        let len = id.length;
        for (let i = 0; i < 3 - len; i++) id += id[id.length-1];
    }
    return id;
}