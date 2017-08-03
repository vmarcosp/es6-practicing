const separators = {
    'space': '  '
}
export default class Container {
    static append(content, separator) {
        const container = document.getElementById('container');
        container.append(content);
        if (separator) {
            if (separator == 'broker')
                this.brokenLine();
            else
                container.append(separators[separator]);

        }

    }

    static brokenLine() {
        const broker = document.createElement('br');
        document.getElementById('container').appendChild(broker);
    }

    static divider() {
        this.brokenLine();
        this.append('----------------------', 'broker');
    }

}