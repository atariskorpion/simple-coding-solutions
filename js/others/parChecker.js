import Stack from '.../stack/stack';

const parCheck = (symbolStr = '') => {
    const s = new Stack();
    let balanced = true;
    let index = 0;

    while ((index < symbolStr.length) && balanced) {
        let symbol = symbolStr.charAt(index);

        if (symbol === '(') {
            s.push(symbol);
        } else {
            if (s.isEmpty) {
                balanced = false;
            } else {
                s.pop();
            }
        }

        index = index + 1;
    }

    if (balanced && s.isEmpty()) {
        return true;
    } else {
        return false;
    }
}