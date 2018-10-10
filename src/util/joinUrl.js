export default function joinUrl(...args) {
    return args.filter(_ => _).map((_part, index) => {
        let part = _part.toString();
        if (index !== 0) {
            if (part.startsWith('/')) {
                part = part.substring(1);
            }
        }
        if (index !== args.length - 1) {
            if (part.endsWith('/')) {
                part = part.substring(0, part.length - 1);
            }
        }
        return part;
    }).join('/');
}